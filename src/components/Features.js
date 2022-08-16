import React, { useContext, useId } from "react"
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
import MTS from '../images/mts.png'
import CZUM from '../images/czum.png'
import GoldenApple from '../images/golden_apple.png'
import Lego from '../images/lego.png'
import DetskiyMir from '../images/detskiy_mir.png'
import CaiNiao from '../images/cainiao.png'
import Pandora from '../images/pandora.png'
import Henderson from '../images/henderson.png'
import Karmanov5 from '../images/karmanov5.png'
import Aliexpress from '../images/aliexpress.png'
import Sokolov from '../images/sokolov.png'
import Brandshop from '../images/brandshop.png'
import PhoneConvenientToGet from '../images/phone_convenient_to_get.png'

import { ReactComponent as PencilConvenientToGet } from '../images/pencil_convenient_to_get.svg'
import { ReactComponent as BoxConvenientToGet } from '../images/box_convenient_to_get.svg'
import { ReactComponent as MessageConvenientToGet } from '../images/message_convenient_to_get.svg'

import '../styles/features.scss'

export default function Features() {
  const {
    isDesktop, isTablet, isMobile,
    Swiper, SwiperSlide
  } = useContext(MainContext)

  return (
    <section id="features">
      <MoreAdvantages isTablet={isTablet} isMobile={isMobile} Swiper={Swiper} SwiperSlide={SwiperSlide} />
      <SimpleIntegration />
      <ConvenientToGet />
      <Clients isDesktop={isDesktop} isTablet={isTablet} isMobile={isMobile} Swiper={Swiper} SwiperSlide={SwiperSlide} />
    </section>
  )
}

function MoreAdvantages({isMobile, isTablet, Swiper, SwiperSlide}) {
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

function SimpleIntegration() {
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

function ConvenientToGet() {
  const conveniencesArray = [
    {
      title: 'Изменение параметров',
      description: 'Возможность самостоятельно вносить изменения в заказ (адрес, дата и время доставки)',
      Image: PencilConvenientToGet,
      id: 'convenience' + useId()
    },
    {
      title: 'Вся информация о заказе',
      description: 'Всё, что нужно видеть получателю: номер заказа и статус, информация об отправителе, сумма и способ оплаты, электронный чек',
      Image: BoxConvenientToGet,
      id: 'convenience' + useId()
    },
    {
      title: 'Мы на связи',
      description: 'Оперативная связь со службой поддержки, оценка работы курьера и компании, возможность оставить отзыв',
      Image: MessageConvenientToGet,
      id: 'convenience' + useId()
    },
  ]


  return (
    <div className="features__convenient-to-get__wrapper">
      <h2>Удобство для получателей</h2>
      <p>
        Полноценный личный кабинет вместо стандартных смс-уведомлений
      </p>
      <div className="features__convenient-to-get__content">
        <div className="features__convenient-to-get__content__phone">
          <img src={PhoneConvenientToGet} alt="" />
        </div>
        <div className="features__convenient-to-get__content__conveniences">
          {
            conveniencesArray.map(({title, description, id, Image}) => (
              <div
                key={id}
                className="features__convenient-to-get__content__conveniences__item"
              >
                <div
                  className="features__convenient-to-get__content__conveniences__item__image--gradient-border"
                >
                  <div
                    className="features__convenient-to-get__content__conveniences__item__image"
                  >
                    <Image />
                  </div>
                </div>
                <div className="features__convenient-to-get__content__conveniences__item__text-content">
                  <h4>{title}</h4>
                  <p>
                    {description}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

function Clients({isTablet, isDesktop, Swiper, SwiperSlide}) {
  const clientsImages = [
    MTS, CZUM, GoldenApple, Lego, DetskiyMir, CaiNiao,
    Pandora, Henderson, Karmanov5, Aliexpress, Sokolov, Brandshop,
    MTS, CZUM, GoldenApple, Lego, DetskiyMir, CaiNiao,
    Pandora, Henderson, Karmanov5, Aliexpress, Sokolov, Brandshop,
  ]

  const { Grid, Pagination } = useContext(MainContext)

  const sliderOptions = isTablet ? 
    {
      spaceBetween: 20,
      slidesPerView: 'auto',
    }
    :
    {
      spaceBetween: 32,
      slidesPerView: isDesktop ? 6 : 5,
      slidesPerGroup: isDesktop ? 6 : 5,
      modules: [Grid, Pagination],
      grid: {
        rows: 2,
        fill: 'row'
      },
      pagination: {
        clickable: true,
      }     
    }

  return (
    <div className="features__clients__wrapper">
      <div className="features__clients__bg-image"></div>
      <h2>Наши клиенты</h2>
      <div className="features__clients__cards">
        <Swiper {...sliderOptions}>
          {
            clientsImages.map((el, i) => (
              <SwiperSlide key={i}>
                <div className="features__clients__card">
                  <img src={el} alt="" />
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
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