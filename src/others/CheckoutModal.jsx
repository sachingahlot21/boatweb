// import React from 'react'
// import { useContext, useEffect, useState } from 'react';
// import CheckoutAddress from './CheckoutAddress';
// import Box from '@mui/material/Box';
// import './LoginModal.css'
// import Modal from '@mui/material/Modal';
// import { TbTruckDelivery } from "react-icons/tb";
// import { BsCart2 } from "react-icons/bs";
// import { SiRazorpay } from "react-icons/si";
// import { MdSecurity } from "react-icons/md";
// import { VscVerified } from "react-icons/vsc";
// // import { TbCircleDashedPercentage } from "react-icons/tb";
// // import { TbCircleDashedPercentage } from "react-icons/tb";
// import { MdArrowRightAlt } from "react-icons/md";
// import { MdVerifiedUser } from "react-icons/md";
// import { BiSolidOffer } from "react-icons/bi";
// import PaymentComp from './PaymentComp';
// import { IoCloseCircleSharp } from "react-icons/io5";
// import mobPay from './mobPay.png'
// import upiPay from './upiPay.png'
// import netPay from './netPay.png'
// import Cartt from '../context/CartCon';
// import { LoginDetailContext } from '../context/LoginDetailCon';
// import axios from 'axios'

// // import { SiTicktick } from "react-icons/si";


// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };

// function CheckoutModal({ subTotal, closeFunc }) {

//     const { cart, cartTotal } = useContext(Cartt)
//     const { loggedIn } = useContext(LoginDetailContext);
//     const [showMobile, setShowMobile] = useState(false)
//     const [showAddress, setShowAddress] = useState(false)
//     const [showPay, setShowPay] = useState(false)

//     const [activeStep, setActiveStep] = useState(1);
//     const [active, setActive] = useState(1)
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [originalPhone, setOriginalPhone] = useState('');
//     const [otp, setOtp] = useState('');
//     const [isOTPVerified, setIsOTPVerified] = useState(false);
//     const [showOTPField, setShowOTPField] = useState(false);

//     const [isValid, setIsValid] = useState(false);
//     const [addressValid, setAddressValid] = useState(false)

//     const [couponCode, setCouponCode] = useState('');
//     const [message, setMessage] = useState('');
//     const [showCoupons, setShowCoupons] = useState(false);

//     const [discountAmount, setDiscountAmount] = useState(0);
//     const [finalTotal, setFinalTotal] = useState(800);

//     const addressValidFunction = () => {
//         setAddressValid(true)
//     }

//     const [open, setOpen] = React.useState(true);
//     const handleClose = () => {
//         setOpen(false)
//         closeFunc()
//     }

//     const handleMobileContinue = () => {
//         setShowMobile(!showMobile)
//         setShowAddress(true)
//         setActive(prev => prev + 1)
//     }

//     const handleMobileBtn = () => {
//         setShowMobile(true)
//         setShowAddress(false)
//         setShowPay(false)
//         //setIsValid(false)
//         setActive(1)
//     }

//     const handleAddressBtn = () => {
//         setShowMobile(false)
//         setShowAddress(true)
//         setShowPay(false)
//         setActive(2)
//     }

//     const handlePhoneNumberChange = (inputPhoneNumber) => {
//         setPhoneNumber(inputPhoneNumber);
//         const regex = /^[6-9]\d{9}$/;
//         setIsValid(regex.test(inputPhoneNumber));
//     };
//     const handlePayBtn = () => {

//     }

//     const handleAddressContinue = () => {
//         setShowAddress(!showAddress)
//         setShowPay(true)
//         setActive(3)
//     }

//     useEffect(() => {
//         if (loggedIn) {
//             setShowAddress(true)
//             setActive(2)
//             setIsValid(true)
//             setPhoneNumber(loggedIn?.phone)
//         }
//         else {
//             setShowMobile(true)
//         }
//     }, [])

//     const fetchCoupons = async () => {
//         try {
//             const response = await axios.get('http://localhost:8000/coupon/showAllCoupon');
//             setAvailableCoupons(response.data);
//             setShowCoupons(!showCoupons);
//         } catch (error) {
//             setMessage('Failed to fetch coupons');
//         }
//     };

//     const applyCoupon = async () => {
//         if (!couponCode) return setMessage('Please enter a coupon code.');

