import React from 'react'

const ButtonList = () => {
  
  const buttonListArray = ["All", "Javascript", "Java", "Live", "Music", "Songs", "Vlogs", "Trending", "Programming", "News", "Technology", "Cricket", "Comedy", "Thriller", "Coding", "Computer Programming", "Netlify","basketball" , "Crime" , "Movie" , "AI" , "Masti","New to you"];


  return (
    <div className='w-[100%] h-14 flex py-2 overflow-x-scroll no-scrollbar bg-[#0F0F0F]'>
      {
        buttonListArray.map((buttonName,index)=>{
         return  <div key={index} className='rounded-lg px-3 flex items-center justify-center whitespace-nowrap mx-2 text-white bg-[#222222] hover:bg-white hover:text-black font-semibold cursor-pointer'>
         <button>{buttonName}</button>
       </div>
        })
      }
    </div>
  )
}

export default ButtonList