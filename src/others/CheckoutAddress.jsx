import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import { MdArrowRightAlt } from "react-icons/md";

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

function CheckoutAddress({ cntBtn, addValidFunc }) {

    const [pincode, setPincode] = useState()
    const [isValid, setIsValid] = useState(false)
    const [openProgress, setOpenProgress] = React.useState(false)
    const [city, setCity] = useState('')
    const [stateName, setStateName] = useState('')
    const [userName, setUserName] = useState('')
    const [userMail, setUserMail] = useState('')
    const [userAddress, setUserAddress] = useState('')
    const [userPlace, setUserPlace] = useState('')
    const [addressType, setAddressType] = useState('');

    const handlePincode = async () => {
        setOpenProgress(true)
        const options = {
            method: 'POST',
            url: 'https://pincode.p.rapidapi.com/',
            headers: {
                'content-type': 'application/json',
                'Content-Type': 'application/json',
                'X-RapidAPI-Key': 'de9c729c89msh88c08711e0bf1bdp19fcb3jsn8218a092d712',
                'X-RapidAPI-Host': 'pincode.p.rapidapi.com'
            },
            data: {
                searchBy: 'pincode',
                value: pincode
            }
        };

        try {
            const response = await axios.request(options);
            if (response.status === 200) {
                setOpenProgress(false)
                const data = response.data[0];
                const state = data.circle;
                if (state) {
                    setStateName(state)
                } else {
                    console.error("Circle not found in response data:", data);
                }
                setCity(data.district)

            }

        } catch (error) {
            console.error(error);
            setOpenProgress(false)
        }
    }
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const validateAddress = (address) => {
        return address.length >= 12;
    };
    const validateFieldsNotEmpty = () => {
        return (
            pincode && city && stateName && userName && userMail && userAddress
        );
    };
    const handleContinueBtn = () => {
        if (!validateEmail(userMail)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!validateAddress(userAddress)) {
            alert("Address should have a minimum of 12 characters.");
            return;
        }

        if (!validateFieldsNotEmpty()) {
            alert("Please fill in all the fields.");
            return;
        }

        const selectedAddressType = document.querySelector('input[name="address_type"]:checked');
        if (!selectedAddressType) {
            alert("Please select an address type (HOME or WORK).");
            return;
        }
        console.log(city, stateName, userName, userAddress, userMail, addressType)

        cntBtn()
    }
    useEffect(() => {

        if (pincode && validatePincode(pincode), validateFieldsNotEmpty() && userMail && userAddress && city && stateName && userName && validateEmail(userMail) && validateAddress(userAddress)) {

            const selectedAddressType = document.querySelector('input[name="address_type"]:checked');
            if (!selectedAddressType) {

                return;
            }
            else {
                setIsValid(true)
                addValidFunc()
            }
        }
        else {
            setIsValid(false)

        }

    }, [city, stateName, userName, userAddress, userMail, addressType, pincode])

    const validatePincode = (pincode) => {
        const pincodeRegex = /^[1-9][0-9]{5}$/;
        return pincodeRegex.test(pincode);
    };

    const handleAddressTypeChange = (event) => {
        setAddressType(event.target.value);
    };

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            if (validatePincode(pincode)) {
                handlePincode(pincode);
            } else {
                setPincode('')
            }
        }, 500);

        return () => clearTimeout(debounceTimer);
    }, [pincode])

    return (
        <>
            <div className='w-[100%] h-[85%]  b  px-1 py-4'>
                <div className='w-[100%] h-[18%] border-b-[1px] flex justify-between'>
                    <h1 className='font-semibold'>Add New Address </h1>
                    <span className='text-xs'>*Mandatory Fields</span>
                </div>

                <div className='w-[100%] h-[78%]  mt-2'>
                    <div className='w-[100%] h-[400px]'>
                        <form className='flex flex-wrap flex-col  gap-2'>
                            <input onChange={(e) => setPincode(e.target.value)} className='border-[1px] w-[100%] p-2 h-[50px] rounded-md' type='number' placeholder='Pincode*'></input>
                            <div className=' h-[50px] flex  '>
                                <input value={city} className='border-[1px] w-[49%] p-2 h-[50px] rounded-md' type='text' placeholder='City*'></input>
                                <input value={stateName} className='border-[1px] w-[49%] p-2 h-[50px] rounded-md ml-[9px]' type='text' placeholder='State*'></input>
                            </div>
                            <input onChange={(e) => setUserName(e.target.value)} value={userName} className='border-[1px] w-[100%] p-2  h-[50px] rounded-md' type='text' placeholder='Full Name*'></input>
                            <input onChange={(e) => setUserMail(e.target.value)} value={userMail} className='border-[1px] w-[100%] p-2  h-[50px] rounded-md' type='text' placeholder='Email*'></input>
                            <input onChange={(e) => setUserAddress(e.target.value)} value={userAddress} className='border-[1px] w-[100%] p-2  h-[50px] rounded-md' type='text' placeholder='Full Address(House no.,Area,etc)*'></input>
                            <div className='bg-white flex items-center w-[100%] p-2 h-[50px] rounded-md overflow-hidden'>
                                <h1>Address Type</h1>
                                <div className='ml-12 border-[1px] flex items-center justify-center w-[25%] bg-[rgb(250,250,250)]  h-[38px] rounded-md mr-4'>
                                    <input
                                        className='mr-1'
                                        type="radio" id="home"
                                        name="address_type" value="HOME"
                                        checked={addressType === "HOME"}
                                        onChange={handleAddressTypeChange} />
                                    <label className='text-sm' for="home">HOME</label>
                                </div>
                                <div className='border-[1px] flex items-center justify-center w-[25%]  h-[38px] rounded-md bg-[rgb(250,250,250)]'>
                                    < input className='mr-1' type="radio" id="work" name="address_type" value="WORK" checked={addressType === "WORK"}
                                        onChange={handleAddressTypeChange} />
                                    <label for="work">WORK</label><br></br>
                                </div>
                            </div>
                            <div className='bg-white  flex items-center w-[100%] p-2 h-[50px] rounded-md overflow-hidden font-normal '>
                                <label className='mr-2' for='shipping_method'>Shipping method</label> < input className='mt-1 mr-1 flex justify-center items-center' checked type="radio" id="free_shipping" name="free_shipping" value="free_shipping" />
                                Free shipping @ ₹0
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='  flex justify-center items-center h-[15%] '>
                {isValid ? (
                    <button onClick={handleContinueBtn} className='bg-black text-lg w-[58%] h-[90%] flex justify-center items-center rounded-md text-white'>
                        Continue <MdArrowRightAlt className='ml-2 text-3xl' />
                    </button>
                ) : (
                    <button className='bg-[rgb(137,133,147)] text-lg w-[58%] h-[90%] flex justify-center items-center rounded-md text-white' disabled>
                        Continue <MdArrowRightAlt className='ml-2 text-3xl' />
                    </button>
                )}
            </div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={openProgress}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    )
}
export default CheckoutAddress