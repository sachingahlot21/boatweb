import { Link } from 'react-router-dom'
import React from 'react'
import Eachitem from './Eachitem'
import headphone from './headphone.jpg'
import wirelessbuds from './wirelessbuds.jpg'
import smartwatch from './smartwatch.jpg'
import wirelesshead from './wirelesshead.jpg'
import wirelessspeaker from './wirelessspeaker.jpg'
import soundbar from './soundbar.jpg'
import gaminghead from './gaminghead.png'
import trimmer from './trimmer.jpg'
import charger from './charger.jpg'
import caracc from './caracc.jpg'
import limitededitiom from './limitededitiom.jpg'
import './Shopbycat.css'
function Main() {
  return (
    <>
      <div className='md:w-[1375px] w-[412px] h-[315px] md:h-[209px] mt-6 overflow-y-hidden'>

        <div className='w-[1375px] h-[35px] md:pl-10 pl-5 md:mb-4 mb-1'>
          <h3 className='text-2xl font-normal '>Shop by <span className='font-bold'>Categories</span></h3>
          <div className='md:w-6 w-6 bg-red-600 h-0.5 ml-[188px]'></div>
        </div>
        <div id='scrollbarid2' className='md:overflow-x-scroll md:overflow-y-hidden'>
          <div id='scrollbarid' className='md:w-[2500px] w-[426px] h-[220px]  md:h-[150px] mt-2.5 md:flex flex flex-wrap overflow-x-scroll overflow-y-hidden'>

            <div className='md:w-[120px] md:h-[150px] w-[80px] h-[100px] md:mr-7 mr-3 md:ml-8 ml-5 hover:cursor-pointer overflow-y-hidden mb-2'>
              <Eachitem image={headphone} title='Wired Headphones' />
            </div>
            <Link to='/collections/wireless-earbuds'>
            <div className='md:w-[120px] md:h-[150px] w-[80px] h-[100px] md:mr-7 mr-3 hover:cursor-pointer  mb-2'>
              <Eachitem image={wirelessbuds} title='True Wireless Earbuds' />
            </div>
            </Link>

            <div className='md:w-[120px] md:h-[150px] w-[80px] h-[100px] md:mr-6 mr-3  hover:cursor-pointer mb-2'>
              <Eachitem image={smartwatch} title='Smart Watches' />
            </div>

            <div className='md:w-[120px] md:h-[150px] w-[80px] h-[100px] md:mr-7 mr-3  hover:cursor-pointer mb-2'>
              <Eachitem image={wirelesshead} title='Wireless Headphones' />
            </div>

            <div className='md:w-[120px] md:h-[150px] w-[80px] h-[100px] md:mr-7 ml-5  mr-3 mb-2'>
              <Eachitem image={wirelessspeaker} title='Wireless Speakers' />
            </div>

            <div className='md:w-[120px] md:h-[150px] w-[80px] h-[100px] md:mr-7 mr-3  hover:cursor-pointer mb-2'>
              <Eachitem image={soundbar} title='Soundbars' />
            </div>

            <div className='md:w-[120px] md:h-[150px] w-[80px] h-[100px] md:mr-7 mr-3 hover:cursor-pointer mb-2'>
              <Eachitem image={gaminghead} title='Gaming Headphones' />
            </div>
            <div className='md:w-[120px] md:h-[150px] w-[80px] h-[100px] md:mr-7 mr-3 hover:cursor-pointer mb-2'>
              <Eachitem image={trimmer} title='Trimmers' />
            </div>
            <div className='md:w-[120px] md:h-[150px] w-[120px] h-[150px] mr-7 hover:cursor-pointer mb-2'>
              <Eachitem image={charger} title='Chargers' />
            </div>
            <div className='md:w-[120px] md:h-[150px] w-[120px] h-[150px] mr-8 hover:cursor-pointer mb-2'>
              <Eachitem image={caracc} title='Car Accessories' />
            </div>
            <div className='md:w-[120px] md:h-[150px] w-[120px] h-[150px] mr-8 hover:cursor-pointer'>
              <Eachitem image={limitededitiom} title='Limited Editions' />
            </div>
            <div className='md:w-[120px] md:h-[150px] w-[120px] h-[150px] mr-8 hover:cursor-pointer'>
              <Eachitem image={charger} title='Chargers' />
            </div>
            <div className='w-[120px] h-[150px]  mr-8 hover:cursor-pointer' >
              <Eachitem image={headphone} title='Wired Headphones' />
            </div>
            <div className='w-[120px] h-[150px]  mr-8 hover:cursor-pointer'>
              <Eachitem image={smartwatch} title='Smart Watches' />
            </div>
            <div className='w-[120px] h-[150px]  mr-8 hover:cursor-pointer'>
              <Eachitem image={wirelessbuds} title='True Wireless Earbuds' />
            </div>
            <div className='w-[120px] h-[150px]  mr-8 hover:cursor-pointer'>
              <Eachitem image={headphone} title='Wired Headphones' />
            </div>
            <div className='w-[120px] h-[150px]  mr-8 invisible hover:cursor-pointer'>
              <Eachitem image={soundbar} title='Soundbars' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main