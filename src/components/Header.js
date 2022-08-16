import { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-scroll'

import { ReactComponent as Logo } from '../images/logo.svg'
import { ReactComponent as Phone } from '../images/phone.svg'

import '../styles/header.scss'

import { MainContext } from './MainContext'

export default function Header() {
  const navRef = useRef(null)
  const headerRef = useRef(null)

  const { linksArray } = useContext(MainContext)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', scrollHandle)

    scrollHandle()
    function scrollHandle() {
      const nodes = document.elementsFromPoint(0, headerRef.current.getBoundingClientRect().height)
      const node = nodes[nodes.length > 4 ? nodes.length - 5 : 0]

      const colorsToChange = [
        'rgb(255, 255, 255)',
        'rgba(0, 0, 0, 0)'
      ]      
      const bgColor = getComputedStyle(node).backgroundColor
      const headerEl = headerRef.current.firstElementChild
      colorsToChange.includes(bgColor) ? headerEl.classList.add('header--white') : headerEl.classList.remove('header--white')
    }
    return () => window.removeEventListener('scroll', scrollHandle)
  }, [])

  useEffect(() => {
    menuOpen ? document.body.classList.add('overflow', 'menu-open') : document.body.classList.remove('overflow', 'menu-open')

    if(menuOpen) {
      window.addEventListener('click', closeMenu)
    }

    function closeMenu(e) {
      e.target.closest('.header__nav__mobile__wrapper') === null &&
      e.target.closest('.header__nav__icon--mobile') === null &&
      setMenuOpen(false)
    }

    return () => window.removeEventListener('click', closeMenu)
  }, [menuOpen])

  return (
    <div
      className="header__wrapper"
      ref={headerRef}
    >
      <header>
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__nav__mobile__wrapper">
          <div
            className="header__nav__mobile__btn--close"
            onClick={() => setMenuOpen(false)}
          >
            <span/><span/>
          </div>
          <ul
            className="header__nav"
            ref={navRef}
          >
            {
              linksArray.map(({name, id, link}) => (
                <li key={id}>
                  <Link
                    activeClass="active"
                    to={link}
                    spy={true}
                    hashSpy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                  >{name}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="header__phone">
          <Phone />
          <a href="tel:+74956468682">+7 (495) 646-86-82</a>
        </div>
        <div
          className="header__nav__icon--mobile"
          onClick={() => setMenuOpen(true)}
        >
          <span/><span/><span/>
        </div>
      </header>
    </div>
  )
}