import React from 'react'
import { Link } from 'react-router-dom'
import bulkorderimg1 from './bulkorderimg1.jpg'

function BulkOrder() {
  return (

    <div className='pt-[145px] w-[1275px] h-[740px] bg-[rgb(245,250,253)] flex overflow-hidden'>
      <div className='w-[563px] h-[594px]'>
        <img src={bulkorderimg1} alt='no img'></img>
      </div>
      <div className='w-[715px] h-[600px]  px-[75px] py-[25px]'>
       
        <div className='w-[590px] h-[123px] mb-[60px] overflow-hidden '>
          <p className='font-bold text-6xl  overflow-hidden text-[rgb(35,35,35)]'>Your Bulk Orders</p>
          <p className='text-6xl mt-1 text-[rgb(35,35,35)] overflow-hidden'>Are Now Hassle Free</p>
        </div>

        <div className='mb-[5px] w-[520px] h-[100px]'>
          <p className=' font-bold text-5xl h-[55px] overflow-hidden text-[rgb(35,35,35)] '>Got A Big boAt Order?</p>
          <p className='font-semibold text-2xl  overflow-hidden text-[rgb(35,35,35)]'>Come sail with us</p>
        </div>
       
        <div className='mb-[2px] w-[560px] h-[120px]'>
          <p className='font-semibold text-2xl overflow-hidden text-[rgb(35,35,35)]'>For shipments of 25 units or more,</p>
          <p className='font-bold text-2xl overflow-hidden text-[rgb(35,35,35)]'>Hit us up!</p>
        </div>
       
        <div className='w-[562px] rounded-lg h-[62px] bg-[rgb(35,35,35)] m-auto text-center'>
          <button className='rounded-md font-bold text-xl mt-4 text-white m-auto text-center al overflow-hidden '>Submit Your Requirements</button>
        </div>

      </div>

    </div>

  )
}

export default BulkOrder