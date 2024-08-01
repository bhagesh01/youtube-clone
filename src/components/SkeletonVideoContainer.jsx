import React from 'react'

const SkeletonVideoContainer = () => {


  let skeletonArray = [1,2,3]
  return (
    <div className='grid grid-rows-3 w-full'>
        {
        skeletonArray.map((i,index)=>{
          return (
            <div id='skeleton-rows' className='flex justify-between w-full gap-14 mt-10' key={index}>
              {
                 skeletonArray.map((item,index)=>{
                  return(
                    <div id='first-row-first-div' key={index}>
                  <div>
                    <div className='h-40 w-[22rem] animate-pulse bg-slate-500 rounded-xl'></div>
                  </div>
                  <div className='h-5 w-[22rem] rounded-full animate-pulse bg-slate-500 mt-4'></div>
                  <div className='h-5 w-[22rem] rounded-full animate-pulse bg-slate-500 mt-4'></div>
                  </div>
                  )
                 })
              }
            </div>
          
          )
        })
        }
    </div>
  )
}


export default SkeletonVideoContainer;
