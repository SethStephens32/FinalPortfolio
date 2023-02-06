import React from 'react'
import './Projects.scss'
import { AnimatePresence, motion } from 'framer-motion'
import {useState } from 'react'


const projects = [
    {
        id: 1,
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
    {
        id: 3,
        title: 'Project 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
    {
        id: 4,
        title: 'Project 4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    }
]

const Projects = () => {

    const [selectedId, setSelectedId] = useState(null)

  return (
    <>
    <h1 className='skills__header'>I strive for excellence in my work.</h1>
    <div className='projects__container'>
        {projects.map((project) => (
            <motion.div
            key={project.id}
            className='projects__card'
            layoutId={project.id}
            onClick={() => setSelectedId(project.id)}
            >
                <motion.h2 layoutId={`title ${project.id}`}>{project.title}</motion.h2>
            </motion.div>
        ))
            }
        <AnimatePresence>
            {selectedId && (
                <motion.div layoutId={selectedId} className='projects__card projects__card--selected'>
                    <motion.h2 layoutId={`title ${selectedId}`}>{projects.find((project) => project.id === selectedId).title}</motion.h2>
                    <motion.p>{projects.find((project) => project.id === selectedId).description}</motion.p>
                    <motion.button onClick={() => setSelectedId(null)}>Close</motion.button>
                </motion.div>
            )}
        </AnimatePresence>
                
    </div>
    </>
  )
}

export default Projects
