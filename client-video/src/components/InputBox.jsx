import React, { useState } from 'react';
import axios from "axios"
import CircularProgressWithLabel from "./SmallComponents/CircularProgressWithLabel"
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
    let [photo, setPhoto] = useState(null);
    function fileInputChange(e) {
        setPhoto(e.target.files[0]);
    }
    let [video, setVideo] = useState(null);
    function videoInputChange(e) {
        setVideo(e.target.files[0]);
    }

    let [uploadPercentage, setUploadPercentage] = useState(0);
    let [uploadStart, seetUploadStart] = useState(false);
    function submitMovie(e) {
        let finalDBData = {};
        // video form data
        seetUploadStart(true);
        let formdata = new FormData();
        formdata.append("file", video);
        formdata.append("upload_preset", "social-media");
        formdata.append("cloud_name", "asghadge");
        const options = {
            onUploadProgress: (progressEvent) => {
                const { loaded, total } = progressEvent;
                let percent = Math.floor((loaded * 100) / total)
                setUploadPercentage(percent);
            }
        }

        // image form data
        let formImage = new FormData();
        formImage.append("file", photo);
        formImage.append("upload_preset", "social-media");
        formImage.append("cloud_name", "asghadge");
        // // upload for image
        const urlUploadCloudPhoto = "https://api.cloudinary.com/v1_1/asghadge/image/upload";
        axios.post(urlUploadCloudPhoto, formImage)
            .then((res) => {
                console.log(res);
                finalDBData.thumbURL = res.data.url;
                // upload for video
                const urlUploadCloudVideo = "https://api.cloudinary.com/v1_1/asghadge/video/upload";
                axios.post(urlUploadCloudVideo, formdata, options)
                    .then(resVideo => {
                        console.log(resVideo);
                        finalDBData.videoURL = resVideo.data.url;

                        finalDBData.name = movieData.name;
                        finalDBData.lang = movieData.lang;
                        let yearMod = new Date(movieData.year);
                        finalDBData.year = yearMod;
                        const urlFinalDB = "http://localhost:5000/api/movies/add";
                        axios.post(urlFinalDB, finalDBData)
                            .then((dbRes) => {
                                console.log(dbRes);
                                seetUploadStart(false);
                            })
                            .catch((err) => {
                                console.log(err);
                                seetUploadStart(false);
                            })
                    })
                    .catch((err) => {
                        seetUploadStart(false);
                        console.log(err);
                    })
            })
            .catch((err) => {
                seetUploadStart(false);
                console.log(err);
            })

    }
    return (
        <>
            <form>
                <div className="inputBox">
                    <div>

                        <span className="inputText">Movie Name</span>
                        <input className="inputField" type="text" required id="name" onChange={inputChange} value={movieData.name}></input>
                        <br></br>
                        <span className="inputText" style={{ marginRight: "1.1rem" }}>Language</span>
                        <input className="inputField" type="text" required id="lang" onChange={inputChange} value={movieData.lang}></input>
                        <br></br>
                        <span className="inputText" style={{ marginRight: '3rem' }}>Year </span>
                        <input className="inputField" type="date" required id="year" onChange={inputChange} value={movieData.year}></input>
                        <br></br>
                        {/* thumbline */}
                        <br></br>
                        <span className="inputText" style={{ marginRight: "5rem" }}>Thumbline</span>
                        <label htmlFor="ProfilePic" className="uploadImage">
                            Upload
                        </label>
                        <input type="file" id="ProfilePic" className="uploadImageDisplayNone" onChange={fileInputChange} accept="image/*">
                        </input>
                        <span style={{ color: 'black' }}>{
                            photo == null ? "no file" : photo.name}</span>
                        <br></br>
                        {/* video */}
                        <br></br>
                        <span className="inputText" style={{ marginRight: "6.75rem" }}>Video </span>
                        <label htmlFor="videoFile" className="uploadImage">
                            Upload
                        </label>
                        <input type="file" id="videoFile" className="uploadImageDisplayNone" onChange={videoInputChange} accept="video/*">
                        </input>
                        <span style={{ color: 'black' }}>{
                            video == null ? "no file" : video.name
                        }</span>
                    </div>
                </div>
                <div className="buttonDiv">
                    {
                        uploadStart ? <CircularProgressWithLabel value={uploadPercentage}></CircularProgressWithLabel> :
                            <button type="submit" onClick={submitMovie} id="addMovie">Add Movie</button>
                    }
                </div>
            </form>
        </>
    );
}

export default InputBox;
