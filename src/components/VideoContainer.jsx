import axios from 'axios';
import React, { useEffect, useState } from 'react';
import VideoCart from './VideoCart';
import { useRecoilValue } from 'recoil';
import { sidebarAtom } from '../utils/atoms';
import { Link } from 'react-router-dom';
import SkeletonVideoContainer from './SkeletonVideoContainer';

const VideoContainer = () => {
  const sidebarToggle = useRecoilValue(sidebarAtom);
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState([]);

  const fetchingYoutubeVideo = async () => {
    try {
      setLoading(true);
      const apiKey = import.meta.env.VITE_API_KEY;
      const baseUrl = import.meta.env.VITE_BASE_URL;
      const youtubeVideoApi = `${baseUrl}/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${apiKey}`;

      const res = await axios.get(youtubeVideoApi);
      console.log(res?.data?.items);

      setVideo(res?.data?.items || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching YouTube video data:", error);
      setVideo([]); // Ensure `video` is an empty array on error
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchingYoutubeVideo();
  }, []);

  return (
    <div
      id='videoContainer'
      className={`w-[100%] h-[100%] pl-3 pt-2 overflow-y-scroll`}
      style={{
        display: 'grid',
        gridTemplateColumns: sidebarToggle ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        gridColumnGap: '10px',
        gridRowGap: '35px',
      }}
    >
      {loading ? (
        <SkeletonVideoContainer />
      ) : video.length > 0 ? (
        video.map((item) => (
          <Link to={`/watch?v=${item.id}`} key={item.id}>
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
