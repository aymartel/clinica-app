import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "@/components/blog-card";
import { BlogTwoData } from "@/data";
import { useTranslations } from 'next-intl'
import imageSTD from "@/images/blog/std.webp";
import imagePapSmearTest from "@/images/blog/blogDetail-pap-smear-test.webp";
import imageCardiovascularDiseases from "@/images/blog/cardiovascular-diseases.webp";
import imageDiabetes from "@/images/blog/diabetes.webp";
import imageCheckUps from "@/images/blog/checkups.webp";
import imageVaginosis from "@/images/blog/vaginosis.webp";
import imageProstateExamination from "@/images/blog/prostateexam.webp";
import imageBloodTest from "@/images/blog/bloodtest.webp";
import imageObesity from "@/images/blog/obesity.webp";
import imageMammogram from "@/images/blog/mammogram.webp";
import imageTinnitus from "@/images/blog/tinnitus.webp";
import imageCholesterol from "@/images/blog/colesterol.webp";
import imageultrasound from "@/images/blog/ultrasound.webp";
import imageADENOIDS from "@/images/blog/adenoids.webp";
import imageFLU from "@/images/blog/flu.webp";
import imageLove from "@/images/blog/love.webp";

const BlogTwo = () => {
  const t = useTranslations('Index')

  return (
    <section className="blog_share_area section_padding blog-page">
      <Container>
        <Row>

          {/* <Col lg={4} md={6} sm={12} >
            <BlogCard buttonText={t('ServiceOneData_Button')} image={imageFLU} date={t('Blog_FLU_Date')} title={t('Blog_FLU_Title')} url={t('Blog_FLU_URL')} text={t('Blog_FLU_Text')} />
          </Col> */}
           <Col lg={4} md={6} sm={12} >
            <BlogCard buttonText={t('ServiceOneData_Button')} image={imageLove} date={t('Blog_Love_Date')} title={t('Blog_Love_Title')} url={t('Blog_Love_URL')} text={t('Blog_Love_Text')} />
          </Col>
          <Col lg={4} md={6} sm={12} >
            <BlogCard buttonText={t('ServiceOneData_Button')} image={imageVaginosis} date={t('Blog_Vaginosis_Date')} title={t('Blog_Vaginosis_Title')} url={t('Blog_Vaginosis_URL')} text={t('Blog_Vaginosis_Text')} />
          </Col>
          <Col lg={4} md={6} sm={12} >
            <BlogCard buttonText={t('ServiceOneData_Button')} image={imageADENOIDS} date={t('Blog_ADENOIDS_Date')} title={t('Blog_ADENOIDS_Title')} url={t('Blog_ADENOIDS_URL')} text={t('Blog_ADENOIDS_Text')} />
          </Col>
          <Col lg={4} md={6} sm={12} >
            <BlogCard buttonText={t('ServiceOneData_Button')} image={imageProstateExamination} date={t('Blog_ProstateExamination_Date')} title={t('Blog_ProstateExamination_Title')} url={t('Blog_ProstateExamination_URL')} text={t('Blog_ProstateExamination_Text')} />
          </Col>
          {/* <Col lg={4} md={6} sm={12} >
            <BlogCard buttonText={t('ServiceOneData_Button')} image={imageultrasound} date={t('Blog_Ultrasound_Date')} title={t('Blog_Ultrasound_Title')} url={t('Blog_Ultrasound_URL')} text={t('Blog_Ultrasound_Text')} />
          </Col> */}
          <Col lg={4} md={6} sm={12} >
            <BlogCard buttonText={t('ServiceOneData_Button')} image={imageCholesterol} date={t('Blog_Cholesterol_Date')} title={t('Blog_Cholesterol_Title')} url={t('Blog_Cholesterol_URL')} text={t('Blog_Cholesterol_Text')} />
          </Col>
          {/* <Col lg={4} md={6} sm={12} >
            <BlogCard buttonText={t('ServiceOneData_Button')} image={imageTinnitus} date={t('Blog_Tinnitus_Date')} title={t('Blog_Tinnitus_Title')} url={t('Blog_Tinnitus_URL')} text={t('Blog_Tinnitus_Text')} />
          </Col> */}
          <Col lg={4} md={6} sm={12} >
            <BlogCard buttonText={t('ServiceOneData_Button')} image={imageCheckUps} date={t('Blog_CheckUps_Date')} title={t('Blog_CheckUps_Title')} url={t('Blog_CheckUps_URL')} text={t('Blog_CheckUps_Text')} />
          </Col>
          <Col lg={4} md={6} sm={12} >
            <BlogCard buttonText={t('ServiceOneData_Button')} image={imagePapSmearTest} date={t('Blog_PapSmearTest_Date')} title={t('Blog_PapSmearTest_Title')} url={t('Blog_PapSmearTest_URL')} text={t('Blog_PapSmearTest_Text')} />
          </Col>
          <Col lg={4} md={6} sm={12} >
            <BlogCard buttonText={t('ServiceOneData_Button')} image={imageSTD} date={t('Blog_STD_Date')} title={t('Blog_STD_Title')} url={t('Blog_STD_URL')} text={t('Blog_STD_Text')} />
          </Col>
          
          {/* <Col lg={4} md={6} sm={12} >
            <BlogCard buttonText={t('ServiceOneData_Button')} image={imageCardiovascularDiseases} date={t('Blog_CardiovascularDiseases_Date')} title={t('Blog_CardiovascularDiseases_Title')} url={t('Blog_CardiovascularDiseases_URL')} text={t('Blog_CardiovascularDiseases_Text')} />
          </Col> */}
          {/* <Col lg={4} md={6} sm={12} >
            <BlogCard buttonText={t('ServiceOneData_Button')} image={imageObesity} date={t('Blog_Obesity_Date')} title={t('Blog_Obesity_Title')} url={t('Blog_Obesity_URL')} text={t('Blog_Obesity_Text')} />
          </Col> */}
          <Col lg={4} md={6} sm={12} >
            <BlogCard buttonText={t('ServiceOneData_Button')} image={imageBloodTest} date={t('Blog_BloodTest_Date')} title={t('Blog_BloodTest_Title')} url={t('Blog_BloodTest_URL')} text={t('Blog_BloodTest_Text')} />
          </Col>
          {/* <Col lg={4} md={6} sm={12} >
            <BlogCard buttonText={t('ServiceOneData_Button')} image={imageMammogram} date={t('Blog_Mammogram_Date')} title={t('Blog_Mammogram_Title')} url={t('Blog_Mammogram_URL')} text={t('Blog_Mammogram_Text')} />
          </Col> */}
          <Col lg={4} md={6} sm={12} >
            <BlogCard buttonText={t('ServiceOneData_Button')} image={imageDiabetes} date={t('Blog_Diabetes_Date')} title={t('Blog_Diabetes_Title')} url={t('Blog_Diabetes_URL')} text={t('Blog_Diabetes_Text')} />
          </Col>


        </Row>
      </Container>
    </section>
  );
};

export default BlogTwo;
