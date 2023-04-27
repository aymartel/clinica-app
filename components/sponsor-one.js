import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";


import logo_seguro_medico1 from "@/images/logos/logo_seguro_medico1.webp";
import logo_seguro_medico2 from "@/images/logos/logo_seguro_medico2.webp";
import logo_seguro_medico3 from "@/images/logos/logo_seguro_medico3.webp";
import logo_seguro_medico4 from "@/images/logos/logo_seguro_medico4.webp";

import logo_seguro_medico7 from "@/images/logos/logo_seguro_medico7.webp";
import logo_seguro_medico8 from "@/images/logos/logo_seguro_medico8.webp";
import logo_seguro_medico9 from "@/images/logos/logo_seguro_medico9.webp";
import logo_seguro_medico10 from "@/images/logos/logo_seguro_medico10.webp";
import logo_seguro_medico11 from "@/images/logos/logo_seguro_medico11.webp";
import logo_seguro_medico12 from "@/images/logos/logo_seguro_medico12.webp";
import logo_seguro_medico13 from "@/images/logos/logo_seguro_medico13.webp";
import logo_seguro_medico14 from "@/images/logos/logo_seguro_medico14.webp";

const SponsorOne = ({ extraClass }) => {
  const sponsorCarouselOptions = {
    spaceBetween: 100,
    slidesPerView: 5,
    autoplay: { delay: 800 },
    breakpoints: {
      0: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      375: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      575: {
        spaceBetween: 30,
        slidesPerView: 3
      },
      767: {
        spaceBetween: 50,
        slidesPerView: 4
      },
      991: {
        spaceBetween: 50,
        slidesPerView: 5
      },
      1199: {
        spaceBetween: 100,
        slidesPerView: 5
      }
    }
  };
  return (
    <div
      className={`clients_logo_area text-center section_padding  ${extraClass}`}
    >
      <Container>
        <Swiper {...sponsorCarouselOptions} className="clients_logo ">
          <div className="swiper-wrapper">
            <SwiperSlide>
              <Image src={logo_seguro_medico1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={logo_seguro_medico2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={logo_seguro_medico3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={logo_seguro_medico4} alt="" />
            </SwiperSlide>
            
            <SwiperSlide>
              <Image src={logo_seguro_medico7} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={logo_seguro_medico8} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={logo_seguro_medico9} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={logo_seguro_medico10} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={logo_seguro_medico11} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={logo_seguro_medico12} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={logo_seguro_medico13} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={logo_seguro_medico14} alt="" />
            </SwiperSlide>
          </div>
        </Swiper>
      </Container>
    </div>
  );
};

export default SponsorOne;
