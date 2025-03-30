import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.sass';

function Footer() {
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col lg={12} className='footer__col'>
                        <div>
                            <Link to='/'>
                                <img src='https://ericcallari-site.s3.us-west-1.amazonaws.com/assets/logo.png' alt='Eric Callari Logo' />
                            </Link>
                        </div>
                        <div>
                            <h4>Contact Me</h4>
                            <p><a href='mailto:ericdoescode@gmail.com'>ericdoescode@gmail.com</a></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
