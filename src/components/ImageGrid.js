import React, { useState } from 'react';
import ImageModal from './ImageModal';
import './ImageGrid.sass';

function ImageGrid({ imageURLs }) {
    const [modalUrl, setModalUrl] = useState(null);

    return (
        <div className="image-grid">
            {imageURLs.map((obj, index) => (
                <div
                    key={obj.key}
                    className='image-grid__item'
                    style={{ backgroundImage: `url("https://${obj.url.split('/')[2]}/${encodeURIComponent(obj.key)}")` }}
                    onClick={() => setModalUrl(obj.url)}
                >
                </div>
            ))}
            {modalUrl && <ImageModal style={{ opacity: 1 }} url={modalUrl} onClose={() => setModalUrl(null)} />}
        </div>
    );
}

export default ImageGrid;
