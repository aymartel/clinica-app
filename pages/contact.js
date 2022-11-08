import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import ContactThree from "@/components/contact-three";
import Footer from "@/components/footer";
import { useTranslations } from 'next-intl'
import SponsorOne from "@/components/sponsor-one";

const Contact = () => {
  const t = useTranslations('Index')
  return (
    <MenuContextProvider>
      <Layout PageTitle="Contact Page">
        <HeaderOne/>
        <PageHeader title={t('Header_Contact')} name="Contact" />
        <ContactThree
        />
        {/* <ContactMap /> */}
        <SponsorOne/>
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
export default Contact;
