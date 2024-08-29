import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.sass';
import HeroParallax from '../components/HeroParallax';

function Home() {
    return (
        <div className='home'>
            <HeroParallax />
            <Container>
                <Row className='home__row'>
                    <Col lg={10} className='home__col'>
                        <p> This site is all about my photography and videography.
                            I’m also a musician and often score my videos.
                            I went to school for mechanical engineering and work as full-time software engineer.
                            <strong> I built this website you're viewing using React.js. </strong>
                            I have a lot of different passions and have worked tirelessly my whole life to develop a wide array of skills across many disciplines.
                            I find that with photography and videography, these skills complement each other very well.</p>
                        <p> I’m based in San Francisco, California.
                            My journey into photography started in high school in upstate New York.
                            I continued shooting through college and later began work operating video cameras and working as a grip in New York City, working for NYU, Coach Company, independent film makers, and others.
                            I was mainly shooting interviews and working on short films at that time.
                            Since then, I have been a camera for hire at events, weddings, concerts, and portraits in nature.
                            I'm skilled in editing, both video and photos.</p>
                        <p> When I moved to California about ten years ago, I became obsessed with landscapes.
                            I shoot stills and timelapses to capture the forces of nature.
                            This led me into wildlife photography and portraiture.
                            Most of the videography I do these days is centered around musicians.
                            I’m fully hooked now and will continue to shoot regardless of where life takes me!</p>
                        <p> Please send me an email if you're interested in a shoot or in prints!</p>
                        <div className='home__button-container'>
                            <a
                                className='home__button'
                                href='https://ericcallari.s3.us-west-1.amazonaws.com/Eric+Callari+Resume+(no+phone).pdf'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                View My Resume
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;
