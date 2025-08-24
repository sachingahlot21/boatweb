import React, { useContext, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { LoginDetailContext } from '../context/LoginDetailCon';
import './LoginModal.css';

// Improved modal style with consistent styling
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'rgb(250,250,250)',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
  border: '1px solid rgb(220, 220, 220)',
  outline: 'none',
  p: 0,
  maxWidth: '90vw',
  width: '480px',
};

export default function LoginModal({ closeFunc }) {
  const { setUserName, setUserEmail, setLoggedIn } = useContext(LoginDetailContext);
  const [currentModal, setCurrentModal] = useState('phone');
  const [phoneNo, setPhoneNo] = useState('');
  const [otp, setOtp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [timer, setTimer] = useState(60);

  const isPhoneValid = phoneNo.length === 10 && /^\d+$/.test(phoneNo);
  const isOtpValid = otp.length === 6 && /^\d+$/.test(otp);

  useEffect(() => {
    return () => {
      if (timer > 0) {
        clearInterval(timer);
      }
    };
  }, []);

  const handleClose = () => {
    closeFunc();
  };

  const startOtpTimer = () => {
    setTimer(60);
    let countdown = 59;
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
    return interval;
  };

  const handleSendOtp = async () => {
    if (!isPhoneValid) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      const response = await axios.post('http://localhost:8000/auth/send-otp', { phone: phoneNo });
      console.log(response.data)
      if (response.data.success) {
        console.log("OTP sent successfully!");
        setIsSubmitting(false);
        setCurrentModal('otp');

        const timerInterval = startOtpTimer();

        return () => clearInterval(timerInterval);
      } else {
        console.log("OTP - Error");
        setError('Failed to send OTP. Please try again.');
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error('Error sending OTP:', err);
      setError(err.response?.data?.message || 'Network error. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!isOtpValid) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      const response = await axios.post('http://localhost:8000/auth/verify-otp', {
        phone: phoneNo,
        otp: otp
      });

      if (response.data.success) {

        if (response.data.isNewUser) {
          setIsSubmitting(false);
          setCurrentModal('email');
        }
        else {
          console.log("Login successfully!");
          setIsSubmitting(false);
          setUserName(response.data.user.name);
          setUserEmail(response.data.user.email);
          const userData = {
            userId: response.data.user.id,
            name: response.data.user.name,
            email: response.data.user.email,
            phone: response.data.user.phone,
          };
          setLoggedIn(userData);
          localStorage.setItem("user", JSON.stringify(userData));
          handleClose()
        }

      } else {
        console.log("OTP verification failed");
        setError('Invalid OTP. Please try again.');
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error('Error verifying OTP:', err);
      setError(err.response?.data?.message || 'Network error. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('fullName');
    const email = formData.get('email');

    if (!name || !email) {
      setError('Please fill all fields');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      const response = await axios.post('http://localhost:8000/auth/register', {
        phone: phoneNo,
        name,
        email
      });

      if (response.data.success) {
        console.log("User registered successfully!");
        setUserName(response.data.user.name);
        setUserEmail(response.data.user.email);
        const userData = {
          userId: response.data.user.id,
          name: response.data.user.name,
          email: response.data.user.email,
          phone: response.data.user.phone
        };
        setLoggedIn(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        handleClose();
      } else {
        console.log("User registration failed");
        setError('Failed to complete registration. Please try again.');
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error('Error registering user:', err);
      setError(err.response?.data?.message || 'Network error. Please try again.');
      setIsSubmitting(false);
    }
  };

  // Go back to phone input
  const handleEditPhone = () => {
    setCurrentModal('phone');
  };

  // Resend OTP
  const handleResendOtp = async () => {
    if (timer > 0) return;

    setError('');
    setIsSubmitting(true);

    try {
      const response = await axios.post('http://localhost:8000/send-otp', { PhoneNo: phoneNo });

      if (response.data.succes) {
        console.log("OTP resent successfully!");
        setIsSubmitting(false);
        // Start countdown timer for OTP
        startOtpTimer();
      } else {
        console.log("OTP resend failed");
        setError('Failed to resend OTP. Please try again.');
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error('Error resending OTP:', err);
      setError(err.response?.data?.message || 'Network error. Please try again.');
      setIsSubmitting(false);
    }
  };

  // Check if modal is open
  const isOpen = ['phone', 'otp', 'email'].includes(currentModal);

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="login-modal"
      aria-describedby="login-process"
    >
      <Box sx={modalStyle}>
        {/* Header */}
        <div className="relative bg-white p-5 rounded-t-lg border-b border-gray-200">
          <h2 className="text-center font-bold text-xl">
            {currentModal === 'phone' && 'Get started'}
            {currentModal === 'otp' && 'OTP Verification'}
            {currentModal === 'email' && 'Complete your profile'}
          </h2>
          <p className="text-center text-gray-600 mt-2">
            {currentModal === 'phone' && 'Please enter your mobile number to continue'}
            {currentModal === 'otp' && `Enter the OTP sent to +91 ${phoneNo}`}
            {currentModal === 'email' && 'Please enter your details to complete registration'}
          </p>

          {(currentModal === 'otp' || currentModal === 'email') && (
            <div className="text-center text-sm mt-1">
              <span className="text-gray-600">+91 {phoneNo}</span>
              <button
                onClick={handleEditPhone}
                className="ml-2 text-blue-600 font-medium hover:underline"
              >
                Edit
              </button>
            </div>
          )}

          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="bg-gray-50 p-6 rounded-b-lg">
          {error && (
            <div className="mb-4 p-2 bg-red-50 border border-red-200 text-red-600 rounded text-sm">
              {error}
            </div>
          )}

          {currentModal === 'phone' && (
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md text-gray-700">
                  +91
                </span>
                <input
                  id="phoneNumber"
                  type="tel"
                  value={phoneNo}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === '' || (/^\d+$/.test(value) && value.length <= 10)) {
                      setPhoneNo(value);
                      setError('');
                    }
                  }}
                  className="flex-1 min-w-0 block w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter 10-digit mobile number"
                  maxLength={10}
                  autoFocus
                />
              </div>

              <button
                onClick={handleSendOtp}
                disabled={!isPhoneValid || isSubmitting}
                className={`w-full mt-6 py-2 px-4 rounded-md font-medium text-white ${isPhoneValid && !isSubmitting
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-gray-400 cursor-not-allowed'
                  } transition-colors`}
              >
                {isSubmitting ? 'Sending...' : 'SEND OTP'}
              </button>
            </div>
          )}

          {currentModal === 'otp' && (
            <div>
              <label htmlFor="otpInput" className="block text-sm font-medium text-gray-700 mb-1">
                Enter OTP
              </label>
              <input
                id="otpInput"
                type="text"
                inputMode="numeric"
                value={otp}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === '' || (/^\d+$/.test(value) && value.length <= 6)) {
                    setOtp(value);
                    setError('');
                  }
                }}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter 6-digit OTP"
                maxLength={6}
                autoFocus
              />

              <div className="flex justify-between items-center mt-3">
                <span className="text-sm text-gray-500">
                  {timer > 0 ? `Resend OTP in ${timer}s` : ''}
                </span>
                <button
                  onClick={handleResendOtp}
                  disabled={timer > 0}
                  className={`text-sm ${timer > 0 ? 'text-gray-400' : 'text-blue-600 hover:underline'
                    }`}
                >
                  Resend OTP
                </button>
              </div>

              <button
                onClick={handleVerifyOtp}
                disabled={!isOtpValid || isSubmitting}
                className={`w-full mt-6 py-2 px-4 rounded-md font-medium text-white ${isOtpValid && !isSubmitting
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-gray-400 cursor-not-allowed'
                  } transition-colors`}
              >
                {isSubmitting ? 'Verifying...' : 'VERIFY OTP'}
              </button>
            </div>
          )}

          {currentModal === 'email' && (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your full name"
                  autoFocus
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email address"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 px-4 rounded-md font-medium text-white transition-colors ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                  }`}
              >
                {isSubmitting ? 'PROCESSING...' : 'COMPLETE REGISTRATION'}
              </button>
            </form>
          )}

          <p className="text-xs text-center text-gray-500 mt-6">
            By continuing, you agree to boAt's{' '}
            <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a> and{' '}
            <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
          </p>
        </div>
      </Box>
    </Modal>
  );
}