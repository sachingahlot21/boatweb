import React from 'react'
import MainTemplate from '../../categories/MainTemplate'
import productListWEB from '../../productslist/wirelessEarbuds/wirelessearbuds'
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";




function Footer() {

  // const testing = productListWEB.filter((product) => product.productid === 'wirelessearbuds1')

  return (
    <>
      <div className='w-[1200px] h-[231px] bg-[rgb(231,240,245)] ml-10 overflow-hidden'>
        <div className='flex  flex-col overflow-hidden'>
          <div className='w-[1150px] h-[55px] m-auto mt-[22px]'>
            <div className='flex w-[345px] h-[55px] m-auto'>
              <div className='w-[120px] h-[55px]  m-auto pt-3 '><p className='text-l font-bold tracking-normal'>Let's get social</p></div>
              <div className='w-[225px] h-[55px] flex justify-between'>

                <div className='text-xl mt-3 text-black'><a target='_blank' href='https://facebook.com/boat.lifestyle/ '><FaFacebookF /></a></div>

                <div className='text-xl mt-3 text-black'><a target='_blank' href='https://twitter.com/RockWithboAt '><FaXTwitter /></a></div>

                <div className='text-xl mt-3 text-black'><a target='_blank' href='https://www.instagram.com/boat.nirvana/ '><FaInstagram /></a></div>

                <div className='text-xl mt-3 text-black'><a target='_blank' href='https://www.youtube.com/channel/UCY3JXaO_v8H3E6hTYUp5qWQ'><FaYoutube /></a></div>

                <div className='text-xl mt-3 text-black'><a target='_blank' href='https://www.linkedin.com/company/boat-lifestyle/'><FaLinkedinIn /></a></div>
              </div>
            </div>
          </div>

          <div className='w-[1150px] h-[30px]  m-auto my-[8px]'>
            <div className='w-[200px] m-auto h-[25px]  flex justify-between text-black'>
              <div className='text-xs'>Privacy Policy</div>
              <div className='pb-2 overflow-hidden'>.</div>
              <div className='text-xs'>Terms & Conditions</div>
            </div>

          </div>

          <div className='w-[1150px] h-[94px]  m-auto my-[8px]'>
            <div className='w-[300px] m-auto h-[25px] text-[rgb(180,196,206)]  text-xs'>
              <p>© 2024 Imagine Marketing Limited. All Rights Reserved.</p>
            </div>
            <div className='w-[600px] m-auto h-[35px] mt-6 text-[rgb(180,196,206)]  text-xs overflow-hidden text-center'>
              <p>For queries contact us: Manager, Imagine Marketing Limited Unit no. 204 & 205, 2nd floor, D-wing & E-wing, Corporate Avenue, Andheri Ghatkopar Link Road, Mumbai, Maharashtra-400093, India</p>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Footer