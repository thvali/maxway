import React from 'react'
import "./Contact.css"

export default function Contact() {
  return (
    <div className='contact'>
      <div className='container contact__container'>
        <div className='contact__wrapper'>
          <h3 className='contact__title'>Contact center numbers</h3>
          <p className='contact__text'>24 hours a day, seven days a week</p>
          <ul className='contact__list'>
            <li><p className='contact__text'>Tashkent</p></li>
            <li><a className='contact__link' href="">+998941052544</a></li>
          </ul>
          <ul className='contact__list'>
            <li><p className='contact__text'>Namangan</p></li>
            <li><a className='contact__link' href="">+998941052544</a></li>
          </ul>
          <ul className='contact__list'>
            <li><p className='contact__text'>Olmaliq</p></li>
            <li><a className='contact__link' href="">+998941052544</a></li>
          </ul>
        </div>
        <div className='contact__wrapper'>
          <h3 className='contact__title'>Customer support department</h3>
          <ul className='contact__list'>
            <li><p className='contact__text'>Email</p></li>
            <li><a className='contact__link' href="">ahmadali.haydaraliyev2005@gmail.com</a></li>
          </ul>
          <ul className='contact__list'>
            <li><p className='contact__text'>Contact number</p></li>
            <li><a className='contact__link' href="">+998941052544</a></li>
          </ul>
        </div>
        <div className='contact__wrapper'>
          <h3 className='contact__title'>Copyright holders</h3>
          <p className='contact__text'>For questions arising in connection with the alleged misuse of trademarks, logos and other materials, please contact us by e-mail with supporting documents attached.</p>
          <ul className='contact__list'>
            <li><p className='contact__text'>Email</p></li>
            <li><a className='contact__link' href="">ahmadali.haydaraliyev2005@gmail.com</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
