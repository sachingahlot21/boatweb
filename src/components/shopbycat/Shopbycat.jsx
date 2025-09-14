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

      <div className='w-[786px] mt-6 h-[35px] md:pl-10 pl-5 md:mb-4 mb-1'>
        <h3 className='text-2xl font-normal '>Shop by <span className='font-bold'>Categories</span></h3>
        <div className='md:w-6 w-6 bg-red-600 h-0.5 ml-[188px]'></div>
      </div>

      <div className=' md:w-[1375px] w-screen  overflow-x-scroll overflow-y-hidden    h-[315px] md:h-[150px] mt-1 no-scrollbar '>

        <div className='overflow-x-scroll md:overflow-x-scroll overflow-y-hidden md:overflow-y-hidden w-[786px] md:w-[2000px]  h-[90%] md:h-[100%] flex  flex-wrap md:flex-nowrap gap-3 p-5 md:p-0 md:pl-7 no-scrollbar '>

          <div className='w-[72px] md:w-[98px] md:h-[150px] h-[126px] '>
            <Eachitem image={smartwatch} title='Smart Watches' />
          </div>
          <div className='w-[74px] h-[126px] md:w-[98px] md:h-[150px] '>
            <Eachitem image={wirelesshead} title='Wireless Headphones' />
          </div>
          <div className='w-[72px] h-[126px] md:w-[98px] md:h-[150px] '>
            <Eachitem image={wirelessspeaker} title='Wireless Speakers' />
          </div>
          <div className='w-[72px] h-[126px] md:w-[98px] md:h-[150px] '>
            <Eachitem image={soundbar} title='Soundbars' />
          </div>
          <div className='w-[72px] h-[126px]  md:h-[150px] md:w-[98px] '>
            <Eachitem image={gaminghead} title='Gaming Headphones' />
          </div>
          <div className='w-[72px] h-[126px] md:h-[150px] md:w-[98px] '>
            <Eachitem image={trimmer} title='Trimmers' />
          </div>
          <div className='w-[72px] h-[126px] md:h-[150px] md:w-[98px] '>
            <Eachitem image={charger} title='Chargers' />
          </div>
          <div className='w-[72px] h-[126px] md:h-[150px] md:w-[98px] '>
            <Eachitem image={caracc} title='Car Accessories' />
          </div>
          <div className='w-[72px] h-[126px] md:h-[150px] md:w-[98px] '>
            <Eachitem image={limitededitiom} title='Limited Editions' />
          </div>
          <div className='w-[72px] h-[126px] md:h-[150px] md:w-[98px] '>
            <Eachitem image={charger} title='Chargers' />
          </div>
          <div className='w-[74px] h-[126px] md:h-[150px] md:w-[98px] '>
            <Eachitem image={headphone} title='Wired Headphones' />
          </div>
          <div className='w-[72px] h-[126px] md:h-[150px] md:w-[98px] '>
            <Eachitem image={smartwatch} title='Smart Watches' />
          </div>
          <div className='w-[72px] h-[126px] md:h-[150px] md:w-[98px] md:overflow-y-hidden overflow-y-hidden '>
            <Eachitem image={wirelessbuds} title='True Wireless' />
          </div>
          <div className='w-[74px] h-[126px] md:h-[150px] md:w-[98px] '>
            <Eachitem image={headphone} title='Wired Headphones' />
          </div>
          <div className='w-[72px] h-[126px] md:h-[150px] md:w-[98px] '>
            <Eachitem image={soundbar} title='Soundbars' />
          </div>
          <div className='w-[74px] h-[126px] md:h-[150px] md:w-[98px] '>
            <Eachitem image={wirelesshead} title='Wireless Headphones' />
          </div>
          <div className='w-[72px] h-[126px] md:h-[150px] md:w-[98px] '>
            <Eachitem image={smartwatch} title='Smart Watches' />
          </div>
          <div className='w-[72px] h-[126px] md:h-[150px] md:w-[98px] '>
            <Eachitem image={soundbar} title='Soundbars' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Main