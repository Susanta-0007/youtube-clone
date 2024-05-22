import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import Comments from "./Comments";
// import Shimmer from "./Shimmer";
import SuscribeContainer from "./SuscribeContainer";
import { VIDEO_DETAILS_FROM_ID, getYtVideosApi } from "../utils/contants";
import { GET_COMMENTS_URL } from "../utils/contants";
import { RELATED_VIDEOS_URL } from "../utils/contants";
import Recomndation from "./Recomndation";
// import { YOUTUBE_VIDEO_API } from "../utils/contants";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard"
import RelatedVideoShimmer from "./RelatedVideoShimmer";
const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoID = searchParams.get("v");
  const [videoDetails, setVideoDetails] = useState([]);
  const [commentsData, setCommentsData] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    getVideoDetails();
    getComment();
    getRelatedVideos();
  }, [videoID]);

  const getComment = async () => {
    const data = await fetch(GET_COMMENTS_URL + videoID);
    const json = await data.json();
    setCommentsData(json.items);
  };
  const getRelatedVideos = async () => {
    const data = await fetch(getYtVideosApi);
    const json = await data.json();
    setRelatedVideos(json.items);
  };
  console.log(relatedVideos);
  const getVideoDetails = async () => {
    const data = await fetch(VIDEO_DETAILS_FROM_ID + videoID);
    const json = await data.json();
    setVideoDetails(json.items[0])
    // console.log(json.items);
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex w-[100%] max-md:flex-col mt-5">
      <div className="flex flex-col w-[70%] max-md:w-[100%] ">
        <div className="px-5">
          <iframe
            className="w-[100%] h-[500px] max-md:w-[100%] max-md:h-[200px]"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {/* <SuscribeContainer data={videoDetails} /> */}
        <Comments data={commentsData} />
      </div>
      <div className="w-[30%] max-md:w-[100%]">
        {relatedVideos.length == 0 ? <RelatedVideoShimmer /> :
          relatedVideos.map((item) => {
            return (
              <Link
                to={`/watch?v=${item.id}`}
                key={item.id}
                
              >
                <VideoCard info={item} />
              </Link>
            );
          })
        }


      </div>
    </div>

  );
};

export default WatchPage;
