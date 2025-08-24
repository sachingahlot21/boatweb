import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import life1 from './life1.jpg'
import life2 from './life2.jpg'
import life3 from './life3.jpg'
import life4 from './life4.jpg'
import life5 from './life5.jpg'
//ABB. FOR SHOP BY LIFESTYLE
function Shopbylife() {
    return (
        <>
            <div className=' ml-4 lg:ml-10  h-[38px] mt-7 '>
                
                <h3 className='text-2xl font-normal'>Shop by <span className='font-bold'>Lifestyle</span></h3>
                <div className='md:w-6 w-6 bg-red-600 h-0.5 ml-[162px]'></div>
        
            </div>
            <div className=' overflow-x-scroll no-scrollbar   ml-2 lg:ml-12 w-full h-[486px] mt-2 '>
                <div className=' overflow-x-scroll no-scrollbar  w-[1215px] h-[457px] flex justify-between 2xl:mx-auto'>
                    <div className='w-[223px] overflow-x-scroll no-scrollbar h-[420px] bg-slate-200 overflow-y-hidden rounded-xl'>
                        <div className='w-[223px] h-[332px] bg-white'>
                            <img src={life1} alt='no img' ></img>
                        </div>
                        <div className='w-[223px] h-[90px] bg-[#eff4f7] overflow-hidden'>
                            <div className='text-center font-bold text-2xl mt-4'>For Fitness</div>
                            <div className=' md:h-8 md:w-24 ml-20  mt-1.5 text-sm'>
                                <div className='flex font-bold  text-center text-[#2f5b97]'>View All <IoArrowForwardCircleOutline className='font-bold ml-1 mt-1 text-center' /></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[223px] overflow-x-scroll no-scrollbar h-[420px] bg-slate-500 overflow-y-hidden rounded-xl'>
                        <div className='w-[223px] h-[332px] bg-white'>
                            <img src={life2} alt='no img' ></img>
                        </div>
                        <div className='w-[223px] h-[90px] bg-[#eff4f7] overflow-hidden'>
                            <div className='text-center font-bold text-2xl mt-4'>For Parties</div>
                            <div className=' md:h-8 md:w-24 ml-20  mt-1.5 text-sm'>
                                <div className='flex font-bold  text-center text-[#2f5b97]'>View All <IoArrowForwardCircleOutline className='font-bold ml-1 mt-1 text-center' /></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[223px] overflow-x-scroll no-scrollbar h-[420px] bg-slate-200 overflow-y-hidden rounded-xl'>
                        <div className='w-[223px] h-[332px] bg-white'>
                            <img src={life3} alt='no img' ></img>
                        </div>
                        <div className='w-[223px] h-[90px] bg-[#eff4f7] overflow-hidden'>
                            <div className='text-center font-bold text-2xl mt-4'>For Work</div>
                            <div className=' md:h-8 md:w-24 ml-20  mt-1.5 text-sm'>
                                <div className='flex font-bold  text-center text-[#2f5b97]'>View All <IoArrowForwardCircleOutline className='font-bold ml-1 mt-1 text-center' /></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[223px] overflow-x-scroll no-scrollbar h-[420px] bg-slate-500 overflow-y-hidden rounded-xl'>
                        <div className='w-[223px] h-[332px] bg-white'>
                            <img src={life4} alt='no img' ></img>
                        </div>
                        <div className='w-[223px] h-[90px] bg-[#eff4f7] overflow-hidden'>
                            <div className='text-center font-bold text-2xl mt-4'>For Entertainment</div>
                            <div className=' md:h-8 md:w-24 ml-20  mt-1.5 text-sm'>
                                <div className='flex font-bold  text-center text-[#2f5b97]'>View All <IoArrowForwardCircleOutline className='font-bold ml-1 mt-1 text-center' /></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[223px] overflow-x-scroll no-scrollbar h-[420px] bg-[#dddddd] overflow-y-hidden rounded-xl'>
                        <div className='w-[223px] h-[332px] bg-white'>
                            <img src={life5} alt='no img' ></img>
                        </div>
                        <div className='w-[223px] h-[90px] bg-[#eff4f7] overflow-hidden'>
                            <div className='text-center font-bold text-2xl mt-4'>For Audiophiles</div>
                            <div className=' md:h-8 md:w-24 ml-20  mt-1.5 text-sm'>
                                <div className='flex font-bold  text-center text-[#2f5b97]'>View All <IoArrowForwardCircleOutline className='font-bold ml-1 mt-1 text-center' /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Shopbylife