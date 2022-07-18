import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";

import { useTranslations } from 'next-intl'
import ContactOne from "@/components/contact-one";
import SponsorOne from "@/components/sponsor-one";
import PayOptions from "@/components/pay-options";

const Appointment = () => {
  const t = useTranslations('Index')
  return (
    <MenuContextProvider>
      <Layout PageTitle="Appointment Page">
        <HeaderOne/>
        <PageHeader title={t('Header_Book_Today')} name="Book Today" />
        <SponsorOne />
        <ContactOne/>
        <PayOptions/>
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
export default Appointment;
