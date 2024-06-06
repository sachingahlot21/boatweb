import React, { useState, useEffect, useContext } from 'react'
import Cart from './Cart'
// import Cartt from '../context/CartCon';
import Cartt from '../../context/CartCon'
import { RiSubtractLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from 'axios'

function CartProductTemp({ prop, id, key, getCartData }) {

    const [Count, setCount] = useState(prop.count)
    const [Price, setPrice] = useState(0)
    const { cart, setCart, cartTotal, setCartTotal } = useContext(Cartt)

    const verifyCount = () => {
        alert(prop.grandtotal)
    }

    // function handleAddCount() {
    //     setCount((prev) => prev + 1)
    //     handleCount()
    //     setPrice(prop.count * prop.price)
    // }

    useEffect(() => {
        setCount(prop.count)
        setPrice(prop.count * prop.price)
        prop.grandtotal = prop.count * prop.price
        console.log("P>G>T" , prop.grandtotal)
        console.log("c_t" , cartTotal)
        // setCartTotal('99999')
        console.log("nan" , cart )

        const grandTotal = cart.reduce((total, item) => {
            const itemTotal = item.count * item.price;
            return total + itemTotal;
        }, 0);

        setCartTotal(grandTotal);

       
    }, [prop.count , cart]);


    const handleAddCount = async (id) => {


        axios.put(`http://localhost:8000/cart/increment/${id}`)
            .then(response => {
                console.log(response.data);
                handleGetCartData()
            })
            .catch(error => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log('Status code:', error.response.status);
                    console.log('Response data:', error.response.data);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log('Request:', error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error message:', error.message);
                }
            });


    }

    const handleCount = () => {
        // prop.count = prop.count + 1
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

    const handleReduceCount = (item) => {
        if (item.count > 1) {
            handleDecrement(item._id);
        } else {
            handleRemoveBtn(item._id);
        }
    };

    const handleDecrement = async (itemId) => {
        try {
            const response = await axios.put(`http://localhost:8000/cart/decrement/${itemId}`);
            console.log(response.data)
            handleGetCartData()
        
        } catch (error) {
            setError(`Error: ${error.message}`);
        }
    };

    const handleGetCartData = async () => {
        try {
            const res = await axios.get('http://localhost:8000/cart');
            console.log(res);
            const items = res.data.map(i => i.items[0])
            setCart(items);
            console.log('cc', cart)
            console.log(items);
        } catch (err) {
            console.error(err);
        }
    }

    const handleRemoveBtn = async (id) => {
        // setCart((prev) => prev.filter((product) => product.productid !== prop.productid))
        // prop.count = 0
        // console.log(cart)
        try {
            await axios.delete(`http://localhost:8000/cart/${id}`);
            console.log("Cart deleted successfully");
            // Optionally, you can update your cart data after deletion
            handleGetCartData()
        } catch (error) {
            console.error("Error deleting cart:", error);
        }
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
                    <button className='w-[25px] text-center font-bold bg-[rgb(239,243,245)]' onClick={() => handleReduceCount(prop)}><RiSubtractLine className='m-auto' /></button>
                    <div className='h-[25px] w-[30px] text-center font-bold '>
                        {`${Count ? Count : ''}`}
                    </div>
                    <button className='w-[25px] text-center font-bold bg-[rgb(239,243,245)] ' onClick={() => handleAddCount(prop._id)}><IoMdAdd className='m-auto' /></button>
                </div>

            </div>
            <div className='w-[10%]'>
                <button className='mr-9 mt-2' onClick={() => handleRemoveBtn(prop._id)}><RiDeleteBin6Line /></button>
            </div>
            {/* <button onClick={verifyCount}>CHECKKK</button>
            <br></br> */}

        </div>
    )
}

export default CartProductTemp