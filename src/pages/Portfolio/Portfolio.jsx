import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../../DB/projects'

import './Portfolio.scss'
const Portfolio = () => {
    
    const [currProject, setCurrProject] = useState(0)
    const [activePorject, setActiveProject] = useState(0)

    return (
        <div className='portfolio-page'>
            <div className="project-cover">
                {
                    projects.map((project, idx) => {
                        return (
                            <div className={`img ${idx == currProject ? 'active' : ''}`}>
                                <div className="overlay"></div>
                                <img src={project.cover} alt="" />
                            </div>
                        )
                    })
                }
            </div>
            <div className="container" id='container'>
                {
                    projects.map((project, idx) => {
                        return (
                            <div
                                className={`section ${activePorject == idx ? 'active' : ''}`}
                                onMouseOver={() => {
                                    setCurrProject(idx)
                                    setActiveProject(idx)
                                }}
                            >
                                <div className="info">
                                    <Link className="title" to={`/project/${project.name.toLowerCase().replaceAll(' ', '-')}`}>
                                        {project.name}
                                    </Link>
                                    <div className="type">
                                        {project.type}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="project-number">
                {
                    Array.apply(null, Array(projects.length)).map(function (x, i) {
                        return (
                            <div className={`curr ${activePorject === i ? 'active' : ''}`}>
                                {i + 1}
                            </div>
                        )
                    })
                }
                <span></span>
                <div className="all">
                    {projects.length}
                </div>
            </div>
        </div>
    )
}

export default Portfolio