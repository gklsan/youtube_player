import React from 'react'

function VideoItem(props) {
    console.log(props.video)
    const {id, snippet} = props.video;
    return(

        <div>
            <p><strong>{snippet.title}</strong></p>
            <p>{snippet.channelTitle}</p>
            <p>{snippet.publishedAt}</p>
            <hr />
        </div>
    )
}

export default VideoItem
