import React from "react";
import Link from "@/components/link";
import { Col, Container, Row } from "react-bootstrap";

import { useTranslations } from 'next-intl';

const SliderOne = () => {
  const t = useTranslations('Index');

  return (
    <section className="main-slider header_slider_area  section_border ">

      <div className="image-layer background_image-slider1">
        <Container className="section_padding1">
          <br/>
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
          <br/>
          <br/>

        </Container>
      </div>


    </section>
  );
};

export default SliderOne;
