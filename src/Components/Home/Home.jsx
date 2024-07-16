import React from 'react'

import Menu from '../Menu/Menu'
import Swiperr from '../Swiperr/Swiperr'
import { Outlet } from 'react-router'

export default function Home() {
  return (
    <div>
      <Swiperr/>
      <Menu/>
      <Outlet/>
    </div>
  )
}
