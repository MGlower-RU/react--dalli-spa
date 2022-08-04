import { useEffect, useRef, useState } from 'react'
import { ReactComponent as Logo } from '../images/logo.svg'
import { ReactComponent as Phone } from '../images/phone.svg'

import '../styles/header.scss'

export default function Header() {
  const navRef = useRef(null)
  const headerRef = useRef(null)

  const [currentSlide, setCurrentSlide] = useState('main')
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    {
      name: 'Главная',
      id: 'main',
      link: 'main'
    },
    {
      name: 'Показатели',
      id: 'rates',
      link: 'rates'
    },
    {
      name: 'Тарифы',
      id: 'tariffs',
      link: 'tariffs'
    },
    {
      name: 'Возможности',
      id: 'features',
      link: 'features'
    },
    {
      name: 'Контакты',
      id: 'contacts',
      link: 'contacts'
    },
  ]

  useEffect(() => {
    [...navRef.current.children].forEach(el => {
      const elLink = el.firstElementChild
      elLink.dataset.link === currentSlide ? elLink.classList.add('active-link') : elLink.classList.remove('active-link')
    })
    window.location.hash = currentSlide
  }, [currentSlide])

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
        <div className="overlay">
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
                navItems.map(({name, id, link}) => (
                  <li key={id}>
                    <a
                      href={`#${link}`}
                      data-link={link}
                      onClick={() => setCurrentSlide(link)}
                    >{name}</a>
                  </li>
                ))
              }
            </ul>
          </div>
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