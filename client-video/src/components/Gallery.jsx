import axios from 'axios';
import React, { useState } from 'react';
import Heading from './Heading';
import VideoListSection from './VideoListSection';
import VideoScreen from './VideoScreen';
const Gallery = () => {
    let [movieInScreen, setMovieInScreen] = useState({
        name: 'none',
        year: Date.now(),
        lang: 'english'
    });
    function onThumbClickMain(id) {
        const urlForScreenMovie = `http://localhost:5000/api/movies/one-movie/${id}`;
        axios.get(urlForScreenMovie)
            .then((movie) => {
                setMovieInScreen(movie.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <div className="galleryMain">
                <div className="galleryParent">
                    <div className="videoScreenMain">
                        <VideoScreen movie={movieInScreen}></VideoScreen>
                    </div>
                    <div className="videoList">
                        <VideoListSection onThumbClickGallery={onThumbClickMain}></VideoListSection>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Gallery;
