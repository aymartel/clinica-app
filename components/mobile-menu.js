import React, { useContext, Fragment, useRef, useState } from "react";
import Link from "@/components/link";
import { FooterBottomData, Logo, NavLinksData } from "@/data";
import { MenuContext } from "@/context/menu-context";
import ChangeLanguaje from "./change-languaje";
import Image from "next/image";
import logoWhite from "@/images/logo-white.webp";
import { useTranslations } from 'next-intl';

const MobileMenu = () => {
  const t = useTranslations('Index');
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);
  const menuEl = useRef(null);
  const [flag, Setflag] = useState(false);
  const tab = '\u00A0';
  const handleMenuClick = (e) => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };
  return (
    <div className="mobile-menu animated fadeInLeft">
      
      <div className="mobile-menu__overlay" onClick={handleMenuClick}></div>
      
      <div className="mobile-menu__inner">
      
        <div className="mobile-menu__top">
          <h1 className="mobile-menu__logo">
            <Link href="/">Clínica Hispana Salud y Esperanza</Link>
          </h1>
          <a href="#" className="mobile-menu__close" onClick={handleMenuClick}>
            <i className="fa fa-times"></i>
          </a>
        </div>
        
        <nav className="mobile-menu__links" ref={menuEl}>
          <ul>
            <li>
              <Link href="/">{t('Header_Home')}</Link>
            </li>
            <li>
              <Link href="/about">{t('Header_About')}</Link>
            </li>
            <li
              className="menu-item-has-children"
            >
              <Link href="/services">{t('Header_Services')}</Link>
              <Fragment>
                <button
                  onClick={(e) => {
                    Setflag(!flag)
                    menuEl.current
                      .querySelectorAll(".sub-menu")
                      .forEach((item) => {
                        item.classList.remove("show");
                      });

                    let clickedItem = e.currentTarget.parentNode;
                    clickedItem
                      .querySelector(".sub-menu")
                      .classList.toggle("show");
                  }}
                >
                  <i className="fa fa-angle-down"></i>
                </button>
               <ul className="sub-menu">
                  <li>
                    <Link href="/services/laboratory"> {tab} {t('ServiceLaboratory_PostTitle')}</Link>
                  </li>
                  <li>
                    <Link href="/services/general-medical"> {tab} {t('ServiceGeneralMedical_PostTitle')}</Link>
                  </li>
                  <li>
                    <Link href="/services/pap-test"> {tab} {t('ServicePapTest_PostTitle')}</Link>
                  </li>
                  <li>
                    <Link href="/services/physical-exam"> {tab} {t('ServicePhysicalExam_PostTitle')}</Link>
                  </li>
                  <li>
                    <Link href="/services/ultrasound"> {tab} {t('ServiceUltrasound_PostTitle')}</Link>
                  </li>
                  <li>
                    <Link href="/services"> {tab} {t('ServiceOthers_PostTitle')}</Link>
                  </li>
                </ul>
                
              </Fragment>

            </li>
            <li>
              <Link href="/contact">{t('Header_Contact')}</Link>
            </li>
            {/* <li>
              <Link href="/blog">{t('Header_Blog')}</Link>
            </li> */}
          </ul>
        </nav>
        <div className="mobile-menu__text">
          {t('Header_Mobile_MenuText')}
        </div>
        <div className="mobile-menu__socials">
          {FooterBottomData.social.map(({ icon, url }, index) => {
            return <a key={index} href={url} className={`${icon}`}></a>;
          })}
        </div>
        <br />
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
  );
};

export default MobileMenu;