//         try {
//             const response = await axios.post('http://localhost:8000/coupon/verifyCoupon', {
//                 code: couponCode,
//                 cartTotal
//             });

//             const { discount, finalAmount } = response.data;
//             setDiscountAmount(discount);
//             setFinalTotal(finalAmount);
//             setMessage(`Coupon applied: ₹${discount} off`);
//         } catch (error) {
//             setDiscountAmount(0);
//             setFinalTotal(cartTotal);
//             setMessage(error.response?.data?.message || 'Invalid coupon code');
//         }
//     };
//     return (
//         <>
//             <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//                 className='flex justify-center items-center'
//             >
//                 <Box height={500}
//                     width={870}
//                     my={1}
//                     display="flex"
//                     bgcolor='rgb(250,250,250)'
//                     gap={1}
//                     // py={2}
//                     // px={2}
//                     className='flex'
//                     borderRadius={3}
//                     boxShadow={4}
//                     sx={{ border: '2px solid grey', style }}>

//                     <div className='w-[100%] relative h-[100%] flex justify-center items-center '>
//                         <div className='p-2 w-[60%] h-[100%] bg-white'>

//                             <div className='w-[100%] h-[9%] bg-[rgb(229,229,229)] rounded-md p-1 flex'>
//                                 <div className='object-cover w-[15%] h-[100%] rounded-md bg-white p-1 overflow-hidden'>
//                                     <img src='https://cdn.gokwik.co/merchant/155/logo1632914610996.jpeg' alt='no img'></img>
//                                 </div>
//                                 <div className='text-sm font-bold flex items-center justify-center w-[90%] h-[100%]'>
//                                     <button onClick={handleMobileBtn} className={`mr-9 ${isValid ? 'text-green-600' : 'text-black'} `}>Mobile</button>
//                                     <button onClick={handleAddressBtn} disabled={active < 2} className={`mr-9 ${active < 2 ? 'text-gray-400' : ''} ${addressValid ? 'text-green-600' : 'text-black'}`} >Address</button>
//                                     <button onClick={handlePayBtn} disabled={active < 3} className={`mr-9 ${active < 3 ? 'text-gray-400' : ''}`}>Pay</button>
//                                 </div>
//                             </div>

//                             <div className='w-[100%]  h-[80%]'>
//                                 {
//                                     showMobile &&
//                                     <div className='w-[100%] h-[100%] flex   flex-col'>
//                                         {/* <h1 className='text-xl m-auto'>Enter Mobile Number </h1>
//                                         <button onClick={handleMobileContinue}>Continue</button> */}
//                                         <div className='mt-12 flex justify-center items-center w-[100%] h-[10%] '>
//                                             <h1 className='text-xl font-semibold'>Enter Mobile Number</h1>
//                                         </div>

//                                         <div className='w-[100%] h-[30%]  flex justify-center items-center'>
//                                             <input className='pl-2 border-[1px] border-black text-xl w-[55%] h-[45%] rounded-md' type='text' placeholder='Enter Number'
//                                                 value={phoneNumber}
//                                                 onChange={(e) => handlePhoneNumberChange(e.target.value)}
//                                             ></input>
//                                         </div>

//                                         <div className='w-[100%] mt-20 h-[30%] flex flex-col items-center justify-center  '>

//                                             {isValid ? (
//                                                 <button onClick={handleMobileContinue} className='bg-black text-lg w-[58%] h-[48%] flex justify-center items-center rounded-md text-white'>
//                                                     Continue <MdArrowRightAlt className='ml-2 text-3xl' />
//                                                 </button>
//                                             ) : (
//                                                 <button className='bg-[rgb(137,133,147)] text-lg w-[58%] h-[48%] flex justify-center items-center rounded-md text-white' disabled>
//                                                     Continue <MdArrowRightAlt className='ml-2 text-3xl' />
//                                                 </button>
//                                             )}
//                                             {/* <button onClick={handleMobileContinue} className='bg-[rgb(137,133,147)] text-lg w-[58%] h-[48%] flex justify-center items-center rounded-md text-white'>Continue <MdArrowRightAlt className='ml-2 text-3xl' /></button> */}

//                                             <div className='text-[rgb(137,133,147)] flex  w-[58%] h-[30%] text-center text-[10px] rounded-md  mt-2'>
//                                                 By proceeding, I accept that I have read and understood the Gokwik's Privacy Policy and T&C
//                                             </div>
//                                         </div>

