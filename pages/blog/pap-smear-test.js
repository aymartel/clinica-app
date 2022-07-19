import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import BlogDetails from "@/components/blog-details";
import { useTranslations } from 'next-intl'
import imagePapSmearTest from "@/images/blog/blogDetail-pap-smear-test.webp";

const BlogPapSmearTest = () => {
  const t = useTranslations('Index');
  return (
    <MenuContextProvider>
      <Layout PageTitle={t('Blog_PapSmearTest_Title')}>
        <HeaderOne />
        <PageHeader title={t('Blog_PapSmearTest_Title')} name="Blog" />
        <BlogDetails
          subTitle={t('Blog_PapSmearTest_SubTitle')}
          text={t('Blog_PapSmearTest_Text')}
          tags={t('Blog_PapSmearTest_Tags')} 
          date={"19 Jul"}
          image={imagePapSmearTest}/>
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

export default BlogPapSmearTest;