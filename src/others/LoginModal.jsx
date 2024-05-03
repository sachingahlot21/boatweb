
import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import './LoginModal.css'
import Modal from '@mui/material/Modal';
import { auth } from '../firebaseAuth';
import { app } from '../firebaseAuth';
import { LoginDetailContext } from '../context/LoginDetailCon';
import { RecaptchaVerifier, signInWithPhoneNumber, getAuth } from "firebase/auth";

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

export default function LoginModal({ closeFunc }) {
    const { setUserName } = useContext(LoginDetailContext)
    const { setUserEmail, setLoggedIn } = useContext(LoginDetailContext)
    const { userName, userEmail } = useContext(LoginDetailContext)

    const [open, setOpen] = React.useState(true);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false)
    const [PhoneNo, setPhoneNo] = React.useState("")
    

    const [otp, setOtp] = useState('')

    const handleOpen = () => setOpen(true);

    const handleClose = () => {
        setOpen(false)
        setOpen2(true)
        closeFunc()
    }
    const handleClose2 = () => {
        setOpen(false)
        closeFunc()
    }
    const handleClose3 = () => {
        closeFunc()
    }

    const handleContinueBtn = () => {
        window.confirmationResult
            .confirm(otp)
            .then(async (res) => {
                console.log(res);
                setOtp('');
                // setOpen2(false)
                // closeFunc()
                setOpen3(true)
            })
            .catch((err) => {
                alert("wrong otp!")
                console.log(err);

            });
    }
    const auth = getAuth(app)
    // React.useEffect(() => {

    const handleSubmitBtn = () => {
        setOpen3(false)
        closeFunc()
        setLoggedIn(true)
        alert('submited')
    }

    // }, [])

    const handleOtpBtn = () => {
        if (PhoneNo.length < 10) {
            alert("Invalid phoneno.")
            return
        }
        //    const auth = getAuth(app)

        // const appVerifier = new RecaptchaVerifier('recaptcha-container', {
        //     size: 'invisible',
        //     'expired-callback': () => { },
        // }, auth);


        window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
            'size': 'normal',
            'callback': () => {
            },
            'expired-callback': () => {
            }
        })

        signInWithPhoneNumber(auth, '+919818093263', window.recaptchaVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                setOpen(false),
                    setOpen2(true)
            }
            )
            .catch(error => {
                console.log("error: ", error)
            })
    }

    const handleCloseBtn = () => {
        setOpen(false)
        setOpen2(false)
        setOpen3(false)
        closeFunc()
    }

    const handleInputChange = (e) => {

        setPhoneNo(e.target.value)

    }

    const handleOtpChange = (e) => {

        setOtp(e.target.value)

    }

    const handleEmailChange = (e) => {
        setUserEmail(e.target.value)
    }

    const handleNameChange = (e) => {
        setUserName(e.target.value)
    }

    const handleEditBtn = () => {
        setOpen2(false)
        setOpen(true)
    }

    // function onCaptchVerify() {
    //     if (!window.recaptchaVerifier) {
    //       window.recaptchaVerifier = new RecaptchaVerifier(
    //         "recaptcha-container",
    //         {
    //           size: "invisible",

    //           "expired-callback": () => {},
    //         },
    //         auth
    //       );
    //     }
    //   }


    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className='flex justify-center items-center'
            >
                <Box height={400}
                    width={600}
                    my={1}
                    display="flex"
                    bgcolor='rgb(250,250,250)'
                    gap={1}
                    py={2}
                    px={2}
                    className='flex'
                    borderRadius={3}
                    boxShadow={4}
                    sx={{ border: '2px solid grey', style }}>

                    <div className='w-[100%] h-[100%]  '>
                        <div className='relative w-[100%] h-[25%] m-auto '>
                            <h1 className='w-[100%] h-[50%] flex text-2xl justify-center items-center'>Get<span className='ml-2 text-2xl font-bold'>started</span></h1>
                            <h1 className='w-[100%] h-[50%] flex justify-center items-center text-sm'>Please enter your Mobile Number to continue</h1>
                            <button onClick={handleCloseBtn} className='absolute w-7 h-7 font-semibold text-xs top-0 right-0 bg-[rgb(208,217,222)] rounded-full'>X</button>
                        </div>
                        <div className='w-[100%] px-24 pt-12 h-[75%] bg-[rgb(239,244,247)] rounded-md flex flex-col pb-2'>
                            <h1 className='text-sm font-semibold'>Enter Mobile Number</h1>

                            <input value={PhoneNo} onChange={handleInputChange} className='border-[1px] h-[23%] rounded-md pl-3 mt-2' type='number' placeholder='Type Here' ></input>

                            <button onClick={handleOtpBtn} className='m-auto font-bold w-[50%] h-[20%] rounded-md bg-[rgb(208,217,222)]'>SEND OTP</button>
                            <p className='text-[12px] text-center font-semibold'>By Confirming, you agree to boAt's Terms and Conditions and Privacy Policy</p>
                        </div>
                        <div id="recaptcha-container"
                            data-sitekey="6LcsaxsdAAAAAEBn0sPDCEncnU9564MisyRuDzD_"
                            data-callback="sendForm"
                            data-size="invisible">
                        </div>
                    </div>

                </Box>
            </Modal>

            <Modal
                open={open2}
                onClose={handleClose2}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className='flex justify-center items-center'
            >
                <Box height={400}
                    width={600}
                    my={1}
                    display="flex"
                    bgcolor='rgb(250,250,250)'
                    gap={1}
                    py={1}
                    px={2}
                    className='flex'
                    borderRadius={3}
                    boxShadow={4}
                    sx={{ border: '2px solid grey', style }}>

                    <div className='w-[100%] h-[100%]  '>
                        <div className='relative w-[100%] h-[25%] m-auto '>
                            <h1 className='w-[100%] h-[30%] flex text-2xl justify-center items-center'>OTP<span className='ml-2 text-2xl font-bold'>Verification</span></h1>
                            <h1 className='w-[100%] h-[30%] flex justify-center items-center text-sm'>Enter the OTP sent to your Mobile Number</h1>
                            <h1 className='w-[100%] h-[30%] flex justify-center items-center text-sm'>+91-{PhoneNo} <button onClick={handleEditBtn} className='ml-2 font-bold text-[rgb(46,49,145)]'>Edit</button></h1>
                            <button onClick={handleCloseBtn} className='absolute w-7 h-7 font-semibold text-xs top-0 right-0 bg-[rgb(208,217,222)] rounded-full'>X</button>
                        </div>
                        <div className='w-[100%] px-24 pt-10 h-[75%] bg-[rgb(239,244,247)] rounded-md flex flex-col pb-2'>

                            <input className='border-[1px] h-[21%] rounded-md pl-3 mt-2' type='text' placeholder='Type Here' onChange={handleOtpChange}></input>
                            <button className='mx-auto mt-2 font-bold w-[50%] h-[20%] rounded-md bg-[rgb(208,217,222)]' onClick={handleContinueBtn}>Continue</button>
                            <h1 className='mt-4 w-[100%] h-[20%] flex justify-center items-center text-sm text-[rgb(151,160,165)]'>09:55 | Enter the OTP</h1>
                            <p className='mt-4 text-[12px] text-center font-semibold'>By Confirming, you agree to boAt's Terms and Conditions and Privacy Policy</p>
                        </div>
                    </div>

                </Box>
            </Modal>

            <Modal
                open={open3}
                onClose={handleClose3}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className='flex justify-center items-center'
            >
                <Box height={400}
                    width={600}
                    my={1}
                    display="flex"
                    bgcolor='rgb(250,250,250)'
                    gap={1}
                    py={1}
                    px={2}
                    className='flex'
                    borderRadius={3}
                    boxShadow={4}
                    sx={{ border: '2px solid grey', style }}>

                    <div className='w-[100%] h-[100%]  '>
                        <div className='relative w-[100%] h-[25%] m-auto '>
                            <h1 className='w-[100%] h-[30%] flex text-2xl justify-center items-center'><span className='ml-2 text-2xl font-bold'>Continue with Email ID</span></h1>
                            <h1 className='w-[100%] h-[30%] flex justify-center items-center text-sm'>Please enter your Name & Email ID to continue</h1>
                            <h1 className='w-[100%] h-[30%] flex justify-center items-center text-sm'>+91- Please enter your Name & Email ID to continue <button onClick={handleEditBtn} className='ml-2 font-bold text-[rgb(46,49,145)]'>Edit</button></h1>
                            <button onClick={handleCloseBtn} className='absolute w-7 h-7 font-semibold text-xs top-0 right-0 bg-[rgb(208,217,222)] rounded-full'>X</button>
                        </div>
                        <div className='w-[100%]  pt-1 h-[75%] bg-[rgb(239,244,247)] rounded-md flex flex-col pb-2'>
                            <h1 className='text-sm font-semibold'>Full name</h1>
                            <input className='border-[1px] h-[21%] rounded-md pl-3 mt-2' type='text' placeholder='Type Here' onChange={handleNameChange}></input>

                            <h1 className='text-sm font-semibold mt-2'>E-mail</h1>
                            <input className='border-[1px] h-[21%] rounded-md pl-3 mt-2' type='email' placeholder='Type Here' onChange={handleEmailChange}></input>

                            <button className='mx-auto mt-2 font-bold w-[40%] h-[20%] rounded-md bg-[rgb(208,217,222)]' onClick={handleSubmitBtn}>Submit</button>

                            <p className='mt-4 text-[12px] text-center font-semibold'>By Confirming, you agree to boAt's Terms and Conditions and Privacy Policy</p>
                        </div>
                    </div>

                </Box>
            </Modal>
        </div>
    );
}