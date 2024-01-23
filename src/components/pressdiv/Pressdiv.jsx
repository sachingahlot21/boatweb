import React from 'react'
import { useState } from 'react'
import Presscomp from './Presscomp'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import med1 from './med1.png'
import med2 from './med2.jpg'
import med3 from './med3.jpg'
import med4 from './med4.jpg'
import med5 from './med5.jpg'



function Pressdiv() {
  const [activeDiv, setActiveDiv] = useState(0)

  const handleNextClick = () => {
    if (activeDiv === 4)
    {setActiveDiv(0)}

    else {
      setActiveDiv(activeDiv + 1)
    }
  }

  const handlePrevClick = () => {
    if (activeDiv === 0) setActiveDiv(4)
    else setActiveDiv(activeDiv - 1)

  }
  


  return (
    <div className='w-[1275px] h-[350px] mt-4 mb-9 overflow-hidden relative'>
      <div className='md:w-screen md:h-10 pl-10 mb-2'>
        <h3 className='text-2xl font-normal'>In the<span className='font-bold'>Press</span></h3>
        <div className='md:w-6 bg-red-600 h-0.5 ml-[94px]'>
        </div>
      </div>
      <div className='w-[1195px] h-[280px] flex   m-auto overflow-hidden'>
        <div id='first' className={'min-w-[1200px] h-[280px] delay-300  transition-all duration-500   ' + (activeDiv === 1 ? 'ml-[-1200px]' : 'ml-px')}>
          <Presscomp 
          image={med1} 
          text ='Warburg invests $100 mn in boAt '
          />
        </div>
        <div className={'min-w-[1200px] h-[280px]  transition-all  delay-300 duration-500  ' + (activeDiv === 2 ? 'ml-[-2400px]' : 'ml-px')}>
        <Presscomp 
          image={med2} 
          text ="How India's boAt became the fifth largest wearable brand in the world" 
          />
        </div>
        <div className={'min-w-[1200px] h-[280px]  transition-all  delay-300  duration-500    ' + (activeDiv === 3? 'ml-[-3600px]' : 'ml-px')}>
        <Presscomp 
          image={med3} 
          text ="The Airdopes 441 is sweat proof and packs in crisp audio. Great for fitness enthusiasts."
          />
        </div>
        <div className={'min-w-[1200px] h-[280px] transition-all  delay-300  duration-500   ' + (activeDiv === 4 ? 'ml-[-4810px]' : 'ml-px')}>
        <Presscomp 
          image={med4} 
          text ="IPL 2020: boAt becomes the official audio partner for six teams"
          />
        </div>
        <div className={'min-w-[1200px] h-[280px]  transition-all  delay-300  duration-500  ' + (activeDiv === 5 ? 'ml-[-6010px]' : 'ml-px')}>
        <Presscomp 
          image={med5} 
          text ="TWS Earbuds Shipments in India Up 723 Percent YoY in Q3, Boat Emerged as Leading Player: Counterpoint"
          />
        </div>
      </div>
      <div className='absolute top-[270px] left-[850px]'>
      <button onClick={handlePrevClick}><div className='rounded-full mt-2 w-[35px] h-[35px] bg-[rgb(227,233,236)] hover:bg-[rgb(208,217,222)]  flex '><IoIosArrowBack className='m-auto text-xl text-[rgb(162,162,162)] hover:text-black'  /></div></button>
      <button onClick={handleNextClick}><div className='rounded-full mt-2   w-[35px] h-[35px] bg-[rgb(227,233,236)] hover:bg-[rgb(208,217,222)] flex '><IoIosArrowForward  className='m-auto text-xl text-[rgb(162,162,162)] hover:text-black' /></div></button>
      </div>
    </div>
  )
}export default Pressdiv