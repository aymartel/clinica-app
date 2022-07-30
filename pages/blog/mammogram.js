import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import BlogDetails from "@/components/blog-details";
import { useTranslations } from 'next-intl'
import imageMammogram from "@/images/blog/mammogram.webp";

const BlogMammogram = () => {
  const t = useTranslations('Index');
  return (
    <MenuContextProvider>
      <Layout PageTitle={t('Blog_Mammogram_Title')}>
        <HeaderOne />
        <PageHeader title={t('Blog_Mammogram_Title')} name="Blog" />
        <BlogDetails
          subTitle={t('Blog_Mammogram_SubTitle')}
          text={t('Blog_Mammogram_Text')}
          tags={t('Blog_Mammogram_Tags')} 
          date={t('Blog_Mammogram_Date')}
          image={imageMammogram}/>
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

export default BlogMammogram;