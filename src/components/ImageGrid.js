import React, { useState } from 'react';
import ImageModal from './ImageModal';
import './ImageGrid.sass';

function ImageGrid({ imageURLs }) {
    const [modalUrl, setModalUrl] = useState(null);

    return (
        <div className="image-grid">
            {imageURLs.map((url, index) => (
                <div key={index} className="image-grid__item" style={{ backgroundImage: `url(${url})` }}
                     onClick={() => setModalUrl(url)}>
                </div>
            ))}
            {modalUrl && <ImageModal style={{ opacity: 1 }} url={modalUrl} onClose={() => setModalUrl(null)} />}
        </div>
    );
}

export default ImageGrid;
