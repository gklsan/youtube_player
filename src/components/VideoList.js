import React from 'react'
import VideoItem from "./VideoItem";

function VideoList(props) {

    const videoItems = props.videoList.map((item, idx) => {
        return <VideoItem key={idx} video={item} onVideoSelect={props.onVideoSelect} />
    });

    return(
        <div>
            { videoItems }
        </div>
    )
}

export default VideoList
