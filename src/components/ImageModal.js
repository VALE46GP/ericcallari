import React, { useState, useEffect } from 'react';
import './ImageModal.sass';

function ImageModal({ url, onClose }) {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        setOpacity(1);
        return () => setOpacity(0);
    }, []);

    return (
        <div
            className='image-modal'
            onClick={onClose}
            style={{ opacity: opacity }}
        >
            <img src={url} alt='Full Screen' />
            <button className='image-modal__close' onClick={onClose}>X</button>
        </div>
    );
}

export default ImageModal;