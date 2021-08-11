import { PromiseProvider } from 'mongoose';
import React from 'react';
import logo from "./logo512.png"
import moment from "moment"
const OneVideo = (props) => {
    return (
        <>
            <div className="oneVideo">
                <img src={props.thumbURL} className="oneVideoThumb" style={{ cursor: "pointer" }} onClick={() => { props.onThumbClick(props.id) }}></img>
                <div className="oneVideoMeta">
                    <h4 className="oneVideoTitle">{props.name}</h4>
                    <h6 className="oneVideoDate">{moment(props.year).format("MMMM Do YYYY")}</h6>
                    <h6>Language : {props.lang}</h6>
                </div>
            </div>
        </>
    );
}

export default OneVideo;
