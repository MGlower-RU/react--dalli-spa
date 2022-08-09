import { useContext } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import { MainContext } from "./MainContext"

import '../styles/rates.scss'

import Coin1 from '../images/coin1.png'
import Coin2 from '../images/coin2.png'
import Clock from '../images/clock.png'
import Box1 from '../images/carton-box1.png'
import Box2 from '../images/carton-box2.png'
import Van from '../images/van.png'

import sdek from '../images/sdek.png'
import pickpoint from '../images/pickpoint.png'
import boxberry from '../images/boxberry.png'
import pochtaRossii from '../images/pochta_russia.png'
import post5 from '../images/5post.png'

export default function Rates() {
  const { isTablet, isMobile } = useContext(MainContext)

  const ratesNumbersArray = [
    {
      header: 'Качество КС',
      number: '98,5%'
    },
    {
      header: 'Доставляемость',
      number: '98%'
    },
    {
      header: 'ONTIME',
      number: '96,7%'
    },
    {
      header: 'Выкуп',
      number: '96%'
    },
  ]
  const cardsArray = [
    {
      description: 'Ежедневный возврат наложенных платежей',
      id: 'refund',
      mainImages: [Coin2, Coin1],
      circles: 2
    },
    {
      description: 'Доставка по городам ЦФО на следующий день',
      id: 'delivery-close',
      mainImages: Clock,
      circles: 3
    },
    {
      description: 'Доставка из оффлайн-магазинов Ship From Store',
      id: 'delivery-offline',
      mainImages: [Box1, Box2],
      circles: 2
    },
    {
      description: 'Доставка по России через партнёров',
      id: 'delivery-partners',
      mainImages: Van,
      itemImages: [sdek, pickpoint, boxberry, pochtaRossii, post5],
      circles: 3
    },
  ]

  return (
    <section data-id="rates">
      {
        !isTablet ?
        <div className="rates__cards--desktop">
          {
            cardsArray.map((el) => (
              <Card key={el.id} card={el} />
            ))
          }
        </div>
        :
        <div className="rates__cards--mobile">
          <Swiper
            spaceBetween={isMobile ? 10 : 20}
            slidesPerView={isMobile ? 1 : 'auto'}
          >
            {
              cardsArray.map((el) => (
                <SwiperSlide key={el.id}>
                  <Card card={el} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      }
      <div className="rates__text-content">
        <div className="rates__text-content__left">
          <h2>
            Dalli — это...
          </h2>
          <p>
            Dalli — служба доставки для интернет-магазинов и омниритейла.
          </p>
          <p>
            Основные принципы компании — безукоризненное качество и безупречный сервис. 
          </p>
        </div>
        <div className="rates__text-content__right">
          <span></span>
          {
            ratesNumbersArray.map((el, i) => (
              <div key={i} className="rates__text-content__right__item">
                <div className="rates__text-content__right__item__header">
                  {el.header}
                </div>
                <div className="rates__text-content__right__item__number">
                  {el.number}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

function Card({card}) {
  const { description, mainImages, itemImages, circles, id } = card

  return (
    <div className="rates__cards__item--gradient-border">
      <div className={`rates__cards__item rates__cards__item--${id}`}>
        {
          Array.isArray(mainImages) ?
          mainImages.map((el, i) => (
            <div key={i} className="rates__cards__item__main-image">
              <img src={el} alt="" draggable="false" />
            </div>
          ))
          :
          <div className="rates__cards__item__main-image">
            <img src={mainImages} alt="" draggable="false" />
          </div>
        }
        {
          Array.apply(null, new Array(circles)).map((_, i) => <span key={i} />)
        }
        <div className="rates__cards__item__content">
          { itemImages &&
            <div className="rates__cards__item__content__mini-cards">
              {
                itemImages.map((el, i) => (
                  <div
                    key={i}
                    className="rates__cards__item__content__mini-cards__item"
                  >
                    <img src={el} alt="" draggable="false" />
                  </div>
                ))
              }
            </div>
          }
          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}