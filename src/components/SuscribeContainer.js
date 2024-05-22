import React, { useEffect, useState } from "react";
import { shortenNumber } from "../utils/helper";


const SuscribeContainer = ({ data }) => {
  const { snippet, statistics } = data;
  const { channelTitle, title, thumbnails } = snippet;
  console.log(data);

  return (
    <div className="h-[120px] m-2 rounded-lg w-[98%] max-md:w-[95%] max-md:h-[150px]" >
      <div className="text-[20px] font-semibold pl-[20px] pt-2 max-md:pl-[2px]">{title}</div>
      <div className="font-semibold pl-[20px] pb-2">{shortenNumber(statistics.viewCount)} views</div>
      <div className="flex pl-[20px] gap-[50px] max-md:gap-[5px] max-md:pl-[2px] max-md:mt-2">
        <div>
          <img className="h-[40px] w-[40px] rounded-[50%] border-1 border-dotted border-black " src={thumbnails.medium.url} />
        </div>
        <div className=" flex max-md:w-[200px]">
          <p className="font-semibold text-[20px]  "> {channelTitle}</p>

          <img className="h-[25px] w-[25px]" src="https://cdn-icons-png.flaticon.com/128/8975/8975997.png" />
          {/* <p className="border-2 border-black border-solid h-[30px] w-[80px] text-center rounded-lg bg-black text-white font-semibold ml-5">Suscribe</p> */}
        </div>
        <div className="flex gap-2">
          <img className="h-[20px] w-[20px] cursor-pointer" src="https://cdn-icons-png.flaticon.com/128/126/126473.png" />
          <p className="font-semibold ">{shortenNumber(statistics.likeCount)} </p>
        </div>
        <div className="flex ">
          <img className="h-[20px] w-[20px] cursor-pointer" src="https://cdn-icons-png.flaticon.com/128/2958/2958791.png" />

        </div>

      </div>

    </div>
  );
};

export default SuscribeContainer;
