import React from 'react';
const VideoScreen = () => {
    // "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    // http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4
    return (
        <>
            <video className="videoScreen" controls src="./video/test.mp4">
            </video>
        </>
    );
}

export default VideoScreen;
