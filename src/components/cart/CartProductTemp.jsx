import React, { useState, useEffect, useContext } from 'react'
import Cart from './Cart'
// import Cartt from '../context/CartCon';
import Cartt from '../../context/CartCon'
import { RiSubtractLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from 'axios'

import { LoginDetailContext } from '../../context/LoginDetailCon';

function CartProductTemp({ prop, id, key }) {

    const [Count, setCount] = useState(prop.count)
    const [Price, setPrice] = useState(0)
    const { cart, setCart, cartTotal, setCartTotal,removeFromCart, getCartData } = useContext(Cartt)
    const { loggedIn } = useContext(LoginDetailContext)

    useEffect(() => {
        setCount(prop.count);
        setPrice(prop.count * prop.price);

        const grandTotal = cart.reduce((total, item) => {
            return total + item.count * item.price;
        }, 0);
        setCartTotal(grandTotal);
    }, [cart]);

    const handleAddCount = async (id) => {
        console.log(id)
        if (loggedIn?.userId) {
            try {
                await axios.put(`http://localhost:8000/cart/increment/${loggedIn.userId}/${id}`);
                getCartData();
            } catch (error) {
                console.error('Error incrementing item:', error);
            }
        } else {
            const guestCart = JSON.parse(localStorage.getItem('guest_cart')) || [];
            const updatedCart = guestCart.map(item => {
                if (item.productid === id) item.count += 1;
                return item;
            });
            localStorage.setItem('guest_cart', JSON.stringify(updatedCart));
            setCart(updatedCart);
        }
    };

    function addComma(number) {
        if (typeof number !== 'number') {
            return number;
        }
        return number.toLocaleString();
    }

    const handleReduceCount = (item) => {
        if (item.count > 1) {
            handleDecrement(item.productid || item._id);
        } else {
            handleRemoveBtn(item.productid || item._id);
        }
    };

    const handleDecrement = async (id) => {
        if (loggedIn?.userId) {
            try {
                await axios.put(`http://localhost:8000/cart/decrement/${loggedIn.userId}/${id}`);
                getCartData()
            } catch (error) {
                console.error('Error decrementing item:', error);
            }
        } else {
            // Guest logic
            const guestCart = JSON.parse(localStorage.getItem('guest_cart')) || [];
            const updatedCart = guestCart.map(item => {
                if (item.productid === id) item.count -= 1;
                return item;
            }).filter(item => item.count > 0); // remove if 0
            localStorage.setItem('guest_cart', JSON.stringify(updatedCart));
            setCart(updatedCart);
        }
    };

    const handleRemoveBtn = async (id) => {
       removeFromCart(id)
    };

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
                    <button className='w-[25px] text-center font-bold bg-[rgb(239,243,245)]' onClick={() => handleReduceCount(prop)}><RiSubtractLine className='m-auto' /></button>
                    <div className='h-[25px] w-[30px] text-center font-bold '>
                        {`${Count ? Count : ''}`}
                    </div>
                    <button className='w-[25px] text-center font-bold bg-[rgb(239,243,245)] ' onClick={() => handleAddCount(prop.productid)}><IoMdAdd className='m-auto' /></button>
                </div>

            </div>
            <div className='w-[10%]'>
                <button className='mr-9 mt-2' onClick={() => handleRemoveBtn(prop.productid)}><RiDeleteBin6Line /></button>
            </div>
            {/* <button onClick={verifyCount}>CHECKKK</button>
            <br></br> */}

        </div>
    )
}

export default CartProductTemp