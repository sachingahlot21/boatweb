import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaRegThumbsUp } from "react-icons/fa"
import { FaStar } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";
import { FcFlashOn } from "react-icons/fc";
import { RxDividerHorizontal } from "react-icons/rx";
import { MdOutlineMaximize } from "react-icons/md";

function MainTemplate(
    { itemName,
        category,
        rating,
        sold,
        price,
        priceBefore,
        discount,
        offer,
        usp,
        image,
        usp2,
        usp3,
    }
) {
    return (
        <>
            <div className='w-[390px] h-[200px] bg-[rgb(250,250,250)] rounded-md flex mt-4 mr-4 border-[1px] border-neutral-200'>
                <div className='w-[177px] h-[182px] bg-slate-400 mt-2 ml-2 rounded-md relative'>
                    <div className='h-[156px] w-[177px] bg-slate-100 object-contain overflow-hidden pb-4'>
                        <img src={image} alt='no img' className=''></img>
                    </div>
                    <div className='h-[26px] w-[177px] bg-[rgb(252,197,11)] flex'>
                        <span className='m-auto font-bold text-xs' >{usp}</span>
                    </div>


                    {
                        offer === 'none' ? null :
                            <span className='absolute top-3 h-[20px] bg-black text-[10px]  pr-1  text-white flex rounded-r-md'>
                                {
                                    offer != 'New Lauch' ? <FaRegThumbsUp className='text-[#fcc50b] ml-1 mt-1 font-bold' /> : <FcFlashOn className='ml-1 mt-1 font-extrabold text-sm text-[#fcc50b]' />
                                }
                                <div className='ml-1 mt-0.5 pr-2 font-semibold'>
                                    {offer}
                                </div>
                            </span>
                    }
                </div>
                <div>

                    <div className='mt-3 ml-3 flex'>
                        <FaStar className='text-[#fcc50b] mr-1 ' />
                        {
                            rating === 'firstuser' ? <div className='text-sm h-[22px]    overflow-hidden pb-1 '>Be first to review</div> :
                                <div className='flex'>
                                    <div className='text-xs font-semibold'>{rating}</div>
                                    <RxDividerVertical className='text-slate-300 ' />
                                    <div className='text-xs font-semibold'>{sold}</div>
                                    <MdVerified className='text-[#0b9c6b] ml-1 ' />
                                </div>
                        }

                    </div>
                    <div className='font-bold text-l mt-1 ml-3'>{itemName}</div>
                    <div className='flex mt-1  ml-3'>
                        <div className='font-bold text-base'>&#8377;{price} </div>
                        <div className='line-through text-xs text-slate-400 font-semibold ml-1 mt-1.5'>&#8377;{priceBefore}</div>
                        <div className='text-xs font-bold text-[#0b9c6b] ml-1 mt-1.5' >{discount}</div>

                    </div>
                    <div className='w-[185px] h-[1px] mt-2 bg-slate-300 ml-2'></div>
                    <div className='h-[52px] overflow-hidden '>
                        <div className='flex flex-wrap text-[9px] mt-2 ml-3 overflow-hidden'>
                            <div className='h-[20px] bg-[rgb(239,244,247)] pr-2 pt-0.5 pl-1 mr-1 rounded-full mb-1'>{usp2}</div>
                            <div className='h-[20px] bg-[rgb(239,244,247)] pr-2 pt-0.5 pl-1 rounded-full mb-1'>{usp3}</div>
                        </div>

                    </div>
                    <div className='h-[52px] b flex'>
                        <button className='rounded-xl m-auto h-[40px] w-[180px] bg-[rgb(0,0,0)] text-white'>Add To Cart</button>

                    </div>


                </div>

            </div>
        </>
    )
}

export default MainTemplate