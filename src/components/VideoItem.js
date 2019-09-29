import React from 'react'

function VideoItem({video, onVideoSelect}) {
    const {snippet} = video;

    return(
        <div>
            <div
                className='d-flex'
                style={{cursor: 'pointer'}}
                onClick={(event) => {
                    event.preventDefault();
                    onVideoSelect(video)
                }}>
                <div className="mr-3" style={{ width: '6rem', alignSelf: 'center'}}>
                    <img src={snippet.thumbnails.medium.url} style={{width: '5rem'}} alt={snippet.title} />
                </div>
                <div>
                    <h4>{snippet.title}</h4>
                    <p>{snippet.channelTitle}</p>
                    <p>{snippet.publishedAt}</p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default VideoItem
