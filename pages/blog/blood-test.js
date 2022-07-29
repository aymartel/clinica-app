import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import BlogDetails from "@/components/blog-details";
import { useTranslations } from 'next-intl'
import imageBloodTest from "@/images/blog/bloodtest.webp";

const BlogBloodTest = () => {
  const t = useTranslations('Index');
  return (
    <MenuContextProvider>
      <Layout PageTitle={t('Blog_BloodTest_Title')}>
        <HeaderOne />
        <PageHeader title={t('Blog_BloodTest_Title')} name="Blog" />
        <BlogDetails
          subTitle={t('Blog_BloodTest_SubTitle')}
          text={t('Blog_BloodTest_Text')}
          tags={t('Blog_BloodTest_Tags')} 
          date={t('Blog_BloodTest_Date')}
          image={imageBloodTest}/>
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

export default BlogBloodTest;