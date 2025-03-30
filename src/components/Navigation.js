import React, { useEffect, useState, useRef } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.sass';

function Navigation() {
    const [showNav, setShowNav] = useState(true);
    const lastScrollY = useRef(window.pageYOffset);
    const isScrollingUp = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.pageYOffset;
            isScrollingUp.current = currentScrollY < lastScrollY.current;
            setShowNav(isScrollingUp.current || currentScrollY < 50);
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const updateNavbarHeight = () => {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            document.documentElement.style.setProperty('--nav-height', `${navbarHeight}px`);
        };

        updateNavbarHeight();
        window.addEventListener('resize', updateNavbarHeight);

        return () => window.removeEventListener('resize', updateNavbarHeight);
    }, []);

    return (
        <Navbar bg='dark' variant='dark' expand='lg' className={showNav ? 'navigation' : 'navigation--hidden'}>
            <Container>
                <Navbar.Brand as={Link} to='/'>
                    <img
                        alt='Eric Callari Logo'
                        className='navigation__logo d-inline-block align-top'
                        height='auto'
                        src='https://ericcallari-site.s3.us-west-1.amazonaws.com/assets/logo.png'
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
                            to='https://www.youtube.com/@ericcallari'
                        >
                            Video
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
