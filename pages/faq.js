import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import Footer from "@/components/footer";

import AboutTwo2 from "@/components/about-two2";
import { useTranslations } from "next-intl";
import PageHeader from "@/components/page-header";

const FAQ = () => {
  const t = useTranslations('Index')

  return (
    <MenuContextProvider>
      <Layout PageTitle={t('Frequent_Questions')}>
        <HeaderOne />
        <PageHeader title={t('Frequent_Questions')} name="Frequent Questions" />
        <div className="spaceheader"></div>

        <AboutTwo2 />
        <Footer />
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
export default FAQ;
