import React, { useState } from 'react'
import { GiHamburger, GiFullPizza  } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import { BiDrink } from "react-icons/bi";
import Slider from './Slider';
import { MdOutdoorGrill } from "react-icons/md";
import { LuSalad } from 'react-icons/lu';

const items = [
  {
    name: 'Pizzas',
    key: 'jewelery',
    icon: <GiFullPizza className='w-16 h-16 md:w-24 md:h-24' />,
  },
  {
    name: 'Burgers',
    key: "men's clothing",
    icon: <GiHamburger className='w-16 h-16 md:w-24 md:h-24'/>,
  },
  {
    name: 'Salads',
    key: 'salads',
    icon: <LuSalad className='w-16 h-16 md:w-24 md:h-24'/>,
  },
  {
    name: 'Sides',
    key: 'electronics',
    icon: <FaBowlFood className='w-16 h-16 md:w-24 md:h-24'/>,
  },
  {
    name: 'Char-Broiler',
    key: 'shoes',
    icon: <MdOutdoorGrill className='w-16 h-16 md:w-24 md:h-24'/>,
  },
  {
    name: 'Drinks',
    key: "women's clothing",
    icon: <BiDrink className='w-16 h-16 md:w-24 md:h-24'/>,
  }
]

const PopularItems = () => {
  const [selectedItem, setSelectedItem] = useState('jewelery');

  return (
    <div className='bg-primary '>
      <p className='lg:p-8 md:p-4 p-2 lg:text-3xl md:text-2xl text-xl font-bold text-center'>Popular Items</p>
      <div className='lg:p-8 md:p-4 p-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-around mx-4'>
        {
          items.map(({ name, key, icon}) => (
              <div
                key={key}
                className={`flex gap-1 flex-col items-center hover:text-appSelectedElement hover:cursor-pointer ${selectedItem === key ? 'text-appSelectedElement' : 'text-appUnselectedElement'}`}
                onClick={() =>setSelectedItem(key) }
              >
                {icon}
                <span className='text-md md:text-xl lg:text-xl md:font-bold'>{name}</span>
            </div>
          ))
        }
      </div>
      <Slider selectedItem={selectedItem} />
    </div>
  )
}

export default PopularItems