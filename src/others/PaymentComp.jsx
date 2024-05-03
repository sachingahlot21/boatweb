import React from 'react'

function PaymentComp({ price, color, number, text, img }) {
    return (
        <div className={`w-[100%] h-[100%] text-white p-2 flex ${color}`}>

            <div className={` ${img === 'none' ? 'w-[80%]' : 'w-[60%]'} `}>
                <h1 className='font-bold'>&#8377;{price}</h1>
                <h1 className='font-semibold'>{text}</h1>

            </div>

            <div className={` ${img === 'none' ? 'w-[20%]' : 'w-[40%]'} flex justify-center items-center `}>
                {
                    img === 'none' ? '' : <img src={img} alt='no img' />
                }

            </div>

        </div>
    )
}

export default PaymentComp