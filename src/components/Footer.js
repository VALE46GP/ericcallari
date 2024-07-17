import React from 'react';
import businessInfo from '../businessInfo';
import { Link } from 'react-router-dom';
import './Footer.sass';

function Footer() {
    return (
        <footer className="footer">
            <div>
                <Link to="/">
                    <img src="https://template-riptide.s3.us-west-1.amazonaws.com/riptide-logo-OLD-white.png" alt="Logo" />
                </Link>
            </div>
            <div>
                <h4>Contact Us</h4>
                <a href={businessInfo.location.mapURL} target="_blank" rel="noopener noreferrer">{businessInfo.location.address}</a>
                <p>Phone: <a href={businessInfo.phone.url}>{businessInfo.phone.display}</a></p>
                <p>Email: <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a></p>
            </div>
            <div>
                <div>
                    <h4>Business Hours</h4>
                    <div className="footer__hour">Mon: {businessInfo.businessHours.monday}</div>
                    <div className="footer__hour">Tue: {businessInfo.businessHours.tuesday}</div>
                    <div className="footer__hour">Wed: {businessInfo.businessHours.wednesday}</div>
                    <div className="footer__hour">Thu: {businessInfo.businessHours.thursday}</div>
                    <div className="footer__hour">Fri: {businessInfo.businessHours.friday}</div>
                    <div className="footer__hour">Sat: {businessInfo.businessHours.saturday}</div>
                    <div className="footer__hour">Sun: {businessInfo.businessHours.sunday}</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
