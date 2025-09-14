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
    return (
        <>
            <div id='header' className='w-[1250px] h-[97px] ml-2 xl:ml-9 bg-white'>
                <div className='h-[35px] w-[1250px] flex justify-between overflow-hidden'>
                    <div className='h-[35px] w-[300px '>
                        <h3 className='text-2xl font-normal'>Best Of <span className='font-bold'>boAt</span></h3>
                        <div className='md:w-6 bg-red-600 h-0.5 ml-[113px]'></div>
                    </div>

                    <div className=' h-[35px] w-[100px] ml-[400px] mr-2  mt-1.5 text-sm float-right'>
                        <div className='flex font-bold  text-center text-[#2f5b97]'>View All <IoArrowForwardCircleOutline className='font-bold ml-1 mt-1 text-center' /></div>
                    </div>
                </div>
                <div className='w-[1195px] h-[60px] bg-white '>
                    <div className='w-[1195px] h-[60px]  pt-4 flex justify-start'>
                        <button
                            className={activeButtonIndex === 0 ? " bg-[#ecf0f4] rounded-[18px] w-[126px] h-[32px] bg-none text-black mr-2 font-bold " : "  bg-white w-[123px] h-[32px] bg-none text-[#696868] mr-2 "}
                            onClick={() => setActiveButtonIndex(0)}
                        >Best Sellers</button>
                        <button
                            className={activeButtonIndex === 1 ? "bg-[#ecf0f4] rounded-[18px] w-[309px] h-[32px] bg-none text-black mr-2 font-bold" : "bg-white w-[300px] h-[32px] bg-none text-[#696868] mr-2"}
                            onClick={() => setActiveButtonIndex(1)}
                        >Home Theatre Systems & Soundbars</button>
                        <button
                            className={activeButtonIndex === 2 ? " bg-[#ecf0f4]  rounded-[18px] w-[135px] h-[32px] bg-none text-black mr-2 font-bold" : "bg-white w-[123px] h-[32px] bg-none text-[#696868] mr-2"}
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
            <div id='divblocks' className=' overflow-x-scroll no-scrollbar w-full h-[400px] '>
                <div className={activeButtonIndex === 0 ? ' w-[1250px]  h-[400px]  block' : 'hidden'}>
                    <div className='w-full h-96 mt-2 overflow-x-scroll no-scrollbar'>
                        <div className='w-full h-96  xl:ml-10 ml-2 flex justify-between '>
                            <Itemstr

                                image={bs1}
                                usp='40 Hours Playback'
                                offer='Engraving Available'
                                itemName='Airdopes 161'
                                price='999'
                                discount='60%off'
                                priceBefore='2,490'
                                //   colors='+5'
                                rating='4.9'
                                number='150'
                                productid='boboat1'
                                count='0'
                                category='ear_buds'
                            />

                            <Itemstr
                                productid='boboat2'
                                offer='Engraving Available'
                                image={bs2}
                                usp='40 Hours Playback'
                                itemName='Airdopes 131 pro'
                                price='999'
                                discount='67%off'
                                priceBefore='2,990'
                                //   colors='+5'
                                rating='4.9'
                                number='182'
                                category='ear_buds'
                                count='0'
                            />
                            <Itemstr
                                productid='boboat3'
                                offer='false'
                                image={bs3}
                                usp='BT Calling'
                                itemName='Wave Flex Connect'
                                price='1499'
                                discount='81%off'
                                priceBefore='7,990'
                                //    colors='+5'
                                rating='4.8'
                                number='31'
                                category='ear_buds'
                                count='0' />
                            <Itemstr
                                productid='boboat4'
                                offer='&#8377;200 OFF ON BIG200'
                                image={bs4}
                                usp='42 Hours Playback'
                                itemName='Airdopes 141'
                                price='1299'
                                discount='71%off'
                                priceBefore='4,490'
                                //    colors='+5'
                                rating='4.9'
                                number='647'
                                category='ear_buds'
                                count='0' />
                        </div>
                    </div>


                </div>
                <div className={activeButtonIndex === 1 ? 'w-[1250px] h-[400px]  block' : 'hidden'}>
                    <div className='w-full h-96 mt-2'>
                        <div className='w-[1185px] h-96  xl:ml-10 ml-2 flex justify-between overflow-hidden'>
                            <Itemstr
                                productid='boboat4'
                                image={ht1}
                                usp='60W Rms Sound'
                                offer='Engraving Available'
                                itemName='Aavante Bar 1150'
                                price='5299'
                                discount='47%off'
                                priceBefore='9,990'
                                //   colors='+5'
                                rating='5.0'
                                number='1'
                                category='home_theater'
                                count='0'
                            />

                            <Itemstr
                                productid='boboat6'
                                offer='false'
                                image={ht2}
                                usp='60W Rms Sound'
                                itemName='Aavante Bar Rhythm'
                                price='4999'
                                discount='37%off'
                                priceBefore='7,990'
                                //   colors='+5'
                                rating='firstuser'
                                number='182'
                                category='home_theater'
                                count='0' />
                            <Itemstr
                                productid='boboat7'
                                offer='false'
                                image={ht3}
                                usp='160W Rms Sound'
                                itemName='Aavante Bar Raga'
                                price='5499'
                                discount='66%off'
                                priceBefore='15,990'
                                //    colors='+5'
                                rating='firstuser'
                                number='31'
                                category='home_theater'
                                count='0' />
                            <Itemstr
                                productid='boboat8'
                                offer='&#8377;200 OFF ON BIG200'
                                image={ht4}
                                usp='16W Rms Sound'
                                itemName='Aavante Bar 558'
                                price='2199'
                                discount='45%off'
                                priceBefore='3,990'
                                //    colors='+5'
                                rating='firstuser'
                                number='647'
                                category='home_theater'
                                count='0' />
                        </div>
                    </div>
                </div>
                <div className={activeButtonIndex === 2 ? 'w-[1250px]  h-[400px]  block' : 'hidden'}>
                    <div className='w-full h-96 mt-2'>
                        <div className='w-[1185px] h-96  xl:ml-10 ml-2 flex justify-between overflow-hidden'>
                            <Itemstr
                                productid='boboat9'
                                image={te1}
                                usp='40 Hours Playback'
                                offer='false'
                                itmName='Airdopes Atom 81'
                                price='1099'
                                discount='69%off'
                                priceBefore='3,490'
                                //   colors='+5'
                                rating='5.0'
                                number='11'
                                category='top_earbuds'
                                count='0'
                            />

                            <Itemstr
                                productid='boboat10'
                                offer='false'
                                image={te2}
                                usp='Clear Calling'
                                itemName='Airdopes 115'
                                price='1299'
                                discount='57%off'
                                priceBefore='2,990'
                                //   colors='+5'
                                rating='4.9'
                                number='104'
                                category='top_earbuds'
                                count='0'
                            />
                            <Itemstr
                                productid='boboat11'
                                offer='false'
                                image={te3}
                                usp='Gaming Earbuds'
                                itemName='Airdopes 191G'
                                price='1399'
                                discount='60%off'
                                priceBefore='3,490'
                                //    colors='+5'
                                rating='4.9'
                                number='58'
                                category='top_earbuds'
                                count='0'
                            />
                            <Itemstr
                                productid='boboat12'
                                offer='false'
                                image={te4}
                                usp='20 Hours Playback'
                                itemName='Airdopes 383'
                                price='2999'
                                discount='71%off'
                                priceBefore='4,990'
                                //    colors='+5'
                                rating='4.7'
                                number='6'
                                category='top_earbuds'
                                count='0'
                            />
                        </div>
                    </div>
                </div>
                <div className={activeButtonIndex === 3 ? 'w-[1250px]  h-[400px]  block' : 'hidden'}>
                    <div className='w-full h-96 mt-2'>
                        <div className='w-[1185px] h-96 xl:ml-10 ml-2 flex justify-between overflow-hidden'>
                            <Itemstr
                                productid='boboat13'
                                image={tw1}
                                usp='BT Calling'
                                offer='false'
                                itemName='Lunar Connect'
                                price='1799'
                                discount='78%off'
                                priceBefore='7,999'
                                //   colors='+5
                                rating='4.9'
                                number='15'
                                category='top_watches'
                                count='0'
                            />

                            <Itemstr
                                productid='boboat14'
                                offer='false'
                                image={tw2}
                                usp='BT Calling'
                                itemName='Storm Call'
                                price='1499'
                                discount='81%off'
                                priceBefore='7,990'
                                //   colors='+5'
                                rating='4.8'
                                number='27'
                                category='top_watches'
                                count='0'
                            />
                            <Itemstr
                                productid='boboat15'
                                offer='false'
                                image={tw3}
                                usp='Health Monitoring'
                                itemName='Wave Lite'
                                price='1,799'
                                discount='74%off'
                                priceBefore='6,990'
                                //    colors='+5'
                                rating='4.9'
                                number='61'
                                category='top_watches'
                                count='0'
                            />
                            <Itemstr
                                productid='boboat16'
                                offer='false'
                                image={tw4}
                                usp='BT Calling'
                                itemName='Wave Call'
                                price='1,699'
                                discount='79%off'
                                priceBefore='7,990'
                                //    colors='+5'
                                rating='4.9'
                                number='49'
                                category='top_watches'
                                count='0' />
                        </div>
                    </div>
                </div>
                <div className={activeButtonIndex === 4 ? 'w-[1250px]  h-[400px]  block' : 'hidden'}>
                    <div className='w-full h-96 mt-2'>
                        <div className='w-[1185px] h-96  xl:ml-10 ml-2 flex justify-between overflow-hidden'>
                            <Itemstr
                                productid='boboat17'
                                image={ca1}
                                usp='none'
                                offer='false'
                                itemName='Qc Car Charger'
                                price='499'
                                discount='50%off'
                                priceBefore='999'
                                //   colors='+5
                                rating='4.9'
                                number='15'
                                category='car_access'
                                count='0'

                            />

                            <Itemstr
                                productid='boboat18'
                                offer='false'
                                image={ca2}
                                usp='BT Calling'
                                itemName='Turbo Car Charger'
                                price='499'
                                discount='50%off'
                                priceBefore='999'
                                //   colors='+5'
                                rating='4.9'
                                number='13'
                                category='car_access'
                                count='0' />
                            <Itemstr
                                productid='boboat19'
                                offer='false'
                                image={ca3}
                                usp='Health Monitoring'
                                itemName='F Type Car Charger'
                                price='499'
                                discount='50%off'
                                priceBefore='999'
                                //    colors='+5'
                                rating='5.0'
                                number='3'
                                category='car_access'
                                count='0' />
                            <Itemstr
                                productid='boboat20'
                                offer='false'
                                image={ca4}
                                usp='Quick Charger 3.0'
                                itemName='Rapid Car Charger'
                                discount='33%off'
                                priceBefore='899'
                                //    colors='+5'
                                rating='4.9'
                                price='499'
                                number='15'
                                category='car_access'
                                count='0' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bestofboat