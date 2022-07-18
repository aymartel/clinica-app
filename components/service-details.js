import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import ServiceSidebar from "./service-sidebar";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const ServiceDetails = ({
  imageDetail,
  PostTitle,
  Text1,
  Subtitle1_List1,
  Subtitle1_List2,
  Subtitle2_List1,
  Subtitle2_List2,
  TextExtra }) => {
  const t = useTranslations('Index');
  return (
    <section className="service_details_area section_padding">
      <Container>
        <Row>
          <Col lg={8}>
            <div className="service_details_left">
              <Image src={imageDetail} alt="Service Details Image" />
              <h1>{PostTitle}</h1>
              <p>
                {Text1}
              </p>
              <h2>{t('ServicePostSubtitle2')}</h2>
              <ul>
                <li>
                  <i className="fa fa-check-circle"></i> {Subtitle1_List1}
                </li>
                <li>
                  <i className="fa fa-check-circle"></i> {Subtitle1_List2}
                </li>
              </ul>
              <h2>{t('ServicePostSubtitle2')}</h2>
              <ul>
                <li>
                  <i className="fa fa-check-circle"></i> {Subtitle2_List1}
                </li>
                <li>
                  <i className="fa fa-check-circle"></i> {Subtitle2_List2}
                </li>
              </ul>
              <p className="extra_mr">
                {TextExtra}
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <ServiceSidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceDetails;
