import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return (
    // <VideoItem />
    // <div>{videos.length}</div>
    <div className="ui relaxed divided list">{renderedList}</div>
  );
}

export default VideoList;
