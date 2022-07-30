import Link from "@/components/link";
import React from "react";
import { useTranslations } from 'next-intl';

const AboutOne = () => {
  const t = useTranslations('Index');
  const AboutOneData_ContentArray = t('AboutOneData_Content').split('\n'); 
  return (
    <section className="about_area section_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about_image about-image__updated"></div>
          </div>
          <div className="col-md-6">
            <div className="about_details">
              <div className="hero-title-with-shape">
                <h4 className="heading_with_border">{t('AboutOneData_Tagline')}</h4>
                <h1>{t('AboutOneData_Title')}</h1>
              </div>
              <p>{AboutOneData_ContentArray[0]}<strong><Link href="/about">{AboutOneData_ContentArray[1]}</Link></strong>{AboutOneData_ContentArray[2]}<strong><Link href="/contact">{AboutOneData_ContentArray[3]}</Link></strong>{AboutOneData_ContentArray[4]}<strong><Link href="/appointment">{AboutOneData_ContentArray[5]}</Link></strong>{AboutOneData_ContentArray[6]}</p>
              <Link href="/about" className="btn-yellow">
                {t('AboutOneData_Button_Label')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOne;
