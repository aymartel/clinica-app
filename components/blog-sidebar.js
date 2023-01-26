import React from "react";
import latestPost1 from "@/images/blog/post/latest-post-1.jpg";
import latestPost2 from "@/images/blog/post/latest-post-2.jpg";
import latestPost3 from "@/images/blog/post/latest-post-3.jpg";
import Img from "@/components/img";
import { useTranslations } from 'next-intl'
import imageSTD from "@/images/blog/std.webp";
import imagePapSmearTest from "@/images/blog/blogDetail-pap-smear-test.webp";
import imageCardiovascularDiseases from "@/images/blog/cardiovascular-diseases.webp";
import imageMammogram from "@/images/blog/mammogram.webp";
import imageObesity from "@/images/blog/obesity.webp";
import imageProstateExamination from "@/images/blog/prostateexam.webp";
import imageVaginosis from "@/images/blog/vaginosis.webp";
import imageBloodTest from "@/images/blog/bloodtest.webp";
import imageCheckUps from "@/images/blog/checkups.webp";
import imageDiabetes from "@/images/blog/diabetes.webp";
import imageTinnitus from "@/images/blog/tinnitus.webp";
import imageCholesterol from "@/images/blog/colesterol.webp";
import imageUltrasound from "@/images/blog/ultrasound.webp";
import imageADENOIDS from "@/images/blog/adenoids.webp";
import imageFLU from "@/images/blog/flu.webp";

import { useRouter } from "next/router";

