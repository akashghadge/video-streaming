import { PromiseProvider } from 'mongoose';
import React from 'react';
import logo from "./logo512.png"
import moment from "moment"
const OneVideo = (props) => {
    console.log(props);
    return (
        <>
            <div className="oneVideo">
                <img src={props.data.thumbURL} className="oneVideoThumb" style={{ cursor: "pointer" }} onClick={() => { props.onThumbClickOneVideo(props.data._id) }}></img>
                <div className="oneVideoMeta">
                    <h4 className="oneVideoTitle">{props.data.name}</h4>
                    <h6 className="oneVideoDate">{moment(props.data.year).format("MMMM Do YYYY")}</h6>
                    <h6>Language : {props.data.lang}</h6>
                </div>
            </div>
        </>
    );
}

export default OneVideo;
