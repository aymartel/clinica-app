import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import BlogDetails from "@/components/blog-details";
import { useTranslations } from 'next-intl'
import imageSTD from "@/images/blog/std.webp";

const BlogSTD = () => {
  const t = useTranslations('Index');
  return (
    <MenuContextProvider>
      <Layout PageTitle={t('Blog_STD_Title')} itemscope itemtype="https://schema.org/Article">
        <HeaderOne />
        <PageHeader title={t('Blog_STD_Title')} name="Blog" />
        <BlogDetails
          subTitle={t('Blog_STD_SubTitle')}
          text={t('Blog_STD_Text')}
          tags={t('Blog_STD_Tags')} 
          date={"19 Jul"}
          image={imageSTD}/>
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