'use client'
import { Button, Card, Input } from '@nextui-org/react';
import React, { useRef, useState } from 'react'
import { UserAuth } from '../context/auth-context';
import { verify } from 'crypto';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const { signIn, verifyOTP } = UserAuth();

  const recaptchaContainer = useRef(null);
  const [showOtp, setShowOtp] = useState(false);

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <Card className='flex gap-3 p-4'>
        {
          !showOtp
          ? ( <>
              <Input
                isRequired
                label="Phone Number"
                placeholder="Enter Phone number"
                type="number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <Button
                type="submit"
                color="primary"
                size="lg"
                className='bg-primaryBg text-primary hover:bg-secondary hover:text-secondaryBg'
                onClick={() => {
                    setShowOtp(!showOtp);
                    signIn(phoneNumber, recaptchaContainer.current);
                  }
                }>
                  Get OTP
              </Button>
            </> )
          : ( <>
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
                className='bg-primaryBg text-primary hover:bg-secondary hover:text-secondaryBg'
                onClick={() => verifyOTP(otp)}>
                Verify OTP
              </Button>
            </> )
        }
      </Card>
      <div ref={recaptchaContainer}></div>
    </div>
  )
}

export default Login