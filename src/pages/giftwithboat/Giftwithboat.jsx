import React from 'react'
import giftimg1 from './giftimg1.jpg'
import giftimg2 from './giftimg2.jpg'
import giftimg3 from './giftimg3.jpg'
import giftimg4 from './giftimg4.jpg'
import giftimg5 from './giftimg5.jpg'

function Giftwithboat() {
    return (
        <div className='pt-[135px] w-[100vw] h-[1600px]'>

            <div className='w-[1300px] h-[430px]  flex flex-wrap'>

                <div className='w-[620px] h-[420px] overflow-hidden ml-2 mr-2'>
                    <img className='object-cover' src={giftimg1} alt='no img'></img>
                </div>
                <div className='w-[620px] h-[417px] overflow-hidden'>
                    <img src={giftimg2} alt='no img'></img>
                </div>
            </div>

            <div className='w-[1280px] h-[570px] '>
                <img src={giftimg3} alt='no img'></img>
            </div>

            <div className='w-[1300px] h-[430px]  flex flex-wrap mt-2'>
               
                <div className='w-[620px] h-[420px] overflow-hidden ml-2 mr-2 '>
                    <img className='object-cover' src={giftimg4} alt='no img'></img>
                </div>
                <div className='w-[620px] h-[417px] overflow-hidden'>
                    <img src={giftimg5} alt='no img'></img>
                </div>

            </div>
        </div>
    )
}

export default Giftwithboat