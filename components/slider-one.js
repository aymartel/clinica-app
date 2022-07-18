import React from "react";
import Link from "@/components/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, EffectFade } from "swiper";
import { Col, Container, Row } from "react-bootstrap";
import { SlideOneData } from "@/data";
import slideOneImage1 from "@/images/slider/slider-1.webp";
import slideOneImage2 from "@/images/slider/slider-2.webp";
import slideOneImage3 from "@/images/slider/slider-4.webp";
import { useTranslations } from 'next-intl';
SwiperCore.use([Autoplay, Navigation, EffectFade]);

const SliderOne = () => {
  const t = useTranslations('Index');
  const mainSlideOptions = {
    slidesPerView: 1,
    effect: "fade",
  };
  return (
    <section className="main-slider header_slider_area ">
      <Swiper {...mainSlideOptions}>
      <SwiperSlide >
              <div
                className="image-layer background_image-slider1"
                
              ></div>
              <Container>
                <Row>
                  <Col lg="6">
                    <p className="main-slider__subtext">
                      <span className="subtitle_number">1</span>{" "}
                      {t('SlideOneData_Subtitle1')}
                    </p>
                    <h1 className="main-slider__title">{t('SlideOneData_Title1')}</h1>
                    <div className="slide_button">
                      <Link href="/contact" className="btn-yellow">
                      {t('SlideOneData_Button1')}
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </SwiperSlide>
{/* 
            <SwiperSlide >
              <div
                className="image-layer background_image-slider2"
                
              ></div>

              <Container>
                <Row>
                  <Col lg="6">
                    <p className="main-slider__subtext">
                      <span className="subtitle_number">2</span>{" "}
                      {SlideOneData_Subtitle2}
                    </p>
                    <h1 className="main-slider__title">{SlideOneData_Title2}</h1>
                    <div className="slide_button">
                      <Link href="/about" className="btn-yellow">
                      {SlideOneData_Button2}
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </SwiperSlide>

            <SwiperSlide >
              <div
                className="image-layer background_image-slider3"
                
              ></div>

              <Container>
                <Row>
                  <Col lg="6">
                    <p className="main-slider__subtext">
                      <span className="subtitle_number">3</span>{" "}
                      {SlideOneData_Subtitle3}
                    </p>
                    <h1 className="main-slider__title">{SlideOneData_Title3}</h1>
                    <div className="slide_button">
                      <Link href="/services" className="btn-yellow">
                      {SlideOneData_Button3}
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </SwiperSlide> */}
      </Swiper>
    </section>
  );
};

export default SliderOne;
