import React, { useEffect, useState, useRef, useContext } from 'react'
import Cart from '../cart/Cart'
import { MdOutlineCancel } from "react-icons/md";
import { Link } from 'react-router-dom';
import images from './images/images';
import CatTemplate from './CatTemplate';
import Cartt from '../../context/CartCon';


function Navbar() {
    const [activelogin, setLogin] = useState('hidden')
    const [activecart, setCart] = useState('hidden')
    const [catmenu, setCatmenu] = useState('hidden')
    const [activeMobileBar, setactiveMobileBar] = useState('hidden')
    const { cart, cartTotal } = useContext(Cartt)
    const [handleCatPlus, setCatPlus] = useState(false)
    const [handleMoreBtn, setMoreBtn] = useState(false)
    let cartSize = cart.length

    let catbtnresult;
    let loginref = useRef();
    let loginbtnref = useRef();
    let catbtnref = useRef();
    let cartref = useRef();

    let catref = useRef();

    const handleLogin = () => {
        if (activelogin === 'hidden') {
            setLogin('block')
        }
    }
    const handleLoginBtn = () => {
        setLogin('hidden')
    }

    const handleCartBtn = () => {
        setCart('block')
    }

    const handleCatBtn = () => {
        // e.stopPropagation();
        setCatmenu(catmenu === 'hidden' ? 'block' : 'hidden');
    }

    const handleMobileBar = () => {
        setactiveMobileBar(activeMobileBar === 'hidden' ? 'block' : 'hidden');
    }
    // if(catmenu) {
    //     catbtnresult = 'block' ;
    // }
    // else {
    //     catbtnresult = 'hidden'
    // }


    const handleMore = () => {
        setMoreBtn(!handleMoreBtn)
        if (handleCatPlus) {
            setCatPlus(false)
        }
    }
    const handleCatPlusFun = () => {
        setCatPlus(!handleCatPlus)
        if (handleMoreBtn) {
            setMoreBtn(false)
        }
    }
    useEffect(() => {
        let handler = (e) => {
            if (!loginref.current.contains(e.target) && !loginbtnref.current.contains(e.target)) {
                setLogin('hidden')
            }
        }
        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener('mousedown', handler)
        }
    });
    useEffect(() => {
        let carthandler = (e) => {

            if (!cartref.current.contains(e.target)) {
                setCart('hidden')
            }
        }
        document.addEventListener('mousedown', carthandler)
        return () => {
            document.removeEventListener('mousedown', carthandler)
        }
    });

    useEffect(() => {
        let catDropDownHandler = (e) => {

            if (!catref.current.contains(e.target) && !catbtnref.current.contains(e.target)) {

                setCatmenu('hidden')
                // if(!catbtnref.contains(e.target)){
                //     setCatmenu('hidden')
                // }

            }
            // if(catbtnref.contains(e.target)){
            //      setCatmenu('block')  
            //     alert("check")
            // }
        }
        document.addEventListener('mousedown', catDropDownHandler)
        return () => {
            document.removeEventListener('mousedown', catDropDownHandler)
        }
    });



    return (
        <>
            <div className='overflow-x-hidden md:block md:w-screen md:h-31 fixed z-[110] border-b-[2px] border-inherit bg-white'>

                <div className='w-screen bg-[#eff4f7] h-10 text-center pt-1 md:pt-2'>
                    <p className='text-xs px-1'>
                        💥 Go extra on celebrations &amp; savings with <b>Bond With boat</b>! 💥 Bag <b>offers </b>& <b>personalized gifts</b>.
                    </p>
                </div>
                <div className='w-screen border-b-1 h-14 md:h-20 border-grey flex justify-between '>
                    {/* log div */}
                    <div className='w-10 h-8 overflow-y-hidden md:hidden ml-3 mr-0 mt-3 '  >
                        <button onClick={handleMobileBar} className='overflow-hidden'>
                            {
                                activeMobileBar === 'hidden' ?
                                    <img className='overflow-clip w-7 h-7' src='https://cdn.iconscout.com/icon/free/png-512/free-menu-7688655-6391120.png?f=webp&w=512' />
                                    :
                                    <img className='overflow-clip w-[30px] h-[30px]' src='https://cdn.iconscout.com/icon/free/png-512/free-cross-275-458716.png?f=webp&w=512' />
                            }
                        </button>
                    </div>
                    <div className='ml-1 flex items-center md:ml-10 md:mt-4 md:block md:w-0.5/6 md:pt-1 '>
                        <Link to='/'>
                            <img className='w-18 h-6 md:w-23 md:h-9' src='https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434' alt='logo.svg'></img>
                        </Link>
                    </div>
                    {/* navbar lis div */}
                    <div className=' w-3/6 pt-6  hidden md:block '>
                        <ul className='flex justify-around text-base h-[30px] text-[#3e3d3d]'>
                            <li id='navli' onClick={handleCatBtn} ref={catbtnref} className='hover:text-black cursor-pointer h-[25px]  hover:font-bold overflow-hidden'>Categories</li>
                            <li id='navli' className='hover:text-black cursor-pointer hover:font-bold overflow-hidden h-[25px]'>Daily Deals</li>
                            <Link to='pages/giftWithBoat'> <li id='navli' className='hover:text-black cursor-pointer hover:font-bold overflow-hidden h-[25px]'>Gift with boAt</li></Link>
                            <Link to='pages/bulk-orders'> <li id='navli' className='hover:text-black cursor-pointer hover:font-bold overflow-hidden h-[25px]'>Corporate Orders</li></Link>
                            <Link to='pages/store-locator'>
                                {/* <div className=''> */}
                                <li id='navli' className='hover:text-black cursor-pointer hover:font-bold  relative overflow-hidden h-[25px]'>More</li>
                                {/* <div className='absolute w-[36px] h-1 scale-x-0 bg-black li-hover:scale-x-50  transition-transform ease-in delay-200' ></div>
                                </div> */}
                            </Link>
                        </ul>
                    </div>
                    {/* search and car div */}
                    <div className='flex items-center   pl-8 md:w-2/6 md:justify-around'>
                        <input type='text' className=' h-10 w-72 border-none bg-[#eff4f7]  rounded-full ' placeholder='search HEADPHONE'></input>
                        <button onClick={handleLogin} className='' ref={loginbtnref} > <img className='h-6 w-6 mx-1' src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Profile-1.png?v=1663762989'></img></button>
                        <div className='h-9 w-9 flex justify-center items-center mx-2 md:mr-10   relative'>
                            <button onClick={handleCartBtn} className=''><img className='h-6 w-6  md:mr-10 ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGk0Y0kImP97Bg5pv782NGYj6jFqRNSpu4eQ&usqp=CAU'></img>
                            </button>
                            {
                                cartSize === 0 ? ' ' :
                                    <div className='w-[15px] h-[15px] absolute right-2 top-2 bg-red-700  '>
                                        {/* <span className= 'w-[15px] h-[15px] text-[2px]'>2</span> */}
                                        <div className='w-[100%] h-[100%] font-bold text-[10px] m-auto text-center text-white'>
                                            {cartSize}
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div id='loginBtn' className={`w-[218px] h-[84px] bg-white fixed top-[110px] border-solid border-grey-300 border-2 shadow-xl shadow-slate-400 rounded-xl block right-2 z-50 ${activelogin} `} ref={loginref}>
                <div className='flex justify-between'>
                    <div className='ml-2 mt-1 text-sm font-bold'><p>Hi boAThead!</p></div>
                    <div className='mr-2'><button onClick={handleLoginBtn}><MdOutlineCancel className='mt-1 text-xl font-bold' /></button></div>
                </div>
                <div className='w-[200px] h-[35px] mt-3 m-auto  '>
                    <button className='bg-black w-[200px] h-[35px] text-white rounded-md text-sm font-bold'>Login</button>
                </div>
            </div>
            <div className={`md:hidden bg-opacity-30 left-0  w-[100vw] h-[100vh] z-[100] bg-black fixed pt-[10vh]   ${activeMobileBar}`}>
                <div className='w-[80%] h-[100%] bg-white z-[100]'>
                    <div className=' w-[100%] h-auto '>
                        <div onClick={handleCatPlusFun} className='p-4 w-[100%] h-[8vh]  flex justify-between'>
                            <h1 className='font-bold'>Categories</h1>
                            <span className='text-3xl flex items-center overflow-y-hidden'>{handleCatPlus ? '-' : '+'}</span>
                        </div>
                        <div className={`w-[100%] h-[62vh]  p-4 pt-0 flex-wrap gap-2 ${handleCatPlus ? 'flex' : 'hidden'}`} >
                            <div className='w-[90px] h-[130px] '>
                                <img className='w-[100%] h-[70%] object-cover' src={images.catimg1}></img>
                                <h1 className='w-[100%] h-[30%] text-xs  text-center'>True Wireless Earbuds</h1>
                            </div>

                            <div className='w-[90px] h-[130px] '>
                                <img className='w-[100%] h-[70%] object-cover' src={images.catimg2}></img>
                                <h1 className='w-[100%] h-[30%] text-xs  text-center'>Wireless Speakers</h1>
                            </div>

                            <div className='w-[90px] h-[130px] '>
                                <img className='w-[100%] h-[70%] object-cover' src={images.catimg3}></img>
                                <h1 className='w-[100%] h-[30%] text-xs  text-center'>Smart Watches</h1>
                            </div>

                            <div className='w-[90px] h-[130px] '>
                                <img className='w-[100%] h-[70%] object-cover' src={images.catimg4}></img>
                                <h1 className='w-[100%] h-[30%] text-xs  text-center'>Neckbands</h1>
                            </div>

                            <div className='w-[90px] h-[130px] '>
                                <img className='w-[100%] h-[70%] object-cover' src={images.catimg5}></img>
                                <h1 className='w-[100%] h-[30%] text-xs  text-center'>Wired Headphones</h1>
                            </div>

                            <div className='w-[90px] h-[130px] '> <img className='w-[100%] h-[70%] object-cover' src={images.catimg6}></img>
                                <h1 className='w-[100%] h-[30%] text-xs  text-center'>Soundbars</h1></div>

                            <div className='w-[90px] h-[130px] '> <img className='w-[100%] h-[70%] object-cover' src={images.catimg7}></img>
                                <h1 className='w-[100%] h-[30%] text-xs  text-center'>Gaming Headphones</h1></div>

                            <div className='w-[90px] h-[130px] '> <img className='w-[100%] h-[70%] object-cover' src={images.catimg8}></img>
                                <h1 className='w-[100%] h-[30%] text-xs  text-center'>Wireless Headphones</h1></div>

                            <div className='w-[90px] h-[130px] '> <img className='w-[100%] h-[70%] object-cover' src={images.catimg9}></img>
                                <h1 className='w-[100%] h-[30%] text-xs  text-center'>Trimmers</h1></div>

                            <div className='w-[90px] h-[130px] '> <img className='w-[100%] h-[70%] object-cover' src={images.catimg10}></img>
                                <h1 className='w-[100%] h-[30%] text-xs  text-center'>Chargers</h1></div>

                        </div>
                        <div className='p-4 w-[100%] flex justify-between h-[8vh] '>
                            <h1 className='font-bold'>Daily Deals</h1>
                            <span className='font-bold text-xl'>&gt;</span>
                        </div>
                        <div className='p-4 w-[100%] flex justify-between h-[8vh] '>
                            <h1 className='font-bold'>Gift with boAt</h1>
                            <span className='font-bold text-xl'>&gt;</span>
                        </div>
                        <div className='p-4 flex justify-between w-[100%] h-[8vh] '>
                            <h1 className='font-bold'>Corporate Orders</h1>
                            <span className='font-bold text-xl'>&gt;</span>
                        </div>
                        <div onClick={handleMore} className='p-4 w-[100%] flex justify-between h-[8vh]  '>
                            <h1 className='font-bold '>More</h1>
                            <span className='text-3xl flex items-center overflow-y-hidden'>{handleMoreBtn ? '-' : '+'}</span>
                        </div>
                        <div className={`w-[100%] h-[10vh] font-semibold  p-4 pt-0 ${handleMoreBtn ? 'block' : 'hidden'}`}>
                            <h1>Blogs</h1>
                            <h1>Careers</h1>
                            <h1>Store Locator</h1>
                        </div>
                    </div>
                </div>

            </div>

            <div id='cartBtn' className={`w-[100vw] h-[100vh] bg-black fixed z-50 bg-opacity-30 right-0 ${activecart}`} >
                <div ref={cartref}>
                    <Cart />
                </div>
            </div>
            <div className={`w-[490px] h-[300px] z-30 border-solid border-[2px] border-slate-200 bg-white fixed left-[50px] top-[120px] ${catmenu}`} ref={catref}>
                <div>
                    <ul className='flex flex-wrap'>
                        <Link
                            to='/collections/wireless-earbuds' onClick={handleCatBtn}>
                            <li>
                                <CatTemplate name='Wireless Earbuds' imgsrc={images.catimg1} />
                            </li>
                        </Link>
                        <Link
                            to='/collections/smart-watches' onClick={handleCatBtn}>
                            <li>
                                <CatTemplate name='Smartwatches' imgsrc={images.catimg3} />
                            </li>
                        </Link>
                        <Link
                            to='collections/neckbands' onClick={handleCatBtn}>
                            <li>
                                <CatTemplate name='Neck Bands' imgsrc={images.catimg4} />
                            </li>
                        </Link>
                        <Link
                            to='collections/wireless-headphones' onClick={handleCatBtn}>
                            <li>
                                <CatTemplate name='Headphones' imgsrc={images.catimg5} />
                            </li>
                        </Link>
                        <Link
                            to='collections/wireless-speakers' onClick={handleCatBtn}>
                            <li>
                                <CatTemplate name='Wireless Speakers' imgsrc={images.catimg2} />
                            </li>
                        </Link>
                        <Link
                            to='/collections/wireless-earbuds' onClick={handleCatBtn}>
                            <li>
                                <CatTemplate name='Soundbars' imgsrc={images.catimg6} />
                            </li>
                        </Link>
                        <Link
                            to='/collections/wireless-earbuds' onClick={handleCatBtn}>
                            <li>
                                <CatTemplate name='Gaming Headphones' imgsrc={images.catimg7} />
                            </li>
                        </Link>
                        <Link
                            to='/collections/wireless-earbuds' onClick={handleCatBtn}>
                            <li>
                                <CatTemplate name='Wired Headphones' imgsrc={images.catimg8} />
                            </li>
                        </Link>
                        <Link
                            to='/collections/wireless-earbuds' onClick={handleCatBtn}>
                            <li>
                                <CatTemplate name='Trimmers' imgsrc={images.catimg9} />
                            </li>
                        </Link>
                        <Link
                            to='/collections/wireless-earbuds' onClick={handleCatBtn}>
                            <li>
                                <CatTemplate name='Chargers' imgsrc={images.catimg10} />
                            </li>
                        </Link>
                    </ul>
                </div>

            </div>



        </>
    )
}

export default Navbar