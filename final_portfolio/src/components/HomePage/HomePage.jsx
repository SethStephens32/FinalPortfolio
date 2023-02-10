import React from 'react'
import {UseState, UseEffect} from 'react'
import { motion, useAnimation } from 'framer-motion'
import ParticlesBg from 'particles-bg'
import ProfilePicture from '../../assets/profilePicture.jpg'
import './HomePage.scss'

const HomePage = () => {  
  return (
    <>
    <section className="home-page">
    <ParticlesBg color="#63b3ed" type="cobweb" bg={true} num={100}/>
        <div className="home-page__title">
       <motion.h1  initial={{ x: -600, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ duration: 2, ease: 'easeOut' }}>Bringing visionary concepts <br/> to tangible reality is <br/>my <span className='text-gradient'>passion</span>.</motion.h1>
        <motion.p initial={{ x: 600, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}>Technical know-how meets <span className='text-gradient'>creativity</span>. Results-driven solutions.</motion.p>
        </div>
    </section>
    <section className="about">
      <div className="about__container">
        <div className="about__title">
          <h1 className='title'><span className='number-span'>01.</span>About me</h1>
        </div>
        <p>Hello stranger! <span>👋</span>, my name is Seth Stephens and I am a <span className="text-gradient">frontend engineer</span>, passionate about creating digital experiences that enhance people's lives and make their daily tasks easier and more enjoyable. <span className="text-gradient">I love bringing ideas to life through clean and intuitive design, seamless functionality, and innovative technologies</span>. As a frontend developer, I am constantly seeking new challenges and opportunities to create user-centric solutions that are both beautiful and functional.</p>
      </div>
      <div className="about__image">
          <img src={ProfilePicture} alt="Profile Picture" className='profilePicture'/>
      </div>
    </section>
    </>
  )
}

export default HomePage