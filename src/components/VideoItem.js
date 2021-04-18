import React from "react";

const VideoItem = ({ video, _, onVideoSelect }) => {
  //   console.log(video);
  return (
    <div
      className="item"
      onClick={() => {
        onVideoSelect(video);
      }}
    >
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt="video"
      />
      <div className="content">
        <div className="header"> {video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
