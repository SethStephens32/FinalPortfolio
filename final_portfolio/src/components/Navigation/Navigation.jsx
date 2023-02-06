import React from 'react'
import './Navigation.scss'
import { IoLogoReact } from 'react-icons/io5'
import {BsGithub} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import {SiHashnode} from 'react-icons/si'
import {motion} from 'framer-motion'

const Navigation = () => {
  return (
    <nav className="navigation">
        <ul className="navigation__list">
            <li className="navigation__list--item">
                <motion.a href="#about" className="navigation__list--link">Resume</motion.a>
            </li>
            <li className="navigation__list--item">
                <motion.a href="#projects" className="navigation__list--link">Projects</motion.a>
            </li>
            <li className="navigation__list--item">
                <motion.a href="#contact" className="navigation__list--link">Contact</motion.a>
            </li>
            <li className="navigation__list--item">
                <motion.a href="#resume" className="navigation__list--link">|</motion.a>
            </li>
            <li className="navigation__list--item">
                <motion.a href="https://github.com/SethStephens32" className="navigation__list--link"><BsGithub className="navigation__list--icon"/></motion.a>
            </li>
            <li className="navigation__list--item">
                <motion.a href="https://www.linkedin.com/in/seth-stephens-2b1b1b1b1/" className="navigation__list--link"><AiFillLinkedin className="navigation__list--icon"/></motion.a>
            </li>
            <li className="navigation__list--item">
                <motion.a href="https://sethstephens32.hashnode.dev/" className="navigation__list--link " whileHover={{ scale: 1.1 }}><SiHashnode className="navigation__list--icon"/></motion.a>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation