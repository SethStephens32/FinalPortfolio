import React from 'react'
import { useState, useEffect } from "react";
import CodeScreen from '../CodeScreen/CodeScreen'
import SlideShow from '../SlideShow/SlideShow';
import './HomePage.scss'

const HomePage = () => {

  return (
    <>
    <section className="home-page">
        <div className="home-page__title">
       <h1>Bringing visionary concepts <br/> to tangible reality is <br/>my <span className='text-gradient'>passion</span>.</h1>
        <p>Technical know-how meets <span className='text-gradient'>creativity</span>. Results-driven solutions.</p>
        </div>
    </section>

    <section className="home-page-about">
        <div className="home-page-about__skills">
            <SlideShow/>
        </div>
    <CodeScreen/>
    </section>
    </>
  )
}

export default HomePage