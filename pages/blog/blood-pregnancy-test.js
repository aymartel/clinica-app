import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import BlogDetails from "@/components/blog-details";
import { useTranslations } from 'next-intl'
import imageBPT from "@/images/blog/blood-pregnancy-test";

const BlogTinnitus = () => {
  const t = useTranslations('Index');
  return (
    <MenuContextProvider>
      <Layout PageTitle={t('Blog_Tinnitus_Title')} itemscope itemtype="https://schema.org/Article">
        <HeaderOne />
        <PageHeader title={t('Blog_Tinnitus_Title')} name="Blog" />
        <BlogDetails
          subTitle={t('Blog_Tinnitus_SubTitle')}
          text={t('Blog_Tinnitus_Text')}
          tags={t('Blog_Tinnitus_Tags')} 
          date={t('Blog_Tinnitus_Date')}
          image={imageBPT}/>
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

export default BlogTinnitus;