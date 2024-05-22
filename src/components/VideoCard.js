import React from "react";
import { shortenNumber } from "../utils/helper";
const VideoCard = ({ info }) => {

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  
  
  return (
    <div className="p-2 m-2  shadow-lg w-[312px] h-[300px] rounded-md max-md:w-[90%] max-md:h-[320px]">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <div>
        <div className="font-bold py-2">{title.substring(0, 60)} ....</div>
        <div className="flex">
          <img
            src={thumbnails.medium.url}
            className="h-10 w-10 rounded-full mr-5"
            alt="channelLogo"
          />
          <div className="flex flex-col h-10">
            <div className="font-semibold text-[20px]">{channelTitle}</div>
            <div className="font-semibold text-[15px]">{shortenNumber(statistics.viewCount)} views</div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export const AddVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-700">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
