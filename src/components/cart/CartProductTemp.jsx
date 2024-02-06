import React, { useState } from 'react'

function CartProductTemp({ name, img, price, color, count }) {

    const [Count, setCount] = useState(count)
    const [Price , setPrice] = useState(price)

    const handleAddCount = () => {
        // count = count+1
       let x = Count+1
        setCount(x)
        count = x;
       
        setPrice(Number(Price) + Number(price))
    }
    const handleReduceCount = () => {
        setCount((prev)=> prev-1)
    }

    return (
        <div className='w-[100%] h-[115px]  flex  border-b-[1px]'>
            <div className='w-[30%] h-[90%] m-auto  rounded-md'>
                <img src={img} className='object-cover rounded-md w-[100%] h-[100%]' alt='no img'></img>
            </div>
            <div className='w-[55%] h-[90%] m-auto'>
                <div className='font-bold'>
                    {name}
                </div>
                <div className='font-bold'>
                    Rs.{Price}
                </div>
                <div className='w-[150px]'>
                    <div className='h-[25px] bg-slate-300'>
                        {Count}
                    </div>

                </div>

            </div>
            <div className='w-[10%]'>
                <button onClick={handleAddCount}>+</button>
                <button onClick={handleReduceCount}>-</button>
            </div>
            <div>
                count.js = {count}
            </div>
        </div>
    )
}

export default CartProductTemp