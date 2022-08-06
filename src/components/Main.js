import { useContext } from 'react';

import {ReactComponent as Map} from '../images/map.svg';

import '../styles/main.scss'
import { MainContext } from './MainContext';

export default function Main() {
  const { setCurrentSlide, isMobile } = useContext(MainContext)

  return (
    <section id="main">
      <div className="main__wrapper">
        <div className="main__text-content">
          <h3>
            Доставка интернет-заказов
          </h3>
          <h1>
            За один день
          </h1>
          {
            isMobile ? 
            <p>
              Доставляйте по Москве и Московской области,
              а также в Санкт-Петербург, Тулу, Орёл, Воронеж, Калугу, Тверь
              и Ярославль от 205 рублей
            </p>
            :
            <p>
              Доставляйте по Москве и Московской области,<br/>
              а также в Санкт-Петербург, Тулу, Орёл, Воронеж, Калугу, Тверь<br/>
              и Ярославль от 205 рублей
            </p>
          }
          <a
            className='button button--white'
            href="#contacts"
            data-link='contacts'
            onClick={e => setCurrentSlide(e.target.dataset.link)}
          >
            Отправить заявку
          </a>
        </div>
        <div className="main__image">
          <Map />
        </div>
      </div>
    </section>
  )
}