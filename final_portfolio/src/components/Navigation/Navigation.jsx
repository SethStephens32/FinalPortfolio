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
            <motion.li className="navigation__list--item" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{duration: 1, ease: 'easeIn'}}>
                <motion.a href="#about" className="navigation__list--link"><span className='number-span'>01.</span>About</motion.a>
            </motion.li>
            <motion.li className="navigation__list--item" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{duration: 1.1, ease: 'easeIn'}}>
                <motion.a href="#experience" className="navigation__list--link"><span className='number-span'>02.</span>Experience</motion.a>
            </motion.li>
            <motion.li className="navigation__list--item"initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{duration: 1.2, ease: 'easeIn'}}>
                <motion.a href="#projects" className="navigation__list--link"><span className='number-span'>03.</span>Projects</motion.a>
            </motion.li>
            <motion.li className="navigation__list--item" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{duration: 1.3, ease: 'easeIn'}}>
            <motion.a href="#contact" className="navigation__list--link"><span className='number-span'>04.</span>Contact</motion.a>
            </motion.li>
            <motion.li className="navigation__list--item" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{duration: 1.4, ease: 'easeIn'}}>
            <motion.a href="#resume" className="navigation__list--link resume">Resume</motion.a>
            </motion.li>
            <motion.li className="navigation__list--item" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{duration: 1.5, ease: 'easeIn'}}>
                <motion.a href="#" className="navigation__list--link">|</motion.a>
            </motion.li>
            <motion.li className="navigation__list--item" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{duration: 1.6, ease: 'easeIn'}}>
                <motion.a href="https://github.com/SethStephens32" className="navigation__list--link"><BsGithub className="navigation__list--icon"/></motion.a>
            </motion.li>
            <motion.li className="navigation__list--item" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{duration: 1.7, ease: 'easeIn'}}>
                <motion.a href="https://www.linkedin.com/in/seth-stephens-2b1b1b1b1/" className="navigation__list--link"><AiFillLinkedin className="navigation__list--icon"/></motion.a>
            </motion.li>
            <motion.li className="navigation__list--item" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{duration: 1.8, ease: 'easeIn'}}>
                <motion.a href="https://sethstephens32.hashnode.dev/" className="navigation__list--link " whileHover={{ scale: 1.1 }}><SiHashnode className="navigation__list--icon"/></motion.a>
            </motion.li>
        </ul>
    </nav>
  )
}

export default Navigation