'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { Luckiest_Guy } from 'next/font/google';
import { LiaShoppingBagSolid } from "react-icons/lia";
import { Badge } from '@nextui-org/badge';
import { User } from '@nextui-org/user';

const luckiestGuy = Luckiest_Guy({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-luckiest-guy',
})

const Navbar = () => {

  const [cartItemsCount, setCartItemsCount] = useState(4);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <nav className='flex sticky top-0 z-10 bg-[#ffd650] justify-center gap-24 py-1 h-full'>
      <div className='flex items-center gap-8'>
        <p className='text-2xl font-bold'>About us</p>
        <p className='text-2xl font-bold'>Menu</p>
      </div>
      <div className='flex flex-col items-center'>
        <Image
          src="/img/logo.png"
          alt="logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{'width': '100px', 'height': '100px'}}
          priority
          />
        <p className={`${luckiestGuy.className} text-3xl font-bold ` }>SOUVLAKI PALACE</p>
      </div>
      <div className='flex items-center gap-8'>
        <p className='text-2xl font-bold'>Contact</p>
        { isLoggedIn
          ? <User
              avatarProps={{
                src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
              }}
            />
          :
          <p className='text-2xl font-bold'>Login</p>
        }
        <Badge color="danger" content={cartItemsCount} isInvisible={cartItemsCount <= 0} shape="circle" showOutline={false}>
          <LiaShoppingBagSolid className='w-8 h-8'/>
        </Badge>
      </div>
    </nav>
  )
}

export default Navbar