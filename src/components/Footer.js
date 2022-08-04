import { ReactComponent as Logo } from '../images/logo.svg'
import { ReactComponent as Phone } from '../images/phone.svg'
import { ReactComponent as Email } from '../images/email.svg'
import { ReactComponent as Website } from '../images/website.svg'

import '../styles/footer.scss'

export default function Footer() {
  return (
    <div className="footer__wrapper">
      <footer>
        <div className="footer__left">
          <div className="footer__logo">
            <Logo />
          </div>
          <div className="footer__copyright">
            2013-2022 Dalli Service<br/>
            Все права защищены.
          </div>
        </div>
        <div className="footer__right">
          <div className="footer__phone">
            <Phone />
            <a href="tel:+74956468682">+7 (495) 646-86-82</a>
          </div>
          <div className="footer__email">
            <Email />
            <a href="mailto:">info@dalli-service.com</a>
          </div>
          <div className="footer__website">
            <Website />
            <a href="https://dalli-service.com">www.dalli-service.com</a>
          </div>
        </div>
      </footer>
    </div>
  )
}