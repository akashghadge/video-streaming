import React from 'react';
import Heading from './Heading';
import VideoListSection from './VideoListSection';
import VideoScreen from './VideoScreen';

const Gallery = () => {
    return (
        <>
            <Heading text="Movies"></Heading>
            <div className="galleryMain">
                <div className="galleryParent">
                    <div className="videoScreen">
                        <VideoScreen></VideoScreen>
                    </div>
                    <div className="videoList">
                        <VideoListSection></VideoListSection>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Gallery;
