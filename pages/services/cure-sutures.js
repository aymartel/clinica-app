import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import ContactTwo from "@/components/contact-two";
import ServiceDetails from "@/components/service-details";
import { useTranslations } from 'next-intl'
 
import ServiceCureSutures2 from "@/images/services/CureSuture2.webp";
import PayOptions from "@/components/pay-options";

const CureSuture = () => {
  const t = useTranslations('Index')
  return (
    <MenuContextProvider>
        <Layout PageTitle="Service Details">
        <HeaderOne/>
        <PageHeader title={t('ServiceCureSutures_PostTitle')} name="Service" />
        <ServiceDetails
          imageDetail={ServiceCureSutures2}
           PostTitle={t('ServiceCureSutures_PostTitle')}
          Text1={t('ServiceCureSutures_Text1')}
          Subtitle1_List1={t('ServiceCureSutures_PostSubtitle1_List1')}
          Subtitle1_List2={t('ServiceCureSutures_PostSubtitle1_List2')}
          Subtitle2_List1={t('ServiceCureSutures_PostSubtitle2_List1')}
          Subtitle2_List2={t('ServiceCureSutures_PostSubtitle2_List2')}
          TextExtra={t('ServiceCureSutures_TextExtra')}
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
export default CureSuture;
