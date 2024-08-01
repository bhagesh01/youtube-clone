import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {API_KEY, YOUTUBE_VIDEO_API} from "../constant/youtube"
import VideoCart from './VideoCart'
import { useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import { sidebarAtom, watchAtom } from '../utils/atoms';
import { Link } from 'react-router-dom';
import SkeletonVideoContainer from './SkeletonVideoContainer';



const VideoContainer = () => {
  const API_ENDPOINT = 'https://www.googleapis.com/youtube/v3/search';

  const sidebarToggle = useRecoilValue(sidebarAtom);
  const [loading,setLoading] = useState(false);

  const [video,setVideo] = useState([])
  const fetchingYoutubeVideo = async ()=>{
    try {
   setLoading(true);
  const res = await axios.get(YOUTUBE_VIDEO_API);
  console.log(res?.data?.items)



  // const response = await axios.get(API_ENDPOINT, {
  //   params: {
  //     key: API_KEY,
  //     part: 'snippet',
  //     q: 'coding', // Replace with your search query
  //     maxResults: 10, // Number of results to fetch
  //     type: 'video', // Restrict to videos only
  //   },
  // });


  setVideo(res?.data?.items);
  setLoading(false);
 } catch (error) {
  console.log(error);
  setLoading(false)
 }
  }
  useEffect(()=>{
    fetchingYoutubeVideo()
  },[])


  
  return (
    <div id='videoContainer' className={`w-[100%] h-[100%]  pl-3 pt-2 overflow-y-scroll`} 
    style={
      
      {
        display: "grid",
gridTemplateColumns: sidebarToggle ?  "repeat(3, 1fr)" : "repeat(4, 1fr)",
gridTemplateRows: "repeat(2, 1fr)",
gridColumnGap: "10px",
gridRowGap: "35px",
      }
    }
    >
      {
        loading ? (
          <SkeletonVideoContainer />
        ) : (
          video.map((item) => (
            <Link to={`/watch?v=${item.id}`} key={item.id}>
              <VideoCart item={item} />
            </Link>
          ))
        )
      }
    </div>
  )
}

export default VideoContainer;