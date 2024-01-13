'use client';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, A11y, Pagination, FreeMode } from 'swiper/modules'
import MenuItem from './MenuItem';

import { Card, Skeleton } from '@nextui-org/react';

// External Data import
const url = 'https://fakestoreapi.com/products';

const Slider = ( { selectedItem }) => {
  const [products, setProducts] = useState([]);

  const getProductsFromBackend = async () => {
    const data = await fetch(url);

    const products = await data.json();
    console.log(products)

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
        480: { slidesPerView: 1.5 },
        740: { slidesPerView: 2 },
        1275: { slidesPerView: 3 },
      }}
    >
    {
      products.length === 0
      ?
      <div className='flex flex-row gap-5 justify-around m-4'>
        {
          [1, 2, 3].map((item) => (
            <Card key={item} className="w-full h-[200px] md:h-[200px] lg:h-[400px] space-y-5 p-4 bg-primary p-5" radius="lg">
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
            className='rounded-xl justify-center items-center my-6 px-4'
          >
            <div className='rounded-xl overflow-hidden w-full md:h-[480px] h-[320px] flex justify-center'>
              <MenuItem
                title={item.title}
                description={item.description}
                img={item.image}
                category={item.category}
                price={item.price}
              />
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};

export default Slider;