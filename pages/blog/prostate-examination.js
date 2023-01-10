import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import BlogDetails from "@/components/blog-details";
import { useTranslations } from 'next-intl'
import imageProstateExamination from "@/images/blog/prostateexam.webp";

const BlogProstateExamination = () => {
  const t = useTranslations('Index');
  return (
    <MenuContextProvider>
      <Layout PageTitle={t('Blog_ProstateExamination_Title')} itemscope itemtype="https://schema.org/Article">
        <HeaderOne />
        <PageHeader title={t('Blog_ProstateExamination_Title')} name="Blog" />
        <BlogDetails
          subTitle={t('Blog_ProstateExamination_SubTitle')}
          text={t('Blog_ProstateExamination_Text')}
          tags={t('Blog_ProstateExamination_Tags')} 
          date={t('Blog_ProstateExamination_Date')}
          image={imageProstateExamination}/>
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

export default BlogProstateExamination;