import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import BlogDetails from "@/components/blog-details";
import { useTranslations } from 'next-intl'
import imageINMGRATIONEXAM from "@/images/blog/inmigrationExam.webp";

const BlogINMGRATIONEXAM = () => {
  const t = useTranslations('Index');
  return (
    <MenuContextProvider>
      <Layout PageTitle={t('Blog_INMGRATIONEXAM_Title')} itemscope itemtype="https://schema.org/Article">
        <HeaderOne />
        <PageHeader title={t('Blog_INMGRATIONEXAM_Title')} name="Blog" />
        <BlogDetails
          subTitle={t('Blog_INMGRATIONEXAM_SubTitle')}
          text={t('Blog_INMGRATIONEXAM_Text')}
          tags={t('Blog_INMGRATIONEXAM_Tags')} 
          date={"19 Jul"}
          image={imageINMGRATIONEXAM}/>
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

export default BlogINMGRATIONEXAM;