import React from 'react'
import Jtbcomp from './Jtbcomp'
import spanimg1 from './spanimg1.jpg'
import spanimg2 from './spanimg2.jpg'
import spanimg3 from './spanimg3.jpg'
import spanimg4 from './spanimg4.jpg'
import spanimg5 from './spanimg5.jpg'
import vid1 from './vid1.mp4'
import vid2 from './vid2.mp4'
import vid3 from './vid3.mp4'
import vid4 from './vid4.mp4'
import vid5 from './vid5.mp4'

function Jointhetribe() {
    return (
        <>
        <div className='md:w-screen md:h-10 pl-10 '>
          <h3 className='text-2xl font-normal'>Join the<span className='font-bold'>Tribe</span></h3>
          <div className='md:w-6 w-6 bg-red-600 h-0.5 ml-[114px]'>
          </div>

        </div>
        <div className='w-[1275px] h-[550px] '>
            <div className='w-[1195px] h-[550px] m-auto  flex' >
                <div className='min-w-[240px] h-[540px]  mr-6'>
                    <Jtbcomp 
                    name='Stone Majestic Riverdale Rocker'
                    price='9,999'
                    beforedisprice='21,990'
                    discount='55% off'
                    image={spanimg1}
                    video={vid1}
                    />
                </div>
                <div className='min-w-[240px] h-[540px]  mr-6'>
                <Jtbcomp 
                    name='Primia Celestial'
                    price='2,099'
                    beforedisprice='9,499'
                    discount='78% off'
                    image={spanimg2}
                    video={vid2}
                    />
                </div>
                <div className='min-w-[240px] h-[540px]  mr-6'>
                <Jtbcomp 
                      name='Airdopes 170'
                      price='1598'
                      beforedisprice='3,490'
                      discount='54% off '
                      image={spanimg3}
                      video={vid3}
                    />
                </div>
                <div className='min-w-[240px] h-[540px]  mr-6'>
                <Jtbcomp 
                     name='Katana Blade'
                     price='2,398'
                     beforedisprice='3,990'
                     discount='40% off'
                     image={spanimg4}
                     video={vid4}
                    />
                </div>
                <div className='min-w-[240px] h-[540px] '>
                <Jtbcomp 
                    name='Airdopes Alpha'
                    price='899'
                    beforedisprice='3,490'
                    discount='74% off'
                    image={spanimg5}
                    video={vid5}
                    />
                </div>
            </div>
        </div>
        </>
    )
}

export default Jointhetribe