import './HeroNav.sass';
import React from 'react';
import { Link } from 'react-router-dom';

function HeroNav() {
    return (
        <div className='hero-nav'>
            <div className='hero-nav__col'>
                <div className='hero-nav__logo-container'>
                    <img
                        alt='Eric Callari Logo'
                        className='hero-nav__logo'
                        src='https://ericcallari-site.s3.us-west-1.amazonaws.com/assets/logo.png'
                    />
                </div>
                <div className='hero-nav__buttons'>
                    <Link to='/photo' className='hero-nav__button'>Photo</Link>
                    <Link
                        className='hero-nav__button hero-nav__button--2'
                        target='_blank'
                        to='https://www.youtube.com/@ericcallari'
                    >Video</Link>
                </div>
            </div>
        </div>
    );
}

export default HeroNav;
