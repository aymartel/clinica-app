import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import BlogDetails from "@/components/blog-details";
import { useTranslations } from 'next-intl'
import imageADENOIDS from "@/images/blog/adenoids.webp";

const BlogSTD = () => {
  const t = useTranslations('Index');
  return (
    <MenuContextProvider>
      <Layout PageTitle={t('Blog_ADENOIDS_Title')} itemscope itemtype="https://schema.org/Article">
        <HeaderOne />
        <PageHeader title={t('Blog_ADENOIDS_Title')} name="Blog" />
        <BlogDetails
          subTitle={t('Blog_ADENOIDS_SubTitle')}
          text={t('Blog_ADENOIDS_Text')}
          tags={t('Blog_ADENOIDS_Tags')} 
          date={"13 Oct"}
          image={imageADENOIDS}/>
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