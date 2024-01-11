'use client'
import { Button, Card, Input } from '@nextui-org/react';
import React, { useRef, useState } from 'react'
import { UserAuth } from '../context/auth-context';
import { useRouter } from 'next/navigation';

const Login = () => {
  const { signIn, verifyOTP } = UserAuth();
  const recaptchaContainer = useRef(null);
  const router = useRouter();

  const steps = [
    { id: 0, name: 'Get OTP', label: 'Enter your phone number', isActive: true},
    { id: 1, name: 'Verify OTP', label: 'Enter OTP sent to your phone', isActive: true},
    { id: 2, name: 'Create Account', label: 'Create Account', isActive: false},
  ];

  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');

  const [currentStepIdx, setCurrentStepIdx] = useState(0);

  const getNextStep = () => {
    return ([...steps].slice(currentStepIdx + 1)).find(step => step.isActive);
  }

  const handleNextStep = () => {
    const nextStep = getNextStep();

    if(!nextStep) {
      router.back();
      return;
    }

    setCurrentStepIdx(nextStep.id);
  }

  const handleSendOtp = () => {
    signIn(phoneNumber, recaptchaContainer.current);
    handleNextStep()
  }

  const handleVerifyOtp = () => {
    verifyOTP(otp);
    handleNextStep();
  }

  const createAccount = () => {
    handleNextStep();
  }

  const showPhoneNumberScreen = () => {
    return (
      <>
        <Input
          isRequired
          label="Phone Number"
          placeholder="Enter Phone number"
          type="number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <p className='text-center text-sm text-gray-400'>We will send you an SMS code on this number</p>
        <Button
          type="submit"
          color="primary"
          size="lg"
          className='mt-3 bg-primaryBg text-primary hover:bg-secondary hover:text-secondaryBg'
          onClick={handleSendOtp}>
            Send
        </Button>
      </>
    )
  }

  const showOtpScreen = () => {
    return (
      <>
        <Input
          isRequired
          label="OTP"
          placeholder="Enter OTP"
          type="number"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <Button
          type="submit"
          color="primary"
          size="lg"
          className='mt-3 bg-primaryBg text-primary hover:bg-secondary hover:text-secondaryBg'
          onClick={handleVerifyOtp}>
          Verify OTP
        </Button>
      </>
    )
  }

  const showCreateAccountScreen = () => {
    return (
      <>
        <Input
          isRequired
          label="Enter your Name"
          placeholder="Eg: Joe Biden"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          isRequired
          label="Enter your Email"
          placeholder="Eg: CqUzK@example.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          isRequired
          label="Enter your Date of Birth"
          placeholder="Eg: 06/15/1998"
          type="text"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <Input
          isRequired
          label="Enter your Address"
          placeholder="Eg: 123 Main Street"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Button
          type="submit"
          color="primary"
          size="lg"
          className='mt-3 bg-primaryBg text-primary hover:bg-secondary hover:text-secondaryBg'
          onClick={createAccount}>
          Create a new account
        </Button>
      </>
    )
  }

  const showScreen = () => {
    switch(currentStepIdx) {
      case 0:
        return showPhoneNumberScreen();
      case 1:
        return showOtpScreen();
      case 2:
        return showCreateAccountScreen();
    }
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <Card className='flex gap-3 p-4'>
        {
          showScreen()
        }
      </Card>
      <div ref={recaptchaContainer}></div>
    </div>
  )
}

export default Login