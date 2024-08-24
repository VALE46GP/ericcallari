import React, { useEffect, useState } from 'react';
import HeroFilter from '../components/HeroFilter';
import ImageGrid from '../components/ImageGrid';
import './Photo.sass';
import AWS from 'aws-sdk';

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
                // Check if the file is an image
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
    const [activeFilter, setActiveFilter] = useState('all');
    const filters = ['all', 'abstract', 'animals', 'automotive', 'landscape', 'music', 'other', 'portrait'];

    useEffect(() => {
        const fetchPhotos = async () => {
            let folders = filters.slice(1); // Exclude 'all'
            if (activeFilter !== 'all') {
                folders = [activeFilter];
            }
            const photos = await listPhotos(folders.map(folder => `gallery/${folder}`));
            const shuffledPhotos = shuffleArray(photos);
            setImageURLs(shuffledPhotos);
        };

        fetchPhotos();
    }, [activeFilter]); // Re-run effect when activeFilter changes

    return (
        <div className="photo">
            <HeroFilter
                activeFilter={activeFilter}
                filters={filters}
                onFilterSelect={setActiveFilter}
            />
            <ImageGrid imageURLs={imageURLs} />
        </div>
    );
}

export default Photo;