import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Menu.css"

export default function Menu() {
  return (
    <div className='menu'>
        <div className='container menu__container'>
            <ul className='menu__list'>
                <NavLink className= "menu__link" to="/">Lavash</NavLink>
                <NavLink className= "menu__link" to="/desert">Desert</NavLink>
                <NavLink className= "menu__link" to="/set">Set</NavLink>
                <NavLink className= "menu__link" to="/xaggi">Xaggi</NavLink>
                <NavLink className= "menu__link" to="/burger">Burger</NavLink>
                <NavLink className= "menu__link" to="/pizza">Pizza</NavLink>
                <NavLink className= "menu__link" to="/sendvich">Sendvich</NavLink>
                <NavLink className= "menu__link" to="/donar">Donar</NavLink>
                <NavLink className= "menu__link" to="/xotdog">Xot-Dog</NavLink>
                <NavLink className= "menu__link" to="/free">Free</NavLink>
                <NavLink className= "menu__link" to="/drink">Drink</NavLink>
                <NavLink className= "menu__link" to="/salad">Salad</NavLink>
                <NavLink className= "menu__link" to="/bread">Bread</NavLink>
                <NavLink className= "menu__link" to="/sauce">Sauce</NavLink>
            </ul>
        </div>
    </div>
  )
}
