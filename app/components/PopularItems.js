import React, { useState } from 'react'
import { GiHamburger, GiFullPizza  } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import { BiDrink } from "react-icons/bi";
import Slider from './Slider';

const items = [
  {
    name: 'Pizzas',
    key: 'jewelery',
    icon: <GiFullPizza className='lg:w-24 lg:h-24 md:w-16 md:h-16 sm:w-12 sm:h-12'/>,
  },
  {
    name: 'Burgers',
    key: "men's clothing",
    icon: <GiHamburger className='lg:w-24 lg:h-24 md:w-16 md:h-16 sm:w-12 sm:h-12'/>,
  },
  {
    name: 'Sides',
    key: 'electronics',
    icon: <FaBowlFood className='lg:w-24 lg:h-24 md:w-16 md:h-16 sm:w-12 sm:h-12'/>,
  },
  {
    name: 'Drinks',
    key: "women's clothing",
    icon: <BiDrink className='lg:w-24 lg:h-24 md:w-16 md:h-16 sm:w-12 sm:h-12'/>,
  }
]

const PopularItems = () => {
  const [selectedItem, setSelectedItem] = useState('jewelery');

  return (
    <>
      <p className='lg:p-8 md:p-4 sm:p-2 lg:text-3xl md:text-2xl sm:text-xl m-4 font-bold text-center'>Popular Items</p>
      <div className='lg:p-8 md:p-4 sm:p-2 flex gap-16 justify-around mx-4'>
        {
          items.map(({ name, key, icon}) => (
              <div
                key={key}
                className={`flex gap-1 flex-col items-center hover:text-appSelectedElement hover:cursor-pointer ${selectedItem === key ? 'text-appSelectedElement' : 'text-primaryBg'}`}
                onClick={() =>setSelectedItem(key) }
              >
                {icon}
                <span className='text-md md:text-xl lg:text-xl font-bold'>{name}</span>
            </div>
          ))
        }
      </div>
      <Slider selectedItem={selectedItem} />
    </>
  )
}

export default PopularItems