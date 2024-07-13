import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'
import icon from '../assets/korzinka.png'
import burger from '../assets/burger.png'
const Header = () => {
  return (
    <div className='header'>
        <div className='container header__container'>
            <div className='header__list'>
                <a className='header__burger'  href=""><img className='header__burger' src={burger} alt="" /></a>
                <a className='header__logo' href="">SFood</a>
                <ul className='header__left-item'>
                    <NavLink className="header__link" to="/home" active = "true">Home</NavLink>
                    <NavLink className="header__link" to="/branch" active = "true">Filials</NavLink>
                    <NavLink className="header__link" to="/about" active = "true">About us</NavLink>
                    <NavLink className="header__link" to="/contact" active = "true">Contacts</NavLink>
                </ul>
                <ul className='header__right-item'>
                    <li><img className='header__icon' src={icon} alt="" /></li>
                    <li><button className='header__btn'>Enter</button></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header