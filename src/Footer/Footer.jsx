import React from 'react'
import youtube from '../assets/youtube.svg'
import instagram from '../assets/instagram.svg'
import telegram from '../assets/telegram.svg'
import "./Footer.css"
import { useTranslation } from "react-i18next";
const Footer = () => {
    const {t, i18n} =useTranslation();

    const handlelanguage = (lang) => {
      i18n.changeLanguage(lang)
    }
  return (
    <div className='footer'>
        <div className='container footer__container'>
            <ul className='footer__list'>
                <li className='footer__item'>
                    <a className='footer__logo' href="">SFood</a> <br />
                    <a className='footer__link' href="/">{t('header.link1')}</a><br />
                    <a className='footer__link' href="/branch">{t('header.link2')}</a><br />
                    <a className='footer__link' href="/about">{t('header.link3')}</a><br />
                    <a className='footer__link' href="/contact">{t('header.link4')}</a>
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