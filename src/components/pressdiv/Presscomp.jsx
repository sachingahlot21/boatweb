import React from 'react'
import { BiSolidQuoteRight } from "react-icons/bi";


function Presscomp({ image ,text }) {
    return (
        <div className='min-w-[1000px] h-[280px] flex'>
            <div className='w-[40%] bg-[rgb(208,217,222)] flex justify-center text-center '>
                <div className='m-auto'>
                    <img className='w-[160px] h-[54px]' src={image} alt='no img'></img>
                </div>
            </div>
            <div className='w-[60%] bg-[rgb(247,249,250)] pt-6 '>
                <div className='w-[650px] h-[57px]  m-auto flex overflow-hidden'>
               
                <BiSolidQuoteRight className='w-[50px] h-[60px] text-[rgb(102,102,104)] m-auto'/>

                </div>
                <div className='w-[650px] h-[150px]  m-auto flex justify-center overflow-hidden '>
                    <div className=' text-center w-[440px]  text-[rgb(102,102,104)] text-3xl overflow-hidden'> {text}</div>
              
                </div>

            </div>

        </div>
    )
}

export default Presscomp