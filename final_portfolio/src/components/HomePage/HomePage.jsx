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
    </>
  )
}

export default HomePage