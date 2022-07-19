import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import BlogDetails from "@/components/blog-details";
import { useTranslations } from 'next-intl'
import imageCardiovascularDiseases from "@/images/blog/cardiovascular-diseases.webp";

const BlogCardiovascularDiseases = () => {
  const t = useTranslations('Index');
  return (
    <MenuContextProvider>
      <Layout PageTitle={t('Blog_CardiovascularDiseases_Title')}>
        <HeaderOne />
        <PageHeader title={t('Blog_PapSmearTest_Title')} name="Blog" />
        <BlogDetails
          subTitle={t('Blog_CardiovascularDiseases_SubTitle')}
          text={t('Blog_CardiovascularDiseases_Text')}
          tags={t('Blog_CardiovascularDiseases_Tags')} 
          date={"19 Jul"}
          image={imageCardiovascularDiseases}/>
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

export default BlogCardiovascularDiseases;