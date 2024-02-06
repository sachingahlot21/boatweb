import React from 'react'
import locationimg from './locationimg.jpg'
import { TbFileSad } from "react-icons/tb";


function Storelocator() {
  return (

    <div className='pt-[120px] m-auto'>
         <div>
            <img src={locationimg} alt='no img'></img>
        </div>

        Sorry! Updating Stores Soon...<div className='text-xl'><TbFileSad/></div>
       
    </div>
  )
}

export default Storelocator