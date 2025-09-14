import React, { useContext } from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaRegThumbsUp } from "react-icons/fa"
import { FaStar } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";
import { FcFlashOn } from "react-icons/fc";
import { RxDividerHorizontal } from "react-icons/rx";
import { MdOutlineMaximize } from "react-icons/md";
import Cartt from '../context/CartCon';
import axios from 'axios'

function MainTemplate(
    {
        // productid,
        // itemName,
        // category,
        // rating,
        // sold,
        // price,
        // priceBefore,
        // discount,
        // offer,
        // usp,
        // image,
        // usp2,
        // usp3,
        prop
    }
) {
    const { cart, setCart } = useContext(Cartt)
    let pp = prop.price

     const handleAddtobtn = async (prop) => {
        let existingProduct = cart.find(
            (curItem) => curItem.productid === prop.productid
        );

        if (existingProduct) {
            alert('Already in cart');
        } else {
            const newCount = 1;
            // setCount(newCount);

            const newCartItem = {
                productid: prop.productid,
                image: prop.image,
                usp: prop.usp,
                offer: prop.offer,
                itemName: prop.itemName,
                price: Number(prop.price),
                discount: prop.discount,
                priceBefore: prop.priceBefore,
                rating: prop.rating,
                number: '0001',
                count: Number(newCount)
            };

            try {
                const response = await axios.post('http://localhost:8000/cart', {
                    items: [newCartItem],
                    user: '60c72b2f9b1e8e35a4d7b0c6' // Replace with actual user ID

                });

                if (response.status === 201) {
                    // setCart([...cart, newCartItem]);
                    handleGetCartData()
                    alert('Item added to cart successfully!');
                } else {
                    alert('Failed to add item to cart');
                }
            } catch (error) {
                console.error('Error adding item to cart:', error);
                alert('Error adding item to cart');
            }
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

    function addComma(number) {
        if (typeof number !== 'number') {
            return number;
        }
        return number.toLocaleString();
    }

    // const handleAddtobtn = (prop) => {

    //     const newCartItem = {
    //         productid: prop.productid,
    //         image: prop.image,
    //         usp: prop.usp,
    //         offer: prop.offer,
    //         itemName: prop.itemName,
    //         price: Number(prop.price),
    //         discount: prop.discount,
    //         priceBefore: prop.priceBefore,
    //         rating: prop.rating,
    //         number: '0001',
    //         count: Number(prop.newCount)
    //     };
    //     console.log(newCartItem)

    // }

    return (
        <>
            <div className='w-[390px] h-[200px] bg-[rgb(250,250,250)] rounded-md flex mt-4 mr-4 border-[1px] border-neutral-200'>
                <div className='w-[177px] h-[182px] bg-slate-400 mt-2 ml-2 rounded-md relative'>
                    <div className='h-[156px] w-[177px] bg-slate-100 object-contain overflow-hidden pb-4'>
                        <img src={prop.image} alt='no img' className=''></img>
                    </div>
                    <div className='h-[26px] w-[177px] bg-[rgb(252,197,11)] flex'>
                        <span className='m-auto font-bold text-xs' >{prop.usp}</span>
                    </div>


                    {
                        prop.offer === 'none' ? null :
                            <span className='absolute top-3 h-[20px] bg-black text-[10px]  pr-1  text-white flex rounded-r-md'>
                                {
                                    prop.offer != 'New Lauch' ? <FaRegThumbsUp className='text-[#fcc50b] ml-1 mt-1 font-bold' /> : <FcFlashOn className='ml-1 mt-1 font-extrabold text-sm text-[#fcc50b]' />
                                }
                                <div className='ml-1 mt-0.5 pr-2 font-semibold'>
                                    {prop.offer}
                                </div>
                            </span>
                    }
                </div>
                <div>

                    <div className='mt-3 ml-3 flex'>
                        <FaStar className='text-[#fcc50b] mr-1 ' />
                        {
                            prop.rating === 'firstuser' ? <div className='text-sm h-[22px]    overflow-hidden pb-1 '>Be first to review</div> :
                                <div className='flex'>
                                    <div className='text-xs font-semibold'>{prop.rating}</div>
                                    <RxDividerVertical className='text-slate-300 ' />
                                    <div className='text-xs font-semibold'>{prop.sold}</div>
                                    <MdVerified className='text-[#0b9c6b] ml-1 ' />
                                </div>
                        }

                    </div>
                    <div className='font-bold text-l mt-1 ml-3'>{prop.itemName}</div>
                    <div className='flex mt-1  ml-3'>
                        <div className='font-bold text-base'>&#8377;{addComma(pp)} </div>
                        <div className='line-through text-xs text-slate-400 font-semibold ml-1 mt-1.5'>&#8377;{prop.priceBefore}</div>
                        <div className='text-xs font-bold text-[#0b9c6b] ml-1 mt-1.5' >{prop.discount}</div>

                    </div>
                    <div className='w-[185px] h-[1px] mt-2 bg-slate-300 ml-2'></div>
                    <div className='h-[52px] overflow-hidden '>
                        <div className='flex flex-wrap text-[9px] mt-2 ml-3 overflow-hidden'>
                            <div className='h-[20px] bg-[rgb(239,244,247)] pr-2 pt-0.5 pl-1 mr-1 rounded-full mb-1'>{prop.usp2}</div>
                            <div className='h-[20px] bg-[rgb(239,244,247)] pr-2 pt-0.5 pl-1 rounded-full mb-1'>{prop.usp3}</div>
                        </div>

                    </div>
                    <div className='h-[52px] b flex'>
                        <button className='rounded-xl m-auto h-[40px] w-[180px] bg-[rgb(0,0,0)] text-white' onClick={() => handleAddtobtn(prop)}>Add To Cart</button>

                        {/* <button ></button> */}
                    </div>


                </div>

            </div>
        </>
    )
}

export default MainTemplate