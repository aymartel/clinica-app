import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import BlogDetails from "@/components/blog-details";
import { useTranslations } from 'next-intl'
import imageBloodHighPresure from "@/images/blog/highpresure.webp";

const BlogHighBloodPresure = () => {
  const t = useTranslations('Index');
  return (
    <MenuContextProvider>
      <Layout PageTitle={t('Blog_BloodHighPresure_Title')} itemscope itemtype="https://schema.org/Article">
        <HeaderOne />
        <PageHeader title={t('Blog_BloodHighPresure_Title')} name="Blog" />
        <BlogDetails
          subTitle={t('Blog_BloodHighPresure_SubTitle')}
          text={t('Blog_BloodHighPresure_Text')}
          tags={t('Blog_BloodHighPresure_Tags')} 
          date={"13 Oct"}
          image={imageBloodHighPresure}/>
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

export default BlogHighBloodPresure;