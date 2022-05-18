import React from 'react'
import Logo from '../../assets/imgs/white-logo.png'

import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
        <div className="logo">
            <img src={Logo} alt="Logo" draggable={false}/>
        </div>

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