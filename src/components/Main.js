import { useContext } from 'react';
import { Link } from 'react-scroll';

import { ReactComponent as Map } from '../images/map.svg';

import '../styles/main.scss'
import { MainContext } from './MainContext';

export default function Main() {
  const { isTablet } = useContext(MainContext)

  return (
    <section id="main">
      <div className="main__text-content">
        <h3>
          Доставка интернет-заказов
        </h3>
        <h1>
          За один день
        </h1>
        {
          isTablet ? 
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
        <Link
          className='button button--white'
          to='contacts'
          smooth={true}
          offset={-20}
          duration={500}
        >Отправить заявку</Link>
      </div>
      <div className="main__image">
        <Map />
      </div>
    </section>
  )
}