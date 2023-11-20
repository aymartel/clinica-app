import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import BlogDetails from "@/components/blog-details";
import { useTranslations } from 'next-intl'
import imageVitaminSerums from "@/images/blog/vitamin-serums.webp";

const BlogSTD = () => {
  const t = useTranslations('Index');
  return (
    <MenuContextProvider>
      <Layout PageTitle={t('Blog_VitaminSerums_Title')} itemscope itemtype="https://schema.org/Article">
        <HeaderOne />
        <PageHeader title={t('Blog_VitaminSerums_Title')} name="Blog" />
        <BlogDetails
          subTitle={t('Blog_VitaminSerums_SubTitle')}
          text={t('Blog_VitaminSerums_Text')}
          tags={t('Blog_VitaminSerums_Tags')} 
          date={"13 Oct"}
          image={imageVitaminSerums}/>
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

export default BlogSTD;