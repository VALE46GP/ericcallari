import React, { useState } from 'react';
import ImageModal from './ImageModal';
import './ImageGrid.sass';

function ImageGrid({ imageURLs }) {
    const [modalIndex, setModalIndex] = useState(null);

    const openModal = (index) => {
        setModalIndex(index);
    };

    const closeModal = () => {
        setModalIndex(null);
    };

    const goToPrevious = () => {
        setModalIndex((prevIndex) => {
            if (prevIndex <= 0) {
                return imageURLs.length - 1; // Loop to the end
            }
            return prevIndex - 1;
        });
    };

    const goToNext = () => {
        setModalIndex((prevIndex) => {
            if (prevIndex >= imageURLs.length - 1) {
                return 0; // Loop to the beginning
            }
            return prevIndex + 1;
        });
    };

    return (
        <div className="image-grid">
            {imageURLs.map((obj, index) => (
                <div
                    key={obj.key}
                    className='image-grid__item'
                    style={{ backgroundImage: `url("https://${obj.url.split('/')[2]}/${encodeURIComponent(obj.key)}")` }}
                    onClick={() => openModal(index)}
                >
                </div>
            ))}

            {modalIndex !== null && (
                <ImageModal
                    url={imageURLs[modalIndex].url}
                    onClose={closeModal}
                    allImages={imageURLs}
                    currentIndex={modalIndex}
                    onPrevious={goToPrevious}
                    onNext={goToNext}
                />
            )}
        </div>
    );
}

export default ImageGrid;
