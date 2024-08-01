import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardVoice } from "react-icons/md";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useSetRecoilState } from "recoil";
import { sidebarAtom } from "../utils/atoms";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const setSidebarToggle = useSetRecoilState(sidebarAtom);

  const [inputValue, setInputValue] = useState("");
  return (
    <div
      id="navbar"
      className="navbar h-16 w-[100%] flex items-center justify-between px-3 pt-5 py-3 sticky top-0 mb-3 bg-[#0F0F0F]"
    >
      <div
        id="left-navbar"
        className="flex items-center justify-center w-[20%] h-[100%]"
      >
        <div
          className="text-xl border border-transparent rounded-full cursor-pointer hover:bg-[#222222] text-white p-2 transition duration-450 ease-in-out"
          onClick={() => {
            setSidebarToggle((prev) => !prev);
          }}
        >
          <RxHamburgerMenu />
        </div>
          <a href="/">
          <img
          src="../public/images/YoutubeLogoDark.png"
          alt="youtubeLogoDark"
          className="h-10 w-70 cursor-pointer"
        /></a>
      </div>
      <div
        id="middle-navbar"
        className="w-[50%] flex items-center justify-center gap-4"
      >
        <div className="flex items-center justify-center bg-[#222222] border border-1 rounded-3xl px-3 py-2 border-transparent">
          <div className="flex items-center justify-center">
            <input
              type="text"
              placeholder="Search here..."
              value = {inputValue}
              className="outline-none bg-transparent w-96 text-white pl-3 pr-3"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            {!inputValue.length > 0 ? (
              <div className="mr-3 p-1"></div>
            ) : (
              <div
                className="mr-3 p-1 text-xl text-white rounded-full hover:bg-slate-500 cursor-pointer"
                onClick={() => {
                  setInputValue("");
                }}
              >
                <RxCross2 />
              </div>
            )}
          </div>
          <div className="text-white text-2xl border border-l-1 border-r-0 border-y-0 pl-3 cursor-pointer">
            <IoSearchOutline />
          </div>
        </div>
        <div className="text-white cursor-pointer p-2 border border-transparent hover:bg-[#222222] transition-all ease-linear rounded-full text-2xl">
          <MdKeyboardVoice />
        </div>
      </div>
      <div
        id="right-navbar "
        className="w-[20%] flex items-center justify-center gap-10 "
      >
        <div className="text-2xl text-white cursor-pointer">
          <RiVideoAddLine />
        </div>
        <div className="text-2xl text-white cursor-pointer">
          <IoMdNotifications />
        </div>
        <Avatar name="B" className="rounded-[50%] cursor-pointer" size="40" textSizeRatio={2}/>
      </div>
    </div>
  );
};

export default Navbar;
