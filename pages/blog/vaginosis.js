import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import BlogDetails from "@/components/blog-details";
import { useTranslations } from 'next-intl'
import imageVaginosis from "@/images/blog/vaginosis.webp";

const BlogVaginosis = () => {
  const t = useTranslations('Index');
  return (
    <MenuContextProvider>
      <Layout PageTitle={t('Blog_Vaginosis_Title')}>
        <HeaderOne />
        <PageHeader title={t('Blog_Vaginosis_Title')} name="Blog" />
        <BlogDetails
          subTitle={t('Blog_Vaginosis_SubTitle')}
          text={t('Blog_Vaginosis_Text')}
          tags={t('Blog_Vaginosis_Tags')} 
          date={t('Blog_Vaginosis_Date')}
          image={imageVaginosis}/>
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

export default BlogVaginosis;