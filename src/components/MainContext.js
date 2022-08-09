import React, { createContext, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const MainContext = createContext();

export default function ContextComponent(props) {
  const [currentSlide, setCurrentSlide] = useState(window.location?.hash.slice(1) ?? 'main')

  const linksArray = [
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

  const isDesktop = useMediaQuery({ query: '(min-width:1440px)' })
  const isTablet = useMediaQuery({ query: '(max-width:1023px)' })
  const isMobile = useMediaQuery({ query: '(max-width:427px)' })

  return (
    <MainContext.Provider value={{
      currentSlide, setCurrentSlide,
      linksArray,
      isDesktop, isTablet, isMobile
    }}>
      {props.children}
    </MainContext.Provider>
  )
}