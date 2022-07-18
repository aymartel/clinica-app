import { AboutTwoData } from "@/data";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslations } from 'next-intl';

const AboutTwo = () => {
  const t = useTranslations('Index');
  function createMarkup() {
    return { __html: t('AboutTwoData_Caption') };
  }
  return (
    <section className="about_service_area section_padding">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="about_service_left">
              <p className="about_service_year text-center">
                <span dangerouslySetInnerHTML={createMarkup()} />
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about_service_right">
              <div className="hero-title-with-shape">
                <h4 className="heading_with_border">{t('AboutTwoData_Tagline')}</h4>
                <h1>{t('AboutTwoData_Title')}</h1>
              </div>
              <ul>
                  <li>
                    <i className="fa fa-check-circle"></i> {t('AboutTwoData_Text1')}
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i> {t('AboutTwoData_Text2')}
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i> {t('AboutTwoData_Text3')}
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i> {t('AboutTwoData_Text4')}
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i> {t('AboutTwoData_Text5')}
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i> {t('AboutTwoData_Text6')}
                  </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutTwo;
