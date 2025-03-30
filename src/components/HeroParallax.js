import './HeroParallax.sass';
import React, { useState, useEffect } from 'react';
import HeroNav from './HeroNav';

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
                <img alt='Background Layer' src='https://ericcallari-site.s3.us-west-1.amazonaws.com/assets/tank-hill-back-compressed.jpg' />
            </div>
            <div className='hero-parallax__layer hero-parallax__layer--middle'>
                <img alt='Middle Layer' src='https://ericcallari-site.s3.us-west-1.amazonaws.com/assets/tank-hill-middle-2-compressed.png' />
            </div>
            <div className='hero-parallax__layer hero-parallax__layer--front'>
                <img alt='Front Layer' src='https://ericcallari-site.s3.us-west-1.amazonaws.com/assets/tank-hill-front-2-compressed.png' />
            </div>
            <div className='hero-parallax__content'>
                <div className='hero-parallax__nav-container'>
                    <HeroNav />
                </div>
                <div className={`hero-parallax__scroll-arrow ${isScrolled ? 'hero-parallax__scroll-arrow--hide' : ''}`}>
                    <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                        <path d='M6 9l6 6 6-6' />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default HeroParallax;
