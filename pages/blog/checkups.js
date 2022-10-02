import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import BlogDetails from "@/components/blog-details";
import { useTranslations } from 'next-intl'
import imageCheckUps from "@/images/blog/checkups.webp";

const BlogCheckUps = () => {
  const t = useTranslations('Index');
  return (
    <MenuContextProvider>
      <Layout PageTitle={t('Blog_CheckUps_Title')} itemscope itemtype="https://schema.org/Article">
        <HeaderOne />
        <PageHeader title={t('Blog_CheckUps_Title')} name="Blog" />
        <BlogDetails
          subTitle={t('Blog_CheckUps_SubTitle')}
          text={t('Blog_CheckUps_Text')}
          tags={t('Blog_CheckUps_Tags')} 
          date={t('Blog_CheckUps_Date')}
          image={imageCheckUps}/>
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

export default BlogCheckUps;