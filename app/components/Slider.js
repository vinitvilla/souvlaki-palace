'use client';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, A11y, Pagination, FreeMode } from 'swiper/modules'
import MenuItem from './MenuItem';

import './../styles/Slider.module.css';
import { Card, Skeleton } from '@nextui-org/react';

// External Data import
const url = 'https://fakestoreapi.com/products';

const Slider = ( { selectedItem }) => {
  const [products, setProducts] = useState([]);

  const getProductsFromBackend = async () => {
    const data = await fetch(url);

    const products = await data.json();

    setProducts(products);
  };

  useEffect(() => {
    getProductsFromBackend();
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, FreeMode]}
      slidesPerView={1}
      spaceBetween={5}
      freeMode={true}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      breakpoints={{
        480: { slidesPerView: 2 },
        740: { slidesPerView: 3 },
        1275: { slidesPerView: 4 },
      }}
    >
    {
      products.length === 0
      ?
      <div className='flex flex-row gap-5 justify-around m-4'>
        {
          [1, 2, 3].map((item) => (
            <Card key={item} className="w-full sm:h-[200px] md:h-[200px] lg:h-[400px] space-y-5 p-4 bg-primary p-5" radius="lg">
              <Skeleton className="rounded-lg">
                <div className="h-24 rounded-lg bg-default-300"></div>
              </Skeleton>
              <div className="space-y-3">
                <Skeleton className="w-3/5 rounded-lg">
                  <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                  <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg">
                  <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                </Skeleton>
              </div>
            </Card>
          ))
        }
        </div>
      : products.filter((item) => item.category === selectedItem).map((item) => (
          <SwiperSlide
            key={item.id}
            className='!flex bg-white rounded-xl justify-center items-center m-4'
          >
            <div className='rounded-xl overflow-hidden lg:w-full md:w-full sm:w-full md:h-[400px] sm:h-[200px] flex justify-center'>
              <MenuItem
                title={item.title}
                description={item.description}
                img={item.image}
                category={item.category}
              />
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};

export default Slider;