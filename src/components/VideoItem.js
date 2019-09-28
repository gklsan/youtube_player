import React from 'react'

function VideoItem(props) {
    const {id, snippet} = props.video;

    return(
        <div>
            <div className='d-flex'>
                <div className="mr-3" style={{ width: '6rem', alignSelf: 'center'}}>
                    <img src={snippet.thumbnails.medium.url} style={{width: '5rem'}} />
                </div>
                <div>
                    <a href=''
                       data-etag={props.video.etag}
                       onClick={(event) => {
                           event.preventDefault();
                           props.onVideoSelect(props.video)
                       }}
                    >
                        {snippet.title}
                    </a>
                    <p>{snippet.channelTitle}</p>
                    <p>{snippet.publishedAt}</p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default VideoItem
