
import "./Header.css"
import { NavLink } from 'react-router-dom'
import icon from '../assets/korzinka.png'
import burger from '../assets/burger.png'
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import {  Drawer } from 'antd';
import { useTranslation } from "react-i18next";
const Header = () => {
    const {t, i18n} =useTranslation();

    const handlelanguage = (lang) => {
      i18n.changeLanguage(lang)
    }

    const [modal2Open, setModal2Open] = useState(false);
    const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className='header'>
        <div className='container header__container'>
            <div className='header__list'>
                <a className='header__logo' href="">SFood</a>
                <ul className='header__left-item'>
                    <NavLink className="header__link" to="/">{t('header.link1')}</NavLink>
                    <NavLink className="header__link" to="/branch">{t('header.link2')}</NavLink>
                    <NavLink className="header__link" to="/about">{t('header.link3')}</NavLink>
                    <NavLink className="header__link" to="/contact">{t('header.link4')}</NavLink>
                </ul>
                <ul className='header__right-item'>
                    <li>
                    <button onClick={()=>handlelanguage('uz')}>{t('header.btn1')}</button>
                    <button onClick={()=>handlelanguage('en')}>{t('header.btn2')}</button></li>
                    <li>
                    <img className='header__icon' src={icon} alt="" /></li>
                    <Button className="header__btn" onClick={() => setModal2Open(true)}>
                    {t('header.btn3')}
      </Button>
      <Modal
        title="Welcome!"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <p className="ant-modal-text">Login with your phone number</p>
        <form className="header__form" action="">
            <input className="header__input" placeholder="+998941052544" type="text" />
            <button className="ant-btn">Enter</button>
        </form>
        <span className="header__modal-footer">
            <p className="ant-modal-text">Don't have an account?</p>
            <a className="header__modal-link" href="">Registration</a>
        </span>
      </Modal>
                </ul>
                <Button className="burger__btn" type="primary" onClick={showDrawer}>
        <img className="burger__img" src={burger} alt="" />
      </Button>
      <Drawer title="" onClose={onClose} open={open}>
        <a className="burger__link" href="/">{t('header.link1')}</a><br />
        <a className="burger__link" href="/branch">{t('header.link2')}</a><br />
        <a className="burger__link" href="/about">{t('header.link3')}</a><br />
        <a className="burger__link" href="/contact">{t('header.link4')}</a>
      </Drawer>
            </div>
        </div>
    </div>
  )
}

export default Header