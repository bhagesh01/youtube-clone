import React, { useEffect, useState } from "react";
import { IoHome } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { LiaDownloadSolid } from "react-icons/lia";
import { useRecoilState, useRecoilValue } from "recoil";
import { sidebarAtom } from "../utils/atoms";
const sideBarItem = [
  {
    icon: <IoHome />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts />,
    title: "Shorts",
  },
  {
    icon: <MdOutlineWatchLater />,
    title: "Watch Later",
  },
  {
    icon: <AiOutlineLike />,
    title: "Liked Videos",
  },
  {
    icon: <LiaDownloadSolid />,
    title: "Downloads",
  },
  {
    icon: <IoHome />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts />,
    title: "Shorts",
  },
  {
    icon: <MdOutlineWatchLater />,
    title: "Watch Later",
  },
  {
    icon: <AiOutlineLike />,
    title: "Liked Videos",
  },
  {
    icon: <LiaDownloadSolid />,
    title: "Downloads",
  },
  {
    icon: <IoHome />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts />,
    title: "Shorts",
  },
  {
    icon: <MdOutlineWatchLater />,
    title: "Watch Later",
  },
  {
    icon: <AiOutlineLike />,
    title: "Liked Videos",
  },
  {
    icon: <LiaDownloadSolid />,
    title: "Downloads",
  },
  {
    icon: <IoHome />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts />,
    title: "Shorts",
  },
  {
    icon: <MdOutlineWatchLater />,
    title: "Watch Later",
  },
  {
    icon: <AiOutlineLike />,
    title: "Liked Videos",
  },
  {
    icon: <LiaDownloadSolid />,
    title: "Downloads",
  },
  {
    icon: <IoHome />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts />,
    title: "Shorts",
  },
  {
    icon: <MdOutlineWatchLater />,
    title: "Watch Later",
  },
  {
    icon: <AiOutlineLike />,
    title: "Liked Videos",
  },
  {
    icon: <LiaDownloadSolid />,
    title: "Downloads",
  },
  {
    icon: <IoHome />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts />,
    title: "Shorts",
  },
  {
    icon: <MdOutlineWatchLater />,
    title: "Watch Later",
  },
  {
    icon: <AiOutlineLike />,
    title: "Liked Videos",
  },
  {
    icon: <LiaDownloadSolid />,
    title: "Downloads",
  },
  {
    icon: <IoHome />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts />,
    title: "Shorts",
  },
  {
    icon: <MdOutlineWatchLater />,
    title: "Watch Later",
  },
  {
    icon: <AiOutlineLike />,
    title: "Liked Videos",
  },
  {
    icon: <LiaDownloadSolid />,
    title: "Downloads",
  },
  {
    icon: <IoHome />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts />,
    title: "Shorts",
  },
  {
    icon: <MdOutlineWatchLater />,
    title: "Watch Later",
  },
  {
    icon: <AiOutlineLike />,
    title: "Liked Videos",
  },
  {
    icon: <LiaDownloadSolid />,
    title: "Downloads",
  },
  {
    icon: <IoHome />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts />,
    title: "Shorts",
  },
  {
    icon: <MdOutlineWatchLater />,
    title: "Watch Later",
  },
  {
    icon: <AiOutlineLike />,
    title: "Liked Videos",
  },
  {
    icon: <LiaDownloadSolid />,
    title: "Downloads",
  },
  {
    icon: <IoHome />,
    title: "Home",
  },
  {
    icon: <SiYoutubeshorts />,
    title: "Shorts",
  },
  {
    icon: <MdOutlineWatchLater />,
    title: "Watch Later",
  },
  {
    icon: <AiOutlineLike />,
    title: "Liked Videos",
  },
  {
    icon: <LiaDownloadSolid />,
    title: "Downloads",
  },
];


const Sidebar = () => {
  const [sidebarToggle , setSidebarToggle] = useRecoilState(sidebarAtom);
  if (sidebarToggle == true) {
    console.log("it is open");
  }

  useEffect(()=>{
    const width = window.innerWidth;
    if(width < 1024){
      setSidebarToggle(false);
    }
  },[])

  return (
    <div
    className="h-[100%] border border-1 border-zinc-600 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100 hidden xl:flex w-0 md:w-[19%]"
    style={{
      width:sidebarToggle?"19%":"0",
      transition: "all 0.3s ease-in-out",
      position: "sticky",
      top: "100%",
    }}
    id="sideBar"
    >
      <div className="pt-3">
        {sideBarItem.map((value, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-left ml-5 gap-3 rounded-xl py-1 px-3 hover:bg-[#222222] cursor-pointer transition-all ease-in-out duration-300 w-fit m-2"
            >
              <h1 className="text-white text-lg">{value.icon}</h1>
              <h1 className="text-xl font-semibold text-white">
                {value.title}
              </h1>
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
};

export default Sidebar;
