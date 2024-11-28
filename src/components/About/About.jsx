import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = ({ setPlayState }) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={() => {
          setPlayState(true)
        }} />
      </div>
      <div className="about-right">
        <h3>大学について</h3>
        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos asperiores cum laborum ad reiciendis tenetur nulla perferendis magnam reprehenderit suscipit.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos asperiores cum laborum ad reiciendis tenetur nulla perferendis magnam reprehenderit suscipit.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos asperiores cum laborum ad reiciendis tenetur nulla perferendis magnam reprehenderit suscipit.</p>

      </div>

    </div>
  )
}

export default About
