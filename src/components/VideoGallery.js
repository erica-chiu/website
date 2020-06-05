import React from 'react';
import ImageGallery from 'react-image-gallery';

const youtubeURLPrefix = 'https://www.youtube.com/watch?v=';

function getEmbedLink(videoURL) {
    const videoID = videoURL.substring(youtubeURLPrefix.length);
    return (
        <iframe
            className="video-player"
            width="516"
            height="315"
            key={videoID}
            frameBorder={0}
            src={`https://www.youtube.com/embed/${videoID}`}
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    )
}

function VideoGallery(props) {
    return (
        <ImageGallery
            items={props.videos.map((item) => ({
                original: youtubeURLPrefix + item,
                thumbnail: 'https://img.youtube.com/vi/' + item + '/0.jpg'
            }))} 
            renderItem={(item) => {
                return getEmbedLink(item.original)
            }}
            lazyLoad={true}
            showFullscreenButton={false}
            showPlayButton={false}
        />
    )
}

export default VideoGallery;