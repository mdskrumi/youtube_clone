import React from "react";

import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const vl = videos.map((v) => {
    return <VideoItem video={v} key={v.etag} onVideoSelect={onVideoSelect} />;
  });
  return <div className="ui relaxed divided list">{vl}</div>;
};

export default VideoList;
