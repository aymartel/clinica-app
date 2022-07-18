import { ServiceOneData } from "@/data";
import Link from "@/components/link";
import React from "react";
import Image from 'next/image'
import serviceImage1 from "@/images/services/Laboratory1.webp";
import serviceImage2 from "@/images/services/service-2.webp";
import serviceImage3 from "@/images/services/service-3.webp";
import { useTranslations } from 'next-intl';
const ServiceOneHome = () => {
const t = useTranslations('Index');
  return (
    <section className="service_area section_padding ">
      <div className="container" >
        <div className="row">
          <div className="col-md-12">
            <div className="hero-section-title text-center">
              <h1>{t('ServiceOneData_Title')}</h1>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="service_box ">
              <div className="service_img">
                <Image src={serviceImage1} alt="Imagen de laboratorio clínico" layout="responsive" />
              </div>
              <div className="service_details ">
                <Link href="/services/laboratory">
                  <h2>{t('ServiceOneData_Title1')}</h2>
                </Link>
                <p>{t('ServiceOneData_Text1')}</p>
                <Link href="/services/laboratory" className="btn-yellow">
                  {t('ServiceOneData_Button')}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service_box">
              <div className="service_img">
                <Image src={serviceImage2} alt="Imagen de laboratorio clínico" layout="responsive" />
              </div>
              <div className="service_details">
                <Link href="/services/pap-test">
                  <h2>{t('ServiceOneData_Title2')}</h2>
                </Link>
                <p>{t('ServiceOneData_Text2')}</p>
                <Link href="/services/pap-test" className="btn-yellow">
                  {t('ServiceOneData_Button')}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service_box">
              <div className="service_img">
                <Image src={serviceImage3} alt="Imagen de laboratorio clínico" layout="responsive" />
              </div>
              <div className="service_details">
                <Link href="/services/general-medical">
                  <h2>{t('ServiceOneData_Title3')}</h2>
                </Link>
                <p>{t('ServiceOneData_Text3')}</p>
                <Link href="/services/general-medical" className="btn-yellow">
                  {t('ServiceOneData_Button')}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="div-button-center">
          <Link href="/services" className="btn-yellow">
            {t('ServiceOthers_PostTitle')}
          </Link></div>
      </div>

    </section>
  );
};

export default ServiceOneHome;
