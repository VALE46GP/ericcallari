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
                        <p>
                            This site is all about my photos and videos, but if you're here for software engineering, then enjoy this custom site I built with React.js and shoot me an email to talk more!
                            I went to school for mechanical engineering and work as full-time software engineer in San Francisco, CA.
                            I'm working on several interesting applications related to music, performing, and personal organization.
                            I'll feature some of those personal coding projects here, soon.
                            I should probably add some of my music, too.
                            I have a lot of different passions and have worked tirelessly my whole life to develop a wide array of skills across many disciplines.
                        </p>
                        <p>
                            I find that with photography and videography, these technical and creative skills complement each other very well.
                            My journey into photography started in high school in upstate New York.
                            I continued shooting through college and later began work operating video cameras and working as a grip in New York City, working for NYU, Coach Company, independent film makers, and others.
                            I was mainly shooting interviews and working on short films at that time.
                            Since then, I have been a camera for hire at events, weddings, concerts, and portraits in nature.
                            I'm skilled in editing, both video and photos.
                        </p>
                        <p>
                            When I moved to California about ten years ago, I became obsessed with landscapes.
                            I shoot stills and timelapses to capture the forces of nature.
                            This led me into wildlife photography and portraiture.
                            Recently, I've been focusing on automotive and racing shoots.
                            Most of the videography I do these days is centered around musicians.
                            I’m fully hooked now and will continue to shoot wherever life takes me.
                        </p>
                        <p>
                            Please send me an email if you're interested in a shoot, prints, or if you need a website!
                        </p>
                        <div className='home__button-container'>
                            <a
                                className='home__button'
                                href='https://ericcallari-site.s3.us-west-1.amazonaws.com/assets/Eric+Callari+Resume+(no+phone).pdf'
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
