import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import { projects } from '../../DB/projects'

import './Portfolio.scss'
const Portfolio = () => {
    //  to={`/project/${project.name.toLowerCase().replaceAll(' ', '-')}`}

    const [currProject, setCurrProject] = useState(0)
    const [activePorject, setActiveProject] = useState(0)
    const [isOpened, setIsOpened] = useState(false)
    const navigate = useNavigate()
    
    const openProject = idx => {
        setIsOpened(true)
        
        setTimeout(() => {
            navigate(`/project/${projects[idx].name.toLowerCase().replaceAll(' ', '-')}`)
        }, 500)
    }
    return (
        <div className='portfolio-page'>
            <div className={`project-cover ${isOpened ? 'opened' : ''}`}>
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
                                onClick={() => {
                                    openProject(idx)
                                }}
                            >
                                <div className="info">
                                    <div className="title">
                                        {project.name}
                                    </div>
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