const BlogSidebar = () => {
  const t = useTranslations('Index');
  const router = useRouter();
  return (
    <div className="blog_details_right">

      <div className="blog_right_box mb-30">
        <div className="latest_post">
          <h2>{t('Blog_Latest')}</h2>
          <ul>
            {/* {
              (router.asPath != t('Blog_FLU_URL')) ?
                <li>
                  <a href={t('Blog_FLU_URL')}>
                    <div className="img-block">
                      <Img src={imageFLU} alt="image FLU" layout="responsive" />
                    </div>
                    {t('Blog_FLU_Title')}
                  </a>
                </li>
                : null
            } */}
            {
              (router.asPath != t('Blog_ADENOIDS_URL')) ?
                <li>
                  <a href={t('Blog_ADENOIDS_URL')}>
                    <div className="img-block">
                      <Img src={imageADENOIDS} alt="image ADENOIDS" layout="responsive" />
                    </div>
                    {t('Blog_ADENOIDS_Title')}
                  </a>
                </li>
                : null
            }
            {/* {
              (router.asPath != t('Blog_Ultrasound_URL')) ?
                <li>
                  <a href={t('Blog_Ultrasound_URL')}>
                    <div className="img-block">
                      <Img src={imageUltrasound} alt="image Ultrasound" layout="responsive" />
                    </div>
                    {t('Blog_Ultrasound_Title')}
                  </a>
                </li>
                : null
            } */}
            {
              (router.asPath != t('Blog_ProstateExamination_URL')) ?
                <li>
                  <a href={t('Blog_ProstateExamination_URL')}>
                    <div className="img-block">
                      <Img src={imageProstateExamination} alt="image prostate examination" layout="responsive" />
                    </div>
                    {t('Blog_ProstateExamination_Title')}
                  </a>
                </li>
                : null
            }
            {
              (router.asPath != t('Blog_Cholesterol_URL')) ?
                <li>
                  <a href={t('Blog_Cholesterol_URL')}>
                    <div className="img-block">
                      <Img src={imageCholesterol} alt="image Cholesterol" layout="responsive" />
                    </div>
                    {t('Blog_Cholesterol_Title')}
                  </a>
                </li>
                : null
            }
            {/* {
              (router.asPath != t('Blog_Tinnitus_URL')) ?
                <li>
                  <a href={t('Blog_Tinnitus_URL')}>
                    <div className="img-block">
                      <Img src={imageTinnitus} alt="image Tinnitus" layout="responsive" />
                    </div>
                    {t('Blog_Tinnitus_Title')}
                  </a>
                </li>
                : null
            } */}
            {
              (router.asPath != t('Blog_PapSmearTest_URL')) ?
                <li>
                  <a href={t('Blog_PapSmearTest_URL')}>
                    <div className="img-block">
                      <Img src={imagePapSmearTest} alt="post 1" layout="responsive" />
                    </div>
                    {t('Blog_PapSmearTest_Title')}
                  </a>
                </li>
                : null
            }
            {
              (router.asPath != t('Blog_STD_URL')) ?
                <li>
                  <a href={t('Blog_STD_URL')}>
                    <div className="img-block">
                      <Img src={imageSTD} alt="post 1" layout="responsive" />
                    </div>
                    {t('Blog_STD_Title')}
                  </a>
                </li>
                : null
            }
            {/* {
              (router.asPath != t('Blog_CardiovascularDiseases_URL')) ?
                <li>
                  <a href={t('Blog_CardiovascularDiseases_URL')}>
                    <div className="img-block">
                      <Img src={imageCardiovascularDiseases} alt="post 1" layout="responsive" />
                    </div>
                    {t('Blog_CardiovascularDiseases_Title')}
                  </a>
                </li>
                : null
            } */}
            {/* {
              (router.asPath != t('Blog_Mammogram_URL')) ?
                <li>
                  <a href={t('Blog_Mammogram_URL')}>
                    <div className="img-block">
                      <Img src={imageMammogram} alt="image mammogram" layout="responsive" />
                    </div>
                    {t('Blog_Mammogram_Title')}
                  </a>
                </li>
                : null
            } */}
            {/* {
              (router.asPath != t('Blog_Obesity_URL')) ?
                <li>
                  <a href={t('Blog_Obesity_URL')}>
                    <div className="img-block">
                      <Img src={imageObesity} alt="image obesity" layout="responsive" />
                    </div>
                    {t('Blog_Obesity_Title')}
                  </a>
                </li>
                : null
            } */}
            
            {/* {
              (router.asPath != t('Blog_Vaginosis_URL')) ?
                <li>
                  <a href={t('Blog_Vaginosis_URL')}>
                    <div className="img-block">
                      <Img src={imageVaginosis} alt="image vaginosis" layout="responsive" />
                    </div>
                    {t('Blog_Vaginosis_Title')}
                  </a>
                </li>
                : null
            } */}
            {
              (router.asPath != t('Blog_BloodTest_URL')) ?
                <li>
                  <a href={t('Blog_BloodTest_URL')}>
                    <div className="img-block">
                      <Img src={imageBloodTest} alt="image blood test" layout="responsive" />
                    </div>
                    {t('Blog_BloodTest_Title')}
                  </a>
                </li>
                : null
            }
            {
              (router.asPath != t('Blog_CheckUps_URL')) ?
                <li>
                  <a href={t('Blog_CheckUps_URL')}>
                    <div className="img-block">
                      <Img src={imageCheckUps} alt="image blood test" layout="responsive" />
                    </div>
                    {t('Blog_CheckUps_Title')}
                  </a>
                </li>
                : null
            }
            {
              (router.asPath != t('Blog_Diabetes_URL')) ?
                <li>
                  <a href={t('Blog_Diabetes_URL')}>
                    <div className="img-block">
                      <Img src={imageDiabetes} alt="image blood test" layout="responsive" />
                    </div>
                    {t('Blog_Diabetes_Title')}
                  </a>
                </li>
                : null
            }

          </ul>
        </div>
      </div>
      <div className="blog_right_box">
        <div className="tagcloud">
          <h2>Tags</h2>
          <ul>
            <li>
              <a href="https://clinicahispanasaludesperanza.com" target="_blank">Clínica Latina en Houston Tx</a>
            </li>
            <li>
              <a href="https://goo.gl/maps/dkfrVPiwuRgkqN2p6" target="_blank">Clinica Hispana</a>
            </li>
            <li>
              <a href="https://goo.gl/maps/dkfrVPiwuRgkqN2p6" target="_blank">Clínica cerca de mi</a>
            </li>
            <li>
              <a href="https://clinicahispanasaludesperanza.com/about" target="_blank">Clínica familiar</a>
            </li>
            <li>
              <a href="https://clinicahispanasaludesperanza.com/contact" target="_blank">Clínica en Houston</a>
            </li>
            <li>
              <a href="https://clinicahispanasaludesperanza.com/appointment" target="_blank">Medicina general</a>
            </li>
            <li>
              <a href="https://www.facebook.com/clinicahispanahouston" target="_blank">Médico Primario</a>
            </li>
            <li>
              <a href="https://clinicahispanasaludesperanza.com/services" target="_blank">Atención Médica</a>
            </li>
            <li>
              <a href="https://clinicahispanasaludesperanza.com/blog" target="_blank">Atención Médica</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
