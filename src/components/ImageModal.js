import React, { useState, useEffect } from 'react';
import './ImageModal.sass';

function ImageModal({ url, onClose }) {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        setOpacity(1); // Set opacity to 1 when the component mounts
        return () => setOpacity(0); // Reset opacity when the component unmounts
    }, []);

    return (
        <div className="image-modal" style={{ opacity: opacity }}>
            <img src={url} alt="Full Screen" />
            <button className="image-modal__close" onClick={onClose}>X</button>
        </div>
    );
}

export default ImageModal;
