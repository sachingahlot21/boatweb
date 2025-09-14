import React from 'react'
import Bseller from './Bseller'
import expv1 from './expv1.mp4'
import expv3 from './expv3.mp4'
import expv4 from './expv4.mp4'
import expv5 from './expv5.mp4'
import expv2wirear from './expv2wirear.mp4'
import { Link } from 'react-router-dom'

//BODY1 (RESUSEABLE COMPONENT FOR BESTSELLER)
function Body1() {
  return (
    <>
<<<<<<< HEAD
      <div className='md:w-screeen no-scrollbar md:h-72 md:mt-9 mt-7 h-[220px] overflow-x-scroll overflow-y-hidden md:overflow-hidden'>
        <div className='md:w-screen md:h-10 md:pl-10 pl-2'>
=======
      <div className='md:mt-9 mt-7'>
        <div className='md:w-screen md:h-10 lg:pl-10 pl-2'>
>>>>>>> 0e86bb36377f131d437a41562f6ac1c7a7849b2f
          <h3 className='text-2xl font-normal'>Explore <span className='font-bold'>Bestsellers</span></h3>
          <div className='md:w-6 w-6 bg-red-600 h-0.5 ml-[180px]'>
          </div>
        </div>
<<<<<<< HEAD
        <div className=' md:flex md:justify-items-center md:items-center md:w-screen  md:h-56 w-[900px] h-[280px]'>
          <div className='md:w-[80%]   md:h-[180px] xl:flex md:m-auto    ml-2 md:mt-2 mt-2  flex justify-between'>
            <Link
              to='/collections/wireless-earbuds'>
              <Bseller name='Wireless Earbuds' video={expv2wirear} />
            </Link>
            <Link
              to='collections/smart-watches'>
            <Bseller name='Smartwatches' video={expv1} />
            </Link>
            <Link
              to='collections/neckbands'>
            <Bseller name='Neckbands' video={expv3} />
            </Link>
            <Link
              to='collections/wireless-headphones'>
            <Bseller name='Headphones' video={expv4} />
            </Link>
            <Link
              to='collections/wireless-speakers'>
            <Bseller name='Wireless Speakers' video={expv5} />
            </Link>
=======
        <div className='lg:w-screeen lg:flex lg:justify-center no-scrollbar lg:h-56  h-[220px] overflow-x-scroll overflow-y-hidden lg:overflow-hidden'>
          <div className=' lg:flex lg:justify-items-center lg:items-center lg:w-screen  lg:h-56 w-[900px] h-[280px]'>
            <div className='lg:w-[80%]   lg:h-[180px] xl:flex lg:m-auto    ml-2 lg:mt-2 mt-2  flex justify-between'>
              <Link
                to='/collections/wireless-earbuds'>
                <Bseller name='Wireless Earbuds' video={expv2wirear} />
              </Link>
              <Link
                to='collections/smart-watches'>
                <Bseller name='Smartwatches' video={expv1} />
              </Link>
              <Link
                to='collections/neckbands'>
                <Bseller name='Neckbands' video={expv3} />
              </Link>
              <Link
                to='collections/wireless-headphones'>
                <Bseller name='Headphones' video={expv4} />
              </Link>
              <Link
                to='collections/wireless-speakers'>
                <Bseller name='Wireless Speakers' video={expv5} />
              </Link>
            </div>
>>>>>>> 0e86bb36377f131d437a41562f6ac1c7a7849b2f
          </div>
        </div>
      </div>
    </>
  )
}

export default Body1