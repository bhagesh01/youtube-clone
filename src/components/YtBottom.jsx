import React from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import { sidebarAtom } from '../utils/atoms'
import { useRecoilValue } from 'recoil'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Watch from './Watch'
import VideoContainer from './VideoContainer'

const YtBottom = () => {








  const sidebarToggle = useRecoilValue(sidebarAtom);
  return (
    <div className='flex h-[calc(100%-4rem)] w-[100%]'>
     <Sidebar/> 
     <Router>
     <div className='h-[100%]' style={{width: sidebarToggle ? "81%":"100%",transition:"all 0.3s ease-in-out"}}>
      <Routes>
        <Route path="/" element={<Feed/>}></Route>
        <Route path="/watch" element={<Watch/>}></Route>
        <Route path="/videos" element={<VideoContainer />} />
      </Routes>
     </div>
     </Router>
     </div>

  )
}

export default YtBottom