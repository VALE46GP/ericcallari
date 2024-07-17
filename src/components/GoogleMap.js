import React from 'react';

function GoogleMap() {
    console.log('API KEY = ', process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
    return (
        <div style={{ height: '400px', width: '100%' }}>
            <iframe
                title="Google Map"
                width="100%"
                height="100%"
                frameBorder="0" style={{border:0}}
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
                    &q=The+Riptide,3639+Taraval+St,San+Francisco,CA+94116`} allowFullScreen>
            </iframe>
        </div>
    );
}

export default GoogleMap;
