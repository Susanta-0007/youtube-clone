import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEO_API } from "../utils/contants";
import VideoCard, { AddVideoCard } from "./VideoCard";
import Shimmer from "./Shimmer";
import SuscribeContainer from "./SuscribeContainer";
// import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    //  console.log(json.items);
    setVideos(json.items);
  };

  return videos.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex flex-wrap justify-center mt-2  w-full my-0 mx-auto ">
        {/* {videos[0] && <AddVideoCard info={videos[0]}/>} */}
        {videos.map((video) => (
          <Link to={"/watch?v=" + video.id} key={video.id} > <VideoCard key={video.id} info={video} /></Link>
        ))}

      </div>

    </>
  );
};

export default VideoContainer;