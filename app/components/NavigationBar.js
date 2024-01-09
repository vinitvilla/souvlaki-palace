import React, { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, User, Badge, Divider} from "@nextui-org/react";
import Logo from './../assets/img/logo.png'
import Image from "next/image";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { Luckiest_Guy } from "next/font/google";
import ShopStatus from "./ShopStatus";
import { UserAuth } from "../context/auth-context";

const luckiestGuy = Luckiest_Guy({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-luckiest-guy',
})

export default function NavigationBar() {
  const { user } = UserAuth();

  console.log(user);

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [cartItemsCount, setCartItemsCount] = useState(4);

  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'Menu', href: '/menu' },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' },
  ];

  return (
    <Navbar isBordered className="flex justify-center gap-8">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden flex pr-3" justify="center">
        <NavbarBrand className="h-full">
          <Link href="/">
            <Image
              src={Logo}
              alt="logo"
              width={0}
              height={0}
              sizes="100vw"
              className={'w-[100px] h-[100px]'}
              priority
            />
          </Link>
          <p className={`${luckiestGuy.className} hidden font-bold`}>SOUVLAKI PALACE</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex justify-between gap-4" justify="start">
        {
          menuItems.map((item) => (
            <NavbarItem key={item.title}>
              <Link color="foreground" href={item.href}>
                {item.title}
              </Link>
            </NavbarItem>
          ))
        }
      </NavbarContent>
      <NavbarContent className="hidden sm:flex justify-between gap-4" justify="center">
        <NavbarBrand className="flex flex-col">
          <Link href="/">
            <Image
              src={Logo}
              alt="logo"
              width={0}
              height={0}
              sizes="100vw"
              className={'lg:w-[100px] lg:h-[100px] md:w-[75px] md:h-[75px] sm:w-[50px] sm:h-[50px]'}
              priority
            />
          </Link>
          <p className={`${luckiestGuy.className} hidden font-bold`}>SOUVLAKI PALACE</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <Badge color="danger" content={cartItemsCount} isInvisible={cartItemsCount <= 0} shape="circle" showOutline={false}>
          <LiaShoppingBagSolid className='w-8 h-8'/>
        </Badge>
        { isLoggedIn
          ? <User
              avatarProps={{
                src: "https://i.pravatar.cc/150?u=a04258114e29026302d"
              }}
            />
          :
          <p className='lg:text-2xl md:text-xl sm:text-lg font-bold'>Login</p>
        }
      </NavbarContent>

      <NavbarMenu>
        {
        menuItems.map(({ title, href}, index) => (
          <NavbarMenuItem key={`${title}-${index}`}>
            <Link
              className="w-full text-primaryBg"
              href={href}
              size="lg"
            >
              {title}
            </Link>
          </NavbarMenuItem>
          ))
        }
        <Divider />
        <ShopStatus />
      </NavbarMenu>
    </Navbar>
  );
}
