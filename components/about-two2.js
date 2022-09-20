import { AboutTwoData } from "@/data";
import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import address from "@/images/faq/address.jpg";
import injections from "@/images/faq/injections.jpg";
import refill from "@/images/faq/refill.jpg";
import secure from "@/images/faq/secure.jpg";
import analisis from "@/images/faq/analisis.jpg";
import money from "@/images/faq/money.jpg";
import ultrasound from "@/images/faq/ultrasound.jpg";

const AboutTwo2 = () => {
  const t = useTranslations('Index');

  return (
    <section className="about_service_area section_padding">
      <Container>
        <Row >
          <Col lg={6}>
            <div className="about_service_right">
              <div className="hero-title-with-shape">
                <h1><i className="fa fa-check-circle"></i> {t('AboutTwo_Question1')}</h1>
              </div>
              <ul>
                <li >
                  {t('AboutTwo_Answer1')}
                </li>
              </ul>

            </div>
          </Col>
          <Col lg={6}>
            
            <div className="about_service_right">
              <div className="image-faq">
                <Image src={ultrasound} alt="ultrasound" layout="responsive" />
              </div>
            </div>

          </Col>
        </Row>
        <br/>
        <Row className="copyright_area">
          <Col lg={6}>
          <div className="about_service_right">
              <div className="image-faq">
                <Image src={address} alt="address" layout="responsive" />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about_service_right">
              <div className="hero-title-with-shape">
                <h1><i className="fa fa-check-circle"></i> {t('AboutTwo_Question2')}</h1>
              </div>
              <ul>
                <li >
                  {t('AboutTwo_Answer2')}
                </li>
              </ul>

            </div>
          </Col>
        </Row>
        <br/>
        <Row className="copyright_area">
          <Col lg={6}>

            <div className="about_service_right">
              <div className="hero-title-with-shape">
                <h1><i className="fa fa-check-circle"></i> {t('AboutTwo_Question3')}</h1>
              </div>
              <ul>
                <li >
                  {t('AboutTwo_Answer3')}
                </li>
              </ul>

            </div>
          </Col>
          <Col lg={6}>

          <div className="about_service_right">
              <div className="image-faq">
                <Image src={money} alt="money" layout="responsive" />
              </div>
            </div>
          </Col>
        </Row>
        <br/>
        <Row className="copyright_area">
          <Col lg={6}>
          <div className="about_service_right">
              <div className="image-faq">
                <Image src={secure} alt="secure" layout="responsive" />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about_service_right">
              <div className="hero-title-with-shape">
                <h1><i className="fa fa-check-circle"></i> {t('AboutTwo_Question4')}</h1>
              </div>
              <ul>
                <li >
                  {t('AboutTwo_Answer4')}
                </li>
              </ul>

            </div>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col lg={6}>
            <div className="about_service_right">
              <div className="hero-title-with-shape">
                <h1><i className="fa fa-check-circle"></i> {t('AboutTwo_Question5')}</h1>
              </div>
              <ul>
                <li >
                  {t('AboutTwo_Answer5')}
                </li>
              </ul>

            </div>
          </Col>
          <Col lg={6}>
              <div className="about_service_right">
              <div className="image-faq">
                <Image src={analisis} alt="analisis" layout="responsive" />
              </div>
            </div>
          </Col>
        </Row>
        <br/>
        <Row className="copyright_area">
          <Col lg={6}>

          <div className="about_service_right">
              <div className="image-faq">
                <Image src={injections} alt="injections" layout="responsive" />
              </div>
            </div>
          </Col>
          <Col lg={6}>

            <div className="about_service_right">
              <div className="hero-title-with-shape">
                <h1><i className="fa fa-check-circle"></i> {t('AboutTwo_Question6')}</h1>
              </div>
              <ul>
                <li >
                  {t('AboutTwo_Answer6')}
                </li>
              </ul>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutTwo2;
