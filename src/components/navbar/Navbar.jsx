import React, { useEffect, useState, useRef, useContext } from 'react';
import Cart from '../cart/Cart';
import { MdOutlineCancel } from "react-icons/md";
import { Link } from 'react-router-dom';
import images from './images/images';
import CatTemplate from './CatTemplate';
import Cartt from '../../context/CartCon';
import LoginModal from '../../others/LoginModal';
import Search from '../../context/SearchCon';
import { LoginDetailContext } from '../../context/LoginDetailCon';
import SearchContext from '../../context/SearchContext';

function Navbar() {
    const { loggedIn } = useContext(LoginDetailContext);
    const { setUserEmail, setLoggedIn } = useContext(LoginDetailContext);
    const { userName, userEmail } = useContext(LoginDetailContext);
    const { searchQuery } = useContext(Search);
    const { setSearchQuery } = useContext(Search);
    const [activelogin, setLogin] = useState('hidden');
    const [activecart, setCart] = useState('hidden');
    const [catmenu, setCatmenu] = useState('hidden');
    const [activeMobileBar, setactiveMobileBar] = useState('hidden');
    const { cart, cartTotal } = useContext(Cartt);
    const [handleCatPlus, setCatPlus] = useState(false);
    const [handleMoreBtn, setMoreBtn] = useState(false);
    const [handleLoginModal, setHandleLoginModal] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    let cartSize = cart.length;
    const placeholders = [
        "search smartwatches",
        "search headphones",
        "search speakers"
      ];

    let loginref = useRef();
    let loginbtnref = useRef();
    let catbtnref = useRef();
    let cartref = useRef();
    let catref = useRef();

    const handleLogin = () => {
        if (activelogin === 'hidden') {
            setLogin('block');
        }
    };
    const handleLoginBtn = () => {
        setLogin('hidden');
    };

    const handleCartBtn = () => {
        setCart('block');
    };

    const handleCatBtn = () => {
        setCatmenu(catmenu === 'hidden' ? 'block' : 'hidden');
    };

    const handleMobileBar = () => {
        setactiveMobileBar(activeMobileBar === 'hidden' ? 'block' : 'hidden');
    };
    const handleLoginModalBtn = () => {
        if (loggedIn) {
            setLoggedIn(false);
            return;
        }
        setHandleLoginModal(!handleLoginModal);
    };

    const handleMore = () => {
        setMoreBtn(!handleMoreBtn);
        if (handleCatPlus) {
            setCatPlus(false);
        }
    };
    const handleCatPlusFun = () => {
        setCatPlus(!handleCatPlus);
        if (handleMoreBtn) {
            setMoreBtn(false);
        }
    };
    useEffect(() => {
        let handler = (e) => {
            if (!loginref.current.contains(e.target) && !loginbtnref.current.contains(e.target)) {
                setLogin('hidden');
            }
        };
        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
        };
    });
    useEffect(() => {
        let carthandler = (e) => {
            if (!cartref.current.contains(e.target)) {
                setCart('hidden');
            }
        };
        document.addEventListener('mousedown', carthandler);
        return () => {
            document.removeEventListener('mousedown', carthandler);
        };
    });

    useEffect(() => {
        let catDropDownHandler = (e) => {
            if (!catref.current.contains(e.target) && !catbtnref.current.contains(e.target)) {
                setCatmenu('hidden');
            }
        };
        document.addEventListener('mousedown', catDropDownHandler);
        return () => {
            document.removeEventListener('mousedown', catDropDownHandler);
        };
    });
    useEffect(() => {
        setSearchQuery(searchValue);
    }, [searchValue]);

    useEffect(() => {
        const interval = setInterval(() => {
          setPlaceholderIndex(prev => (prev + 1) % placeholders.length);
        }, 2000); // change every 2 seconds
      
        return () => clearInterval(interval); // cleanup
      }, []);

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <>
            {handleLoginModal && <LoginModal closeFunc={handleLoginModalBtn} />}
            <div className='overflow-x-hidden md:block md:w-screen md:h-31 fixed z-[50] border-b-[2px] border-inherit bg-white'>
                <div className='w-screen bg-[#eff4f7] h-10 text-center pt-1 md:pt-2'>
                    <p className='text-xs px-1'>
                        💥 Go extra on celebrations &amp; savings with <b>Bond With boat</b>! 💥 Bag <b>offers </b>& <b>personalized gifts</b>.
                    </p>
                </div>
                <div className='w-screen border-b-1 h-14 md:h-20 border-grey flex justify-between'>
                    <div className='w-10 h-8 overflow-y-hidden md:hidden ml-3 mr-0 mt-3'>
                        <button onClick={handleMobileBar} className='overflow-hidden'>
                            {activeMobileBar === 'hidden' ? (
                                <img className='overflow-clip w-7 h-7' src='https://cdn.iconscout.com/icon/free/png-512/free-menu-7688655-6391120.png?f=webp&w=512' />
                            ) : (
                                ''
                            )}
                        </button>
                    </div>
                    <div className='ml-1 flex items-center md:ml-10 md:mt-4 md:block md:w-0.5/6 md:pt-1'>
                        <Link to='/'>
                            <img className='w-18 h-6 md:w-23 md:h-9' src='https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434' alt='logo.svg'></img>
                        </Link>
                    </div>
                    {/* navbar lists div */}
                    <div className='w-3/6 pt-6 md:block hidden'>
                        <ul className='flex justify-around text-base h-[30px] text-[#3e3d3d]'>
                            <li id='navli' onClick={handleCatBtn} ref={catbtnref} className='hover:text-black cursor-pointer h-[25px] hover:font-bold'>
                                Categories
                            </li>
                            <Link to='/collections/wireless-earbuds'>
                                <li id='navli' className='hover:text-black cursor-pointer hover:font-bold h-[25px]'>Daily Deals</li>
                            </Link>
                            <Link to='pages/giftWithBoat'>
                                <li id='navli' className='hover:text-black cursor-pointer hover:font-bold h-[25px]'>Gift with boAt</li>
                            </Link>
                            <Link to='pages/bulk-orders'>
                                <li id='navli' className='hover:text-black cursor-pointer hover:font-bold h-[25px]'>Corporate Orders</li>
                            </Link>
                            <Link to='pages/store-locator'>
                                <li id='navli' className='hover:text-black cursor-pointer hover:font-bold h-[25px]'>More</li>
                            </Link>
                        </ul>
                    </div>
                    {/* search and cart div */}
                    <div className='flex items-center pl-8 md:w-2/6 md:justify-around'>
                        <input
                            type="text"
                            value={searchValue}
                            onChange={handleSearch}
                            className="h-10 w-72 border-none bg-[#eff4f7] rounded-full pl-2"
                            placeholder={placeholders[placeholderIndex]}
                        />
                        <button onClick={handleLogin} ref={loginbtnref}>
                            <img className='h-6 w-6 mx-1' src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Profile-1.png?v=1663762989'></img>
                        </button>
                        <div className='h-9 w-9 flex justify-center items-center mx-2 md:mr-10 relative'>
                            <button onClick={handleCartBtn} className=''>
                                <img className='h-6 w-6  md:mr-10 ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGk0Y0kImP97Bg5pv782NGYj6jFqRNSpu4eQ&usqp=CAU'></img>
                            </button>
                            {cartSize === 0 ? ' ' : (
                                <div className='w-[15px] h-[15px] absolute right-2 top-2 bg-red-700'>
                                    <div className='w-[100%] h-[100%] font-bold text-[10px] m-auto text-center text-white'>
                                        {cartSize}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className={`md:hidden bg-opacity-30 left-0 w-[100vw] h-[100vh] z-[100] bg-black fixed ${activeMobileBar}`}>
                <div className='w-[80%] h-[100%] bg-white z-[100]'>
                    <div className='w-[100%] h-auto'>
                        <div className='w-[100%] flex justify-end pr-2 h-12 text-3xl'>
                            <button onClick={() => setactiveMobileBar('hidden')}>
                                <MdOutlineCancel />
                            </button>
                        </div>
                        {/* Categories and More */}
                        <div onClick={handleCatPlusFun} className='p-4 w-[100%] h-[8vh] flex justify-between'>
                            <h1 className='font-bold'>Categories</h1>
                            <span className='text-3xl flex items-center'>{handleCatPlus ? '-' : '+'}</span>
                        </div>
                        <div className={`w-[100%] h-[62vh] p-4 pt-0 flex-wrap gap-2 ${handleCatPlus ? 'flex' : 'hidden'}`}>
                            <Link to='/collections/wireless-earbuds' onClick={() => setactiveMobileBar('hidden')}>
                                <div className='w-[90px] h-[130px]'>
                                    <img className='w-[100%] h-[70%] object-cover' src={images.catimg1} />
                                    <h1 className='w-[100%] h-[30%] text-xs text-center'>True Wireless Earbuds</h1>
                                </div>
                            </Link>
                            <Link to='/collections/smart-watches' onClick={() => setactiveMobileBar('hidden')}>
                                <div className='w-[90px] h-[130px]'>
                                    <img className='w-[100%] h-[70%] object-cover' src={images.catimg2} />
                                    <h1 className='w-[100%] h-[30%] text-xs text-center'>Smart Watches</h1>
                                </div>
                            </Link>
                            <Link to='collections/neckbands' onClick={() => setactiveMobileBar('hidden')}>
                                <div className='w-[90px] h-[130px]'>
                                    <img className='w-[100%] h-[70%] object-cover' src={images.catimg3} />
                                    <h1 className='w-[100%] h-[30%] text-xs text-center'>Neckbands</h1>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id='cartBtn' className={`w-[100vw] h-[100vh] bg-black fixed z-50 bg-opacity-20 ${activecart}`}>
                <div className='w-[80%] md:w-[35%] h-auto m-auto mt-10 bg-white'>
                    <div className='flex justify-end'>
                        <button onClick={() => setCart('hidden')} className='text-xl p-1'>
                            <MdOutlineCancel />
                        </button>
                    </div>
                    <div className=''>
                        <Cart />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
