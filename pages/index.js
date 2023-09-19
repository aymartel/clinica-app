import React from "react";
import MenuContextProvider from "@/context/menu-context";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import Footer from "@/components/footer";
import SliderOne from "@/components/slider-one";
import AboutOne from "@/components/about-one";
import CtaOne from "@/components/cta-one";
import FunfactOne from "@/components/funfact-one";
import GalleryOne from "@/components/gallery-one";
import TestimonialsOne from "@/components/testimonials-one";
import SponsorOne from "@/components/sponsor-one";
import ContactOne from "@/components/contact-one";
import AboutThree from "@/components/about-three";
import ServiceOneHome from "@/components/service-one-home";
// import { useTranslations } from 'next-intl'

const HomeOne = () => {
  // const { t } = useTranslations('Index');
  return (
    <MenuContextProvider >
      <Layout PageTitle="Home Page" itemScope itemType="https://schema.org/MedicalClinic">
        <HeaderOne/>
        <SliderOne/>
        <AboutThree/>
        <CtaOne/>
        {/* <FeatureOne
          FeatureOneData_Without_Date={t('FeatureOneData_Without_Date')}
          FeatureOneData_Atention_Adult_Child={t('FeatureOneData_Atention_Adult_Child')}
          FeatureOneData_More_Experience={t('FeatureOneData_More_Experience')}
          FeatureOneData_Clinic_Hispany_in_Houston={t('FeatureOneData_Clinic_Hispany_in_Houston')}
          FeatureOneData_Without_Secure={t('FeatureOneData_Without_Secure')}
        /> */}
        <AboutOne/>
        <ServiceOneHome/>
        <GalleryOne/>
        <TestimonialsOne/>
        <FunfactOne/>
        {/* <SponsorOne /> */}
        {/* <CtaTwo /> */}
        {/* <BlogOne /> */}
        <ContactOne/>
        
        <Footer/>
        

      </Layout>
      
    </MenuContextProvider>
  );
};



export function getStaticProps({ locale }) {
  return {
    props: {
      messages: {
        ...require(`../messages/index/${locale}.json`)
      },
    },
  }
}
export default HomeOne;




 


