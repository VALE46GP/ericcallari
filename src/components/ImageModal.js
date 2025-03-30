import React, { useState, useEffect, useCallback, useRef } from 'react';
import './ImageModal.sass';

function ImageModal({ url, onClose, allImages, currentIndex, onPrevious, onNext }) {
    const [opacity, setOpacity] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const modalRef = useRef(null);

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    useEffect(() => {
        setOpacity(1);
        return () => setOpacity(0);
    }, []);

    // Handle keyboard navigation
    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape') {
            onClose();
        } else if (e.key === 'ArrowLeft') {
            onPrevious();
        } else if (e.key === 'ArrowRight') {
            onNext();
        }
    }, [onClose, onPrevious, onNext]);

    // Add and remove event listeners
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    // Touch event handlers for swipe
    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isSwipe = Math.abs(distance) > minSwipeDistance;

        if (isSwipe) {
            if (distance > 0) {
                // Swipe left -> next image
                onNext();
            } else {
                // Swipe right -> previous image
                onPrevious();
            }
        }
    };

    // Handle modal click - close when clicking outside the image
    const handleModalClick = (e) => {
        // Close if clicking anywhere except the image or navigation buttons
        if (e.target === modalRef.current) {
            onClose();
        }
    };

    // Navigation buttons
    const renderNavButtons = () => (
        <>
            <button
                className="image-modal__nav-button image-modal__nav-button--left"
                onClick={(e) => { e.stopPropagation(); onPrevious(); }}
            >
                ‹
            </button>
            <button
                className="image-modal__nav-button image-modal__nav-button--right"
                onClick={(e) => { e.stopPropagation(); onNext(); }}
            >
                ›
            </button>
        </>
    );

    return (
        <div
            ref={modalRef}
            className="image-modal"
            onClick={onClose}
            style={{ opacity }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <div className="image-modal__content" onClick={(e) => e.stopPropagation()}>
                <img src={url} alt="Full Screen" />
            </div>

            <button className="image-modal__close" onClick={onClose}>X</button>
            {renderNavButtons()}
        </div>
    );
}

export default ImageModal;
