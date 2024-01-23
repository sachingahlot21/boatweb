import React from 'react'
import { FaRegThumbsUp } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";
import { FcFlashOn } from "react-icons/fc";
function Itemstr({
    image,
    usp,
    offer,
    name,
    price,
    discount,
    beforedisprice,
    colors,
    rating,
    number }) {
    return (
        <>
            <div className='h-[380px] w-[280px] bg-[#fafafa] relative rounded-lg border-[1px] border-slate-300 overflow-hidden'>

                <div className='w-[280px] h-[280px] overflow-hidden position-relative'>
                    <div className=' position-absolute top-3 pb-8'>
                    <img src={image} alt='no img' className='overflow-hidden mb-8 object-fill '></img>
                    </div>
                </div>

                <div className='w-[280px] h-[100px] flex pt-4 '>
                    <div className='w-[180px] pl-3'>
                        <div className='font-bold text-sm'>{name}</div>
                        <div className='flex mt-1.5'>
                            <div className='font-bold text-base'>&#8377;{price} </div>
                            <div className='line-through text-xs text-slate-400 font-semibold ml-1 mt-1.5'>&#8377;{beforedisprice}</div>
                            <div className='text-xs font-bold text-[#0b9c6b] ml-1 mt-1.5' >{discount}</div>

                        </div>
                        
                       
                        <div className='mt-1.5 flex'>
                            <FaStar className='text-[#fcc50b] mr-1 ' />
                            {
                            rating === 'firstuser' ? <div className='text-sm h-[22px]    overflow-hidden pb-1 '>Be first to review</div> :
                            <div className='flex'>
                            <div className='text-xs font-semibold'>{rating}</div>
                            <RxDividerVertical className='text-slate-300 ' />
                            <div className='text-xs font-semibold'>{number}</div>
                            <MdVerified className='text-[#0b9c6b] ml-1 ' />
                            </div>
                            }
                            
                        </div>
                    </div>
                    <div>
                        <div>{colors}</div>
                        <div className='w-[108px] h-[40px] mt-8 mr-6' ><button className='w-[106px] h-[39px] bg-black text-white rounded-lg '>Add To Cart</button></div>
                    </div>

                </div>

                {
                    offer === 'false' ? null :
                        <div id='offerid' className='absolute top-3  h-[20px] bg-black overflow-hidden rounded-r-md '>

                            <h3 className='text-[10px] font-bold text-white flex '>
                                {
                                    offer != 'New Launch' ? <FaRegThumbsUp className='text-[#fcc50b] ml-1 mt-1 font-bold' /> : <FcFlashOn className='ml-1 mt-1 font-extrabold text-sm'/>
                                }
                                
                                <div className='ml-1 mt-0.5 pr-2'>
                                    {offer}
                                </div>
                            </h3>
                        </div>
                }

                {
                    usp === 'none' ? null :  <div className='absolute top-[265px] left-11 w-[196px] h-[25px] bg-[#fcc50b] border-[1px] border-white overflow-hidden rounded-lg'>
                    <h3 className='text-xs font-bold ml-10 mt-1'>{usp}</h3>
                </div>
                }
               


            </div>

        </>
    )
}

export default Itemstr