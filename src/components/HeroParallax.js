import './HeroParallax.sass';
import React, { useState, useEffect } from 'react';

function HeroParallax() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.pageYOffset > 0);
        };

        window.addEventListener('scroll', handleScroll);

        const middleLayer = document.querySelector('.hero-parallax__layer--middle img');
        const frontLayer = document.querySelector('.hero-parallax__layer--front img');

        setTimeout(() => {
            middleLayer.classList.add('zoom-middle', 'move-down');
            frontLayer.classList.add('zoom-front', 'move-down');
        }, 100);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='hero-parallax'>
            <div className='hero-parallax__layer hero-parallax__layer--back'>
                <img src='https://ericcallari.s3.us-west-1.amazonaws.com/tank-hill-back-compressed.jpg' alt='Background Layer' />
            </div>
            <div className='hero-parallax__layer hero-parallax__layer--middle'>
                <img src='https://ericcallari.s3.us-west-1.amazonaws.com/tank-hill-middle-2-compressed.png' alt='Middle Layer' />
            </div>
            <div className='hero-parallax__layer hero-parallax__layer--front'>
                <img src='https://ericcallari.s3.us-west-1.amazonaws.com/tank-hill-front-2-compressed.png' alt='Front Layer' />
            </div>
            <div className='hero-parallax__content'>
                <img className='hero-parallax__logo' src='https://ericcallari.s3.us-west-1.amazonaws.com/logo.png' alt='Eric Callari Logo' />
                <div className={`hero-parallax__scroll-arrow ${isScrolled ? 'hero-parallax__scroll-arrow--hide' : ''}`}>
                    <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                        <path d='M6 9l6 6 6-6' />
                    </svg>
                </div>
                {/*<div className={`hero-parallax__scroll-arrow hero-parallax__scroll-arrow--right ${isScrolled ? 'hero-parallax__scroll-arrow--hide' : ''}`}>*/}
                {/*    <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>*/}
                {/*        <path d='M6 9l6 6 6-6' />*/}
                {/*    </svg>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default HeroParallax;
