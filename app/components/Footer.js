// components/Footer.js

import Image from 'next/image';
import Logo from './../assets/img/logo.png'
import React from 'react';
import { Luckiest_Guy } from "next/font/google";
import { FiPhoneCall } from "react-icons/fi";
import { HiMailOpen } from "react-icons/hi";
import { FaRegAddressCard } from "react-icons/fa";
import Link from 'next/link';

import ShopStatus from './ShopStatus';

const luckiestGuy = Luckiest_Guy({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-luckiest-guy',
});

const Footer = () => {
  return (
    <footer className="p-8 bg-primary text-primaryBg">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          <div className="logo mb-8 md:mb-0 flex flex-col items-center ">
            <Image
              src={Logo}
              alt="logo"
              width={100}
              height={100}
              sizes="100vw"
              className="w-16 h-16 md:w-20 md:h-20"
              priority
            />
            <p className={`${luckiestGuy.className} font-bold`}>SOUVLAKI PALACE</p>
          </div>
          <div className="quick-links flex flex-col mt-8">
            <h3 className="text-lg font-bold mb-1 text-secondaryBg">Quick Links</h3>
            <ul>
              <li><Link href="/" className="hover:text-appSelectedElement">Home</Link></li>
              <li><Link href="/about" className="hover:text-appSelectedElement">About</Link></li>
              <li><Link href="/menu" className="hover:text-appSelectedElement">Menu</Link></li>
              <li><Link href="/contact" className="hover:text-appSelectedElement">Contact</Link></li>
            </ul>
          </div>

          <div className="contact-info md:w-fit flex flex-col mt-8">
              <h3 className="text-lg font-bold mb-1 text-secondaryBg">Contact Information</h3>
              <div className='flex gap-2 mb-2'>
                <HiMailOpen className='w-5 h-5 text-secondaryBg'/>
                <a href="mailto:order@souvlakipalace.ca" className="hover:underline hover:text-appSelectedElement">order@souvlakipalace.ca</a>
              </div>
              <div className='flex gap-2 mb-2'>
                <FiPhoneCall className='w-5 h-5 text-secondaryBg' />
                <a href="tel:+14162691269" className="hover:underline hover:text-appSelectedElement">+1 (416) 269-1269</a>
              </div>
              <div className='flex gap-2 mb-2'>
                <FaRegAddressCard className='w-5 h-5 text-secondaryBg' />
                <p>1349 Danforth Rd, <br />Scarborough, <br />ON, M1J 1G7.</p>
              </div>
            </div>

          <div className="working-hours md:w-1/4 flex flex-col mt-8">
            <h3 className="text-lg font-bold mb-1 text-secondaryBg">Working Hours</h3>
            <ShopStatus />
            <div className='grid grid-cols-2 gap-2'>
              <span className='font-bold text-secondaryBg'>Sunday - Thursday</span>
              <span>1:00 PM - 10:00 PM</span>
              <span className='font-bold text-secondaryBg'>Friday - Saturday</span>
              <span>1:00 PM - 11:00 PM</span>
            </div>
          </div>
        </div>

        <div className="copyright mt-8 w-full flex justify-center">
          <p className="text-sm text-center">
            Copyright &copy; 2024. All rights reserved Souvlaki Palace Pizza & Grill
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;