import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { projects } from '../../DB/projects'
import mediumZoom from 'medium-zoom'

import './Project.scss'
const Project = () => {
    const { projectSlug } = useParams()
    const navigate = useNavigate()

    const [projectIdx, setProjectIdx] = useState(0)

    useLayoutEffect(() => {
        try {
            setProjectIdx(projects.indexOf(projects.find(project => project.name.toLowerCase().replaceAll(' ', '-') === projectSlug)))
        } catch {
            navigate('/404')
        }
    }, [projectSlug])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [projectSlug])

    useEffect(() => {
        mediumZoom('[data-zoomable]', {
            background: '#000',
            
        })
    }, [projectSlug])

    return (
        <div className='project-page'>
            <div className="cover">
                <div
                    className='img'
                    style={{
                        backgroundImage: `url(${projects[projectIdx].cover})`
                    }}
                >
                    <div className="overlay"></div>
                    {/* <img src={projects[projectIdx].cover} alt="" /> */}
                </div>

                <div className="title">
                    {projects[projectIdx].name}
                </div>
            </div>
            <div className="content">
                <div className="project-description">
                    {projects[projectIdx].breif}
                </div>
                <div className="project-images">
                    {
                        projects[projectIdx].images.map((image, idx) => {
                            return (
                                <div 
                                    className="img"
                                    id={`img-${idx}`}
                                    
                                >
                                    <img src={image} alt="" data-zoomable />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Project