import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React, { useLayoutEffect } from 'react';
import './index.css'
import Layout from './Layout.jsx'
import WebCategory from './categories/wirelessearbuds/WebCategory.jsx'
import WirelessHeadphonesCategory from './categories/wirelessHeadphones/WirelessHeadphonesCategory.jsx';
import NeckbandsCategory from './categories/neckBands/NeckbandsCategory.jsx'
import SmartWatchesCategory from './categories/smartWatches/SmartWatchesCategory.jsx'
import WiredHeadphonesCategory from './categories/wiredHeadphones/WiredHeadphonesCategory.jsx'
import WirelessSpeakersCategory from './categories/wirelessSpeakers/WirelessSpeakersCategory.jsx'
import ScrollToTop from './others/scrollToTop.js';
import { Route,  useLocation, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'



// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children:
//       [
//         {
//           path: '',
//           element: <App />
//         },
//         {
//           path: 'collections/wireless-earbuds',
//           element:<WebCategory />
//         },
//       ]
//   }
// ])

const router = createBrowserRouter(
   createRoutesFromElements(
   <Route path='/' element={<Layout />}>
      <Route path='' element={<App/>}/>
      <Route path='collections/wireless-earbuds' element={<WebCategory />}/>
      <Route path='collections/wireless-headphones' element={<WirelessHeadphonesCategory />}/>
      <Route path='collections/neckbands' element={<NeckbandsCategory />}/>
      <Route path='collections/smart-watches' element={<SmartWatchesCategory />}/>
      <Route path='collections/wired-headphones' element={<WiredHeadphonesCategory />}/>
      <Route path='collections/wireless-speakers' element={<WirelessSpeakersCategory />}/>

    </Route>
    
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
