import React from 'react'
import { BiSolidQuoteRight } from "react-icons/bi";


function Presscomp2({ image, text }) {
    return (
        <div className='min-w-[100%]  overflow-hidden h-[600px] bg-[rgb(208,217,222)]'>
            <div>
            <BiSolidQuoteRight className='w-[50px] h-[60px] text-[rgb(102,102,104)] m-auto'/>
            </div>
            <div className='w-[90%] h-fit text-[rgb(102,102,104)] text-2xl  m-auto text-center'>
                <p>{text}</p>
            </div>
            <div className='w-[30%] h-fit  m-auto mt-[30px]'>
                <img src={image} alt='no img'></img>
            </div>
        </div>
    )
}

export default Presscomp2