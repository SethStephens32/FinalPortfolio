import React from 'react'
import CodeScreen from '../CodeScreen/CodeScreen'
import './HomePage.scss'

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
        <div className="home-page-about__title">
        <h1>Hi, I'm <span className='span-color'>Dylan</span>.</h1>
        </div>
    <CodeScreen/>
    </section>
    </>
  )
}

export default HomePage