//                                     </div>
//                                 }
//                                 {
//                                     showAddress &&
//                                     <div className='w-[100%] h-[100%] '>
//                                         <CheckoutAddress addValidFunc={addressValidFunction} cntBtn={handleAddressContinue} />
//                                     </div>
//                                 }
//                                 {
//                                     showPay &&
//                                     <div className='w-[100%] h-[100%] flex   flex-col'>

//                                         <div className=' mt-20 flex justify-center items-center w-[100%] h-[10%] text-center '>
//                                             <h1 className='text-xs font-semibold'>Please select payment method to complete the order
//                                                 <br></br>
//                                                 <span className='font-bold'>Extra ₹15 discount on UPI</span></h1>
//                                         </div>
//                                         <div className='w-[100%] h-[38%]  flex flex-wrap gap-2  mt-4'>
//                                             <div className='w-[234px] h-[68px] bg-green-300  rounded-md'>
//                                                 <PaymentComp price='2284' text='Pay via UPI' img={upiPay} color='bg-[rgb(1,177,86)]' /></div>
//                                             <div className='w-[234px] h-[68px] bg-green-400 rounded-md' color='black'>
//                                                 <PaymentComp price='2299' text='Pay via Card' img={netPay} color='bg-black' />
//                                             </div>
//                                             <div className='w-[234px] h-[68px] bg-green-500 rounded-md'>
//                                                 <PaymentComp price='2299' text='Pay via Wallets' img={mobPay} color='bg-black' />
//                                             </div>
//                                             <div className='w-[234px] h-[68px] bg-green-600 rounded-md'>
//                                                 <PaymentComp price='2299' text='Pay via Netbanking' img='none' color='bg-black' />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 }
//                             </div>

//                             <div className='w-[100%]  flex  h-[8%]'>

//                                 <div className='w-[30%]  flex items-center'>
//                                     <h1 className='text-[9px] flex items-center'>T&C | Privacy | 592c4531</h1>
//                                 </div>

//                                 <div className='w-[60%] h-[100%]  text-xs flex  items-center'>
//                                     <div className='text-[8px] w-[33%] h-[90%] flex items-center   '>
//                                         <div className='w-[30%] h-[100%] flex justify-center items-center '>
//                                             <MdVerifiedUser className='text-xl' />
//                                         </div>
//                                         <span className='flex flex-col justify-center  w-[70%] h-[100%] overflow-hidden '>
//                                             <span className=' w-[100%]  h-[40%] font-bold overflow-hidden'>PCI DSS</span>

//                                             <span className=' h-[50%] '>
//                                                 Certified
//                                             </span>

//                                         </span>
//                                     </div>

//                                     <div className='text-[8px] w-[33%] h-[90%] flex items-center '>
//                                         <div className='w-[30%] h-[100%] flex justify-center items-center '>
//                                             <MdSecurity className='text-xl' />
//                                         </div>
//                                         <span className='flex flex-col justify-center  w-[70%] h-[100%] overflow-hidden '>
//                                             <span className=' w-[100%]  h-[40%] font-bold overflow-hidden'>Secured</span>

//                                             <span className='overflow-hidden h-[50%] '>
//                                                 Payments
//                                             </span>

//                                         </span>
//                                     </div>

//                                     <div className='text-[8px] w-[33%] h-[90%] flex items-center   '>
//                                         <div className='w-[30%] h-[100%] flex justify-center items-center '>
//                                             <VscVerified className='text-xl' />
//                                         </div>
//                                         <span className='flex flex-col justify-center  w-[70%] h-[100%] overflow-hidden '>
//                                             <span className=' w-[100%]  h-[40%] font-bold overflow-hidden'>Verified</span>

//                                             <span className='overflow-hidden h-[50%] '>
//                                                 Merchants
//                                             </span>

//                                         </span>
//                                     </div>
//                                 </div>

//                                 <div className='flex w-[20%] '>
//                                     <h1 className='text-[9px] flex justify-center items-center'>Powered By <span className='ml-2 text-sm'><SiRazorpay /></span></h1>
//                                 </div>
//                             </div>


//                         </div>

