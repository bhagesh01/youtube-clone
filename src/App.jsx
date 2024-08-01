import './App.css'
import { RecoilRoot } from 'recoil';
import MainAppWrapper from './components/YtBottom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import YtBottom from './components/YtBottom';




function App() {
  // const appRouter = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Body />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <Feed />
  //       },
  //       {
  
  //         path: "/watch",
  //         element: <Watch />
  //       }
  //     ]
  //   }
  // ])




  return <div className='App h-[100vh] w-[100vw] bg-[#0F0F0F] relative overflow-hidden'>
      <RecoilRoot>
     <Navbar/>
     {/* <Router> */}
     <YtBottom/>
     {/* </Router> */}
     </RecoilRoot>
    </div>
}

export default App
