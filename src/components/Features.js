import { useContext } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { MainContext } from './MainContext'

import Phone from '../images/phone.png'
import Money from '../images/money.png'
import DeliveryMap from '../images/delivery_map.png'
import Purchases from '../images/purchases.png'

import '../styles/features.scss'

export default function Features() {
  const { isTablet, isMobile } = useContext(MainContext)

  const featuresCards = [
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
    <section data-id="features">
      <div className="features__wrapper">
        <h2>Больше преимуществ</h2>
        {
          !isTablet ?
          <div className="features__cards--desktop">
            {
              featuresCards.map((el) => (
                <Card key={el.id} data={el} />
              ))
            }
          </div>
          :
          <div className="features__cards--mobile">
            <Swiper
              spaceBetween={isMobile ? 10 : 20}
              slidesPerView={isMobile ? 1 : 'auto'}
            >
              {
                featuresCards.map((el) => (
                  <SwiperSlide key={el.id}>
                    <Card data={el} />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        }
      </div>
    </section>
  )
}

function Card({data}) {
  const {
    title,
    description,
    additionalItems,
    bgImages,
    id,
  } = data

  return (
    <div className="features__card--gradient-border">
      <div className={`features__card features__card--${id}`}>
        <span><img src={bgImages} alt="" draggable="false"/></span>
        <div
          className="features__card__title"
          dangerouslySetInnerHTML={{__html: title.replaceAll('\n', '<br/>')}}
        />
        <p>{description}</p>
        {
          additionalItems &&
          <div className="features__card__additional-items">
            {additionalItems.map((el, i) => (
              <div key={i} className="features__card__additional-item">
                <span>{el.amount}</span>
                <div className="features__card__additional-item__name">
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