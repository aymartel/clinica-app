import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import ContactTwo from "@/components/contact-two";
import ServiceDetails from "@/components/service-details";
import { useTranslations } from 'next-intl'

import ServiceContraceptiveRemoval2 from "@/images/services/ContraceptiveRemoval2.webp";
import PayOptions from "@/components/pay-options";

const ContraceptiveRemoval = () => {
  const t = useTranslations('Index')

  return (
    <MenuContextProvider>
      <Layout PageTitle="Service Details">

        <HeaderOne />
        <PageHeader title={t(`ServiceContraceptiveRemoval_PostTitle`)} name="Service" />
        <ServiceDetails
          imageDetail={ServiceContraceptiveRemoval2}
          PostTitle={t('ServiceContraceptiveRemoval_PostTitle')}
          Text1={t('ServiceContraceptiveRemoval_Text1')}
          Subtitle1_List1={t('ServiceContraceptiveRemoval_PostSubtitle1_List1')}
          Subtitle1_List2={t('ServiceContraceptiveRemoval_PostSubtitle1_List2')}
          Subtitle2_List1={t('ServiceContraceptiveRemoval_PostSubtitle2_List1')}
          Subtitle2_List2={t('ServiceContraceptiveRemoval_PostSubtitle2_List2')}
          TextExtra={t('ServiceContraceptiveRemoval_TextExtra')}
        />
        <PayOptions />
        <ContactTwo />
        <Footer />
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
export default ContraceptiveRemoval;
