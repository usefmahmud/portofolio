import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GrFacebookOption, GrLinkedinOption, GrInstagram } from 'react-icons/gr'
import { BsBehance } from 'react-icons/bs'

import { useForm, ValidationError } from '@formspree/react';


import './Contact.scss'
const Contact = () => {

    const [state, handleSubmit] = useForm("xeqnvylj")

    return (
        <div className='contact-page'>
            <div className="content">
                <div className="title">
                    CONTACT
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-box">
                        <input 
                            type="email" 
                            name='email'
                            placeholder='Email...'
                            required={true}
                        />
                    </div>
                    <div className="form-box">
                        <textarea 
                            name="messsage"
                            placeholder='Message...'
                            rows={5}
                            required={true}
                        ></textarea>
                    </div>
                    <div className="form-box">
                        <button 
                            type='submit'
                            disabled={state.submitting}
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>

                <div className="social">
                    <a href="https://fb.me/usefgraphic" className="link" target='_blank'>
                        <GrFacebookOption />
                    </a>

                    <a href="https://be.net/usefmahmud" className="link" target='_blank'>
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
                    <Link className='link  mouse-hover' to={'/portfolio'}>
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

export default Contact