import React from 'react'

function VideoDetail(props) {
    const videoId = props.video !== undefined ? props.video.id.videoId : 'gZiFyWOZLq4'
    return(
        videoId ?
            <div className="">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={"https://www.youtube.com/embed/" + videoId} allowFullScreen></iframe>
                </div>
            </div>
            : <p>No videos</p>
    )
}

export default VideoDetail
