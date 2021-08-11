import React, { useEffect, useState } from 'react';
import OneVideo from './OneVideo';
import axios from "axios"
const VideoListSection = (props) => {
    let [movieList, setMovieList] = useState([]);
    useEffect(() => {
        const urlGETMovies = "http://localhost:5000/api/movies/all";
        axios.get(urlGETMovies)
            .then((listM) => {
                console.log(listM.data);
                setMovieList(listM.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    function onThumbClickList(id) {
        props.onThumbClickGallery(id);
    }
    return (
        <>
            {
                movieList.length == 0 ? <h1>No movies</h1>
                    : movieList.map((val, i) => {
                        return <OneVideo name={val.name} thumbURL={val.thumbURL} videoURL={val.videoURL} id={val._id} lang={val.lang} year={val.year} onThumbClick={onThumbClickList}></OneVideo>
                    })
            }
        </>
    );
}

export default VideoListSection;
