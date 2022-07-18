import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import ContactTwo from "@/components/contact-two";
import ServiceDetails from "@/components/service-details";
import { useTranslations } from 'next-intl'
 
import ServiceDiseaseControl2 from "@/images/services/DiseaseControls2.webp";
import PayOptions from "@/components/pay-options";

const DiseaseControl = () => {
  const t = useTranslations('Index')
  return (
    <MenuContextProvider>
        <Layout PageTitle="Service Details">
       
        <HeaderOne/>
        <PageHeader title={t('ServiceDiseaseControl_PostTitle')} name="Service" />
        <ServiceDetails
          imageDetail={ServiceDiseaseControl2}
        PostTitle={t('ServiceDiseaseControl_PostTitle')}
          Text1={t('ServiceDiseaseControl_Text1')}
          Subtitle1_List1={t('ServiceDiseaseControl_PostSubtitle1_List1')}
          Subtitle1_List2={t('ServiceDiseaseControl_PostSubtitle1_List2')}
          Subtitle2_List1={t('ServiceDiseaseControl_PostSubtitle2_List1')}
          Subtitle2_List2={t('ServiceDiseaseControl_PostSubtitle2_List2')}
          TextExtra={t('ServiceDiseaseControl_TextExtra')}
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
export default DiseaseControl;
