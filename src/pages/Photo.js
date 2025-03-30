import React, { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import HeroFilter from '../components/HeroFilter';
import ImageGrid from '../components/ImageGrid';
import './Photo.sass';
import loadingIcon from '../assets/icons/loading.svg';

// API endpoint for the gallery Lambda function
const API_ENDPOINT = 'https://2ksoxzg4ni.execute-api.us-west-1.amazonaws.com/prod/images';

// Helper function to shuffle an array using Fisher-Yates algorithm
const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

function Photo() {
    const [imageURLs, setImageURLs] = useState([]);
    const [displayedImages, setDisplayedImages] = useState([]);
    const [activeFilter, setActiveFilter] = useState('all');
    const [loading, setLoading] = useState(false);
    const [initialLoading, setInitialLoading] = useState(true);
    const [allImagesLoaded, setAllImagesLoaded] = useState(false);
    const [error, setError] = useState(null);

    const filters = useMemo(() => ['all', 'abstract', 'animals', 'automotive', 'landscape', 'music', 'other', 'portrait'], []);
    const sentinelRef = useRef(null);

    const imagesPerLoad = window.innerWidth <= 768 ? 10 : 20;

    // Function to fetch photos from the Lambda API
    const fetchPhotos = useCallback(async (category) => {
        setError(null);
        setInitialLoading(true);

        try {
            // Build the API URL with the category parameter
            const apiUrl = `${API_ENDPOINT}?category=${encodeURIComponent(category)}`;

            // Fetch data from the API
            const response = await fetch(apiUrl);

            if (!response.ok) {
                console.error(`API request failed with status ${response.status}`);
                setError(`API request failed with status ${response.status}`);
                setImageURLs([]);
                setDisplayedImages([]);
                return; // Exit early
            }

            // Parse the response
            const data = await response.json();

            // Handle different response formats
            let photos = [];
            if (data && Array.isArray(data)) {
                // Direct array response
                photos = data;
            } else if (data && data.body) {
                // Response might include a body property with the data
                // Check if it's a string that needs parsing
                const bodyData = typeof data.body === 'string' ? JSON.parse(data.body) : data.body;
                photos = Array.isArray(bodyData) ? bodyData : [];
            }

            // Randomize the order of photos
            const shuffledPhotos = shuffleArray(photos);

            // Set the images state
            setImageURLs(shuffledPhotos);
            setDisplayedImages(shuffledPhotos.slice(0, imagesPerLoad));
            setAllImagesLoaded(shuffledPhotos.length <= imagesPerLoad);
        } catch (err) {
            console.error('Error fetching photos from API', err);
            setError('Failed to load images. Please try again later.');
            setImageURLs([]);
            setDisplayedImages([]);
        } finally {
            setInitialLoading(false);
        }
    }, [imagesPerLoad]);

    // Randomize images when clicking the same category again
    const handleFilterSelect = useCallback((category) => {
        if (category === activeFilter) {
            // If selecting the same category, just reshuffle the existing images
            const shuffledPhotos = shuffleArray(imageURLs);
            setImageURLs(shuffledPhotos);
            setDisplayedImages(shuffledPhotos.slice(0, imagesPerLoad));
            setAllImagesLoaded(shuffledPhotos.length <= imagesPerLoad);
        } else {
            // If selecting a different category, fetch new images
            setActiveFilter(category);
        }
    }, [activeFilter, imageURLs, imagesPerLoad, fetchPhotos]);

    // Fetch photos when filter changes
    useEffect(() => {
        fetchPhotos(activeFilter);
    }, [activeFilter, fetchPhotos]);

    // Monitor if all images are loaded
    useEffect(() => {
        if (displayedImages.length >= imageURLs.length) {
            setAllImagesLoaded(true);
        } else {
            setAllImagesLoaded(false);
        }
    }, [displayedImages.length, imageURLs.length]);

    // Function to load more images
    const loadMoreImages = useCallback(() => {
        if (loading || allImagesLoaded) return;

        setLoading(true);
        setTimeout(() => {
            const newDisplayedImages = imageURLs.slice(
                displayedImages.length,
                displayedImages.length + imagesPerLoad
            );

            setDisplayedImages(prev => [
                ...prev,
                ...newDisplayedImages
            ]);

            setLoading(false);
        }, 300); // Reduced the timeout for better user experience
    }, [imageURLs, displayedImages.length, loading, imagesPerLoad, allImagesLoaded]);

    // Intersection observer for infinite scrolling
    useEffect(() => {
        const handleScroll = () => {
            if (!sentinelRef.current || allImagesLoaded) return;

            const rect = sentinelRef.current.getBoundingClientRect();
            if (rect.top <= window.innerHeight) {
                loadMoreImages();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [loadMoreImages, allImagesLoaded]);

    return (
        <div className="photo">
            <HeroFilter
                activeFilter={activeFilter}
                filters={filters}
                onFilterSelect={handleFilterSelect}
            />

            {initialLoading ? (
                <div className="photo__initial-loading">
                    <img src={loadingIcon} alt="Loading..." className="photo__spinning-icon" />
                    <p>Loading gallery...</p>
                </div>
            ) : error ? (
                <div className="photo__error">
                    <p>{error}</p>
                    <button onClick={() => fetchPhotos(activeFilter)}>Try Again</button>
                </div>
            ) : (
                <>
                    <ImageGrid imageURLs={displayedImages} />

                    {loading && (
                        <div className="photo__loading-spinner">
                            <img src={loadingIcon} alt="Loading..." className="photo__spinning-icon" />
                        </div>
                    )}

                    {!allImagesLoaded && (
                        <div ref={sentinelRef} style={{ height: '1px' }}></div>
                    )}

                    {displayedImages.length === 0 && !loading && (
                        <div className="photo__no-images">
                            <p>No images found in this category.</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default Photo;
