import './Hero.sass';
import React, { useState, useEffect } from 'react';

function Hero() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.pageYOffset > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='hero'>
            <div className='hero__content'>
                <img className='hero__image' src='https://ericcallari.s3.us-west-1.amazonaws.com/tank-hill-centered.jpg' alt='self portrait overlooking San Francisco' />
                <img className='hero__logo' src='https://ericcallari.s3.us-west-1.amazonaws.com/logo.png' alt='Eric Callari Logo' />
                <div className={`hero__scroll-arrow ${isScrolled ? 'hero__scroll-arrow--stop-bounce' : ''}`}>
                    <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                        <path d='M6 9l6 6 6-6' />
                    </svg>
                </div>
                <div className={`hero__scroll-arrow hero__scroll-arrow--right ${isScrolled ? 'hero__scroll-arrow--stop-bounce' : ''}`}>
                    <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                        <path d='M6 9l6 6 6-6' />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Hero;
