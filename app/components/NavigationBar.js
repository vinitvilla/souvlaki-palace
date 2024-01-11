import React, { useEffect, useState } from "react";
import { LiaShoppingBagSolid } from "react-icons/lia";
import Image from "next/image";
import { Luckiest_Guy } from "next/font/google";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Badge, Divider} from "@nextui-org/react";
import Logo from './../assets/img/logo.png'
import ShopStatus from "./ShopStatus";
import UserIcon from "./UserIcon";
import { UserAuth } from "../context/auth-context";
import { usePathname } from "next/navigation";

const luckiestGuy = Luckiest_Guy({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-luckiest-guy',
})

export default function NavigationBar() {
  const { user } = UserAuth();
  const pathname = usePathname();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(4);

  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'Menu', href: '/menu' },
    { title: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    }
    else {
      setIsLoggedIn(false);
    }
  }, [user]);


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
          menuItems.map((item, idx) => (
            <NavbarItem key={item.title} className="">
              <Link color="foreground" href={item.href} className={item.href === pathname ? 'text-secondaryBg font-bold': ''}>
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
              className={'lg:w-[100px] lg:h-[100px] md:w-[75px] md:h-[75px] w-[50px] h-[50px]'}
              priority
            />
          </Link>
          <p className={`${luckiestGuy.className} hidden font-bold`}>SOUVLAKI PALACE</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <div className="border-2 border-primaryBg bg-primaryBg text-primary rounded-full p-2">
          <Link href={'/order'} className={('/order' === pathname ? 'font-bold': '')}>Order</Link>
        </div>
        <Badge color="danger" content={cartItemsCount} isInvisible={cartItemsCount <= 0} shape="circle" showOutline={false}>
          <LiaShoppingBagSolid className='w-8 h-8'/>
        </Badge>
        { isLoggedIn
          ? <UserIcon />
          : <Link className='lg:text-2xl md:text-xl text-lg font-bold text-primaryBg' href={'/login'}>Login</Link>
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
