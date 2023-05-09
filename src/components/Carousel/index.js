import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './CarouselStyles.css';

// import required modules
import { Pagination } from 'swiper';

import CarouselPic1 from '../../assets/CarouselPic1.webp';
import CarouselPic2 from '../../assets/carouselPic2.webp';
import CarouselPic3 from '../../assets/carouselPic3.webp';
import CarouselPic4 from '../../assets/carouselPic4.webp';

const Carousel = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <p className="">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui
          </p>
          <img className="image1" src={CarouselPic1} alt="image 1" />
        </SwiperSlide>
        <SwiperSlide>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui
          </p>
          <img src={CarouselPic2} alt="image2" />
        </SwiperSlide>
        <SwiperSlide>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui
          </p>
          <img src={CarouselPic3} alt="image3" />
        </SwiperSlide>
        <SwiperSlide>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui
          </p>
          <img src={CarouselPic4} alt="image4" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
