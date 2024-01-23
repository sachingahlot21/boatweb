import React from 'react'

function Jtbcomp({ name, video, price, image, discount, beforedisprice }) {
    return (
        <div className='min-w-[240px] h-[540px] bg-white border-[1px] border-slate-200 mr-6 relative rounded-xl'>

            <div className='w-[240px] h-[400px]  overflow-hidden relative'>
            <video autoPlay loop preload  muted  ><source src={video} type="video/mp4"  /></video>
            </div>
            <div className='w-full min-h-[130px]'>
                <div className='w-full h-[75px] pt-14 overflow-hidden text-center text-sm font-bold'>
                    <div>{name}</div>
                </div>
                <div className='w-full min-h-[55px] flex'>
                    <div className=' h-[30px] w-auto m-auto flex'>
                    <div className='font-bold text-xl mr-1'>&#8377;{price} </div>
                    <div className='line-through text-l pb-1 overflow-hidden mr-1 text-slate-400 font-semibold ml-1 mt-1'>&#8377;{beforedisprice}</div>
                    <div className='text-l font-bold pb-2 overflow-hidden mr-1 text-[#0b9c6b] ml-1 mt-1' >{discount}</div>
                    </div>
                </div>
            </div>


            <div className=' border-[1px] border-slate-200 absolute w-[50px] h-[50px] bg-black left-24 bottom-[105px]'>
                
                <img src={image} alt='noimg'></img>
            </div>

        </div>
    )
}

export default Jtbcomp