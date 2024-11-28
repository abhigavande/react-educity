import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>成長のための知識、より良い世界のための教育</h1>
        <p>教育は可能性を引き出し、輝く未来を創る鍵です。知識が広がる世界を共に築きましょう。</p>
        <button className='btn'>詳しく見る <img src={dark_arrow} alt="" /></button>
      </div>

    </div>
  )
}

export default Hero
