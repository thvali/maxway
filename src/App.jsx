import React from 'react'
import Header from './Header/Header'
import { Outlet } from 'react-router'
import Footer from './Footer/Footer'

export default function App() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
