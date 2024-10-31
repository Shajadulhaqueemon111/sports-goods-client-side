// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Banner.style.css";
import { Navigation } from "swiper/modules";
const Banner = () => {
  const imageSize = {
    height: "550px",
  };
  return (
    <div>
      <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <img
              style={imageSize}
              src="https://i.ibb.co.com/VTBNhjX/Jo-Weston-Round-3.jpg"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              style={imageSize}
              src="https://i.ibb.co.com/zSt51vk/il-fullxfull-3743847111-q8ka.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={imageSize}
              src="https://i.ibb.co.com/nkdQLJq/istockphoto-1136317339-612x612.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={imageSize}
              src="https://i.ibb.co.com/VTBNhjX/Jo-Weston-Round-3.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Banner;
