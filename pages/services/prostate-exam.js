import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import ContactTwo from "@/components/contact-two";
import ServiceDetails from "@/components/service-details";
import { useTranslations } from 'next-intl'
 
import ServiceProstateExam2 from "@/images/services/ProstateExam2.webp";
import PayOptions from "@/components/pay-options";
const ProstateExam = () => {
  const t = useTranslations('Index')
  
  return (
    <MenuContextProvider>
        <Layout PageTitle="Service Details">
        
        <HeaderOne/>
        <PageHeader title={t('ServiceProstateExam_PostTitle')} name="Service" />
        <ServiceDetails
          imageDetail={ServiceProstateExam2}
           PostTitle={t('ServiceProstateExam_PostTitle')}
          Text1={t('ServiceProstateExam_Text1')}
          Subtitle1_List1={t('ServiceProstateExam_PostSubtitle1_List1')}
          Subtitle1_List2={t('ServiceProstateExam_PostSubtitle1_List2')}
          Subtitle2_List1={t('ServiceProstateExam_PostSubtitle2_List1')}
          Subtitle2_List2={t('ServiceProstateExam_PostSubtitle2_List2')}
          TextExtra={t('ServiceProstateExam_TextExtra')}
        />
         <PayOptions />
        <ContactTwo />
        <Footer/>
      </Layout>
    </MenuContextProvider>
  );
};

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: {
        ...require(`../../messages/index/${locale}.json`)
      },
    },
  }
}
export default ProstateExam;
