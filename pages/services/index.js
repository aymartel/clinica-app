import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import ServiceOne from "@/components/service-one";
import { useTranslations } from 'next-intl'
 

const Services = () => {
  const t = useTranslations('Index')
  return (
    <MenuContextProvider>
      <Layout PageTitle="Service Page">
        <HeaderOne/>
        <PageHeader title={t('Header_Services')} name="Service" />
        <ServiceOne
          />
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
export default Services;
