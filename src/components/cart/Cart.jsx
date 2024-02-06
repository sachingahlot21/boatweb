import React, { useContext } from 'react'
import { LuShoppingBag } from "react-icons/lu";
import { Link } from 'react-router-dom';
import CartProductTemp from './CartProductTemp';
import testimg from './testimg1.jpg'
import Cartt from '../../context/CartCon';
import { useState, useEffect } from 'react';


function Cart() {

    const { cart } = useContext(Cartt)
    const [total, setTotal] = useState()
    const uniqueProducts  = [];

    function removeComma(number) {
        return number.replace(/,/g, '');
    }

   function renderUniqueProducts(cart) {
        uniqueProducts = cart.filter((product, index) => {
            return cart.indexOf(product) === index;
        })
    };

    function addComma(number) {
        if (typeof number !== 'number') {
            return number;
        }
        return number.toLocaleString();
    }
    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => Number(acc) + Number(removeComma(curr.price)), 0));
    }, [cart]);


    return (

        <div id='cartdiv' className='w-[385px] h-[100%] fixed top-0 right-0 bg-white scroll'>
            <div className='h-[50px] w-[100%] '>
                <p className='text-black font-bold text-xl mt-4 ml-4 tracking-wider'>Your Cart</p>
            </div>

            {/* <div className='w-[100%] h-[300px]  overflow-hidden mt-[150px]'>
                <div className='h-[50%] w-[100%]  m-auto text-[150px]'><LuShoppingBag className='m-auto text-[rgb(26,32,36)]' /></div>
                <div className='overflow-hidden h-[20%]  text-black font-bold text-xl mt-4  tracking-wider '><p className='ml-[70px]'>Your cart is feeling lonely</p></div>
                <div className='h-[30%] w-[100%]'>
                    <Link to='/'>
                    <button  id='startshoppingbtn' className='bg-[rgb(26,32,36)] text-white h-[70%] w-[200px] font-bold rounded-md ml-[100px]'>Start Shopping</button>
                    </Link>
                </div>
            </div> */}
            <div className='w-[395px] h-[455px] '>

                {
                    uniqueProducts.map((cartitem) => (
                        <CartProductTemp img={cartitem.image} name={cartitem.itemName} price={(cartitem.price)} count={cartitem.count} color='Royalblue' />
                    ))
                }

            </div>
            <div>
                Total:{addComma(total)}

            </div>

        </div>


    )
}

export default Cart