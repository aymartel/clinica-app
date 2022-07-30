import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import serviceShape from "@/images/shape/service-shape.webp";
import Link from "./link";
import Image from 'next/image'
import { AboutThreeData } from "@/data";
import { useTranslations } from 'next-intl';

const AboutThree = () => {
  const t = useTranslations('Index');
  const { blockTitle, summery, button, box } = AboutThreeData;
  const AboutThreeData_SummeryArray = t('AboutThreeData_Summery').split('\n'); 

  return (
    <section className="about_area section_border section_padding">
      <Container>
        <Row>
          <Col lg={7}>
            <div className="about_details about_gray responsive_no_pading">
              <div className="hero-title-with-shape">
                <h4 className="heading_with_border">{t('AboutThreeData_Tagline')}</h4>
                <h1><em>{t('AboutThreeData_Title')}</em></h1>
              </div>
              <p>{AboutThreeData_SummeryArray[0]}<strong><a href="https://goo.gl/maps/EDXnEMyKf3b6iAqAA" target="_blank">{AboutThreeData_SummeryArray[1]}</a></strong>{AboutThreeData_SummeryArray[2]}</p>
              <Link href="/about" className="btn-yellow">
                {t('AboutThreeData_Button')}
              </Link>
              <div className="about_gray_shape">
                <Image src={serviceShape} alt="about shape" layout="responsive" />
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="about_image about_style_2_img">
              <div className="about_clinica_img"></div>
              <div className="about_service_box_1">
                <i className="icon-clock"></i>
                <h2>{t('AboutThreeData_Box1')}</h2>
              </div>
              <div className="about_service_box_1">
                <i className="icon-diploma"></i>
                <h2>{t('AboutThreeData_Box2')}</h2>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutThree;
