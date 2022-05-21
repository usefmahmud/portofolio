import React from 'react'
import Logo from '../../assets/imgs/white-logo.png'
import { Link } from 'react-router-dom'

import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
        <Link 
            to={'/'}
            className="logo"
        >
            <img src={Logo} alt="Logo" draggable={false}/>
            
        </Link>

        <div className="name">
            <span>
                Yousef
            </span>
            <span>
                Mahmoud
            </span>
        </div>
    </div>
  )
}

export default Header