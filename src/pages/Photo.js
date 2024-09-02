import React, { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import HeroFilter from '../components/HeroFilter';
import ImageGrid from '../components/ImageGrid';
import './Photo.sass';
import AWS from 'aws-sdk';
import loadingIcon from '../assets/icons/loading.svg';

const s3 = new AWS.S3({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    region: process.env.REACT_APP_AWS_REGION,
});

const listPhotos = async (prefixes) => {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'];

    try {
        const photos = [];
        for (const prefix of prefixes) {
            const params = {
                Bucket: process.env.REACT_APP_AWS_S3_BUCKET_NAME,
                Prefix: `${prefix}/`,
            };

            const data = await s3.listObjectsV2(params).promise();
            data.Contents.forEach((item) => {
                if (imageExtensions.some(ext => item.Key.toLowerCase().endsWith(ext))) {
                    const encodedKey = encodeURIComponent(item.Key);
                    photos.push({
                        url: `https://${params.Bucket}.s3.${process.env.REACT_APP_AWS_REGION}.amazonaws.com/${encodedKey}`,
                        key: item.Key,
                    });
                }
            });
        }
        return photos;
    } catch (err) {
        console.error('Error fetching photos from S3', err);
        return [];
    }
};

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

function Photo() {
    const [imageURLs, setImageURLs] = useState([]);
    const [displayedImages, setDisplayedImages] = useState([]);
    const [activeFilter, setActiveFilter] = useState('all');
    const [loading, setLoading] = useState(false);
    const [allImagesLoaded, setAllImagesLoaded] = useState(false);
    const filters = useMemo(() => ['all', 'abstract', 'animals', 'automotive', 'landscape', 'music', 'other', 'portrait'], []);
    const sentinelRef = useRef(null);

    const imagesPerLoad = window.innerWidth <= 768 ? 10 : 20;

    useEffect(() => {
        const fetchPhotos = async () => {
            setAllImagesLoaded(false);
            let folders = filters.slice(1); // Exclude 'all'
            if (activeFilter !== 'all') {
                folders = [activeFilter];
            }
            const photos = await listPhotos(folders.map(folder => `gallery/${folder}`));
            const shuffledPhotos = shuffleArray(photos);
            setImageURLs(shuffledPhotos);
            setDisplayedImages(shuffledPhotos.slice(0, imagesPerLoad)); // Display only the first set of images initially
        };

        fetchPhotos();
    }, [activeFilter, filters, imagesPerLoad]);

    useEffect(() => {
        // Determine if all images are loaded
        if (displayedImages.length >= imageURLs.length) {
            setAllImagesLoaded(true);
        } else {
            setAllImagesLoaded(false);
        }
    }, [displayedImages.length, imageURLs.length]);

    const loadMoreImages = useCallback(() => {
        if (loading || allImagesLoaded) return;

        setLoading(true);
        setTimeout(() => {
            const newDisplayedImages = imageURLs.slice(displayedImages.length, displayedImages.length + imagesPerLoad);

            setDisplayedImages(prev => [
                ...prev,
                ...newDisplayedImages
            ]);

            setLoading(false);
        }, 1000);
    }, [imageURLs, displayedImages.length, loading, imagesPerLoad, allImagesLoaded]);

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
                onFilterSelect={setActiveFilter}
            />
            <ImageGrid imageURLs={displayedImages} />
            {loading && (
                <div className="photo__loading-spinner">
                    <img src={loadingIcon} alt="Loading..." />
                </div>
            )}
            {!allImagesLoaded && (
                <div ref={sentinelRef} style={{ height: '1px' }}></div>
            )}
        </div>
    );
}

export default Photo;