//                         <div className='w-[45%] flex flex-col justify-between px-6 py-6 h-[100%] bg-[rgb(250,250,250)]'>
//                             <div className='w-[100%] h-[57%] px-6 py-3 bg-white rounded-md shadow-sm'>
//                                 <h1 className='flex text-sm items-center'><BsCart2 className='mr-2 text-xl font-semibold' />Order Summary</h1>
//                                 <div className=' mt-4 w-[100%] h-[45%] '>
//                                     <div className='  w-[100%] h-auto '>
//                                         {
//                                             cart.map((val) => (
//                                                 <div className='w-[100%] mt-1 h-[75px] border-b-[1px]  flex '>
//                                                     <div className=' w-[30%] h-[100%]'>
//                                                         <img className='w-[60px] h-[60px] rounded-full ' src={val.image} alt='no img'></img>
//                                                     </div>

//                                                     <div className='px-2 text-sm' >
//                                                         <h1 className='font-semibold'>{val.itemName}</h1>
//                                                         <h1>Price: ₹{val.price}</h1>
//                                                         <h1>Quantity: {val.count}</h1>
//                                                     </div>
//                                                 </div>
//                                             ))
//                                         }
//                                     </div>
//                                 </div>
//                                 <h1 className='flex justify-between text-sm mt-1'>Subtotal<span>&#8377;{subTotal}</span></h1>
//                                 <h1 className='flex justify-between text-sm mt-1'>Shipping<span>Free</span></h1>
//                                 <div className=' border-t-[1px] w-[100%] h-[12%] mt-3'>
//                                     <h1 className='flex justify-between font-semibold text-sm mt-1'>To Pay<span>&#8377;{subTotal}</span></h1>
//                                 </div>
//                             </div>

//                             <div className='w-[100%] flex items-center justify-center text-[rgb(89,149,44)] h-[10%] bg-white rounded-md shadow-sm '>
//                                 <h1 className='flex items-center justify-center'><span className='mr-2 text-3xl'><TbTruckDelivery /></span>Earliest Delivery by Tomorrow</h1>
//                             </div>

//                             <div className='px-1 w-[100%] h-[20%] bg-white rounded-md shadow-sm'>
//                                 <div className='text-[rgb(61,38,118)] flex justify-center items-center h-[50%]'>
//                                     <span className='text-4xl mr-2'>
//                                         <BiSolidOffer />
//                                     </span>

//                                     <div className='relative w-[80%] h-[90%]'>
//                                         <input
//                                             className='placeholder-[rgb(61,38,118)] font-semibold rounded-full border-dashed border-[1px] pl-3 pr-16 border-[rgb(61,38,118)] w-full h-full'
//                                             type='text'
//                                             placeholder='Enter coupon code'
//                                             value={couponCode}
//                                             onChange={(e) => setCouponCode(e.target.value)}
//                                         />
//                                         <button
//                                             onClick={applyCoupon}
//                                             className='absolute right-1 top-1/2 transform -translate-y-1/2 bg-[rgb(61,38,118)] text-white text-xs px-3 py-1 rounded-full hover:bg-[rgb(51,30,98)] transition'
//                                         >
//                                             Apply
//                                         </button>
//                                     </div>
//                                 </div>
//                                 {message && (
//                                     <p className='text-xs text-right pr-3 mt-1 text-[rgb(61,38,118)]'>{message}</p>
//                                 )}
//                                 <div className='mt-2 bg-purple-50  rounded-xl shadow-sm text-xs text-[rgb(61,38,118)]'>
//                                     <h2 className='font-semibold mb-1'>Available Coupon:</h2>
//                                     <ul className='list-disc pl-5 space-y-1'>
//                                         <li>
//                                             <strong>SAVE200</strong> – ₹200 off – min ₹1000
//                                         </li>
//                                     </ul>
//                                 </div>


//                             </div>
//                             <div className='absolute top-1 right-1'>
//                                 <button onClick={() => handleClose()} className='flex justify-center items-center rounded-full w-[40px] h-[40px] bg-[rgb(241,241,241)]'><IoCloseCircleSharp className='text-3xl text-[rgb(184,184,184)]' /></button>
//                             </div>
//                         </div>
//                     </div>
//                 </Box>
//             </Modal>
//         </>
//     );
// }

// export default CheckoutModal

