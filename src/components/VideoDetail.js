import React from 'react'

function VideoDetail({video}) {
    // console.log(props.video && props.video.snippet.title)
    // const videoId = props.video !== undefined ? props.video.id.videoId : 'gZiFyWOZLq4'
    // console.log(video)
    return(
        video && video.id.videoId ?
            <div className="">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                        className="embed-responsive-item"
                        src={`https://www.youtube.com/embed/${video.id.videoId}`}
                        allowFullScreen
                        title={video.snippet.title}
                    >

                    </iframe>
                </div>
                <h5 className="mt-4">{video.snippet.title}</h5>
                <hr />
                <p>{video.snippet.description}</p>
                <p>{video && (Date(video.snippet.publishedAt))}</p>
            </div>
            : <p>No videos</p>
    )
}

export default VideoDetail
