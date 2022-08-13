import { useState } from 'react'

import '../styles/contacts.scss'

import { ReactComponent as Mark } from '../images/contacts_mark.svg'

export default function Contacts() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')

  const [isFormSent, setIsFormSent] = useState(false)

  function formSubmitHandle(e) {
    e.preventDefault()
    const { width, height } = e.target.getBoundingClientRect()
    e.target.style.maxWidth = `${width}px`
    e.target.style.height = `${height}px`

    // check on errors and empty inputs
    name && email && number && setIsFormSent(true)
  }

  return (
    <section data-id="contacts">
      <h2>
        Начните доставлять<br/>
        уже сегодня
      </h2>
      <p>
        Оставьте заявку на подключение, и мы свяжемся с вами в ближайшее время
      </p>
      <form
        className="contacts__form"
        onSubmit={formSubmitHandle}
      >
        {
          isFormSent ?
            <div className="contacts__form__completed">
              <div className="contacts__form__completed__image--gradient-border">
                <div className="contacts__form__completed__image">
                  <Mark />
                </div>
              </div>
              <h3>Спасибо!</h3>
              <p>
                Ваша заявка успешно отправлена.<br/>
                Мы свяжемся с вами в ближайшее время
              </p>
            </div>
            :
            <>
              <input
                type="text"
                data-required-warning={false}
                placeholder={'Введите имя'}
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <input
                type="text"
                data-required-warning={false}
                placeholder={'Введите электронный адрес'}
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <input
                type="text"
                data-required-warning={false}
                placeholder={'+7 (999) 999-99-99'}
                value={number}
                onChange={e => setNumber(e.target.value)}
              />
              <p>
                Отправляя форму, вы даёте согласие с Политикой обработки персональных данных
              </p>
              <button
                type="submit"
                className='button'
              >
                Отправить заявку
              </button>
            </>
        }
      </form>
    </section>
  )
}