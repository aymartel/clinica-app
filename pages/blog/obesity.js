import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import BlogDetails from "@/components/blog-details";
import { useTranslations } from 'next-intl'
import imageObesity from "@/images/blog/obesity.webp";

const BlogObesity = () => {
  const t = useTranslations('Index');
  return (
    <MenuContextProvider>
      <Layout PageTitle={t('Blog_Obesity_Title')} itemscope itemtype="https://schema.org/Article">
        <HeaderOne />
        <PageHeader title={t('Blog_Obesity_Title')} name="Blog" />
        <BlogDetails
          subTitle={t('Blog_Obesity_SubTitle')}
          text={t('Blog_Obesity_Text')}
          tags={t('Blog_Obesity_Tags')} 
          date={t('Blog_Obesity_Date')}
          image={imageObesity}/>
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

export default BlogObesity;