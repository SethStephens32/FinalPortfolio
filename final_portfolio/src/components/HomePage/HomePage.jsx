import React from 'react'
import { motion } from 'framer-motion'
import './HomePage.scss'
import Projects from '../Projects/Projects'
import CodeScreen from '../CodeScreen/CodeScreen'

const HomePage = () => {

  return (
    <>
    <section className="home-page">
        <div className="home-page__title">
       <motion.h1  initial={{ x: -600, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ duration: 2, ease: 'easeOut' }}>Bringing visionary concepts <br/> to tangible reality is <br/>my <span className='text-gradient'>passion</span>.</motion.h1>
        <motion.p initial={{ x: 600, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}>Technical know-how meets <span className='text-gradient'>creativity</span>. Results-driven solutions.</motion.p>
        </div>
    </section>
    <motion.section initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }} className='skills_section'>
    <motion.div
      className='skills__container'
    >
      <p className='skills__intro'>
        Hello stranger! <span>👋</span>, my name is Seth Stephens and I am a frontend engineer, passionate about creating digital experiences that enhance people's lives and make their daily tasks easier and more enjoyable. I love bringing ideas to life through clean and intuitive design, seamless functionality, and innovative technologies. As a frontend developer, I am constantly seeking new challenges and opportunities to create user-centric solutions that are both beautiful and functional.
      </p>
    </motion.div>
    <CodeScreen />
  </motion.section>
  
  <section className='projects_section' style={{ position: 'relative' }}>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Projects />
    </motion.div>
  </section>
    </>
  )
}

export default HomePage