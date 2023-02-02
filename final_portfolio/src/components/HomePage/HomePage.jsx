import React from 'react'
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


const HomePage = () => {
  return (
    <>
    <section className="home-page">
        <div className="home-page__title">
        <h1><span className='span-color'>Unleashing</span> technology, one line of code at a time. I'm a <span className='span-color'>software developer</span> with four years of experience. Let's build something great <span className='span-color'>together</span>.</h1>
        <p>Technical know-how meets <span className='span-color-2'>creativity</span>. Results-driven solutions for <span className='span-color-2'>your</span> next project.</p>
        </div>
    </section>

    <section className="home-page-about">
        <div className="home-page-about__skills">
            <GrReactjs className="home-page-about__skills__icon"/>
            <SiRedux className="home-page-about__skills__icon"/>

            <IoLogoJavascript className="home-page-about__skills__icon"/>
            <AiFillHtml5 className="home-page-about__skills__icon"/>
            <DiCss3 className="home-page-about__skills__icon"/>
            <SiSass className="home-page-about__skills__icon"/>

            <IoLogoNodejs className="home-page-about__skills__icon"/>
            <DiNpm className="home-page-about__skills__icon"/>
            <SiExpress className="home-page-about__skills__icon"/>

            <SiPostgresql className="home-page-about__skills__icon"/>
            <SiMongodb className="home-page-about__skills__icon"/>
            <SiPython className="home-page-about__skills__icon"/>

        </div>
    <CodeScreen/>
    </section>
    </>
  )
}

export default HomePage