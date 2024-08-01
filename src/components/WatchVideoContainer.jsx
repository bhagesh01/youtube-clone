import axios from 'axios'
import React, { useEffect, useState } from 'react';

import VideoCart from './VideoCart'
import { useRecoilValue} from 'recoil';
import { sidebarAtom } from '../utils/atoms';
import { Link, useSearchParams } from 'react-router-dom';



const WatchVideoContainer = () => {

  const sidebarToggle = useRecoilValue(sidebarAtom);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');


  const [video,setVideo] = useState([]);




const buttonListArray = ["All", "Javascript", "Java", "Live", "Music", "Songs", "Vlogs", "Trending", "Programming", "News", "Technology", "Cricket", "Comedy", "Thriller", "Coding", "Computer Programming", "Netlify","basketball" , "Crime" , "Movie" , "AI" , "Masti","New to you"];


const fetchingYoutubeVideo = async ()=>{
try {
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const youtubeVideoApi = `${baseUrl}/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${apiKey}`;

  const res = await axios.get(youtubeVideoApi);
console.log(res?.data?.items);


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