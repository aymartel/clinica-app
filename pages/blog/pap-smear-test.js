import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import BlogDetails from "@/components/blog-details";
import { useTranslations } from 'next-intl'
import imagePapSmearTest from "@/images/blog/blogDetail-pap-smear-test.webp";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import BlogSidebar from "@/components/blog-sidebar";

const BlogPapSmearTest = () => {
  const t = useTranslations('Index');
  const tagsArray = t('Blog_PapSmearTest_Tags').split('\n');
  const textArray = t('Blog_PapSmearTest_Text').split('\n');
  return (
    <MenuContextProvider>
      <Layout PageTitle={t('Blog_PapSmearTest_Title')} itemscope itemtype="https://schema.org/Article">
        <HeaderOne />
        <PageHeader title={t('Blog_PapSmearTest_Title')} name="Blog" />
        <section className="blog_details_section section_padding">
          <Container>
            <Row>
              <Col lg={8}>
                <div>
                  <div className="blog_left_box">
                    <div className="bl_share_img">
                      <Image src={imagePapSmearTest} alt="blog details" layout="responsive" />
                      <span className="blog_date">{t('Blog_PapSmearTest_Date')}</span>
                    </div>
                    <div className="blog_share_details blog_share_details__details">
                      <h1>{t('Blog_PapSmearTest_SubTitle')}</h1>
                      {textArray.map((data, index) => (
                        <p key={index} >{data}</p>
                      ))}
                    </div>
                  </div>
                  <div className="blog_social_share_box">
                    <div className="share_box_left">
                      <p>
                        Tags: {tagsArray.map((data, index) => (
                          <a href="#" key={index}>{data}</a>
                        ))}</p>
                    </div>
                    <div className="share_box_left text-end">
                      <ul>
                        <li>
                          <a href="https://business.linkedin.com/es-es/marketing-solutions/linkedin-pages">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.facebook.com/clinicahispanahouston">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/channel/UC0OooKsVq4xJjB9bCUjjYvQ">
                            <i className="fa fa-youtube-play"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/clinica_saludesperanza/">
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <BlogSidebar />
              </Col>
            </Row>
          </Container>
        </section>

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