import React from 'react'
import "./About.css"
import img from '../../assets/maxway.png'

export default function About() {
  return (
    <div className='about'>
      <div className='container about__container'>
          <img className='about__img' src={img} alt="" />
          <h3 className='about__title'>About company</h3>
          <p className='about__text'>The company was founded in February 2005 in Tashkent. Currently the company has 11 branches in Tashkent. The menu consists mainly of club sandwiches, hot dogs, burgers, pita breads and donars. Our priorities are the freshness and quality of ingredients, a variety of fillings, affordable prices and attention to the requests of guests. Every day a large number of different people order from MaxWay. And we are trying to increase both the number of visitors and the number of branches. With every dish we prepare, we hone the details of our signature recipes and look for the perfect balance of price and quality to continue to remain your favorite brand.If you suddenly encounter poor service or low quality of prepared food on our part, be sure to write to us at We gladly accept both positive and negative reviews. A guest's complaint is a gift that gives us room to grow.</p>
      </div>
    </div>
  )
}
