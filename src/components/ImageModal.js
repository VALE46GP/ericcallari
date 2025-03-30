import React, { useState, useEffect, useCallback, useRef } from 'react';
import './ImageModal.sass';

function ImageModal({ url, onClose, allImages, currentIndex, onPrevious, onNext }) {
    const [opacity, setOpacity] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [controlsVisible, setControlsVisible] = useState(true);
    const [userInteracted, setUserInteracted] = useState(false);
    const controlsTimerRef = useRef(null);
    const modalRef = useRef(null);
    const imageRef = useRef(null);

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    // Show controls for a few seconds, then hide them
    const showControlsTemporarily = useCallback(() => {
        setControlsVisible(true);
        setUserInteracted(true);

        // Clear any existing timer
        if (controlsTimerRef.current) {
            clearTimeout(controlsTimerRef.current);
        }

        // Set a new timer to hide controls after 2 seconds
        controlsTimerRef.current = setTimeout(() => {
            setControlsVisible(false);
        }, 2000);
    }, []);

    // Initialize opacity
    useEffect(() => {
        setOpacity(1);
        return () => setOpacity(0);
    }, []);

    // Show controls initially, then hide them
    useEffect(() => {
        showControlsTemporarily();

        // Add listener for mouse movement to show controls
        const handleMouseMove = () => {
            showControlsTemporarily();
        };

        // Add listener for touch movement to show controls
        const handleTouchMove = () => {
            showControlsTemporarily();
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);

        // Cleanup function
        return () => {
            if (controlsTimerRef.current) {
                clearTimeout(controlsTimerRef.current);
            }
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [showControlsTemporarily]);

    // Show controls when a new image is loaded
    useEffect(() => {
        showControlsTemporarily();
    }, [currentIndex, showControlsTemporarily]);

    // Handle keyboard navigation
    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape') {
            onClose();
        } else if (e.key === 'ArrowLeft') {
            onPrevious();
            showControlsTemporarily();
        } else if (e.key === 'ArrowRight') {
            onNext();
            showControlsTemporarily();
        }
    }, [onClose, onPrevious, onNext, showControlsTemporarily]);

    // Add and remove keyboard event listeners
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    // Handle viewport sizing without triggering browser UI
    useEffect(() => {
        // Function to adjust image size based on viewport
        const adjustImageSize = () => {
            if (!imageRef.current || !modalRef.current) return;

            // Get actual visible viewport dimensions
            const viewportWidth = document.documentElement.clientWidth;
            const viewportHeight = document.documentElement.clientHeight;
            const isLandscape = viewportWidth > viewportHeight;

            // Force modal to stay within viewport
            modalRef.current.style.width = '100%';
            modalRef.current.style.height = '100%';
            modalRef.current.style.left = '0';
            modalRef.current.style.right = '0';
            modalRef.current.style.top = '0';
            modalRef.current.style.bottom = '0';

            // Calculate safe dimensions
            const maxWidth = isLandscape ? Math.min(viewportWidth * 0.85, viewportWidth - 40) : (viewportWidth * 0.9);
            const maxHeight = isLandscape ? Math.min(viewportHeight * 0.85, viewportHeight - 40) : (viewportHeight * 0.9);

            // Apply to image
            imageRef.current.style.maxWidth = `${maxWidth}px`;
            imageRef.current.style.maxHeight = `${maxHeight}px`;
        };

        // Run on mount and resize events
        adjustImageSize();

        window.addEventListener('resize', adjustImageSize, { passive: true });
        window.addEventListener('orientationchange', adjustImageSize, { passive: true });

        // Make sure image adjusts when it loads
        if (imageRef.current) {
            imageRef.current.onload = adjustImageSize;
        }

        // Cleanup
        return () => {
            window.removeEventListener('resize', adjustImageSize);
            window.removeEventListener('orientationchange', adjustImageSize);
            if (imageRef.current) {
                imageRef.current.onload = null;
            }
        };
    }, []);

    // Prevent body scrolling while modal is open
    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;

        // Just prevent scrolling without changing position properties
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = originalStyle;
        };
    }, []);

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
            // Show controls temporarily after swiping
            showControlsTemporarily();
        }
    };

    // Determine CSS classes
    const getControlsClassName = (baseClass) => {
        return `${baseClass} ${!controlsVisible && userInteracted ? 'fade-out' : ''}`;
    };

    return (
        <>
            {/* Semi-transparent background that closes the modal when clicked */}
            <div
                className="image-modal__backdrop"
                onClick={onClose}
                style={{ opacity }}
            ></div>

            {/* Modal content container */}
            <div
                ref={modalRef}
                className={`image-modal ${controlsVisible ? 'controls-visible' : ''}`}
                style={{ opacity }}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                <div className="image-modal__content">
                    <img
                        ref={imageRef}
                        src={url}
                        alt="Full screen view"
                        onClick={showControlsTemporarily}
                    />
                </div>

                <button
                    className={getControlsClassName("image-modal__close")}
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    ×
                </button>

                <button
                    className={getControlsClassName("image-modal__nav-button image-modal__nav-button--left")}
                    onClick={(e) => {
                        onPrevious();
                        showControlsTemporarily();
                    }}
                    aria-label="Previous image"
                >
                    ‹
                </button>

                <button
                    className={getControlsClassName("image-modal__nav-button image-modal__nav-button--right")}
                    onClick={(e) => {
                        onNext();
                        showControlsTemporarily();
                    }}
                    aria-label="Next image"
                >
                    ›
                </button>
            </div>
        </>
    );
}

export default ImageModal;
