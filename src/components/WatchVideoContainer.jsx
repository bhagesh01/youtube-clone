import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {API_KEY, BASE_URL, YOUTUBE_VIDEO_API} from "../constant/youtube"
import VideoCart from './VideoCart'
import { useRecoilValue} from 'recoil';
import { sidebarAtom } from '../utils/atoms';
import { Link, useSearchParams } from 'react-router-dom';



const WatchVideoContainer = () => {

  const sidebarToggle = useRecoilValue(sidebarAtom);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');


  const [video,setVideo] = useState([])
  
//   const fetchingYoutubeVideo = async ()=>{
//  try {
//   // const res = await axios.get(YOUTUBE_VIDEO_API)
//   const res = await axios.get(YOUTUBE_VIDEO_API)



//   const response = await axios.get(API_ENDPOINT, {
//     params: {
//       key: API_KEY,
//       part: 'snippet',
//       q: 'coding', // Replace with your search query
//       maxResults: 10, // Number of results to fetch
//       type: 'video', // Restrict to videos only
//     },
//   });

//   console.log(response.data.items)




const buttonListArray = ["All", "Javascript", "Java", "Live", "Music", "Songs", "Vlogs", "Trending", "Programming", "News", "Technology", "Cricket", "Comedy", "Thriller", "Coding", "Computer Programming", "Netlify","basketball" , "Crime" , "Movie" , "AI" , "Masti","New to you"];












//   setVideo(res.data.items);
//  } catch (error) {
//   console.log(error)
//  }
//   }



const API_ENDPOINT = 'https://www.googleapis.com/youtube/v3/search';

const fetchingYoutubeVideo = async ()=>{
try {
const res = await axios.get(YOUTUBE_VIDEO_API)
console.log(res?.data?.items)



// const response = await axios.get(YOUTUBE_VIDEO_API, {
//   params: {
//     key: API_KEY,
//     part: 'snippet',
//     q: `${
//       buttonListArray[Math.random(0,(buttonListArray.length))]
//     }`, // Replace with your search query
//     maxResults: 20, // Number of results to fetch
//     type: 'video', // Restrict to videos only
//   },
// });


setVideo(res?.data?.items);
} catch (error) {
console.log(error)
}
}

// console.log(videoId?.videoCategories)

  useEffect(()=>{
    fetchingYoutubeVideo()
  },[])


  
  return (
    <div id='WatchVideoContainer' className='w-[fit] pl-3 pt-2 pr-4'>
      {
        video.map((item)=>{
          return (<Link to={`/watch?v=${item.id}`} key={item.id}>
            <VideoCart item={item} /> 
             </Link>)
        })
      }
    </div>
  )
}

export default WatchVideoContainer;