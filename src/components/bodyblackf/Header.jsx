import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaRegThumbsUp } from "react-icons/fa"
import bfriday from './bfriday.jpg'
import offernewimg from './offernewimg.jpg'
import offernewimg2 from './offernewimg2.jpg'
import Itemstr from '../itemdis/Itemstr';
import bfrip1 from './bfrip1.jpg'
import bfrip2 from './bfrip2.jpg'
import bfrip3 from './bfrip3.jpg'
import bfrip4 from './bfrip4.jpg'

function Header() {

    // var countdown = new Date("Jan 10, 2024 00:00:00 ").getTime();
    // var x = setInterval(function () {
    //     var now = new Date().getTime();
    //     var distance = countdown - now;
    //     var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    //     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    //     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    //     var seconds = Math.floor((distance % (1000 * 60)) / 1000)
    //     document.getElementById('daysid').innerHTML = days;
    //     document.getElementById('hoursid').innerHTML = hours;
    //     document.getElementById('minsid').innerHTML = minutes;
    //     document.getElementById('secid').innerHTML = seconds;
    //     if (distance < 0) {
    //         clearInterval(x)
    //         document.getElementById('daysid').innerHTML = '00';
    //         document.getElementById('hoursid').innerHTML = '00';
    //         document.getElementById('minsid').innerHTML = '00';
    //         document.getElementById('secid').innerHTML = '00';
    //     }
    // }, 1000)


    return (
        <>
            {/* heading start from here */}
            <div className='  md:pl-10 pl-2 md:h-10 md:w-full md:mt-1 mt-8   flex justify-between overflow-y-hidden no-scrollbar'>
                <div>
                    <h3 className='text-2xl font-normal'>Black <span className='font-bold'>Friday</span></h3>
                    <div className='md:w-6 bg-red-600 h-0.5 ml-[105px]'></div>
                </div>
                <div className='float-left md:h-8 md:w-24 md:mr-10  mr-3 mt-2'>
                    <h3 className='flex font-bold mt-1 ml-2 text-[#2f5b97]'>View All <IoArrowForwardCircleOutline className='font-bold ml-1 mt-1' /></h3>
                </div>
            </div>

            {/* banner start from here */}
            <div className=' md:w-auto ml-2  w-screen mt-2 md:h-[109px] h-[80px] mr-2 md:mr-5 mb-2 md:ml-10 ml:5 rounded-xl relative'>

                <div className='w-[98%] mr-2  h-[100%] block md:hidden '>
                    <img className='w-[100%]  object-fill   h-[100%] rounded-xl' src={offernewimg2} alt='no img'></img>
                </div>
                <div className='md:block md:h-[100%] object-fill hidden md:object-fill'>
                    <img className='w-auto md:h-[100%]' src={offernewimg} alt='no img'></img>
                </div>

                {/* <div className='md:w-[600px] md:h-[80px] w-[175px] h-[80px] overflow-scroll overflow-x-scroll  text-white absolute top-2 md:left-[400px] left-[105px] md:flex pt-8 font-semibold md:no-scrollbar' >
                    <h3 className='md:text-2xl text-sm mr-2'>Ending In </h3>
                    <div className='flex'>
                        <div className='flex md:text-4xl text-xs font-bold mr-2'><div id='daysid' className='mb-2 overflow-hidden'> 00</div><div className='md:text-2xl text-xs  font-semibold'>Days</div></div>
                        <div className='flex md:text-4xl text-xs font-bold mr-2'><div id='hoursid' className='mb-2 overflow-hidden'>00</div><div className='md:text-2xl text-xs  font-semibold'>Hours</div></div>
                        <div className='flex md:text-4xl text-xs font-bold mr-2'><div id='minsid' className='mb-2 overflow-hidden'>00</div><div className='md:text-2xl text-xs  font-semibold'>Mins</div></div>
                        <div className='flex md:text-4xl text-xs font-bold mr-2'> <div id='secid' className='mb-2 overflow-hidden'>00</div><div className='md:text-2xl  text-xs font-semibold'>Sec</div></div>
                    </div>
                </div> */}
            </div>
            {/* items starts from here */}
            <div className='overflow-y-hidden w-full h-[380px] mt-4 no-scrollbar ml-2 overflow-x-scroll'>
                <div className='w-[1185px] h-96  md:ml-9 flex justify-between  md:no-scrollbar'>
                    <Itemstr
                        image={bfrip1}
                        usp='60 Hours Playback'
                        offer='Engraving Available'
                        itemName='Airdopes 131'
                        price='849'
                        discount='72% off'
                        priceBefore='2,990'
                        //   colors='+5'
                        rating='4.8'
                        number='1336'
                        productid='black_friday'
                        count='0'
                        category='ear_buds1'
                    />

                    <Itemstr
                        offer='Engraving Available'
                        image={bfrip2}
                        usp='40 Hours Playback'
                        itemName='Airdopes 161'
                        price='999'
                        discount='60% off'
                        priceBefore='2490'
                        //   colors='+5'
                        rating='4.9'
                        number='150'
                        productid='black_friday2'
                        count='0'
                        category='ear_buds1'
                    />
                    <Itemstr
                        offer='false'
                        image={bfrip3}
                        usp='8 Hours Playback'
                        itemName='Rockerz 235 V2'
                        price='999'
                        discount='67% off'
                        priceBefore='2,990'
                        //    colors='+5'
                        rating='4.8'
                        number='1074'
                        productid='black_friday3'
                        count='0'
                        category='ear_buds1'
                    />
                    <Itemstr
                        offer='&#8377;200 OFF ON BIG200'
                        image={bfrip4}
                        usp='42 Hours Playback'
                        itemName='Airdopes 141'
                        price='1299'
                        discount='71%off'
                        priceBefore='4,490'
                        //    colors='+5'
                        rating='4.9'
                        number='647'
                        productid='black_friday4'
                        count='0'
                        category='ear_buds1'
                    />
                </div>
            </div>

        </>
    )
}

export default Header