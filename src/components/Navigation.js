import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.sass';

function Navigation() {
    const [showNav, setShowNav] = useState(true);
    let lastScrollY = window.pageYOffset;
    let isScrollingUp = false;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.pageYOffset;
            isScrollingUp = currentScrollY < lastScrollY;
            setShowNav(isScrollingUp || currentScrollY < 50);
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        document.documentElement.style.setProperty('--nav-height', `${navbarHeight}px`);
    }, []);

    return (
        <Navbar bg='dark' variant='dark' expand='lg' className={showNav ? 'navigation' : 'navigation--hidden'}>
            <Container>
                <Navbar.Brand as={Link} to='/'>
                    <img
                        src='https://ericcallari.s3.us-west-1.amazonaws.com/logo.png'
                        width='125'
                        height='auto'
                        className='navigation__logo d-inline-block align-top'
                        alt='Eric Callari Logo'
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link as={Link} to='/about'>About</Nav.Link>
                        <Nav.Link as={Link} to='/events'>Events</Nav.Link>
                        <Nav.Link as={Link} to='/gallery'>Gallery</Nav.Link>
                        <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
