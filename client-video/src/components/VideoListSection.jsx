import React, { useEffect, useState } from 'react';
import axios from "axios"
import Pagination from "./pagination/Pagination"
import OneVideo from './OneVideo';

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
            <Pagination
                RenderComponent={OneVideo}
                data={movieList}
                title={"Videos"}
                pageLimit={5}
                dataLimit={10}
                onThumbForPage={onThumbClickList}
            ></Pagination>
        </>
    );
}

export default VideoListSection;
