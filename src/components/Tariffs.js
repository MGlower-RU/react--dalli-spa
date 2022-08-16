import { useId, useState, useContext, useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { MainContext } from "./MainContext"
import Form from "./Form"

import '../styles/tariffs.scss'

import {ReactComponent as Arrow} from '../images/arrow_down.svg'

export default function Tariffs() {
  const { isTablet, Pagination } = useContext(MainContext)

  const sectionRef = useRef(null)

  const [menuOpen, setMenuOpen] = useState(false)

  const tariffs = [
    {
      name: 'Доставка по Москве в режиме Same Day',
      id: 'tariff' + useId(),
      table: [
        [
          "От 200 шт/мес",
          "От 500 шт/мес",
          "От 1500 шт/мес",
          "От 1500 шт/мес"
        ],
        {
          amount: "До 1 кг",
          prices: ["270", "270", "270", "270"]
        },
        {
          amount: "До 3 кг",
          prices: ["270", "270", "270", "270"]
        },
        {
          amount: "До 5 кг",
          prices: ["270", "270", "270", "270"]
        },
        {
          amount: "До 10 кг",
          prices: ["270", "270", "270", "270"]
        },
        {
          amount: "До 15 кг",
          prices: ["270", "270", "270", "270"]
        },
        {
          amount: "До 20 кг",
          prices: ["270", "270", "270", "270"]
        },
        {
          amount: "До 25 кг",
          prices: ["270", "270", "270", "270"]
        },
      ]
    },
    {
      name: 'Доставка по Москве в режиме Next Day',
      id: 'tariff' + useId(),
      table: [
        [
          "От 200 шт/мес",
          "От 500 шт/мес",
          "От 1500 шт/мес",
          "От 1500 шт/мес"
        ],
        {
          amount: "До 1 кг",
          prices: ["270", "270", "270", "270"]
        },
        {
          amount: "До 3 кг",
          prices: ["270", "270", "270", "270"]
        },
        {
          amount: "До 5 кг",
          prices: ["270", "270", "270", "270"]
        },
        {
          amount: "До 10 кг",
          prices: ["270", "270", "270", "270"]
        },
        {
          amount: "До 15 кг",
          prices: ["270", "270", "270", "270"]
        },
        {
          amount: "До 20 кг",
          prices: ["270", "270", "270", "270"]
        },
        {
          amount: "До 25 кг",
          prices: ["270", "270", "270", "270"]
        },
      ]
    },
    {
      name: 'Доставка по Москве в режиме Same Day',
      id: 'tariff' + useId(),
      table: [
        [
          "От 200 шт/мес",
          "От 500 шт/мес",
          "От 1500 шт/мес",
          "От 1500 шт/мес"
        ],
        {
          amount: "До 1 кг",
          prices: ["270", "270", "270", "270"]
        },
        {
          amount: "До 3 кг",
          prices: ["270", "270", "270", "270"]
        },
        {
          amount: "До 5 кг",
          prices: ["270", "270", "270", "270"]
        },
        {
          amount: "До 10 кг",
          prices: ["270", "270", "270", "270"]
        },
        {
          amount: "До 15 кг",
          prices: ["270", "270", "270", "270"]
        },
        {
          amount: "До 20 кг",
          prices: ["270", "270", "270", "270"]
        },
        {
          amount: "До 25 кг",
          prices: ["270", "270", "270", "270"]
        },
      ]
    },
  ]

  const swiperOptions = isTablet ?
  {
    spaceBetween: 20,
    slidesPerView: 'auto',
  }
  :
  {
    spaceBetween: 32,
    slidesPerView: 'auto',
    modules: [Pagination],
    pagination: {
      clickable: true,
    }
  }

  function tableHighlight(e) {
    const cell = e.target
    const row = e.target.closest("tr")
    const body = e.target.closest("tbody")
    const cellNumber = cell.dataset.cellNumber
    const rowNumber = cell.dataset.rowNumber

    for (let i = 1; i < body.children.length; i++) {
      if(i !== rowNumber) body.children[i].children[cellNumber].style.backgroundColor = 'rgba(255,255,255,0.2)'
    }
    for (let i = 1; i < row.children.length; i++) {
      row.children[i].style.backgroundColor = row.children[i] === cell ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.2)'
    }
  }

  function tableUnhighlight() {
    [...document.getElementsByTagName('td')].forEach(el => {
      el.style.backgroundColor = ''
    });
  }

  function accordionHandle(e) {
    e.preventDefault();
    e.target.closest('.swiper-slide-active') &&
    [...e.target.closest('.tariffs__item__accordion__wrapper').children].forEach(el => (
      el === e.target.closest('.tariffs__item__accordion') ? el.classList.add('tariffs__item__accordion--open') : el.classList.remove('tariffs__item__accordion--open')
    ))
  }

  useEffect(() => {
    [...sectionRef.current.querySelectorAll('.tariffs__item__accordion__wrapper')].forEach(el => (
      el.firstChild.classList.add('tariffs__item__accordion--open')
    ))
  }, [])

  return (
    <section data-id='tariffs' ref={sectionRef}>
      <h2>
        Тарифы доставки
      </h2>
      <p>
        Цена на доставку зависит от режима, количества доставок в месяц и веса
      </p>
      <Swiper
        centeredSlides={true}
        loop={true}
        {...swiperOptions}
      >
        {
          tariffs.map(({name, id, table}) => (
            <SwiperSlide key={id}>
              <div className="tariffs__item__wrapper--gradient-border">
                <div className="tariffs__item__wrapper">
                  <div className="tariffs__item__title">
                    {name}
                  </div>
                  {isTablet ?
                    <div className="tariffs__item__accordion__wrapper">
                      {table[0].map((el, ind) => (
                        <div key={ind} className="tariffs__item__accordion">
                          <a
                            href="/"
                            className="tariffs__item__accordion__btn"
                            onClick={accordionHandle}
                          >
                            <div className="tariffs__item__accordion__btn__image">
                              <Arrow/>
                            </div>
                            <span>{el}</span>
                          </a>
                          <ul className="tariffs__item__accordion__list">
                            {table.map((el, i) => (
                              !Array.isArray(el) &&
                              <li key={i}>
                                <div className="tariffs__item__accordion__list__amount">
                                  {el.amount}
                                </div>
                                <div className="tariffs__item__accordion__list__price">
                                  {el.prices[ind]}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    :
                    <table className="tariffs__item__table">
                      <tbody>
                        {
                          table.map((el, i) => (
                            Array.isArray(el) ?
                            <tr key={i}>
                              <td></td>
                              {el.map((el, i) => (
                                <td key={i}>{el}</td>
                              ))}
                            </tr>
                            :
                            <tr
                              key={i}
                              data-row-number={i}
                            >
                              <td>{el.amount}</td>
                              {
                                el.prices.map((el, i) => (
                                  <td
                                    key={i}
                                    data-cell-number={i+1}
                                    onMouseEnter={e => e.target.closest('.swiper-slide-active') && tableHighlight(e)}
                                    onMouseLeave={tableUnhighlight}
                                  >{el}</td>
                                ))
                              }
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
                  }
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <button
        className="button"
        onClick={() => {
          setMenuOpen(true)
          document.body.classList.add('overflow')
        }}
      >
        Отправить заявку
      </button>
      { menuOpen &&
        <div className="overlay">
          <Form
            formFullsize={true}
            formHeader={true}
            formParagraph={true}
            completeButton={true}
            completeButtonState={setMenuOpen}
          />
        </div>
      }
    </section>
  )
}