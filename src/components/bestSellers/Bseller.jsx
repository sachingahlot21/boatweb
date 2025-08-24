import React from 'react'
import './autoplay.js'
function Bseller({ name, video }) {
  
  return (
    <>
      <div className='md:w-[160px] md:h-[180px] w-[160px] h-[180px] no-scrollbar overflow-x-scroll md:overflow-hidden'>
        <div className='rounded-lg'>
          <video className='overflow-hidden'autoPlay loop preload  muted  ><source src={video} type="video/mp4"  /></video>
          </div>
        <div className='flex justify-center '>
          <div className='text-xs font-medium'> {name}</div>
        </div>
      </div>
    </>
  )
}

export default Bseller