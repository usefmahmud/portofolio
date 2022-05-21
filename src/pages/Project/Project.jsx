import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { projects } from '../../DB/projects'
import mediumZoom from 'medium-zoom'
import {BsArrowRightShort} from 'react-icons/bs'
import { Link } from 'react-router-dom'

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

            <div className="next-prev-project">
                <div className="prev">
                    {
                        projects[projectIdx-1] ?
                        <Link
                            className="project-card"
                            to={`/project/${projects[projectIdx-1].name.toLowerCase().replaceAll(' ', '-')}`}
                        >
                            <div className="card-img">
                                <div className="overlay"></div>
                                <img src={projects[projectIdx-1].cover} alt="" />
                            </div>
                            <div className="card-title">
                                <div className="title">
                                    {projects[projectIdx-1].name}
                                </div>

                                <div className="icon">
                                    <BsArrowRightShort />
                                </div>
                            </div>
                        </Link> :
                        ''
                    }
                </div>
                <div className="next">
                    {
                        projects[projectIdx+1] ?
                        <Link 
                            className="project-card"
                            to={`/project/${projects[projectIdx+1].name.toLowerCase().replaceAll(' ', '-')}`}
                        >
                            <div 
                                className={`card-img`}
                            >
                                <div className="overlay"></div>
                                <img src={projects[projectIdx+1].cover} alt="" />
                            </div>
                            <div className="card-title">
                                <div className="title">
                                    {projects[projectIdx+1].name}
                                </div>

                                <div className="icon">
                                    <BsArrowRightShort />
                                </div>
                            </div>
                        </Link> :
                        ''
                    }
                </div>
            </div>
        </div>
    )
}

export default Project