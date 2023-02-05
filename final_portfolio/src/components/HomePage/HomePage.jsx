import React from 'react'
import { useState, useEffect } from "react";
import CodeScreen from '../CodeScreen/CodeScreen'
import './HomePage.scss'
import {GrReactjs} from 'react-icons/gr'
import {SiRedux} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {SiSass} from 'react-icons/si'
import {IoLogoNodejs} from 'react-icons/io'
import {DiNpm} from 'react-icons/di'
import {SiExpress} from 'react-icons/si'
import {SiPostgresql} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {SiPython} from 'react-icons/si'
import Skills from '../Skills/Skills';


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
        <Skills/>
        </div>
    <CodeScreen/>
    </section>
    </>
  )
}

export default HomePage