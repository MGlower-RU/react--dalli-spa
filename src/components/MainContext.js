import React, { createContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from "swiper/react"
import { Grid, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

export const MainContext = createContext();

export default function ContextComponent(props) {
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
      linksArray,
      isDesktop, isTablet, isMobile,
      Swiper, SwiperSlide,
      Grid, Pagination
    }}>
      {props.children}
    </MainContext.Provider>
  )
}