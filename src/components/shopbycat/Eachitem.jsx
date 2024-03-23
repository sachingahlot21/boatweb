import React from 'react'

function Eachitem({ image, title }) {
    return (
        <>
            <div className='w-[74px] h-[126px] md:w-[98px] md:h-[150px] '>
                <div className='w-[72px] h-[72px] mt-4 md:m-auto '>
                    <img src={image} alt='no img'></img>
                </div>
                <div className='font-semibold text-gray-700 text-sm md:text-sm text-[10px] md:mt-3 mt-0  leading-none text-center overflow-y-hidden' >
                    {title}
                </div>
            </div>
        </>
    )
}

export default Eachitem