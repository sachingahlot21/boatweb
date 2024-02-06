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
      <div className='md:w-[1200px] flex  flex-col w-[85vw] md:mr-[10px] mr-[20px] h-[300px] md:h-[231px] bg-[rgb(231,240,245)] ml-10 overflow-hidden'>
       
          <div className='md:w-[1150px] md:h-[55px] m-auto mt-[22px]  overflow-hidden '>
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

          <div className='md:w-[1150px] md:h-[30px] w-[300px] h-[70px] m-auto my-[8px] '>
            <div className='w-[200px] m-auto h-[25px]  flex justify-between text-black'>
              <div className='text-xs'>Privacy Policy</div>
              <div className='pb-2 overflow-hidden'>.</div>
              <div className='text-xs'>Terms & Conditions</div>
            </div>

          </div>

          <div className='md:w-[1150px] md:h-[94px] w-[350px] h-[100px]  m-auto my-[8px] '>
            <div className=' w-[300px] m-auto h-[25px] text-[rgb(180,196,206)]  text-xs'>
              <p>© 2024 Imagine Marketing Limited. All Rights Reserved.</p>
            </div>

            <div className='md:w-[600px] w-[350px] m-auto md:h-[35px] h-[70px]  md:mt-6 mt:2 flex flex-wrap text-[rgb(180,196,206)]  text-xs whitespace-normal text-center bg-y'>
              <p>For queries contact us: Manager, Imagine Marketing Limited Unit no. 204 & 205, 2nd floor, D-wing & E-wing, Corporate Avenue, Andheri Ghatkopar Link Road, Mumbai, Maharashtra-400093, India</p>
            </div>
 
          </div>

        

        <div className={`w-[40px] h-[40px] bg-[rgb(255,125,125)]  hover:bg-[rgb(220,38,38)] fixed bottom-2 right-2 overflow-hidden ${showbtn}`}>
          <button className={`w-[40px] h-[40px] overflow-hidden `} onClick={handleScrollBtn}>
            <FaArrowUpLong className='text-bold text-3xl pl-3 overflow-hidden ' />
          </button>
        </div>
      </div>
    </>
  )
}

export default Footer