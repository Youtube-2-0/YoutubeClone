import React from "react";
import './Video.css';
import PlayVideo from "./PlayVideo";
import { useParams } from "react-router-dom";

const Video = () => {

    const {videoId, categoryId} = useParams();
    return (
        <div className="play-container">
            <PlayVideo videoId={videoId}/>
        </div>
    )
}

export default Video