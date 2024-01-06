'use client';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, A11y, Pagination } from 'swiper/modules'
import MenuItem from './MenuItem';

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
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={1}
      spaceBetween={15}
      pagination={{
        dynamicBullets: true,
      }}
      breakpoints={{
        480: { slidesPerView: 2 },
        740: { slidesPerView: 3 },
        1275: { slidesPerView: 4 },
      }}
    >
      {products.filter((item) => item.category === selectedItem).map((item) => (
        <SwiperSlide
          key={item.id}
          className='!flex bg-white rounded-xl justify-center items-center m-4'
        >
          <div className='rounded-xl overflow-hidden md:w-[300px] md:h-[400px] sm:w-[80px] sm:h-[100px] flex justify-center'>
            <MenuItem
              title={item.title}
              description={item.description}
              img={item.image}
              category={item.category}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;