import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.sass';

function Footer() {
    return (
        <footer className="footer">
            <div>
                <Link to="/">
                    <img src="https://ericcallari.s3.us-west-1.amazonaws.com/logo.png" alt="Eric Callari Logo" />
                </Link>
            </div>
            <div>
                <h4>Contact Me</h4>
                <p><a href={`ericdoescode@gmail.com`}>{`ericdoescode@gmail.com`}</a></p>
            </div>
            {/*<div>*/}
            {/*    <div>*/}
            {/*        <h4>Business Hours</h4>*/}
            {/*        <div className="footer__hour">Mon: {businessInfo.businessHours.monday}</div>*/}
            {/*        <div className="footer__hour">Tue: {businessInfo.businessHours.tuesday}</div>*/}
            {/*        <div className="footer__hour">Wed: {businessInfo.businessHours.wednesday}</div>*/}
            {/*        <div className="footer__hour">Thu: {businessInfo.businessHours.thursday}</div>*/}
            {/*        <div className="footer__hour">Fri: {businessInfo.businessHours.friday}</div>*/}
            {/*        <div className="footer__hour">Sat: {businessInfo.businessHours.saturday}</div>*/}
            {/*        <div className="footer__hour">Sun: {businessInfo.businessHours.sunday}</div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </footer>
    );
}

export default Footer;
