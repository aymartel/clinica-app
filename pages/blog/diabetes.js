import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import BlogDetails from "@/components/blog-details";
import { useTranslations } from 'next-intl'
import imageDiabetes from "@/images/blog/diabetes.webp";

const BlogDiabetes = () => {
  const t = useTranslations('Index');
  return (
    <MenuContextProvider>
      <Layout PageTitle={t('Blog_Diabetes_Title')}>
        <HeaderOne />
        <PageHeader title={t('Blog_Diabetes_Title')} name="Blog" />
        <BlogDetails
          subTitle={t('Blog_Diabetes_SubTitle')}
          text={t('Blog_Diabetes_Text')}
          tags={t('Blog_Diabetes_Tags')} 
          date={t('Blog_Diabetes_Date')}
          image={imageDiabetes}/>
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

export default BlogDiabetes;