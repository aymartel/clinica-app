import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import AboutFour from "@/components/about-four";
import VideoOne from "@/components/video-one";
import TestimonialsOne from "@/components/testimonials-one";
import TeamOne from "@/components/team-one";
import SponsorOne from "@/components/sponsor-one";
import AboutTwo from "@/components/about-two";
import { useTranslations } from 'next-intl'

const About = () => {
  const t = useTranslations('Index')
  return (
    <MenuContextProvider>
      <Layout PageTitle="About Page">
        <HeaderOne/>
        <PageHeader title={t('Header_About')} name="About" />
        <AboutFour/>
        <VideoOne />
        <AboutTwo/>
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
export default About;
