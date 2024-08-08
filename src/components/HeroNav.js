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
                        <img className='hero-nav__logo' src='https://ericcallari.s3.us-west-1.amazonaws.com/logo.png' alt='Eric Callari Logo' />
                        <div className='hero-nav__buttons'>
                            <Link to='/photo' className='hero-nav__button'>Photo</Link>
                            <Link to='/video' className='hero-nav__button hero-nav__button--2'>Video</Link>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default HeroNav;
