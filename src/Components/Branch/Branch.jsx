import React from 'react'
import "./Branch.css"

export default function Branch() {
  return (
    <div className='branch'>
      <div className='container branch__container'>
        <div className='branch__wrapper'>
          <a href="">
          <ul className='branch__list'>
            <li className='branch__item'>
              <p className='branch__title'>MaxWay Magic City</p>
              <p className='branch__text'>Magic City.str.Bobur,174,Tashkent,Uzbekistan</p>
            </li>
            <li className='branch__item'>
              <p className='branch__subtext'>Opening hours</p>
              <p className='branch__text'>10:00-03:00</p>
            </li>
          </ul>
          </a>
        </div>
        <div className='branch__wrapper'>
          <a href="">
          <ul className='branch__list'>
            <li className='branch__item'>
              <p className='branch__title'>MaxWay Tashkent City</p>
              <p className='branch__text'>Tashkent City.str.Navoiy,26,Tashkent,Uzbekistan</p>
            </li>
            <li className='branch__item'>
              <p className='branch__subtext'>Opening hours</p>
              <p className='branch__text'>10:00-03:00</p>
            </li>
          </ul>
          </a>
        </div>
        <div className='branch__wrapper'>
          <a href="">
          <ul className='branch__list'>
            <li className='branch__item'>
              <p className='branch__title'>MaxWay Chilanzar City</p>
              <p className='branch__text'>Chilanzar City.str.Chilanzar,3,Tashkent,Uzbekistan</p>
            </li>
            <li className='branch__item'>
              <p className='branch__subtext'>Opening hours</p>
              <p className='branch__text'>10:00-03:00</p>
            </li>
          </ul>
          </a>
        </div>
      </div>
    </div>
  )
}

