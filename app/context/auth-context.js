'use client';
import { useContext, createContext, useState, useEffect } from "react";
import { signInWithPhoneNumber, signOut, onAuthStateChanged, RecaptchaVerifier } from 'firebase/auth';
import { auth } from '../firebase/authentication';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [confirmation, setConfirmation] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
  }, [user])

  const generateRecaptcha = (recaptchaContainer) => {
    const appVerifier = new RecaptchaVerifier(auth, recaptchaContainer, {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // ...
      },
      'expired-callback': () => {
        // Response expired. Ask user to solve reCAPTCHA again.
        // ...
      }
    });
    return appVerifier;
  }

  const signIn = async (phoneNumber, recaptchaContainer) => {
    if( phoneNumber.length === 10 ){
      try {
        const appVerifier = generateRecaptcha(recaptchaContainer);
        const confirmation = await signInWithPhoneNumber(auth, '+1' + phoneNumber, appVerifier);
        setConfirmation(confirmation);
        return confirmation;
      } catch (error) {
        console.log(error);
      }
    }
  }

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  }

  const verifyOTP = async (otp) => {
    if( otp.length === 6 ){
      try {
        const result = await confirmation.confirm(otp);
        setUser(result.user);

        return;
      }
      catch (error) {
        console.log(error);
      }
    }

    console.log('Invalid OTP');

  }

  return (
    <AuthContext.Provider value={{ user, signIn, verifyOTP, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext);
}