import React from 'react'
import { useContext, useEffect, useState } from 'react';
import CheckoutAddress from './CheckoutAddress';
import Box from '@mui/material/Box';
import './LoginModal.css'
import Modal from '@mui/material/Modal';
import { TbTruckDelivery } from "react-icons/tb";
import { BsCart2 } from "react-icons/bs";
import { SiRazorpay } from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import { VscVerified } from "react-icons/vsc";
// import { TbCircleDashedPercentage } from "react-icons/tb";
// import { TbCircleDashedPercentage } from "react-icons/tb";
import { MdArrowRightAlt } from "react-icons/md";
import { MdVerifiedUser } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import PaymentComp from './PaymentComp';
import { IoCloseCircleSharp } from "react-icons/io5";
import mobPay from './mobPay.png'
import upiPay from './upiPay.png'
import netPay from './netPay.png'
import Cartt from '../context/CartCon';
import { LoginDetailContext } from '../context/LoginDetailCon';
import axios from 'axios'

// import { SiTicktick } from "react-icons/si";


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

function CheckoutModal({ subTotal, closeFunc }) {
    const { cart, cartTotal } = useContext(Cartt);
    const { loggedIn } = useContext(LoginDetailContext);

    const [open, setOpen] = useState(true);
    const [activeStep, setActiveStep] = useState(1);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [originalPhone, setOriginalPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [isOTPVerified, setIsOTPVerified] = useState(false);
    const [showOTPField, setShowOTPField] = useState(false);
    const [couponCode, setCouponCode] = useState('');
    const [message, setMessage] = useState('');
    const [discountAmount, setDiscountAmount] = useState(0);
    const [finalTotal, setFinalTotal] = useState(subTotal);
    const [addressValid, setAddressValid] = useState(false);

    const [stepOneColor, setStepOneColor] = useState(false)
    const [stepTwoColor, setStepTwoColor] = useState(false)
    const [stepThreeColor, setStepThreeColor] = useState(false)

    const [showNumberField, setshowNumberField] = useState(true)
    const [isUserVerified, setIsUserVerified] = useState({
        isVerified: false,
        verifiedPhoneNumber: null
    })

    useEffect(() => {
        if (loggedIn) {
            setPhoneNumber(loggedIn.phone);
            setOriginalPhone(loggedIn.phone);
            setIsOTPVerified(true);
            setStepOneColor(true)
            setActiveStep(2);
        }
    }, [loggedIn]);

    const handleClose = () => {
        setOpen(false);
        closeFunc();
    };

    const sendOTP = async () => {
        try {

            const shouldBypassOTP =
                (isUserVerified.isVerified && phoneNumber === isUserVerified.verifiedPhoneNumber) ||
                (loggedIn && phoneNumber === loggedIn.phone);

            if (shouldBypassOTP) {
                setIsOTPVerified(true);
                setShowOTPField(false);
                setIsUserVerified({ isVerified: true, verifiedPhoneNumber: phoneNumber });
                setActiveStep(2);
                alert('Phone number matches your account and is already verified.');
                return;
            }

            try {
                await axios.post('http://localhost:8000/auth/checkout/send-otp', { phone: phoneNumber });
                setShowOTPField(true);
                setIsOTPVerified(false);
                setIsUserVerified({ isVerified: false, verifiedPhoneNumber: null });
                setshowNumberField(false)
                setStepOneColor(false)
            } catch (err) {
                alert(err?.response?.data?.message || "Failed to send OTP");
            }


        } catch (error) {
            console.error('Send OTP Error:', error);
            alert(error?.response?.data?.message || 'Failed to send OTP');
        }
    };

    const verifyOTP = async () => {

        try {
            await axios.post('http://localhost:8000/auth/checkout/verify-otp', {
                phone: phoneNumber,
                otp: otp
            });
            setIsUserVerified({ isVerified: true, verifiedPhoneNumber: phoneNumber });
            setIsOTPVerified(true);
            setshowNumberField(true)
            setShowOTPField(false)
            setStepOneColor(true)
            setActiveStep(2);
            setOtp('')

        } catch (err) {
            alert(err?.response?.data?.message || "Invalid OTP");
        }

    };

    const handlePhoneNumberChange = (val) => {
        setPhoneNumber(val);
        const shouldBypassOTP =
            (isUserVerified.isVerified && val === isUserVerified.verifiedPhoneNumber) ||
            (loggedIn && val === loggedIn.phone);
        if (shouldBypassOTP) {
            //  setIsUserVerified({ isVerified: true, verifiedPhoneNumber: val });
            setIsOTPVerified(true);
            setShowOTPField(false);
            setActiveStep(2);
        } else {
            // setIsUserVerified({ isVerified: false, verifiedPhoneNumber: null });
            setIsOTPVerified(false);
            setShowOTPField(false);
        }
    };

    const applyCoupon = async () => {
        try {
            const res = await axios.post('http://localhost:8000/coupon/verifyCoupon', {
                code: couponCode,
                cartTotal
            });
            setDiscountAmount(res.data.discount);
            setFinalTotal(res.data.finalAmount);
            setMessage(`Coupon applied: ₹${res.data.discount} off`);
        } catch (err) {
            setDiscountAmount(0);
            setFinalTotal(cartTotal);
            setMessage(err.response?.data?.message || 'Invalid coupon');
        }
    };


    return (
        <>
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

                    <div className='w-[100%] relative h-[100%] flex justify-center items-center '>
                        <div className='p-2 w-[60%] h-[100%] bg-white'>
                            <div className='w-[100%] h-[9%] bg-[rgb(229,229,229)] rounded-md p-1 flex'>
                                <div className='object-cover w-[15%] h-[100%] rounded-md bg-white p-1 overflow-hidden'>
                                    <img src='https://cdn.gokwik.co/merchant/155/logo1632914610996.jpeg' alt='no img'></img>
                                </div>
                                <div className='text-sm font-bold flex items-center justify-center w-[90%] h-[100%]'>
                                    <button onClick={() => {setActiveStep(1) }}  className={`mr-9 ${stepOneColor && activeStep!==1 ? 'text-green-600' : 'text-black'} `}>Mobile</button>
                                    <button disabled={!isOTPVerified || activeStep===1 } onClick={() => setActiveStep(2)} className={`mr-9 ${stepTwoColor && activeStep >= 2 ? 'text-green-600' : 'text-gray-400'}`} >Address</button>
                                    <button disabled={!addressValid || activeStep===1 || activeStep===2} onClick={() => setActiveStep(3)} className={`mr-9 ${stepThreeColor  ? 'text-green-600' : 'text-gray-400'}`}>Pay</button>
                                </div>
                            </div>

                            <div className='w-[100%]  h-[80%]'>
                                {
                                    
                                    <div style={{ display: activeStep === 1 ? 'block' : 'none' }} className='w-[100%] h-[100%] flex   flex-col'>
                                        {/* <h1 className='text-xl m-auto'>Enter Mobile Number </h1>
                                        <button onClick={handleMobileContinue}>Continue</button> */}

                                        {/* showNumberField */}
                                        {showNumberField &&
                                            <>
                                                <div className='mt-12 flex justify-center items-center w-[100%] h-[10%] '>
                                                    <h1 className='text-xl font-semibold'>Enter Mobile Number</h1>
                                                </div>

                                                <div className='w-[100%] h-[30%]  flex flex-col justify-center items-center'>
                                                    <input className='pl-2 border-[1px] border-black text-xl w-[55%] h-[45%] rounded-md'
                                                        type='text'
                                                        placeholder='Enter Number'
                                                        value={phoneNumber}
                                                        onChange={(e) => handlePhoneNumberChange(e.target.value)}
                                                    ></input>
                                                    {!showOTPField && (
                                                        <button onClick={sendOTP} className='mt-4 bg-black text-white px-4 py-2 rounded-md'>Continue</button>
                                                    )}
                                                </div>
                                            </>
                                        }
                                        {showOTPField && (
                                            <>
                                                <div className='mt-12 flex justify-center items-center w-[100%] h-[10%] '>
                                                    <h1 className='text-xl font-semibold'>Enter OTP sent to: {`+91 ${phoneNumber}`}</h1>
                                                </div>
                                                <input
                                                    className='mt-4 p-2 border rounded-md w-[70%] self-center'
                                                    placeholder='Enter OTP'
                                                    value={otp}
                                                    onChange={(e) => setOtp(e.target.value)}
                                                />
                                                <button onClick={verifyOTP} className='mt-2 bg-green-600 text-white px-4 py-2 rounded-md w-[24%] self-center' >Verify OTP</button>
                                            </>
                                        )}
                                        {/* <button onClick={handleMobileContinue} className='bg-[rgb(137,133,147)] text-lg w-[58%] h-[48%] flex justify-center items-center rounded-md text-white'>Continue <MdArrowRightAlt className='ml-2 text-3xl' /></button> */}

                                        {
                                            showNumberField &&

                                            <div className='text-[rgb(137,133,147)] justify-center items-center  flex  w-[100%] h-[10%] text-center text-[10px] rounded-md  mt-2'>
                                                <p className='w-[50%]'>By proceeding, I accept that I have read and understood the Gokwik's Privacy Policy and T&C
                                                </p>
                                            </div>
                                        }

                                    </div>
                                }


                                {
                                    // activeStep === 2 &&
                                    <div style={{ display: activeStep === 2 ? 'block' : 'none' }} className='w-[100%] h-[100%] '>                                                            
                                        <CheckoutAddress addValidFunc={() => setAddressValid(true)} cntBtn={() => setActiveStep(3)  } stepTwoColor = {(x)=> setStepTwoColor(x)} /> 
                                    </div>
                                }
                                {
                                    // activeStep === 3 &&
                                    <div style={{ display: activeStep === 3 ? 'block' : 'none' }} className='w-[100%] h-[100%] flex   flex-col'>

                                        <div className=' mt-20 flex justify-center items-center w-[100%] h-[10%] text-center '>
                                            <h1 className='text-xs font-semibold'>Please select payment method to complete the order
                                                <br></br>
                                                <span className='font-bold'>Extra ₹15 discount on UPI</span></h1>
                                        </div>
                                        <div className='w-[100%] h-[38%]  flex flex-wrap gap-2  mt-4'>
                                            <div className='w-[234px] h-[68px] bg-green-300  rounded-md'>
                                                <PaymentComp price='2284' text='Pay via UPI' img={upiPay} color='bg-[rgb(1,177,86)]' /></div>
                                            <div className='w-[234px] h-[68px] bg-green-400 rounded-md' color='black'>
                                                <PaymentComp price='2299' text='Pay via Card' img={netPay} color='bg-black' />
                                            </div>
                                            <div className='w-[234px] h-[68px] bg-green-500 rounded-md'>
                                                <PaymentComp price='2299' text='Pay via Wallets' img={mobPay} color='bg-black' />
                                            </div>
                                            <div className='w-[234px] h-[68px] bg-green-600 rounded-md'>
                                                <PaymentComp price='2299' text='Pay via Netbanking' img='none' color='bg-black' />
                                            </div>
                                        </div>
                                        <div>
                                            Cash on Dilivery
                                        </div>
                                    </div>
                                }
                            </div>

                            <div className='w-[100%]  flex  h-[8%]'>

                                <div className='w-[30%]  flex items-center'>
                                    <h1 className='text-[9px] flex items-center'>T&C | Privacy | 592c4531</h1>
                                </div>

                                <div className='w-[60%] h-[100%]  text-xs flex  items-center'>
                                    <div className='text-[8px] w-[33%] h-[90%] flex items-center   '>
                                        <div className='w-[30%] h-[100%] flex justify-center items-center '>
                                            <MdVerifiedUser className='text-xl' />
                                        </div>
                                        <span className='flex flex-col justify-center  w-[70%] h-[100%] overflow-hidden '>
                                            <span className=' w-[100%]  h-[40%] font-bold overflow-hidden'>PCI DSS</span>

                                            <span className=' h-[50%] '>
                                                Certified
                                            </span>

                                        </span>
                                    </div>

                                    <div className='text-[8px] w-[33%] h-[90%] flex items-center '>
                                        <div className='w-[30%] h-[100%] flex justify-center items-center '>
                                            <MdSecurity className='text-xl' />
                                        </div>
                                        <span className='flex flex-col justify-center  w-[70%] h-[100%] overflow-hidden '>
                                            <span className=' w-[100%]  h-[40%] font-bold overflow-hidden'>Secured</span>

                                            <span className='overflow-hidden h-[50%] '>
                                                Payments
                                            </span>

                                        </span>
                                    </div>

                                    <div className='text-[8px] w-[33%] h-[90%] flex items-center   '>
                                        <div className='w-[30%] h-[100%] flex justify-center items-center '>
                                            <VscVerified className='text-xl' />
                                        </div>
                                        <span className='flex flex-col justify-center  w-[70%] h-[100%] overflow-hidden '>
                                            <span className=' w-[100%]  h-[40%] font-bold overflow-hidden'>Verified</span>

                                            <span className='overflow-hidden h-[50%] '>
                                                Merchants
                                            </span>

                                        </span>
                                    </div>
                                </div>

                                <div className='flex w-[20%] '>
                                    <h1 className='text-[9px] flex justify-center items-center'>Powered By <span className='ml-2 text-sm'><SiRazorpay /></span></h1>
                                </div>
                            </div>


                        </div>

                        <div className='w-[45%] flex flex-col justify-between px-6 py-6 h-[100%] bg-[rgb(250,250,250)]'>
                            <div className='w-[100%] h-[57%] px-6 py-3 bg-white rounded-md shadow-sm'>
                                <h1 className='flex text-sm items-center'><BsCart2 className='mr-2 text-xl font-semibold' />Order Summary</h1>
                                <div className=' mt-4 w-[100%] h-[45%] '>
                                    <div className='  w-[100%] h-auto '>
                                        {
                                            cart.map((val) => (
                                                <div className='w-[100%] mt-1 h-[75px] border-b-[1px]  flex '>
                                                    <div className=' w-[30%] h-[100%]'>
                                                        <img className='w-[60px] h-[60px] rounded-full ' src={val.image} alt='no img'></img>
                                                    </div>

                                                    <div className='px-2 text-sm' >
                                                        <h1 className='font-semibold'>{val.itemName}</h1>
                                                        <h1>Price: ₹{val.price}</h1>
                                                        <h1>Quantity: {val.count}</h1>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <h1 className='flex justify-between text-sm mt-1'>Subtotal<span>&#8377;{subTotal}</span></h1>
                                <h1 className='flex justify-between text-sm mt-1'>Shipping<span>Free</span></h1>
                                <div className=' border-t-[1px] w-[100%] h-[12%] mt-3'>
                                    <h1 className='flex justify-between font-semibold text-sm mt-1'>To Pay<span>&#8377;{subTotal}</span></h1>
                                </div>
                            </div>

                            <div className='w-[100%] flex items-center justify-center text-[rgb(89,149,44)] h-[10%] bg-white rounded-md shadow-sm '>
                                <h1 className='flex items-center justify-center'><span className='mr-2 text-3xl'><TbTruckDelivery /></span>Earliest Delivery by Tomorrow</h1>
                            </div>

                            <div className='px-1 w-[100%] h-[20%] bg-white rounded-md shadow-sm'>
                                <div className='text-[rgb(61,38,118)] flex justify-center items-center h-[50%]'>
                                    <span className='text-4xl mr-2'>
                                        <BiSolidOffer />
                                    </span>

                                    <div className='relative w-[80%] h-[90%]'>
                                        <input
                                            className='placeholder-[rgb(61,38,118)] font-semibold rounded-full border-dashed border-[1px] pl-3 pr-16 border-[rgb(61,38,118)] w-full h-full'
                                            type='text'
                                            placeholder='Enter coupon code'
                                            value={couponCode}
                                            onChange={(e) => setCouponCode(e.target.value)}
                                        />
                                        <button
                                            onClick={applyCoupon}
                                            className='absolute right-1 top-1/2 transform -translate-y-1/2 bg-[rgb(61,38,118)] text-white text-xs px-3 py-1 rounded-full hover:bg-[rgb(51,30,98)] transition'
                                        >
                                            Apply
                                        </button>
                                    </div>
                                </div>
                                {message && (
                                    <p className='text-xs text-right pr-3 mt-1 text-[rgb(61,38,118)]'>{message}</p>
                                )}
                                <div className='mt-2 bg-purple-50  rounded-xl shadow-sm text-xs text-[rgb(61,38,118)]'>
                                    <h2 className='font-semibold mb-1'>Available Coupon:</h2>
                                    <ul className='list-disc pl-5 space-y-1'>
                                        <li>
                                            <strong>SAVE200</strong> – ₹200 off – min ₹1000
                                        </li>
                                    </ul>
                                </div>


                            </div>
                            <div className='absolute top-1 right-1'>
                                <button onClick={() => handleClose()} className='flex justify-center items-center rounded-full w-[40px] h-[40px] bg-[rgb(241,241,241)]'><IoCloseCircleSharp className='text-3xl text-[rgb(184,184,184)]' /></button>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    );
}

export default CheckoutModal

