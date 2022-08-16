import Form from './Form'

import '../styles/contacts.scss'

export default function Contacts() {
  return (
    <section id="contacts">
      <h2>
        Начните доставлять<br/>
        уже сегодня
      </h2>
      <p>
        Оставьте заявку на подключение, и мы свяжемся с вами в ближайшее время
      </p>
      <Form />
    </section>
  )
}