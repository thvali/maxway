import React from 'react'
import youtube from '../assets/youtube.svg'
import instagram from '../assets/instagram.svg'
import telegram from '../assets/telegram.svg'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
        <div className='container footer__container'>
            <ul className='footer__list'>
                <li className='footer__item'>
                    <a className='footer__logo' href="">SFood</a> <br />
                    <a className='footer__link' href="">Home</a><br />
                    <a className='footer__link' href="">Filials</a><br />
                    <a className='footer__link' href="">About us</a><br />
                    <a className='footer__link' href="">Contacts</a>
                </li>
                <li className='footer__item'>
                    <p className='footer__title'>Join us</p>
                    <a href=""><img className='footer__icon' src={youtube} alt="" /></a>
                    <a href=""><img className='footer__icon' src={instagram} alt="" /></a>
                    <a href=""><img className='footer__icon' src={telegram} alt="" /></a>
                </li>
                <li className='footer__item'>
                    <p className='footer__title'>Order by number</p>
                    <a className='footer__link' href="">+998941052544</a>
                </li>
            </ul>
            <ul className='footer__list'><hr className='footer__underline' /></ul>
            <ul className='footer__list'>
                <li><p className='footer__under-text'>© 2020–2022, ООО «IT-TIME», official site</p></li>
                <li><a className='footer__link' href="https://t.me/withoutagf">Developed by Ahmadali</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer