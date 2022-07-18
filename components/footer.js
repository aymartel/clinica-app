import React from "react";
import { FooterBottomData, FooterInfo, FooterWidgets } from "@/data";
import FooterShape from "@/images/shape/about-shape.webp";
import Img from "@/components/img";
import logoWhite from "@/images/logo-white.webp";
import Image from "next/image";
import Link from "@/components/link";
import { useTranslations } from 'next-intl';


const Footer = () => {
  const t = useTranslations('Index');
  const Header_Mobile_MenuTextArray = t('Header_Mobile_MenuText').split('\n'); 
  return (
    <footer className="footer_area">
      <div className="footer_contact text-center">
        <div className="container">
          <div className="row">

            <div className="col-md-4 col-sm-4">
              <div className="footer_contact_width text-left">
                <p>
                  <i className="icon-placeholder"></i> {t('Header_Address')} <a href="https://goo.gl/maps/EDXnEMyKf3b6iAqAA"><span>8200 Wilcrest Dr Suite 20, Houston, TX 77072</span></a>
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-4">
              <div className="footer_contact_width text-left">
                <p>
                  <i className="icon-contact"></i> Email <a href="mailto:info@clinicahispanaludesperanza.com"><span>info@clinicahispanaludesperanza.com</span></a>
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-4">
              <div className="footer_contact_width text-left">
                <p>
                  <i className="icon-clock"></i> <span>{t('Header_Mon_Sun')}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_content section_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="footer_textwidget textwidget">
                <h2>{t('Header_About')}</h2>
                <p>{Header_Mobile_MenuTextArray[0]}<strong>{Header_Mobile_MenuTextArray[1]}</strong>{Header_Mobile_MenuTextArray[2]}</p>
                <h4>{t('Header_Call_Now')}</h4>
                <span className="number">+1 346-570-2594</span>
              </div>
            </div>
            <div className="col-md-2 col-sm-3">
              <h2>{t('Footer_Links')}</h2>
              <ul className="footer_link">
                <li>
                  <Link href="/services">{t('Header_Services')}</Link>
                </li>
                <li>
                  <Link href="/contact">{t('Header_Contact')}</Link>
                </li>
                {/* <li>
                  <Link href="/contact">{t('Header_Blog')}</Link>
                </li> */}


              </ul>
            </div>
            <div className="col-md-2 col-sm-3">

            </div>
            <div className="col-md-4 col-sm-6">
              <Image
                src={logoWhite}
                alt="Logo Clinica Hispana Salud y Esperanza"
                layout="fixed"
                width={200}
                height={150}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
              />
            </div>
          </div>
          <div className="copyright_area">
            <div className="row">
              <div className="col-md-8 col-sm-6 copyright_text">
                <p>
                  &copy; copyright {new Date().getFullYear()} by AMC
                </p>
              </div>
              <div className="col-md-4 col-sm-6 copyright_social text-end">
                <ul>
                  {FooterBottomData.social.map(({ icon, url }, index) => (
                    <li key={`footer-social-link-${index}`}>
                      <a href={url}>
                        <i className={`fa ${icon}`}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
