import React from 'react';
const VideoScreen = (props) => {
    // "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    // http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4
    // console.log(props);
    return (
        <>
            <div className="videoScreenMain">
                <video className="videoScreen" controls src={props.movie.videoURL}>
                </video>
                <div className="videoScreenMeta">
                    <h4 className="videoScreenTitle">{props.movie.name}</h4>
                    <h6 className="videoScreenDate">{props.movie.year}</h6>
                    <h6>Language : {props.movie.lang}</h6>
                </div>
            </div>
        </>
    );
}

export default VideoScreen;
