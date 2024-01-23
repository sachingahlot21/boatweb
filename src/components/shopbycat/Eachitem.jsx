import React from 'react'

function Eachitem({ image, title }) {
    return (
        <>
            <div>
                <div className='md:w-[98px] md:h-[82px] w-[70px] h-[70px] overflow-hidden'>
                    <div className='md:w-[82px] w-[70px] h-[70px] md:h-[82px] ml-2'><img src={image} alt='no img'></img></div>

                </div>
                <div className='md:w-[98px] md:h-[40px] font-semibold text-gray-700 md:text-sm text-[10px] md:mt-3 mt-0 overflow-hidden leading-none text-center' >
                    {title}
                </div>
            </div>
        </>
    )
}

export default Eachitem