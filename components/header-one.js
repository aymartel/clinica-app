import React, { Fragment, useContext, useEffect, useState } from "react";
import { Logo, NavLinksData, TopbarInfos, FooterBottomData } from "@/data";
import Image from 'next/image'
import { useRouter } from "next/router";
import { MenuContext } from "@/context/menu-context";
import calendar from "@/images/date.svg";
import { useTranslations } from 'next-intl'

import Link from "@/components/link";
import ChangeLanguaje from "./change-languaje";
const HeaderOne = () => {
  const t = useTranslations('Index');
  const router = useRouter();
  const [sticky, setSticky] = useState(false);
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);
  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };
  const handleMenuClick = (e) => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sticky]);

  return (
    <Fragment>
      <header className="header_area" >
        <div className="container">
          <div className="header_social">
            <ul className="hd_social_icons">

              {FooterBottomData.social.map(({ icon, url }, index) => (
                <li key={`header-social-${index}`}>
                  <a href={url}>
                    <i className={`fa ${icon}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="header_contact text-end">
            <ul className="hd_contact">
              <li >
                <i className="icon-placeholder"></i>{t('Header_Address')}
                <a href="https://goo.gl/maps/EDXnEMyKf3b6iAqAA" itemProp="PostalAddress"> 8200 Wilcrest Dr Suite 20, Houston, TX 77072</a>
              </li>
              <li >
                <i className="icon-phone-call"></i> {t('Header_Call_Now')}
                <a href="tel:+13465702594" itemProp="telephone"> +1 346-570-2594</a>
              </li>
              <li >
                <i className="icon-clock"></i> {t('Header_Open_hours')}
                <a href="#"> {t('Header_Mon_Sun')}</a>
                <a href="#" itemProp="openingHours" hidden > Mo 09:00-20:00 Tu 09:00-20:00 We 09:00-20:00 Th 09:00-20:00 Fr 09:00-20:00 Sa 09:00-17:00 Su 09:00-17:00</a>

              </li>

              {/* {TopbarInfos.map(({ icon, tagLine, text, url }, index) => (
                <li key={`header-info-${index}`}>
                  <i className={icon}></i> {tagLine}
                  <a href={url}> {text}</a>
                </li>
              ))} */}
            </ul>
          </div>
        </div>
      </header>

      <div
        className={`main_menu_area ${true === sticky
          ? " stricky stricky-fixed slideInDown animated"
          : " stricky slideIn animated"
          }`}
      >
        <div className="container">
          <div className="main_menu_area__left">
            <Link href="/">
              <Image
                src={Logo.dark}
                alt="Logo Clinica Hispana Salud y Esperanza"
                layout="fixed"
              // width={500} automatically provided
              // height={500} automatically provided
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
              />
            </Link>
            <span className="mobile-menu__toggler" >
              <div
                // className={`main_menu_area ${true === sticky
                //   ? " stricky stricky-fixed slideInDown animated"
                //   : " stricky slideIn animated"
                //   }`}
                className="buttons-movile">
                <Link href="/appointment" className="btn-yellow-mobile">
                 
                    {t('Header_Book_Today')}
                 
                </Link>
                <button className="button-call-mobile">
                  <a href="tel:+13465702594" > <i className="icon-phone-call"></i> </a>
                </button>
                <ChangeLanguaje />
              </div>
            </span>

            <span className="mobile-menu__toggler" onClick={handleMenuClick}>
              <i className="fa fa-bars"></i>
            </span>



          </div>
          <div className="main_menu_area__right">
            <nav className="main_menu_area__menu">
              <ul className="nav navbar-nav navigation-box">
                {/* <li className={router.pathname == links.url ? "active" : ""}>
                  <Link href={links.url}>{links.name}</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link href={subLinks.url}>{subLinks.name}</Link>
                    </li>
                  </ul>
                </li> */}
                <li className={(router.pathname == "/") ? "active" : ""}>
                  <Link href="/">{t('Header_Home')}</Link>
                </li>
                <li className={(router.pathname == "/about") ? "active" : ""}>
                  <Link href="/about">{t('Header_About')}</Link>
                </li>
                <li className={(router.pathname == "/faq") ? "active" : ""}>
                  <Link href="/faq">FAQ</Link>
                </li>
                <li className={(router.pathname == "/services") ? "active" : ""}>
                  <Link href="/services">{t('Header_Services')}</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link href="/services/laboratory">{t('ServiceLaboratory_PostTitle')}</Link>
                    </li>
                    <li>
                      <Link href="/services/general-medical">{t('ServiceGeneralMedical_PostTitle')}</Link>
                    </li>
                    <li>
                      <Link href="/services/pap-test">{t('ServicePapTest_PostTitle')}</Link>
                    </li>
                    <li>
                      <Link href="/services/physical-exam">{t('ServicePhysicalExam_PostTitle')}</Link>
                    </li>
                    <li>
                      <Link href="/services/ultrasound">{t('ServiceUltrasound_PostTitle')}</Link>
                    </li>
                    <li>
                      <Link href="/services">{t('ServiceOthers_PostTitle')}</Link>
                    </li>
                  </ul>

                </li>

                <li className={(router.pathname == "/contact") ? "active" : ""}>
                  <Link href="/contact">{t('Header_Contact')}</Link>
                </li>
                <li className={(router.pathname == "/blog") ? "active" : ""}>
                  <Link href="/blog">{t('Header_Blog')}</Link>
                </li>
              </ul>
            </nav>

            <button className="button-call-mobile">
              <a href="tel:+13465702594" > <i className="icon-phone-call"></i> </a>
            </button>

            <ChangeLanguaje />
            <Link href="/appointment" className="btn-yellow">
              {t('Header_Book_Today')}
            </Link>

          </div>
        </div>
      </div>
    </Fragment>
    
  );
};


export default HeaderOne;
