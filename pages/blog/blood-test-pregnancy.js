import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import BlogDetails from "@/components/blog-details";
import { useTranslations } from 'next-intl'
import imageBPT from "@/images/blog/blood-pregnancy-test.webp";

const BlogTinnitus = () => {
  const t = useTranslations('Index');
  return (
    <MenuContextProvider>
      <Layout PageTitle={t('Blog_BloodTestPregnancy_Title')} itemscope itemtype="https://schema.org/Article">
        <HeaderOne />
        <PageHeader title={t('Blog_BloodTestPregnancy_Title')} name="Blog" />
        <BlogDetails
          subTitle={t('Blog_BloodTestPregnancy_SubTitle')}
          text={t('Blog_BloodTestPregnancy_Text')}
          tags={t('Blog_BloodTestPregnancy_Tags')} 
          date={t('Blog_BloodTestPregnancy_Date')}
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