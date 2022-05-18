import React from 'react'
import { Link } from 'react-router-dom'
import Me from '../../assets/imgs/me.png'
import {GrFacebookOption, GrLinkedinOption,GrInstagram} from 'react-icons/gr'
import {BsBehance} from 'react-icons/bs'

import './Home.scss'

const Home = () => {
  return (
    <div className='home-page'>
      <div className="img">
        <img src={Me} alt="" draggable={false}/>
      </div>

      <div className="content">
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

        <div className="position">
          Brand Identity Designer
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
    </div>
  )
}

export default Home