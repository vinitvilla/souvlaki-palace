import React from 'react'
import { GiHamburger, GiFullPizza  } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import { BiDrink } from "react-icons/bi";

const PopularItems = () => {
  return (
    <div className='p-8 flex gap-16 justify-around mx-4'>
      <div className='flex gap-2 flex-col items-center text-gray-700 hover:text-primaryBg hover:cursor-pointer'>
        <GiHamburger className='w-36 h-36'/>
        <span className='text-xl font-bold'>Burgers</span>
      </div>
      <div className='flex gap-2 flex-col items-center text-gray-700 hover:text-primaryBg hover:cursor-pointer'>
        <GiFullPizza className='w-36 h-36'/>
        <span className='text-xl font-bold'>Pizzas</span>
      </div>
      <div className='flex gap-2 flex-col items-center text-gray-700 hover:text-primaryBg hover:cursor-pointer'>
        <FaBowlFood className='w-36 h-36'/>
        <span className='text-xl font-bold'>Sides</span>
      </div>
      <div className='flex gap-2 flex-col items-center text-gray-700 hover:text-primaryBg hover:cursor-pointer'>
        <BiDrink className='w-36 h-36'/>
        <span className='text-xl font-bold'>Beverages</span>
      </div>
    </div>
  )
}

export default PopularItems