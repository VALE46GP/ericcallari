import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.sass';

function Footer() {
    return (
        <footer className='footer'>
            <div>
                <Link to='/'>
                    <img src='https://ericcallari.s3.us-west-1.amazonaws.com/logo.png' alt='Eric Callari Logo' />
                </Link>
            </div>
            <div>
                <h4>Contact Me</h4>
                <p><a href='mailto:ericdoescode@gmail.com'>ericdoescode@gmail.com</a></p>
            </div>
        </footer>
    );
}

export default Footer;
