import React, { useEffect, useState } from 'react'
import MainTemplate from '../../categories/MainTemplate'
import productListWEB from '../../productslist/wirelessEarbuds/wirelessearbuds'
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { FaArrowUpLong } from "react-icons/fa6";


function Footer() {
  let showbtn;
  const [showBtn, setShowBtn] = useState(false)
  if (showBtn) {
    showbtn = 'block'
  }
  else {
    showbtn = 'hidden'
  }

  const handleScrollBtn = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }

  useEffect(() => {
    var lst = 0;
    const handleScrollBtn = () => {
      var st = window.scrollY;
      if (st > lst) {
        setShowBtn(false);
      }
      else if (lst > st) {
        window.scrollY > 600 ? setShowBtn(true) : setShowBtn(false);
      }
      lst = st <= 0 ? 0 : st;

    }
    window.addEventListener('scroll', handleScrollBtn)
    return () => {
      window.removeEventListener('scroll', handleScrollBtn)
    }
  }, [])


  // const testing = productListWEB.filter((product) => product.productid === 'wirelessearbuds1')

  return (
    <>
    <div className='w-[100vw] h-[300px]'>
      <div className='box-border  md:w-[97vw] lg:w-[93vw] flex  flex-col w-[97vw] md:mr-[10px]  h-[300px] md:h-[231px] bg-[rgb(231,240,245)] md:ml-2 lg:ml-12 ml-2 overflow-hidden'>
        <div className='md:w-[90vw] w-[90vw] md:h-[55px] h-[25%]  mb-1 mt-[22px]  overflow-hidden  '>
          <div className='flex overflow-y-hidden  w-[60%] md:w-[40%] flex-col md:flex-row h-[100%] m-auto'>
            <div className='  md:w-[50%] w-[65%]  h-[55px] flex justify-center items-center  m-auto pt-3 '><p className='text-l font-bold tracking-normal'>Let's get social</p></div>
            <div className=' md:w-[50%] w-[65%] h-[55px] flex justify-between items-center m-auto'>
              <div className='text-xl mt-3 text-black'><a target='_blank' href='https://facebook.com/boat.lifestyle/ '><FaFacebookF /></a></div>
              <div className='text-xl mt-3 text-black'><a target='_blank' href='https://twitter.com/RockWithboAt '><FaXTwitter /></a></div>
              <div className='text-xl mt-3 text-black'><a target='_blank' href='https://www.instagram.com/boat.nirvana/ '><FaInstagram /></a></div>
              <div className='text-xl mt-3 text-black'><a target='_blank' href='https://www.youtube.com/channel/UCY3JXaO_v8H3E6hTYUp5qWQ'><FaYoutube /></a></div>
              <div className='text-xl mt-3 text-black'><a target='_blank' href='https://www.linkedin.com/company/boat-lifestyle/'><FaLinkedinIn /></a></div>
            </div>
          </div>
        </div>
        <div className=' md:w-[90vw]  md:h-[30px] w-[300px] h-[3vh] m-auto my-[8px] '>
          <div className='w-[200px] m-auto h-[25px]  flex justify-between text-black'>
            <div className='text-xs'>Privacy Policy</div>
            <div className='pb-2 overflow-hidden'>.</div>
            <div className='text-xs'>Terms & Conditions</div>
          </div>
        </div>
        <div className='md:w-[90vw] overflow-y-hidden md:h-[94px] w-[80vw] h-[140px]  m-auto mb-0 my-[8px]   '>
          <div className=' w-[100%] flex justify-center  h-[35px] text-[rgb(180,196,206)]  text-xs'>
            <p>© 2024 Imagine Marketing Limited. All Rights Reserved.</p>  </div>
          <div className=' md:w-[80%]  w-[100%] m-auto md:h-[80%] h-[100px]  md:mt-0 mt:2 flex flex-wrap text-[rgb(180,196,206)] md:text:xs  text-sm  whitespace-normal text-center bg-y'>
            <p>For queries contact us: Manager, Imagine Marketing Limited Unit no. 204 & 205, 2nd floor, D-wing & E-wing, Corporate Avenue, Andheri Ghatkopar Link Road, Mumbai, Maharashtra-400093, India</p>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Footer