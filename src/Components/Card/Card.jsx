import React from 'react'
import "./Card.css"
export default function Card({data}) {
  return (
    <div className='card'>
        <div className='container card__container'>
            <ul className='card__list'>
                <li className='card__item'><img className='card__img' src={data.img} alt="" /></li>
                <li className='card__item'><h3 className='card__title'>{data.title}</h3></li>
                <li className='card__item'><p className='card__text'>{data.text}</p></li>
                <li className='card__item'>
                    <p className='card__subtext'> {data.price} sum</p>
                    <button className='card__btn'>Order</button>
                </li>
            </ul>
        </div>
    </div>
  )
}
