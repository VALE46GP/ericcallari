import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import './HomeOLD.sass';

function HomeOLD() {
    return (
        <Container style={{ marginTop: '20px' }}>
            <Row className="align-items-center">
                <Col lg={12}>
                    <h1>About The Riptide</h1>
                    <Image src="https://theriptidesf.com/files/riptide1024.jpg" alt="Bar Interior" fluid />
                    <p><strong>The Riptide</strong> is the Bay Area's best little honky-tonk by the beach. Located in the Sunset District of San Francisco it was built in 1941 and has the look and feel of a small town lodge. In addition to rustic brick flooring and high ceilings, the original knotty pine walls and raging fireplace add warmth you can feel as soon as you step inside.</p>
                    <p>The Riptide opens at 3 P.M. daily. If you’re looking for a casual atmosphere and a conversation or two with the local neighbors, stop by for Happy Hour, Monday through Friday, from 3 P.M. to 7 P.M. featuring honest drink specials.</p>
                    <p>Enjoy some of the best touring and local music acts including bluegrass, jazz, blues, solo acoustic, and country. Check the calendar for events or just wander in anytime.</p>
                    <p>The Riptide is only 20 minutes from the heart of San Francisco, one block away from the Pacific Ocean, half a block from public transportation with plenty of free parking.</p>
                </Col>
            </Row>
            <Row id="calendar" className="my-4">
                <Col lg={12}>
                    <h2>Calendar</h2>
                    <div className="calendar-container">
                        <iframe
                            src="https://calendar.google.com/calendar/embed?src=your-calendar-id%40group.calendar.google.com&ctz=America%2FNew_York"
                            style={{ border: 0 }}
                            width="800"
                            height="600"
                            frameBorder="0"
                            scrolling="no"
                        ></iframe>
                    </div>
                </Col>
            </Row>
            <Row id="directions" className="my-4">
                <Col lg={6}>
                    <h2>Directions</h2>
                    <Image src="https://theriptidesf.com/files/ltaraval.jpg" alt="Historical Streetcar" fluid />
                    <p>The Riptide was voted Nitey Awards Best Neighborhood Bar in San Francisco 2 years in a row.</p>
                </Col>
                <Col lg={6}>
                    <h2>Press</h2>
                    <Card>
                        <Card.Img variant="top" src="https://theriptidesf.com/files/niteys_logo-2.jpg" alt="Award" />
                        <Card.Body>
                            <Card.Title>Nitey Awards</Card.Title>
                            <Card.Text>Best Neighborhood Bar in San Francisco</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row id="photos" className="my-4">
                <Col lg={12}>
                    <h2>Photos</h2>
                    <Image src="https://theriptidesf.com/files/riptide-night-tn.jpg" alt="The Riptide" fluid />
                    <p>Taraval Street was named after Sebastian Taraval, a Native American guide for Juan Bautista de Anza's 1775-1776 expedition to San Francisco.</p>
                </Col>
            </Row>
            <Row className="my-4">
                <Col lg={12}>
                    <Image src="https://theriptidesf.com/files/sunset0024carville-overview.jpg" alt="Sunset Carville" fluid />
                    <h2>Sunset Carville</h2>
                    <p>At the end of the 19th century, the city began replacing horse-drawn cars with electric streetcars. Dumped out near the beach in the Sunset, many cars were sold to individuals who paid $10 if the car had no seats and $20 if it did. People set up these cars along the sand at the Great Highway and turned them into homes. Some stacked two or three cars on top of one another for a multi-story home; others placed cars in a u-shape to create a courtyard protected from the wind. The area became known as "Carville-by-the-Sea" or simply "Carville." By 1901, 50 families lived in this unusual community that included a two-story church and a café. By the 1930s and 1940s, as development increased and property became more valuable, these cars disappeared. Today, two surviving houses are known to be built around streetcars. Others may exist as well.</p>
                    <p>* The deepest part of the San Francisco Bay is right under the Golden Gate Bridge, with 330 feet of water, other parts of the bay can be as shallow as 7 feet.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default HomeOLD;
