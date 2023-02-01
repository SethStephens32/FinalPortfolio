import React from 'react'
import './Navigation.scss'
import { IoLogoReact } from 'react-icons/io5'
import {BsGithub} from 'react-icons/bs'

const Navigation = () => {
  return (
    <nav className="navigation">
        <div className="navigation__logo">
            <IoLogoReact className="navigation__logo--icon" />
            <h1 className="navigation__logo--text">sethcodes</h1>
        </div>
        <ul className="navigation__list">
            <li className="navigation__list--item">
                <a href="#about" className="navigation__list--link">About</a>
            </li>
            <li className="navigation__list--item">
                <a href="#projects" className="navigation__list--link">Projects</a>
            </li>
            <li className="navigation__list--item">
                <a href="#contact" className="navigation__list--link">Contact</a>
            </li>
            <li className="navigation__list--item">
                <a href="#resume" className="navigation__list--link">|</a>
            </li>
            <li className="navigation__list--item">
                <a href="https://github.com/SethStephens32" className="navigation__list--link"><BsGithub className="navigation__list--icon"/></a>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation