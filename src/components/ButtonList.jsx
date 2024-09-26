import React from 'react';
import { useRecoilState } from 'recoil';
import { categoryState } from '../utils/atoms'; // Adjust the path as necessary

const ButtonList = () => {
  const [active, setActive] = useRecoilState(categoryState); // Use Recoil state for category

  const buttonListArray = [
    "All", "Javascript", "Java", "Live", "Music", "Songs",
    "Vlogs", "Trending", "Programming", "News", "Technology",
    "Cricket", "Comedy", "Thriller", "Coding", "Computer Programming",
    "Netlify", "Basketball", "Crime", "Movie", "AI", "Masti", "New to you"
  ];

  const videoByTag = (tag) => {
    if (active !== tag) {
      setActive(tag); // Update the Recoil state with the new active category
    }
  };

  return (
    <div className='w-full h-14 flex py-2 overflow-x-scroll no-scrollbar bg-[#0F0F0F]'>
      {
        buttonListArray.map((buttonName, index) => (
          <div 
            key={index} 
            className={`${active === buttonName ? "bg-white text-black" : "bg-[#222222] text-white"} rounded-lg px-3 flex items-center justify-center whitespace-nowrap mx-2 hover:bg-white hover:text-black font-semibold cursor-pointer`} 
            onClick={() => { videoByTag(buttonName); }}
          >
            <button>{buttonName}</button>
          </div>
        ))
      }
    </div>
  );
};

export default ButtonList;
