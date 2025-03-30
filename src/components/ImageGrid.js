import React, { useState, useEffect, useCallback } from 'react';
import ImageModal from './ImageModal';
import './ImageGrid.sass';

function ImageGrid({ imageURLs, onLoadMore, allImagesLoaded }) {
    const [modalIndex, setModalIndex] = useState(null);

    // Navigate modal and trigger lazy loading when needed
    const navigateAndLoadIfNeeded = useCallback((newIndex) => {
        setModalIndex(newIndex);

        // If we're near the end of loaded images, try to load more
        const loadThreshold = 3; // Load more when within 3 images of the end
        if (!allImagesLoaded && newIndex >= imageURLs.length - loadThreshold) {
            onLoadMore && onLoadMore();
        }
    }, [imageURLs.length, allImagesLoaded, onLoadMore]);

    const openModal = (index) => {
        navigateAndLoadIfNeeded(index);
    };

    const closeModal = () => {
        setModalIndex(null);
    };

    const goToPrevious = () => {
        setModalIndex((prevIndex) => {
            const newIndex = prevIndex <= 0 ? imageURLs.length - 1 : prevIndex - 1;
            return newIndex;
        });
    };

    const goToNext = () => {
        setModalIndex((prevIndex) => {
            const newIndex = prevIndex >= imageURLs.length - 1 ? 0 : prevIndex + 1;

            // If we're about to wrap around to the beginning, check if we need to load more
            if (!allImagesLoaded && newIndex === 0) {
                onLoadMore && onLoadMore();
            }

            // If we're near the end of loaded images, try to load more
            if (!allImagesLoaded && prevIndex >= imageURLs.length - 3) {
                onLoadMore && onLoadMore();
            }

            return newIndex;
        });
    };

    // Use effect to update the modal index if needed when new images are loaded
    useEffect(() => {
        // If modal is open and the current index is valid
        if (modalIndex !== null && modalIndex >= 0 && modalIndex < imageURLs.length) {
            // No need to do anything, the index is still valid
        } else if (modalIndex !== null && modalIndex >= imageURLs.length) {
            // This could happen if images were removed - adjust the index
            setModalIndex(imageURLs.length - 1);
        }
    }, [imageURLs.length, modalIndex]);

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

            {modalIndex !== null && modalIndex < imageURLs.length && (
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
