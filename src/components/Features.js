import { useContext } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { MainContext } from './MainContext'

import Phone from '../images/phone.png'
import Money from '../images/money.png'
import DeliveryMap from '../images/delivery_map.png'
import Purchases from '../images/purchases.png'
import Avatar from '../images/account_avatar.png'
import List from '../images/list.png'
import Bitrix from '../images/bitrix24.png'
import Insales from '../images/insales.png'
import Retail from '../images/retail.png'
import Apiship from '../images/apiship.png'
import Codebox from '../images/codebox.png'

import '../styles/features.scss'

export default function Features() {
  const { isTablet, isMobile } = useContext(MainContext)

  return (
    <section data-id="features">
      <MoreAdvantages isTablet={isTablet} isMobile={isMobile} />
      <SimpleIntegration isTablet={isTablet} isMobile={isMobile} />
    </section>
  )
}

function MoreAdvantages({isMobile, isTablet}) {
  const moreFeaturesCards = [
    {
      title: 'Безопасная доставка',
      description: 'Выгодное страхование заказов',
      additionalItems: [
        {
          name: 'От стоимости товара',
          amount: '0,6%'
        }
      ],
      bgImages: Phone,
      id: 'safe-delivery',
    },
    {
      title: `Оплата \n при получении`,
      description: 'Клиент может оплатить после проверки заказа',
      additionalItems: [
        {
          name: 'Наличными',
          amount: 'от 1,5%'
        },
        {
          name: 'Картой',
          amount: 'от 2,5%'
        },
      ],
      bgImages: Money,
      id: 'place-payment',
    },
    {
      title: 'Приедем сами',
      description: 'Заберём Ваши заказы бесплатно',
      bgImages: DeliveryMap,
      id: 'free-takeout',
    },
    {
      title: 'Простые возвраты',
      description: 'Вернём заказ, если клиент не заберет посылку',
      bgImages: Purchases,
      id: 'easy-refunds',
    },
  ]

  return (
    <div className="features__more-features__wrapper">
      <h2>Больше преимуществ</h2>
      {
        !isTablet ?
        <div className="features__more-features__cards--desktop">
          {
            moreFeaturesCards.map((el) => (
              <MoreFeaturesCard key={el.id} data={el} />
            ))
          }
        </div>
        :
        <div className="features__more-features__cards--mobile">
          <Swiper
            spaceBetween={isMobile ? 10 : 20}
            slidesPerView={isMobile ? 1 : 'auto'}
          >
            {
              moreFeaturesCards.map((el) => (
                <SwiperSlide key={el.id}>
                  <MoreFeaturesCard data={el} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      }
    </div>
  )
}

function SimpleIntegration({isMobile, isTablet}) {
  const integrationsArray = [
    {
      title: 'Личный кабинет клиента',
      bgImg: Avatar,
      id: 'personal-account'
    },
    {
      title: 'API',
      bgImg: List,
      id: 'api'
    },
    {
      title: 'Готовые модули',
      items: [Bitrix, Insales, Retail],
      id: 'modules'
    },
    {
      title: 'Сервисы и агрегаторы',
      items: [Apiship, Codebox],
      id: 'services'
    },
  ]

  return (
    <div className="features__simple-integration__wrapper">
      <div className="features__simple-integration__bg-image"></div>
      <h2>
        Легко подключиться<br/>и интегрироваться
      </h2>
      {
        integrationsArray.map(({title, bgImg, id, items}) => (
          <div
            key={id}
            className={`features__simple-integration__card features__simple-integration__card--${id}`}>
              <div className="features__simple-integration__card__title">
                {title}
              </div>
              {
                bgImg ?
                <div className="features__simple-integration__card__image">
                  <img src={bgImg} alt="" />
                </div>
                :
                <div className="features__simple-integration__card__items">
                  {
                    items.map((el, i) => (
                      <div
                        key={i}
                        className="features__simple-integration__card__items__item">
                        <img src={el} alt="" />
                      </div>
                    ))
                  }
                </div>
              }
          </div>
        ))
      }
    </div>
  )
}

function MoreFeaturesCard({data}) {
  const {
    title,
    description,
    additionalItems,
    bgImages,
    id,
  } = data

  return (
    <div className="features__more-features__card--gradient-border">
      <div className={`features__more-features__card features__more-features__card--${id}`}>
        <span><img src={bgImages} alt="" draggable="false"/></span>
        <div
          className="features__more-features__card__title"
          dangerouslySetInnerHTML={{__html: title.replaceAll('\n', '<br/>')}}
        />
        <p>{description}</p>
        {
          additionalItems &&
          <div className="features__more-features__card__additional-items">
            {additionalItems.map((el, i) => (
              <div key={i} className="features__more-features__card__additional-item">
                <span>{el.amount}</span>
                <div className="features__more-features__card__additional-item__name">
                  {el.name}
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  )
}