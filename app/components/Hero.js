import React, { useState } from 'react'
import BiryaniImg1 from './../assets/img/biryani2.png'
import BiryaniImg2 from "./../assets/img/biryani3.png";
import BiryaniImg3 from "./../assets/img/biryani5.png";
import Image from 'next/image';

const ImageList = [
  {
    id: 1,
    img: BiryaniImg1,
  },
  {
    id: 2,
    img: BiryaniImg2,
  },
  {
    id: 3,
    img: BiryaniImg3,
  },
];

const Hero = () => {

  const [imageId, setImageId] = useState(BiryaniImg1);

  const bgImage = {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <div className='min-h-screen bg-primary flex justify-center items-center w-screen duration-200 lg:p-16 md:p-8 p-4'
      style={bgImage}
      >
        <div className="container pb-8 pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 pt-0 text-center text-left order-2 order-1"
            >
              <h1 className="text-5xl lg:text-7xl font-bold">
                Introducing our {' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-t from-primary to-secondaryBg">
                  chef&apos;s special biryani
                </span>{" "}
              </h1>
              <p className="text-sm ">
              a culinary masterpiece that promises to elevate your dining experience.
              </p>
              <div>
                <button className="bg-primaryBg text-white hover:bg-secondaryBg hover:scale-105 duration-200 py-2 px-4 rounded-full">
                  Order Now
                </button>
              </div>
            </div>
            {/* Image section */}
            <div className="min-h-[450px] flex flex-col justify-center gap-4 items-center relative order-1 order-2 ">
              <div className="h-[450px] overflow-hidden flex justify-center items-center hover:cursor-pointer">
                <Image
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  data-aos-once="true"
                  src={imageId}
                  alt="biryani img"
                  className="w-[300px] hover:scale-125 duration-200"
                  priority
                />
              </div>
              <div className="flex flex-row lg:py-2 justify-center gap-4 bg-white/30 rounded-full">
                {ImageList.map((item) => (
                  <Image
                    key={item.id}
                    data-aos="zoom-in"
                    data-aos-duration="400"
                    data-aos-once="true"
                    src={item.img}
                    priority
                    onClick={() => {
                      setImageId(
                        item.id === 1
                          ? BiryaniImg1
                          : item.id === 2
                            ? BiryaniImg2
                            : BiryaniImg3
                      );
                    }}
                    alt="biryani img"
                    className="max-w-[80px] h-[80px] object-contain inline-block hover:cursor-pointer hover:scale-105 duration-200"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero