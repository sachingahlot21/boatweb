import React, { useState, useEffect, useContext } from 'react'
import Cart from './Cart'
// import Cartt from '../context/CartCon';
import Cartt from '../../context/CartCon'
import { RiSubtractLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

function CartProductTemp({ prop, key }) {

    const [Count, setCount] = useState(prop.count)
    const [Price, setPrice] = useState(0)
    const { cart, setCart, cartTotal, setCartTotal } = useContext(Cartt)

    const verifyCount = () => {
        alert(prop.grandtotal)
    }

    function handleAddCount() {
        setCount((prev) => prev + 1)
        handleCount()
        setPrice(prop.count * prop.price)
    }

    useEffect(() => {
        setCount(prop.count)
        setPrice(prop.count * prop.price)
        prop.grandtotal = prop.count * prop.price
        setCartTotal(prop.grandtotal)
    }, [prop.count]);


    // const handleAddCount = (count) => {

    //        setCount((prev) => prev + 1) 
    //        count = count + 1
    //         setPrice(Number(Price) + Number(price))

    // }

    const handleCount = () => {
        prop.count = prop.count + 1
    }

    function removeComma(number) {
        return number.replace(/,/g, '');
    }
    function addComma(number) {
        if (typeof number !== 'number') {
            return number;
        }
        return number.toLocaleString();
    }
    const handleReduceCount = () => {
        if (Count > 1) {

            setCount((prev) => prev - 1)
            prop.count = prop.count - 1
            setPrice(Number(Price) - prop.price)
        }
        else {
            handleRemoveBtn()
        }
    }

    const handleRemoveBtn = () => {
        setCart((prev) => prev.filter((product) => product.productid !== prop.productid))
        prop.count = 0
        console.log(cart)
    }

    return (
        <div className='w-[100%] h-[115px]  flex  border-b-[1px]'>
            <div className='w-[25%] h-[75%] m-auto ml-2  rounded-md'>
                <img src={prop.image} className='object-cover rounded-md w-[100%] h-[100%]' alt='no img'></img>
            </div>
            <div className='w-[55%] h-[90%] m-auto ml-2'>
                <div className='font-bold'>
                    {prop.itemName}
                </div>
                <div className='font-extrabold text-[rgb(60,60,59)]'>
                    &#8377;  {addComma(Price)}
                </div>
                <div className='w-[80px]  flex rounded-md border-2 mt-4 '>
                    <button className='w-[25px] text-center font-bold bg-[rgb(239,243,245)]' onClick={handleReduceCount}><RiSubtractLine className='m-auto' /></button>
                    <div className='h-[25px] w-[30px] text-center font-bold '>
                        {Count}
                    </div>
                    <button className='w-[25px] text-center font-bold bg-[rgb(239,243,245)] ' onClick={handleAddCount}><IoMdAdd className='m-auto' /></button>
                </div>

            </div>
            <div className='w-[10%]'>
            <button className='mr-9 mt-2' onClick={handleRemoveBtn}><RiDeleteBin6Line /></button>
            </div>
            {/* <button onClick={verifyCount}>CHECKKK</button>
            <br></br> */}
            
        </div>
    )
}

export default CartProductTemp