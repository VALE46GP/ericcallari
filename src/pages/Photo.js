import React from 'react';
import ImageGrid from '../components/ImageGrid';
import './Photo.sass';
import AWS from 'aws-sdk';

const s3 = new AWS.S3({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    region: process.env.REACT_APP_AWS_REGION,
});

const listPhotos = async (folderName) => {
    const params = {
        Bucket: process.env.REACT_APP_AWS_S3_BUCKET_NAME,
        Prefix: `${folderName}/`,
    };

    console.log('bucket name = ', process.env.REACT_APP_AWS_S3_BUCKET_NAME)

    try {
        const data = await s3.listObjectsV2(params).promise();
        const photos = data.Contents.map((item) => ({
            url: `https://${params.Bucket}.s3.${process.env.REACT_APP_AWS_REGION}.amazonaws.com/${item.Key}`,
            key: item.Key,
        }));
        return photos;
    } catch (err) {
        console.error("Error fetching photos from S3", err);
        return [];
    }
};

const displayPhotos = async () => {
    const photos = await listPhotos('gallery/abstract');
    console.log('>>>>>>>>>>> listPhotos = ', photos);
};

displayPhotos();

function Photo() {
    const imageURLs = [
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
        'https://template-riptide.s3.us-west-1.amazonaws.com/placeholder-whale.jpg',
    ];

    return (
        <div className="photo">
            <ImageGrid imageURLs={imageURLs} />
        </div>
    );
}

export default Photo;
