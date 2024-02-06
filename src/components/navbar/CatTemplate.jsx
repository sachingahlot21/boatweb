import React from 'react'

function CatTemplate({ name, imgsrc }) {
    return (
        <div className='w-[230px] h-[50px] flex mr-3 mb-2 '>
            <div className='w-[50px] h-[50px]'>
                <img className='object-cover' src={imgsrc} alt='no img'></img>
            </div>
            <div>
                <p className='mt-3 ml-1 text-[rgb(112,112,112)] hover:text-black'>{name}</p>
            </div>
            
        </div>
    )
}

export default CatTemplate