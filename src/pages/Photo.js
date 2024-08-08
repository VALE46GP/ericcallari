import React from 'react';
import ImageGrid from '../components/ImageGrid';
import './Photo.sass';

function Photo() {
    const imageURLs = [
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        // Add more image URLs here
    ];

    return (
        <div className="photo">
            <ImageGrid imageURLs={imageURLs} />
        </div>
    );
}

export default Photo;
