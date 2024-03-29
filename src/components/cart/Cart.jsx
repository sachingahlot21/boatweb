import React, { useContext } from 'react'
import { LuShoppingBag } from "react-icons/lu";
import { Link } from 'react-router-dom';
import CartProductTemp from './CartProductTemp';
import testimg from './testimg1.jpg'
import Cartt from '../../context/CartCon';
import { useState, useEffect } from 'react';


function Cart() {

    const { cart, cartTotal } = useContext(Cartt)
    const [total, setTotal] = useState()


    let x = cart.length;

    function removeComma(number) {
        return number.replace(/,/g, '');
    }

    //    function renderUniqueProducts(cart) {
    //         uniqueProducts = cart.filter((product, index) => {
    //             return cart.indexOf(product) === index;
    //         })
    //     };

    function addComma(number) {
        if (typeof number !== 'number') {
            return number;
        }
        return number.toLocaleString();
    }
    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => Number(acc) + Number(curr.grandtotal), 0));
    }, [cart, cartTotal]);


    return (

        <div id='cartdiv' className='w-[385px] h-[100%] fixed top-0 right-0 bg-white scroll'>

            {

                x === 0 ? <div className='w-[100%] h-[300px]  overflow-hidden mt-[150px]'>
                    <div className='h-[50%] w-[100%]  m-auto text-[150px]'><LuShoppingBag className='m-auto text-[rgb(26,32,36)]' /></div>
                    <div className='overflow-hidden h-[20%]  text-black font-bold text-xl mt-4  tracking-wider '><p className='ml-[70px]'>Your cart is feeling lonely</p></div>
                    <div className='h-[30%] w-[100%]'>
                        <Link to='/'>
                            <button onClick={() => alert(x)} id='startshoppingbtn' className='bg-[rgb(26,32,36)] text-white h-[70%] w-[200px] font-bold rounded-md ml-[100px]'>Start Shopping</button>
                        </Link>

                    </div>
                </div>
                    :
                    <div>
                        <div className='h-[50px] w-[100%] '>
                            <p className='text-black font-bold text-xl mt-4 ml-4 tracking-wider'>Your Cart</p>
                        </div>

                        <div className='w-[395px] h-[455px] '>

                            {
                                cart.map((cartitem) => (
                                    <CartProductTemp
                                        prop={cartitem}
                                        key={cartitem.productid} />
                                ))
                            }

                        </div>

                        <div className='h-[80px] m-auto flex w-[100%] border-t-[1px]'>
                            <div className='w-[45%] flex flex-col m-auto ml-2'>
                                <span className='font-extrabold text-xl '>&#8377;  {addComma(total)}</span>
                                <span className='text-sm'>Inclusive of all taxes</span>
                            </div>
                            <div className='w-[55%] m-auto'>
                                <button className='h-[50px] bg-black w-[95%] rounded-md text-center font-bold text-white'>Confirm Order</button>
                            </div>

                        </div>
                    </div>
            }



        </div>


    )
}

export default Cart