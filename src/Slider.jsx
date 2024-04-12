import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Slider = () => {
    return (
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
      <img src="https://i.ibb.co/Yj6CY5P/home3.jpg" alt="home3" border="0" style={{height:'100vh', width:'100%'}}/>
      </SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co/RBgv63M/home1.webp" alt="home1" border="0" style={{height:'100vh', width:'100%'}}/></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co/2PC5fcM/home2.webp" alt="home2" border="0" style={{height:'100vh', width:'100%'}} /></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co/sgnMVy9/home4.webp" alt="home4" border="0" style={{height:'100vh', width:'100%'}}/></SwiperSlide>
      ...
    </Swiper>
    );
};

export default Slider;