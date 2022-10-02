import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import BlogDetails from "@/components/blog-details";
import { useTranslations } from 'next-intl'
import imageCholesterol from "@/images/blog/colesterol.webp";

const BlogCholesterol = () => {
  const t = useTranslations('Index');
  return (
    <MenuContextProvider>
      <Layout PageTitle={t('Blog_Cholesterol_Title')} itemscope itemtype="https://schema.org/Article">
        <HeaderOne />
        <PageHeader title={t('Blog_Cholesterol_Title')} name="Blog" />
        <BlogDetails
          subTitle={t('Blog_Cholesterol_SubTitle')}
          text={t('Blog_Cholesterol_Text')}
          tags={t('Blog_Cholesterol_Tags')} 
          date={t('Blog_Cholesterol_Date')}
          image={imageCholesterol}/>
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

export default BlogCholesterol;