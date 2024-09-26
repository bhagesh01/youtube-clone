import axios from 'axios';
import React, { useEffect, useState } from 'react';
import VideoCart from './VideoCart';
import { useRecoilState, useRecoilValue } from 'recoil';
import { categoryState, sidebarAtom, videoState } from '../utils/atoms';
import SkeletonVideoContainer from './SkeletonVideoContainer';

const VideoContainer = () => {
  const sidebarToggle = useRecoilValue(sidebarAtom);
  const [loading, setLoading] = useState(true);
  const [video, setVideo] = useRecoilState(videoState);
  const [category] = useRecoilState(categoryState); 

  const fetchingYoutubeVideo = async () => {
    try {
      setLoading(true);
      const apiKey = import.meta.env.VITE_API_KEY;
      const baseUrl = import.meta.env.VITE_BASE_URL;
      const youtubeVideoApi = `${baseUrl}/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${apiKey}`;

      const res = await axios.get(youtubeVideoApi);
      console.log(res?.data?.items);

      setVideo(res?.data?.items || []);
    } catch (error) {
      console.error("Error fetching YouTube video data:", error);
      setVideo([]);
    } finally {
      setLoading(false);
    }
  };


  const fetchVideoByCategory = async () => {
    try {
      setLoading(true);
      const apiKey = import.meta.env.VITE_API_KEY;
      const baseUrl = import.meta.env.VITE_BASE_URL;
      const youtubeVideoByCategoryApi = `${baseUrl}/search?part=snippet&maxResults=50&q=${encodeURIComponent(category)}&type=video&key=${apiKey}`;

      const res = await axios.get(youtubeVideoByCategoryApi);
      console.log(res?.data?.items);
      setVideo(res?.data?.items || []);
    } catch (error) {
      console.error("Error fetching YouTube video data by category:", error);
      setVideo([]);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    if (category) {
      fetchVideoByCategory();
    } else {
      fetchingYoutubeVideo();
    }
  }, [category]);

  return (
    <div
      id='videoContainer'
      className={`w-full h-full pl-3 pt-2 overflow-y-scroll ${sidebarToggle ? 'grid grid-cols-3' : 'grid grid-cols-4'}`}
    >
      {loading ? (
        <SkeletonVideoContainer />
      ) : video.length > 0 ? (
        video.map((item) => (
          <Link 
            to={`/watch?v=${typeof item.id === 'object' ? item.id.videoId : item.id}`} 
            key={typeof item.id === 'object' ? item.id.videoId : item.id}
          >
            <VideoCart item={item} />
          </Link>
        ))
      ) : (
        <p>No videos found.</p>
      )}
    </div>
  );
};

export default VideoContainer;
