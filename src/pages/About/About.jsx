import React from 'react'
import { Link } from 'react-router-dom'
import {GrFacebookOption, GrLinkedinOption,GrInstagram} from 'react-icons/gr'
import {BsBehance} from 'react-icons/bs'


import './About.scss'
const About = () => {
  return (
    <div className='about-page'>

        <div className="content">
            <div className="info">
                <div className="name">
                    YOUSEF <br />
                    MAHMOUD
                </div>
                <div className="position">
                    Brand Identity Designer
                </div>
            </div>
            <div className="about">
                I'm graphic designer based in Cairo specialized in branding design. <br/>
                I have over year of experience in graphic design field and have worked as a freelancer for many clients helping them building there brands.
            </div>
        </div>

        <div className="social">
          <a href="https://fb.me/usefgraphic" className="link"target='_blank'>
            <GrFacebookOption />
          </a>

          <a href="https://be.net/usefmahmud" className="link"target='_blank'>
            <BsBehance />
          </a>

          <a href="https://linkedin.com/in/usefmahmud" className="link" target='_blank'>
            <GrLinkedinOption />
          </a>

          <a href="https://instagram.com/usefmahmud0" className="link" target='_blank'>
            <GrInstagram />
          </a>
        </div>

        <div className="nav">
          <Link className='link' to={'/portfolio'}>
            PORTFOLIO
          </Link>

          <Link className='link' to={'/about'}>
            ABOUT
          </Link>

          <Link className='link' to={'/contact'}>
            CONTACT
          </Link>
        </div>
    </div>
  )
}

export default About