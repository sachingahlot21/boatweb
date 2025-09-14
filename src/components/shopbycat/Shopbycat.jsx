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
  const items = [
    { image: smartwatch, title: 'Smart Watches' },
    { image: wirelesshead, title: 'Wireless Headphones' },
    { image: wirelessspeaker, title: 'Wireless Speakers' },
    { image: soundbar, title: 'Soundbars' },
    { image: gaminghead, title: 'Gaming Headphones' },
    { image: trimmer, title: 'Trimmers' },
    { image: charger, title: 'Chargers' },
    { image: caracc, title: 'Car Accessories' },
    { image: limitededitiom, title: 'Limited Editions' },
    { image: charger, title: 'Chargers' },
    { image: headphone, title: 'Wired Headphones' },
    { image: smartwatch, title: 'Smart Watches' },
    { image: wirelessbuds, title: 'True Wireless' },
    { image: headphone, title: 'Wired Headphones' },
    { image: soundbar, title: 'Soundbars' },
    { image: wirelesshead, title: 'Wireless Headphones' },
    { image: smartwatch, title: 'Smart Watches' },
    { image: soundbar, title: 'Soundbars' },
  ];

  return (
    <>

      <div className='w-[786px] mt-6 h-[35px] lg:pl-10 pl-2 md:mb-4 mb-1'>
        <h3 className='text-2xl font-normal '>Shop by <span className='font-bold'>Categories</span></h3>
        <div className='md:w-6 w-6 bg-red-600 h-0.5 ml-[188px]'></div>
      </div>

      <div className="w-screen overflow-x-auto overflow-y-hidden mt-1 h-auto md:h-[150px] no-scrollbar">
        <div className="flex justify-center lg:px-9 px-3">
          <div className="flex flex-wrap justify-around md:flex-nowrap gap-3 p-5 md:p-0 md:pl-7 no-scrollbar overflow-x-auto">
            {items.map((item, index) => (
              <div key={index} className="w-[72px] md:w-[98px] h-[126px] md:h-[150px] shrink-0">
                <Eachitem image={item.image} title={item.title} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  )
}

export default Main