import { useId } from "react";
import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MainContext } from "./MainContext";

import '../styles/tariffs.scss'
import Form from "./Form";
import { useState } from "react";

export default function Tariffs() {
  const { isMobile, Pagination } = useContext(MainContext)

  const [menuOpen, setMenuOpen] = useState(false)

  const tariffs = [
    {
      name: 'Доставка по Москве в режиме Same Day',
      id: 'tariff' + useId(),
      table: [
        [
          "",
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
          "",
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
          "",
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

  const swiperOptions = isMobile ?
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

  function tableUnhighlight(e) {
    [...document.getElementsByTagName('td')].forEach(el => {
      el.style.backgroundColor = ''
    });
  }

  return (
    <section data-id='tariffs'>
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
                  {isMobile ?
                    <div className="">

                    </div>
                    :
                    <table className="tariffs__item__table">
                      <tbody>
                        {
                          table.map((el, i) => (
                            Array.isArray(el) ?
                            <tr key={i}>
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