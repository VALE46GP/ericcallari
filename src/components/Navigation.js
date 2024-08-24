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
                        alt='Eric Callari Logo'
                        className='navigation__logo d-inline-block align-top'
                        height='auto'
                        src='https://ericcallari.s3.us-west-1.amazonaws.com/logo.png'
                        width='125'
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link as={Link} to='/photo'>Photo</Nav.Link>
                        <Nav.Link
                            as={Link}
                            target='_blank'
                            to='https://www.youtube.com/@ericcallari6704/featured'
                        >Video</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
