
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import './Swiperr.css'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function Home() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="https://cdn.delever.uz/delever/1b71b079-f375-43ca-b24b-04d0e0b9b0dd" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.delever.uz/delever/f5094e04-ad42-41d3-9989-6ebfe167a8bc" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.delever.uz/delever/5f985809-5a75-44bd-9209-dd4fa911169b" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.delever.uz/delever/1b71b079-f375-43ca-b24b-04d0e0b9b0dd" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://cdn.delever.uz/delever/1b71b079-f375-43ca-b24b-04d0e0b9b0dd" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.delever.uz/delever/f5094e04-ad42-41d3-9989-6ebfe167a8bc" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.delever.uz/delever/5f985809-5a75-44bd-9209-dd4fa911169b" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.delever.uz/delever/1b71b079-f375-43ca-b24b-04d0e0b9b0dd" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}