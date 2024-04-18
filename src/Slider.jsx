import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const Slider = () => {

  const text = (<div className=" text-5xl md:text-7xl font-bold       absolute top-[40%] left-[20%] text-white pl-16  opacity-60">
      <h2 >We will help you find</h2>       
        <h2>Your Dream Home</h2>
  </div>) 

  return (
    <Swiper
    className="animate__animated animate__flash"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <img
          src="https://i.ibb.co/Yj6CY5P/home3.jpg"
          alt="home3"
          border="0"
          style={{ height: "100vh", width: "100%" }}
        />
        {text}
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/RBgv63M/home1.webp"
          alt="home1"
          border="0"
          style={{ height: "100vh", width: "100%" }}
        />{text}
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/2PC5fcM/home2.webp"
          alt="home2"
          border="0"
          style={{ height: "100vh", width: "100%" }}
        />{text}
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co/sgnMVy9/home4.webp"
          alt="home4"
          border="0"
          style={{ height: "100vh", width: "100%" }}
        />{text}
      </SwiperSlide>
      
    </Swiper>
  );
};

export default Slider;
