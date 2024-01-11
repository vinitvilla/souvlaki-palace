import { Divider } from '@nextui-org/react';
import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa6';
import { FiPhoneCall } from 'react-icons/fi';

const TopBarBanner = () => {
  return (
    <div className='hidden md:flex p-2 w-full h-8 bg-primary flex justify-between text-secondaryBg bg-gradient-to-t from-primary to-secondary'>
      <div className='flex items-center space-x-2' justify='start'>
        <FiPhoneCall className='w-4 h-4' />
        <p className='text-center font-bold'>+1 (416) 269-1269</p>
      </div>
      <div className='flex items-center space-x-2' justify='center'>
        <p className='text-center font-bold'>Open 7 Days</p>
        <Divider orientation='vertical' />
        <p className='text-center font-bold'>Free Delivery on Orders $25+</p>
      </div>
      <div className='flex items-center space-x-2' justify='end'>
        <p className='font-bold'><FaFacebook className='w-4 h-4 hover:text-appSelectedElement' /></p>
        <p className='font-bold'><FaInstagram className='w-4 h-4 hover:text-appSelectedElement' /></p>
      </div>
    </div>
  )
}

export default TopBarBanner