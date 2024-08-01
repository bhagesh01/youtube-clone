import React, { useEffect, useState } from 'react';
import Avatar from 'react-avatar';
import { useSearchParams } from 'react-router-dom';
import WatchVideoContainer from './WatchVideoContainer';
import { sidebarAtom } from '../utils/atoms';
import { useRecoilValue } from 'recoil';

import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import { BiDislike, BiSolidDislike } from 'react-icons/bi';
import axios from 'axios';
import { API_KEY } from '../constant/youtube';
import moment from 'moment';
import WatchSkeleton from './WatchSkeleton';

const Watch = () => {
  const [singleVideo, setSingleVideo] = useState(null);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');

  const [showLess, setShowLess] = useState(false);
  const [videoDescription, setVideoDescription] = useState('');

  const [likeCounter, setLikeCounter] = useState(100);
  const [unLikeCounter, setUnLikeCounter] = useState(0);

  const [likeColorChange, setLikeColorChange] = useState(false);
  const [unLikeColorChange, setUnLikeColorChange] = useState(false);

  const [videoTitle, setVideoTitle] = useState('');



  const [loading,setLoading] = useState(false);

  const getSingleVideo = async () => {
    try {
      setLoading(true)
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );
      setSingleVideo(res.data.items[0]);
      setLoading(false)
    } catch (error) {
      console.error(error);
      setLoading(false)
    }
  };

  useEffect(() => {
    getSingleVideo();
  }, [videoId]);

  useEffect(() => {
    if (singleVideo) {
      const { likeCount, viewCount } = singleVideo.statistics;
      const { title, description, publishedAt } = singleVideo.snippet;

      setLikeCounter(
        likeCount < 999
          ? likeCount
          : likeCount < 1000000
          ? `${(likeCount / 1000).toFixed(0)} K`
          : `${(likeCount / 1000000).toFixed(0)} M`
      );

      setVideoTitle(title.length > 69 ? `${title.slice(0, 65)} ....` : title);

      setVideoDescription(
        showLess ? description : description.slice(0, 100) + ' ....'
      );

      setVideoTitle(
        title.length > 69 ? `${title.slice(0, 65)} ....` : title
      );

      setVideoDescription(
        description.length > 100 && !showLess
          ? `${description.slice(0, 100)} ....`
          : description
      );
    }
  }, [singleVideo, showLess]);

  const sidebarToggle = useRecoilValue(sidebarAtom);

  return (
    !loading ? (<div className='flex justify-between h-[100%] w-[100%]'>
      <div
        id='videShowingDiv'
        className='h-[100%] pb-3 pt-4  pl-16 no-scrollbar overflow-y-scroll'
        style={{
          paddingLeft: sidebarToggle ? '1rem' : '4rem',
          width: !sidebarToggle ? '73%' : '67%',
        }}
      >
        <iframe
          width={sidebarToggle ? '780' : '1000'}
          height={sidebarToggle ? '425' : '475'}
          className='pl-3'
          src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        ></iframe>
        <div
          className='text-2xl text-white font-semibold ml-3 overflow-hidden mt-1 '
          style={{
            width: sidebarToggle ? '768px' : '990px',
            height: '5vh',
          }}
        >
          <h1>{videoTitle}</h1>
        </div>

        <div className='flex mt-2 items-center justify-between px-3'>
          <div className='flex items-center justify-center'>
            <Avatar
              name={singleVideo?.snippet?.channelTitle.charAt(0)}
              className='rounded-[50%] mt-1 text-3xl'
              size='50'
              src=''
            />
            <div className='leading-4 ml-2'>
              <h1 className='text-2xl font-bold mb-1 text-white'>
                {singleVideo?.snippet?.channelTitle}
              </h1>
              <h2 className='text-[#5f5f5f]'>{`${singleVideo?.snippet?.channelId?.subscribersCount}  subscribers`}</h2>
            </div>
            <div className='text-black text-lg rounded-full py-1 px-6 bg-white flex items-center justify-center ml-4 cursor-pointer'>
              subscribe
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <div
              id='lik-dislike-section'
              className=' flex rounded-full px-2 py-1 bg-[#222222] mr-4'
            >
              <div className='flex items-center justify-center gap-1 border border-transparent border-r-white px-2 text-white text-lg cursor-pointer'>
                {likeColorChange ? (
                  <AiFillLike
                    className='text-2xl'
                    onClick={() => setLikeColorChange((prev) => !prev)}
                  />
                ) : (
                  <AiOutlineLike
                    className='text-2xl'
                    onClick={() => {
                      setLikeColorChange((prev) => !prev);
                      if (unLikeColorChange) {
                        setUnLikeColorChange((prev) => !prev);
                        setUnLikeCounter((prev) => prev - 1);
                      }
                    }}
                  />
                )}
                <h1>{likeCounter}</h1>
              </div>

              <div className='flex items-center justify-center gap-1 px-2 text-white text-lg cursor-pointer'>
                {unLikeColorChange ? (
                  <BiSolidDislike
                    className='text-2xl'
                    onClick={() => {
                      setUnLikeCounter((prev) => prev - 1);
                      setUnLikeColorChange((prev) => !prev);
                    }}
                  />
                ) : (
                  <BiDislike
                    className='text-2xl'
                    onClick={() => {
                      setUnLikeCounter((prev) => prev + 1);
                      setUnLikeColorChange((prev) => !prev);
                      if (likeColorChange) {
                        setLikeColorChange((prev) => !prev);
                      }
                    }}
                  />
                )}
                <h1>{unLikeCounter}</h1>
              </div>
            </div>
          </div>
        </div>

        <div
          id='description-box'
          className={`rounded-xl bg-slate-700 h-fit sideBar ${showLess ?"w-[100px]" : "fit"}`}
          style={{
            width: sidebarToggle ? '780px' : '1000px',
            // height: showLess ? '100px' : 'fitContent',
          }}
        >
          <div className='flex items-center justify-start mt-5'>
            <h1 className='text-white text-lg ml-3 mt-2'>
              {`${singleVideo?.statistics?.viewCount} views`}
            </h1>
            <h1 className='text-white text-lg ml-4 mt-2'>
              {moment(`${singleVideo?.snippet?.publishedAt}`, 'YYYYMMDD').fromNow()}
            </h1>
          </div>
          <div className='mt-1 px-4'>
            <span className='text-white'>{videoDescription}</span>
          </div>
          <div className='ml-4 mt-1'>
            <h1
              className='text-base text-[#807f7f] cursor-pointer mb-3 pb-3'
              onClick={() => {setShowLess((prev) => !prev)
                console.log(showLess)
              }
              }
            >
              {showLess ? 'show less' : 'show more'}
            </h1>
          </div>
        </div>
      </div>

      <div id='sideBar' className='overflow-y-scroll h-[100%]'>
        <WatchVideoContainer videoId={videoId} />
      </div>
    </div>) : (<WatchSkeleton/>)
  );
};

export default Watch;
