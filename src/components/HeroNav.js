import './HeroNav.sass';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HeroNav() {
    return (
        <div className='hero-nav'>
            <Container>
                <Row className='hero-nav__row'>
                    <div className='hero-nav__col'>
                        <img
                            alt='Eric Callari Logo'
                            className='hero-nav__logo'
                            src='https://ericcallari.s3.us-west-1.amazonaws.com/logo.png'
                        />
                        <div className='hero-nav__buttons'>
                            <Link to='/photo' className='hero-nav__button'>Photo</Link>
                            <Link
                                className='hero-nav__button hero-nav__button--2'
                                target='_blank'
                                to='https://www.youtube.com/@ericcallari6704/featured'
                            >Video</Link>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default HeroNav;
