import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Home.sass';
import Hero from '../components/Hero';
import GoogleMap from '../components/GoogleMap';

function Home() {
    return (
        <div className="home">
            <Hero />
            <Container className="home__content" style={{ marginTop: '20px' }}>
                <Row className="home__section">
                    <Col lg={12}>
                        <p>This site is all about my photography and videography.
                            I’m also a musician and often score my videos.
                            I went to school for mechanical engineering and work as full-time software engineer.
                            I have a lot of different passions and have worked tirelessly my whole life to develop a wiiiiiide array of skills across many disciplines.
                            I find that with photography and videography, these skills complement each other very well.</p>
                        <p>I’m based in San Francisco, California.  My journey into photography started in high school in upstate New York.
                            I continued shooting through college and later began work operating video cameras and working as a grip in New York City, working for NYU, Coach Company, and others.
                            I was mainly shooting interviews and working on short films at that time.
                            When I moved to California about ten years ago, I became obsessed with landscapes.
                            I shoot stills and timelapses to capture the forces of nature.
                            This led me into wildlife photography and portraiture.
                            I’m fully hooked now and will continue to shoot regardless of where life takes me!</p>
                        <p> </p>
                        <Image className="home__image" src="https://template-riptide.s3.us-west-1.amazonaws.com/home-hero-OLD-v2.jpg" alt="Riptide interior" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;
