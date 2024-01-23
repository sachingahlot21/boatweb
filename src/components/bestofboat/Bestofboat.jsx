import React from 'react'
import Itemstr from '../itemdis/Itemstr'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaRegThumbsUp } from "react-icons/fa"
import bs1 from './bs1.jpg'
import bs2 from './bs2.jpg'
import bs3 from './bs3.jpg'
import bs4 from './bs4.jpg'
import ht1 from './ht1.jpg'
import ht2 from './ht2.jpg'
import ht3 from './ht3.jpg'
import ht4 from './ht4.jpg'
import te1 from './te1.jpg'
import te2 from './te2.jpg'
import te3 from './te3.gif'
import te4 from './te4.jpg'

import ca1 from './ca1.jpg'
import ca2 from './ca2.jpg'
import ca3 from './ca3.jpg'
import ca4 from './ca4.jpg'

import tw1 from './tw1.jpg'
import tw2 from './tw2.jpg'
import tw3 from './tw3.jpg'
import tw4 from './tw4.jpg'

import newlaunch1 from './newlaunch1.jpg'
import newlaunch2 from './newlaunch2.jpg'
import newlaunch3 from './newlaunch3.jpg'
import newlaunch4 from './newlaunch4.jpg'

import { useState } from 'react';

function Bestofboat() {

    const [activeButtonIndex, setActiveButtonIndex] = useState(0);

    const changeState = () => {

        var btn2 = document.getElementById("btn2")
        btn2.style.color = 'red';
        // btn2.style.color = rgb(236, 240, 244);
    }



    return (
        <div className='w-[1275px] h-[510px] '>
            <div id='header' className='w-[1250px] h-[97px] bg-white'>
                <div className='h-[35px] w-[1250px] pl-10 flex justify-between overflow-hidden'>
                    <div className='h-[35px] w-[300px '>
                        <h3 className='text-2xl font-normal'>Best Of <span className='font-bold'>boAt</span></h3>
                        <div className='md:w-6 bg-red-600 h-0.5 ml-[113px]'></div>
                    </div>

                    <div className=' h-[35px] w-[100px] ml-[400px] mr-2  mt-1.5 text-sm float-right'>
                        <div className='flex font-bold  text-center text-[#2f5b97]'>View All <IoArrowForwardCircleOutline className='font-bold ml-1 mt-1 text-center' /></div>
                    </div>
                </div>
                <div className='w-[1195px] h-[60px] bg-white ml-10'>
                    <div className='w-[1195px] h-[60px]  pt-4 ' >

                        <button
                            className={activeButtonIndex === 0 ? "bg-[#ecf0f4] rounded-[18px] w-[126px] h-[32px] bg-none text-black mr-2 font-bold " : "  bg-white w-[123px] h-[32px] bg-none text-[#696868] mr-2 "}
                            onClick={() => setActiveButtonIndex(0)}
                        >Best Sellers</button>

                        <button
                            className={activeButtonIndex === 1 ? "bg-[#ecf0f4] rounded-[18px] w-[309px] h-[32px] bg-none text-black mr-2 font-bold" : "bg-white w-[300px] h-[32px] bg-none text-[#696868] mr-2"}
                            onClick={() => setActiveButtonIndex(1)}
                        >Home Theatre Systems & Soundbars</button>


                        <button
                            className={activeButtonIndex === 2 ? "bg-[#ecf0f4] rounded-[18px] w-[135px] h-[32px] bg-none text-black mr-2 font-bold" : "bg-white w-[123px] h-[32px] bg-none text-[#696868] mr-2"}
                            onClick={() => setActiveButtonIndex(2)}
                        >Top Earbuds</button>


                        <button
                            className={activeButtonIndex === 3 ? "bg-[#ecf0f4] rounded-[18px] w-[123px] h-[32px] bg-none text-black mr-2 font-bold" : "bg-white w-[123px] h-[32px] bg-none text-[#696868] mr-2"}
                            onClick={() => setActiveButtonIndex(3)}
                        >Top Watches</button>

                        <button
                            className={activeButtonIndex === 4 ? "w-[140px] h-[32px] bg-none bg-[#ecf0f4] rounded-[18px] font-bold" : "bg-white w-[123px] h-[32px] bg-none text-[#696868]"}
                            onClick={() => setActiveButtonIndex(4)}
                        >Car Accessories</button>
                    </div>
                </div>
            </div>

            <div id='divblocks' className='w-[1400px] h-[400px] '>

                <div className={activeButtonIndex === 0 ? 'w-[100%]  h-[400px]  block' : 'hidden'}>

                    <div className='w-full h-96 mt-2'>
                        <div className='w-[1185px] h-96  ml-10 flex justify-between overflow-hidden'>
                            <Itemstr
                                image={bs1}
                                usp='40 Hours Playback'
                                offer='Engraving Available'
                                name='Airdopes 161'
                                price='999'
                                discount='60%off'
                                beforedisprice='2,490'
                                //   colors='+5'
                                rating='4.9'
                                number='150'
                            />

                            <Itemstr
                                offer='Engraving Available'
                                image={bs2}
                                usp='40 Hours Playback'
                                name='Airdopes 131 pro'
                                price='999'
                                discount='67%off'
                                beforedisprice='2,990'
                                //   colors='+5'
                                rating='4.9'
                                number='182' />
                            <Itemstr
                                offer='false'
                                image={bs3}
                                usp='BT Calling'
                                name='Wave Flex Connect'
                                price='1,499'
                                discount='81%off'
                                beforedisprice='7,990'
                                //    colors='+5'
                                rating='4.8'
                                number='31' />
                            <Itemstr
                                offer='&#8377;200 OFF ON BIG200'
                                image={bs4}
                                usp='42 Hours Playback'
                                name='Airdopes 141'
                                price='1,299'
                                discount='71%off'
                                beforedisprice='4,490'
                                //    colors='+5'
                                rating='4.9'
                                number='647' />
                        </div>
                    </div>


                </div>

                <div className={activeButtonIndex === 1 ? 'w-[100%] h-[400px]  block' : 'hidden'}>
                <div className='w-full h-96 mt-2'>
                        <div className='w-[1185px] h-96  ml-10 flex justify-between overflow-hidden'>
                            <Itemstr
                                image={ht1}
                                usp='60W Rms Sound'
                                offer='Engraving Available'
                                name='Aavante Bar 1150'
                                price='5,299'
                                discount='47%off'
                                beforedisprice='9,990'
                                //   colors='+5'
                                rating='5.0'
                                number='1'
                            />

                            <Itemstr
                                offer='false'
                                image={ht2}
                                usp='60W Rms Sound'
                                name='Aavante Bar Rhythm'
                                price='4,999'
                                discount='37%off'
                                beforedisprice='7,990'
                                //   colors='+5'
                                rating='firstuser'
                                number='182' />
                            <Itemstr
                                offer='false'
                                image={ht3}
                                usp='160W Rms Sound'
                                name='Aavante Bar Raga'
                                price='5,499'
                                discount='66%off'
                                beforedisprice='15,990'
                                //    colors='+5'
                                rating='firstuser'
                                number='31' />
                            <Itemstr
                                offer='&#8377;200 OFF ON BIG200'
                                image={ht4}
                                usp='16W Rms Sound'
                                name='Aavante Bar 558'
                                price='2,199'
                                discount='45%off'
                                beforedisprice='3,990'
                                //    colors='+5'
                                rating='firstuser'
                                number='647' />
                        </div>
                    </div>
               </div>

                <div className={activeButtonIndex === 2 ? 'w-[100%]  h-[400px]  block' : 'hidden'}>
                    
                <div className='w-full h-96 mt-2'>
                        <div className='w-[1185px] h-96  ml-10 flex justify-between overflow-hidden'>
                            <Itemstr
                                image={te1}
                                usp='40 Hours Playback'
                                offer='false'
                                name='Airdopes Atom 81'
                                price='1,099'
                                discount='69%off'
                                beforedisprice='3,490'
                                //   colors='+5'
                                rating='5.0'
                                number='11'
                            />

                            <Itemstr
                                offer='false'
                                image={te2}
                                usp='Clear Calling'
                                name='Airdopes 115'
                                price='1,299'
                                discount='57%off'
                                beforedisprice='2,990'
                                //   colors='+5'
                                rating='4.9'
                                number='104' />
                            <Itemstr
                                offer='false'
                                image={te3}
                                usp='Gaming Earbuds'
                                name='Airdopes 191G'
                                price='1,399'
                                discount='60%off'
                                beforedisprice='3,490'
                                //    colors='+5'
                                rating='4.9'
                                number='58' />
                            <Itemstr
                                offer='false'
                                image={te4}
                                usp='20 Hours Playback'
                                name='Airdopes 383'
                                price='2,999'
                                discount='71%off'
                                beforedisprice='4,990'
                                //    colors='+5'
                                rating='4.7'
                                number='6' />
                        </div>
                    </div>


                    
                    
               </div>

                <div className={activeButtonIndex === 3 ? 'w-[100%]  h-[400px]  block' : 'hidden'}>
                         
                <div className='w-full h-96 mt-2'>
                        <div className='w-[1185px] h-96  ml-10 flex justify-between overflow-hidden'>
                            <Itemstr
                                image={tw1}
                                usp='BT Calling'
                                offer='false'
                                name='Lunar Connect'
                                price='1,799'
                                discount='78%off'
                                beforedisprice='7,999'
                                //   colors='+5
                                rating='4.9'
                                number='15'
                            />

                            <Itemstr
                                offer='false'
                                image={tw2}
                                usp='BT Calling'
                                name='Storm Call'
                                price='1,499'
                                discount='81%off'
                                beforedisprice='7,990'
                                //   colors='+5'
                                rating='4.8'
                                number='27' />
                            <Itemstr
                                offer='false'
                                image={tw3}
                                usp='Health Monitoring'
                                name='Wave Lite'
                                price='1,799'
                                discount='74%off'
                                beforedisprice='6,990'
                                //    colors='+5'
                                rating='4.9'
                                number='61' />
                            <Itemstr
                                offer='false'
                                image={tw4}
                                usp='BT Calling'
                                name='Wave Call'
                                price='1,699'
                                discount='79%off'
                                beforedisprice='7,990'
                                //    colors='+5'
                                rating='4.9'
                                number='49' />
                        </div>
                    </div>

                    
                </div>

                <div className={activeButtonIndex === 4 ? 'w-[100%]  h-[400px]  block' : 'hidden'}>
                <div className='w-full h-96 mt-2'>
                        <div className='w-[1185px] h-96  ml-10 flex justify-between overflow-hidden'>
                            <Itemstr
                                image={ca1}
                                usp='none'
                                offer='false'
                                name='Qc Car Charger'
                                price='499'
                               discount='50%off'
                                beforedisprice='999'
                                //   colors='+5
                                rating='4.9'
                                number='15'
                            />

                            <Itemstr
                                offer='false'
                                image={ca2}
                                usp='BT Calling'
                                name='Turbo Car Charger'
                                price='499'
                               discount='50%off'
                                beforedisprice='999'
                                //   colors='+5'
                                rating='4.9'
                                number='13' />
                            <Itemstr
                                offer='false'
                                image={ca3}
                                usp='Health Monitoring'
                                name='F Type Car Charger'
                                price='499'
                               discount='50%off'
                                beforedisprice='999'
                                //    colors='+5'
                                rating='5.0'
                                number='3' />
                            <Itemstr
                                offer='false'
                                image={ca4}
                                usp='Quick Charger 3.0'
                                name='Rapid Car Charger'
                                discount='33%off'
                                beforedisprice='899'
                                //    colors='+5'
                                rating='4.9'
                                price='499'
                                number='15' />
                        </div>
                    </div>

                    
                 </div>


            </div>
        </div>
    )
}

export default Bestofboat