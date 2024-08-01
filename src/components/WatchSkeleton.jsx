import React from 'react'

const WatchSkeleton = () => {
  let skeletonArray = [1,2,3,4];
  return (
    <div className='h-full w-full flex'>
      <div id='full-video' className='h-full w-[70%] ml-4'>
      <div className='h-[450px] w-[800px] animate-pulse bg-slate-500 rounded -xl'>
      </div>
      <div className='h-10 mt-5 w-[800px] animate-pulse bg-slate-500 rounded -xl'>
      </div>
      <div className='h-10 mt-5 w-[800px] animate-pulse bg-slate-500 rounded -xl'>
      </div>
      <div className='h-40 mt-5 w-[800px] animate-pulse bg-slate-500 rounded -xl'>
      </div>
      </div>
      <div id='watch-side-video' className='h-full w-[30%] grid-rows-4'>
      {
         skeletonArray.map((i,index)=>{
          return(
           <div key={index} className='mb-8'>
             <div className='h-40 w-72 rounded-xl bg-slate-500 animate-pulse'></div>
             <div className='h-5 w-72 rounded-xl bg-slate-500 animate-pulse mt-2'></div>
             <div className='h-5 w-72 rounded-xl bg-slate-500 animate-pulse mt-2'></div>
           </div>
          )
         })
      }
      </div>
    </div>
  )
}

export default WatchSkeleton