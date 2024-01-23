import React from 'react'

function Navbar() {
    return (
        <>
            <div className= 'md:block md:w-screen md:h-31 fixed z-40 border-b-[2px] border-inherit'>
               
                <div className='w-screen bg-[#eff4f7] h-10 text-center pt-1 md:pt-2'>
                    <p className='text-xs px-1'>
                        💥 Go extra on celebrations &amp; savings with <b>Bond With boat</b>! 💥 Bag <b>offers </b>& <b>personalized gifts</b>.
                    </p>
                </div>
                <div className='w-screen bg-white border-b-1 h-14 md:h-20 border-grey flex justify-between '>
                    {/* log div */}
                    <div className='w-10 h-8 md:hidden ml-4 mr-0 mt-3'  >
                    <img className='w-7 h-7' src='https://cdn.iconscout.com/icon/free/png-512/free-menu-7688655-6391120.png?f=webp&w=512' />
                </div>
                    <div className='ml-1 mt-4 md:ml-10 md:mt-4 md:block md:w-0.5/6 md:pt-1 s'>

                        <img className='w-18 h-6 md:w-23 md:h-9' src='https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434' alt='logo.svg'></img>
                    </div>
                    {/* navbar lis div */}
                    <div className=' w-3/6 pt-6 hidden md:block'>
                        <ul className='flex justify-around text-base text-[#3e3d3d]'>
                            <li className='hover:text-black cursor-pointer hover:font-bold'>Categories</li>
                            <li className='hover:text-black cursor-pointer hover:font-bold'>Daily Deals</li>
                            <li className='hover:text-black cursor-pointer hover:font-bold'>Gift with boAt</li>
                            <li className='hover:text-black cursor-pointer hover:font-bold'>Corporate Orders</li>
                            <li className='hover:text-black cursor-pointer hover:font-bold'>More</li>
                        </ul>
                    </div>
                    {/* search and car div */}
                    <div className='flex  pt-2 pl-8 md:w-2/6 md:justify-around md:pt-4  '>
                        <input type='text' className=' h-10 w-72 border-none bg-[#eff4f7]  rounded-full ' placeholder='search HEADPHONE'></input>
                        <img className='h-6 w-6 mx-1 mt-2' src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Profile-1.png?v=1663762989'></img>
                        <img className='h-6 w-6 mx-2 mt-2 md:mr-10 md:mt-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGk0Y0kImP97Bg5pv782NGYj6jFqRNSpu4eQ&usqp=CAU'></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar