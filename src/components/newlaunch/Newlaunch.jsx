import React from 'react'
import Itemstr from '../itemdis/Itemstr'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaRegThumbsUp } from "react-icons/fa"
import newlaunch1 from './newlaunch1.jpg'
import newlaunch2 from './newlaunch2.jpg'
import newlaunch3 from './newlaunch3.jpg'
import newlaunch4 from './newlaunch4.jpg'
import offer1 from './offer1.jpg'
import offer2 from './offer2.jpg'
import offer3 from './offer3.jpg'
import offer4 from './offer4.jpg'


function Main() {
  return (
    <>

      <div className='xl:pl-10 pl-2  mt-5 md:h-10 md:w-full  flex justify-between'>
        <div>
          <h3 className='text-2xl font-normal'>New <span className='font-bold'>Launches</span></h3>
          <div className='md:w-6 bg-red-600 h-0.5 ml-[133px]'></div>
        </div>
        <div className='float-left md:h-8 md:w-24 xl:mr-10 mr-2 mt-2'>
          <h3 className='flex font-bold mt-1 ml-2 text-[#2f5b97]'>View All <IoArrowForwardCircleOutline className='font-bold ml-1 mt-1' /></h3>
        </div>
      </div>


      <div className='overflow-x-scroll no-scrollbar w-full h-96 mt-2'>
        <div className='w-[1185px] h-96  xl:ml-10 ml-2 flex justify-between overflow-hidden'>
          <Itemstr
            image={newlaunch1}
            usp='16W RMS Sound'
            offer='New Launch'
            name='Aavante Bar 558'
            price='2199'
            discount='45%off'
            priceBefore='3,990'
            //   colors='+5'
            rating='firstuser'
            number='1336'
            productid='newlaunch1'
            count='0'
            category='new_launch1'
          />

          <Itemstr
            offer='New Launch'
            image={newlaunch2}
            usp='12 Hours Playback'
            name='Stone 750'
            price='2199'
            discount='63%off'
            priceBefore='5,990'
            //   colors='+5'
            rating='firstuser'
            number='150'
            productid='newlaunch2'
            count='0'
            category='new_launch2'
            />

          <Itemstr
            offer='New Launch'
            image={newlaunch3}
            usp='AMOLED Display'
            name='Lunar Peak'
            price='2699'
            discount='61%off'
            priceBefore='6,999'
            //    colors='+5'
            rating='firstuser'
            number='1074' 
            productid='newlaunch3'
            count='0'
            category='new_launch3'
            />

          <Itemstr
            offer='New Launch'
            image={newlaunch4}
            usp='40 Hours Playback'
            name='Airdopes 71'
            price='1199'
            discount='70%off'
            priceBefore='3,990'
            //    colors='+5'
            rating='firstuser'
            number='647'
            productid='newlaunch4'
            count='0'
            category='new_launch4'
             />
        </div>
      </div>

      <div className='w-screen h-[165px] mt-6 ' >
        <div className='w-screen h-[145px] m-auto  flex justify-center overflow-y-hidden md:overflow-y-hidden'>

          <div className='w-[20%] h-[165px] overflow-y-hidden'>
            <div className='w-[100%]'><img src={offer1} alt='no img' className='w-[112px] h-[112px] m-auto'></img></div>

            <div className='text-xs flex flex-col md:block md:text-xl text-center'><span className='font-bold md:text-xl sm:text-sm text-xs'>1 year</span>&nbsp;Warranty</div>
          </div>

          <div className='w-[22%] h-[145px] overflow-y-hidden '>
            <div className='w-[100%]'><img src={offer2} alt='no img' className='w-[112px] h-[112px] m-auto'></img></div>

            <div className='text-xs flex flex-col md:block md:text-xl text-center'><span className='font-bold md:text-xl sm:text-sm text-xs'>7day</span>&nbsp;Replacement</div>
          </div>

          <div className='w-[20%] h-[145px] overflow-y-hidden '>

            <div className='w-[100%]'><img src={offer3} alt='no img' className='w-[112px] h-[112px] m-auto'></img></div>

            <div className=' text-xs flex flex-col md:block md:text-xl text-center'><span className='font-bold md:text-xl sm:text-sm text-xs'>Free</span>&nbsp;Shipping</div>
          </div>
          <div className='w-[20%] h-[145px] overflow-y-hidden ' >
            <div className='w-[100%]'><img src={offer4} alt='no img' className='w-[112px] h-[112px] m-auto'></img></div>
            <div className='text-xs flex flex-col md:block md:text-xl text-center'><span className='font-bold md:text-xl sm:text-sm text-xs'>GST</span>&nbsp;Billing</div>
          </div>
        </div>
      </div>

    </>

  )
}

export default Main