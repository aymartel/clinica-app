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
    <MenuContextProvider>
      <Layout PageTitle="Home Page">
        <HeaderOne/>
        <Facebook/>
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
        <FunfactOne/>
        <GalleryOne/>
        <TestimonialsOne/>
        <SponsorOne />
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


import Script from 'next/script';

function Facebook() {
  return (
    <div>
      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat"></div>
      <Script id="facebook" strategy="lazyOnload">
        {`
            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "105059398249714");
            chatbox.setAttribute("attribution", "biz_inbox");
      
            window.fbAsyncInit = function() {
              FB.init({
                xfbml            : true,
                version          : 'v14.0'
              });
            };
      
            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        `}
      </Script>
    </div>
  );
}


