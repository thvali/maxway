import React from 'react'
import Card from './Card/Card'
import "./cardstyle.css"
import rasm1 from "../assets/donar1.jpg"
import rasm2 from "../assets/donar2.jpg"
import rasm3 from "../assets/donar3.jpg"
import rasm4 from "../assets/donar4.jpg"
import rasm5 from "../assets/donar5.jpg"
import rasm6 from "../assets/donar6.jpg"
import rasm7 from "../assets/donar7.jpg"
import rasm8 from "../assets/donar8.jpg"
export default function Donar() {
  const a = {
    img : rasm1,
    title : "Spicy seasoned seafood noodles",
    text : "Information: classic lavash with meat, potato-free, pepper",
    price : 2.29
  }
  const b = {
    img : rasm2,
    title : "X owls available x owls available",
    text : "Information: classic lavash with meat, potato-free, pepper",
    price : 3.29
  }
  const c = {
    img : rasm3,
    title : "Salted pasta with mushroom sauce",
    text : "Information: classic lavash with meat, potato-free, pepper",
    price : 5.29
  }
  const d = {
    img : rasm4,
    title : "Beef dumpling in hot soup",
    text : "Information: classic lavash with meat, potato-free, pepper",
    price : 3.29
  }
  const e = {
    img : rasm5,
    title : "Hot spicy fried rice with omelet",
    text : "Information: classic lavash with meat, potato-free, pepper",
    price : 9.29
  }
  const f = {
    img : rasm6,
    title : "Spicy instant noodle with soup",
    text : "Information: classic lavash with meat, potato-free, pepper",
    price : 2.29
  }
  const g = {
    img : rasm7,
    title : "Constant noodle special omelette",
    text : "Information: classic lavash with meat, potato-free, pepper",
    price : 3.29
  }
  const h = {
    img : rasm8,
    title : "Noodle with spinach hot soup",
    text : "Information: classic lavash with meat, potato-free, pepper",
    price : 0.29
  }
  return (
      <div className='container'>
        <ul className='cardstyle__list'>
          <Card data={a}/>
          <Card data={b}/>
          <Card data={c}/>
          <Card data={d}/>
          <Card data={e}/>
          <Card data={f}/>
          <Card data={g}/>
          <Card data={h}/>
        </ul>
      </div>
  )
}