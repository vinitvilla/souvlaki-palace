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
    <div className='min-h-screen sm:min-h-screen bg-[#ffd650] flex justify-center items-center duration-200'
      style={bgImage}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
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
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <Image
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  data-aos-once="true"
                  src={imageId}
                  alt="biryani img"
                  className="w-[300px] sm:w-[450px] sm:scale-125  mx-auto spin "
                />
              </div>
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full">
                {ImageList.map((item) => (
                  <Image
                    key={item.id}
                    data-aos="zoom-in"
                    data-aos-duration="400"
                    data-aos-once="true"
                    src={item.img}
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
                    className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    // <div className={`${isAbsolute ? 'absolute' : ''} top-0 w-full`}>

    // </div>
  )
}

export default Hero