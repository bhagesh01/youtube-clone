import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { IoMdMore } from "react-icons/io";
import { sidebarAtom, watchAtom } from "../utils/atoms";
import { useRecoilValue } from "recoil";
import moment from "moment";
// import axios from 'axios';

const VideoCart = ({ item }) => {
  const sidebarToggle = useRecoilValue(sidebarAtom);
  const [viewCounter , setViewCounter] = useState(0)

  function avatarName() {
    let channelTitleValue = item.snippet.channelTitle.split("");
    let avatarNameValue = channelTitleValue[0];
    return avatarNameValue;
  }

  useEffect(() => {
    if (item) {
      const viewCount = item?.statistics?.viewCount;
      const publishedAt  = item.snippet;

      setViewCounter(
        viewCount < 999
          ? viewCount
          : viewCount < 1000000
          ? `${(viewCount / 1000).toFixed(0)} K`
          : `${(viewCount / 1000000).toFixed(0)} M`
      );

     
    }
  }, [item]);






  return (
    <div
      className="cursor-pointer mb-4"
      style={{ width:(sidebarToggle ? "25vw" : "23.5vw") ,
        height:"45vh",
       }}
    >
      <div className="bg-center object-cover rounded-[10px] h-[70%] w-[100%]">
        <img
          src={`${item.snippet.thumbnails.high.url}`}
          alt="thumbnail......"
          className="bg-center object-cover rounded-[10px] h-[100%] w-[100%]"
        />
      </div>
      <div className="flex items-start justify-between">
        <div className="flex items-start justify-center gap-2 mt-2 overflow-hidden">
          <Avatar
            name={avatarName()}
            className="rounded-[50%] mt-1"
            size="40"
            src=""
          />
          <span className=" font-semibold text-white h-12 overflow-hidden">
            {item.snippet.description}
          </span>
        </div>
        <div className="text-xl text-white cursor-pointer mt-5 rounded-full hover:bg-[#222222] p-2">
          <IoMdMore />
        </div>
      </div>
      <div className="text-[15px] text-[#5f5f5f] pl-12 leading-[1.1rem] mt-[3px]">
        <span className="hover:text-[#999999]">
          {item.snippet.channelTitle}
        </span>
        <div className="flex items-center justify-start mt-1">
          <h3>{viewCounter}</h3> <span className="text-[#999999] px-3">|</span>{" "}
          <h3>{moment(`${item?.snippet?.publishedAt}`, 'YYYYMMDD').fromNow()}</h3>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default VideoCart;
