import axios from 'axios'
import React, { useEffect, useState } from 'react';

import VideoCart from './VideoCart'
import { useRecoilValue, useSetRecoilState} from 'recoil';
import { messageState, messageUpdater, sidebarAtom } from '../utils/atoms';
import { Link, useSearchParams } from 'react-router-dom';
import { BsThreeDotsVertical } from 'react-icons/bs';
import LiveChat from './LiveChat';
import Avatar from 'react-avatar';
import { LuSendHorizonal } from 'react-icons/lu';



const WatchVideoContainer = () => {

  const sidebarToggle = useRecoilValue(sidebarAtom);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');
  const [input, setInput] = useState("");


  const [video,setVideo] = useState([]);




const buttonListArray = ["All", "Javascript", "Java", "Live", "Music", "Songs", "Vlogs", "Trending", "Programming", "News", "Technology", "Cricket", "Comedy", "Thriller", "Coding", "Computer Programming", "Netlify","basketball" , "Crime" , "Movie" , "AI" , "Masti","New to you"];


const messages = useRecoilValue(messageState);
  const updateMessage = useSetRecoilState(messageUpdater);





const fetchingYoutubeVideo = async ()=>{
try {
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const youtubeVideoApi = `${baseUrl}/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${apiKey}`;

  const res = await axios.get(youtubeVideoApi);
// console.log(res?.data?.items);


setVideo(res?.data?.items);
} catch (error) {
console.log(error)
}
}


  useEffect(()=>{
    fetchingYoutubeVideo()
  },[])


  const sendMessage = () => {
    if (input.trim() !== "") {
      updateMessage({ name: "Patel", message: input });
      setInput("");
    }
  };

  
  return (
    <div id='WatchVideoContainer' className='w-[fit] pl-3 pt-2 pr-4'>
       <div className='w-[100%] border border-gray-300 rounded-lg h-fit p-4'>
                    <div className='flex justify-between items-center'>
                        <h1>Top Chat</h1>
                        <BsThreeDotsVertical />
                    </div>
                    <div id='sideBar' className='overflow-y-auto h-[28rem] flex flex-col-reverse'>
                        <LiveChat />
                    </div>

                    <div className='flex items-center justify-between border-t pt-4'>
                        <div className='flex items-center w-[90%]'>
                            <div>
                                <Avatar src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" size={35} round={true} />
                            </div>
                            <input value={input} onChange={(e) => setInput(e.target.value)} className='w-[20vw] border-b border-gray-300 outline-none ml-2 py-1 pl-2 rounded-xl' type="text" placeholder='Send message...' />
                            <div className='bg-gray-200 cursor-pointer p-2 ml-4 rounded-full'>
                                <LuSendHorizonal onClick={sendMessage} />
                            </div>
                        </div>
                    </div>
                </div>
      {
        video.map((item)=>{
          return (<>
         <div>
          <Link to={`/watch?v=${item.id}`} key={item.id}>
            <VideoCart item={item} /> 
             </Link>
          </div>
          </>)
        })
      }
    </div>
  )
}

export default WatchVideoContainer;