import React, { createContext, useState } from 'react';

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

  return (
    <MainContext.Provider value={{
      currentSlide, setCurrentSlide,
      linksArray
    }}>
      {props.children}
    </MainContext.Provider>
  )
}