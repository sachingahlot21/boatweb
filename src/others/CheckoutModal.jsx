import React from 'react'
import { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import './LoginModal.css'
import Modal from '@mui/material/Modal';
import { TbTruckDelivery } from "react-icons/tb";
import { BsCart2 } from "react-icons/bs";
// import { TbCircleDashedPercentage } from "react-icons/tb";
// import { TbCircleDashedPercentage } from "react-icons/tb";
import { BiSolidOffer } from "react-icons/bi";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function CheckoutModal({ closeFunc }) {

    const [open, setOpen] = React.useState(true);
    const handleClose = () => {
        setOpen(false)
        closeFunc()
    }


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className='flex justify-center items-center'
            >
                <Box height={500}
                    width={870}
                    my={1}
                    display="flex"
                    bgcolor='rgb(250,250,250)'
                    gap={1}
                    // py={2}
                    // px={2}
                    className='flex'
                    borderRadius={3}
                    boxShadow={4}
                    sx={{ border: '2px solid grey', style }}>

                    <div className='w-[100%] h-[100%] flex justify-center items-center '>
                        <div className='w-[60%] h-[100%] bg-white'>

                        </div>

                        <div className='w-[40%] flex flex-col justify-between px-6 py-6 h-[100%] bg-[rgb(250,250,250)]'>
                            <div className='w-[100%] h-[57%] px-6 py-3 bg-white rounded-md shadow-sm'>
                                <h1 className='flex text-sm items-center'><BsCart2 className='mr-2 text-xl font-semibold' />Order Summary</h1>
                                <div className='mt-4 w-[100%] h-[50%] bg-yellow-100'>

                                </div>
                                <h1 className='flex justify-between'>Subtotal<span>&#8377;899.00</span></h1>
                                <h1 className='flex justify-between'>Shipping<span>Free</span></h1>
                                <div className='w-[100%] h-[20%] bg-gray-200'>
hu
                                </div>
                            </div>

                            <div className='w-[100%] flex items-center justify-center text-[rgb(89,149,44)] h-[13%] bg-white rounded-md shadow-sm '>
                                <h1 className='flex items-center justify-center'><span className='mr-2 text-3xl'><TbTruckDelivery /></span>Earliest Delivery by Tomorrow</h1>
                            </div>

                            <div className=' px-1 pt-3 w-[100%] h-[20%] bg-white rounded-md shadow-sm'>
                                <div className=' text-[rgb(61,38,118)] flex justify-center items-center h-[70%]'>
                                    <span className='text-4xl mr-2'>
                                        <BiSolidOffer />
                                    </span>
                                    <input className='placeholder-[rgb(61,38,118)] font-semibold rounded-full border-dashed border-[1px] pl-2  border-[rgb(61,38,118)] h-[90%] w-[80%]' type='text' placeholder='Enter coupan code' >
                                    </input>
                                </div>
                                <h1 className='pr-3 mt-1 text-[rgb(61,38,118)] flex justify-end text-xs'>Have a Gift Card? Click Here</h1>
                            </div>

                        </div>
                    </div>

                </Box>
            </Modal>
        </div>
    )
}

export default CheckoutModal