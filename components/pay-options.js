import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";


import payoption1 from "@/images/logos/pay-option1.webp";
import payoption2 from "@/images/logos/pay-option2.webp";
import payoption3 from "@/images/logos/pay-option3.webp";
import payoption4 from "@/images/logos/pay-option4.webp";
import payoption5 from "@/images/logos/pay-option5.webp";
import payoption6 from "@/images/logos/pay-option6.webp";
import payoption7 from "@/images/logos/pay-option7.webp";


const PayOptions = ({ extraClass, PayOptionsText }) => {
  const sponsorCarouselOptions = {
    spaceBetween: 100,
    slidesPerView: 7,
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
      <h3>{PayOptionsText}</h3>
          <br></br>
      <Container>
          
        <Swiper {...sponsorCarouselOptions} className="clients_logo ">
          <div className="swiper-wrapper">
            <SwiperSlide>
              <Image src={payoption1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={payoption2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={payoption3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={payoption4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={payoption5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={payoption6} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={payoption7} alt="" />
            </SwiperSlide>
          </div>
        </Swiper>
      </Container>
    </div>
  );
};

export default PayOptions;
