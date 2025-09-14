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

    return (
        <>
<<<<<<< HEAD
            <div className='  md:pl-10 pl-2 md:h-10 md:w-full md:mt-1 mt-8   flex justify-between overflow-y-hidden no-scrollbar'>
=======
            <div className='  lg:pl-10 pl-2 md:h-10 md:w-full md:mt-1    flex justify-between overflow-y-hidden no-scrollbar'>
>>>>>>> 0e86bb36377f131d437a41562f6ac1c7a7849b2f
                <div>
                    <h3 className='text-2xl font-normal'>Black <span className='font-bold'>Friday</span></h3>
                    <div className='md:w-6 bg-red-600 h-0.5 ml-[105px]'></div>
                </div>
                <div className='float-left md:h-8 md:w-24 md:mr-10  mr-3 mt-2'>
                    <h3 className='flex font-bold mt-1 ml-2 text-[#2f5b97]'>View All <IoArrowForwardCircleOutline className='font-bold ml-1 mt-1' /></h3>
                </div>
            </div>
<<<<<<< HEAD
            <div className=' md:w-auto ml-2  w-screen mt-2 md:h-[109px] h-[80px] mr-2 md:mr-5 mb-2 md:ml-10 ml:5 rounded-xl relative'>
=======
            <div className=' md:w-auto ml-2  w-screen mt-2 md:h-[109px] h-[80px] mr-2 md:mr-5 mb-2 lg:ml-10 ml:5 rounded-xl relative'>
>>>>>>> 0e86bb36377f131d437a41562f6ac1c7a7849b2f
                <div className='w-[98%] mr-2  h-[100%] block md:hidden '>
                    <img className='w-[100%]  object-fill   h-[100%] rounded-xl' src={offernewimg2} alt='no img'></img>
                </div>
                <div className='md:block md:h-[100%] object-fill hidden md:object-fill'>
                    <img className='w-[100%] md:h-[100%]' src={offernewimg} alt='no img'></img>
                </div>
            </div>
         
<<<<<<< HEAD
            <div className='overflow-y-hidden w-full h-[380px] mt-4 no-scrollbar ml-2 overflow-x-scroll'>
                <div className='w-[1185px] h-96  md:ml-9 flex justify-between  md:no-scrollbar'>
=======
            <div className='box-border overflow-y-hidden  w-full h-[380px] mt-4  no-scrollbar ml-2 overflow-x-scroll xl:flex xl:justify-center'>
                <div className='w-[1185px] h-96  flex justify-between  md:no-scrollbar'>
>>>>>>> 0e86bb36377f131d437a41562f6ac1c7a7849b2f
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