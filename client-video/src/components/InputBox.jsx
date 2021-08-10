import { func } from 'prop-types';
import React, { useState } from 'react';

const InputBox = () => {
    let [movieData, setMovieData] = useState("");
    function inputChange(event) {
        const { id, value } = event.target
        // console.log(id, value);
        setMovieData((prev) => {
            return {
                ...prev,
                [id]: value
            }
        })
    }
    let [photo, setPhoto] = useState({ name: "no file selected" });
    console.log(photo);
    function fileInputChange(e) {
        setPhoto(e.target.files[0]);
    }
    let [video, setVideo] = useState({ name: "no file selected" });
    function videoInputChange(e) {
        setVideo(e.target.files[0]);
    }
    function submitMovie(e) {
        
    }
    return (
        <>
            <div className="inputBox">
                <form>
                    <span className="inputText">Movie Name :</span>
                    <input className="inputField" type="text" required id="name" onChange={inputChange} value={movieData.name}></input>
                    <br></br>
                    <span className="inputText">Description :</span>
                    <input className="inputField" type="text" required id="desc" onChange={inputChange} value={movieData.desc}></input>
                    <br></br>
                    {/* thumbline */}
                    <span className="inputText">Thumbline :</span>
                    <label htmlFor="ProfilePic" class="uploadImage">
                        Upload
                    </label>
                    <input type="file" id="ProfilePic" className="uploadImageDisplayNone" onChange={fileInputChange} accept="image/*">
                    </input>
                    <span style={{ color: 'white' }}>{photo.name}</span>
                    <br></br>
                    {/* video */}
                    <span className="inputText">Video :</span>
                    <label htmlFor="videoFile" class="uploadImage">
                        Upload
                    </label>
                    <input type="file" id="videoFile" className="uploadImageDisplayNone" onChange={videoInputChange} accept="video/*">
                    </input>
                    <span style={{ color: 'white' }}>{video.name}</span>
                    <div className="buttonDiv">
                        <button type="submit" onClick={submitMovie} id="addMovie">Add Movie</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default InputBox;
