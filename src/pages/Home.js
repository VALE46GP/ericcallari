import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Home.sass';
import Calendar from '../components/Calendar';
import Hero from '../components/Hero';
import GoogleMap from '../components/GoogleMap';

function Home() {
    return (
        <div className="home">
            <Hero />
            <Container className="home__content" style={{ marginTop: '20px' }}>
                <Row className="home__section">
                    <Col lg={12}>
                        <p><strong>The Riptide</strong> is the Bay Area's best little honky-tonk by the beach. Located in the Sunset District of San Francisco, it was built in 1941 and has the look and feel of a small town lodge. In addition to rustic brick flooring and high ceilings, the original knotty pine walls and raging fireplace add warmth you can feel as soon as you step inside.</p>
                        <p>The Riptide opens at 3 P.M. daily. If you're looking for a casual atmosphere and a conversation or two with the local neighbors, stop by for Happy Hour, Monday through Friday, from 3 P.M. to 7 P.M. featuring honest drink specials.</p>
                        <p>Enjoy some of the best touring and local music acts including bluegrass, jazz, blues, solo acoustic, and country. Check the calendar for events or just wander in anytime.</p>
                        <p>The Riptide is only 20 minutes from the heart of San Francisco, one block away from the Pacific Ocean, half a block from public transportation with plenty of free parking.</p>
                        <Image className="home__image" src="https://template-riptide.s3.us-west-1.amazonaws.com/home-hero-OLD-v2.jpg" alt="Riptide interior" />
                    </Col>
                </Row>
                <Row className="home__section">
                    <Col lg={12}>
                        <div className="home__calendar-container">
                            <Calendar />
                        </div>
                    </Col>
                </Row>
                <Row className="home__section">
                    <Col lg={6}>
                        <Image className="home__image" src="https://template-riptide.s3.us-west-1.amazonaws.com/home-carville-OLD-v3.jpg" alt="Sunset Carville" fluid />
                        <h2>Sunset Carville</h2>
                        <p>At the end of the 19th century, the city began replacing horse-drawn cars with electric streetcars. Dumped out near the beach in the Sunset, many cars were sold to individuals who paid $10 if the car had no seats and $20 if it did. People set up these cars along the sand at the Great Highway and turned them into homes. Some stacked two or three cars on top of one another for a multi-story home; others placed cars in a u-shape to create a courtyard protected from the wind. The area became known as "Carville-by-the-Sea" or simply "Carville." By 1901, 50 families lived in this unusual community that included a two-story church and a café. By the 1930s and 1940s, as development increased and property became more valuable, these cars disappeared. Today, two surviving houses are known to be built around streetcars. Others may exist as well.</p>
                        <p>* The deepest part of the San Francisco Bay is right under the Golden Gate Bridge, with 330 feet of water, other parts of the bay can be as shallow as 7 feet.</p>
                    </Col>
                    <Col lg={6}>
                        <Image className="home__image" src="https://template-riptide.s3.us-west-1.amazonaws.com/home-sunset-OLD-v2.jpg" alt="The Riptide" fluid />
                        <p>Taraval Street was named after Sebastian Taraval, a Native American guide for Juan Bautista de Anza's 1775-1776 expedition to San Francisco.</p>
                    </Col>
                </Row>
                <Row className="home__section" id="directions">
                    <Col lg={12}>
                        <GoogleMap />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;
