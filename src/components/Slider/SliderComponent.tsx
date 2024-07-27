import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import Image from 'next/image';
import { createContext } from 'react';

// Install modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Slider: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide>
          <Image
            src="https://pixlr.com/images/index/product-image-one.webp"
            alt="Slide 1"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://wallpapers.com/images/featured/image-79gc4p3mqu7an848.jpg"
            alt="Slide 2"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://www.lib.uchicago.edu/efts/ARTFL/projects/mckee/Images/gavarni-reduced2.jpg"
            alt="Slide 3"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
