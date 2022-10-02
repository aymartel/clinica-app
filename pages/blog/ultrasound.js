import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import BlogDetails from "@/components/blog-details";
import { useTranslations } from 'next-intl'
import imageultrasound from "@/images/blog/ultrasound.webp";

const BlogULtrasound = () => {
  const t = useTranslations('Index');
  return (
    <MenuContextProvider>
      <Layout PageTitle={t('Blog_Ultrasound_Title')} itemscope itemtype="https://schema.org/Article">
        <HeaderOne />
        <PageHeader title={t('Blog_Ultrasound_Title')} name="Blog" />
        <BlogDetails
          subTitle={t('Blog_Ultrasound_SubTitle')}
          text={t('Blog_Ultrasound_Text')}
          tags={t('Blog_Ultrasound_Tags')} 
          date={"06 Sep"}
          image={imageultrasound}/>
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

export default BlogULtrasound;