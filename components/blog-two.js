import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "@/components/blog-card";
import { BlogTwoData } from "@/data";
import { useTranslations } from 'next-intl'
import imageSTD from "@/images/blog/std.webp";
import imagePapSmearTest from "@/images/blog/blogDetail-pap-smear-test.webp";
import imageCardiovascularDiseases from "@/images/blog/cardiovascular-diseases.webp";

const BlogTwo = () => {
  const { posts } = BlogTwoData;
  const t = useTranslations('Index')

  return (
    <section className="blog_share_area section_padding blog-page">
      <Container>
        <Row>
          <Col lg={4} md={6} sm={12} >
            <BlogCard image={imagePapSmearTest} date={t('Blog_PapSmearTest_Date')} title={t('Blog_PapSmearTest_Title')} url={t('Blog_PapSmearTest_URL')} text={t('Blog_PapSmearTest_Text')} />
          </Col>
          <Col lg={4} md={6} sm={12} >
            <BlogCard image={imageSTD} date={t('Blog_STD_Date')} title={t('Blog_STD_Title')} url={t('Blog_STD_URL')} text={t('Blog_STD_Text')} />
          </Col>
          <Col lg={4} md={6} sm={12} >
            <BlogCard image={imageCardiovascularDiseases} date={t('Blog_CardiovascularDiseases_Date')} title={t('Blog_CardiovascularDiseases_Title')} url={t('Blog_CardiovascularDiseases_URL')} text={t('Blog_CardiovascularDiseases_Text')} />
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default BlogTwo;
