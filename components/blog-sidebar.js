import React from "react";
import latestPost1 from "@/images/blog/post/latest-post-1.jpg";
import latestPost2 from "@/images/blog/post/latest-post-2.jpg";
import latestPost3 from "@/images/blog/post/latest-post-3.jpg";
import Img from "@/components/img";
import { useTranslations } from 'next-intl'
import imageSTD from "@/images/blog/std.webp";
import imagePapSmearTest from "@/images/blog/blogDetail-pap-smear-test.webp";
import imageCardiovascularDiseases from "@/images/blog/cardiovascular-diseases.webp";

const BlogSidebar = () => {
  const t = useTranslations('Index')
  return (
    <div className="blog_details_right">
      
      <div className="blog_right_box mb-30">
        <div className="latest_post">
          <h2>{t('Blog_Latest')}</h2>
          <ul>
            <li>
              <a href={t('Blog_PapSmearTest_URL')}>
                <div className="img-block">
                  <Img src={imagePapSmearTest} alt="post 1" layout="responsive" />
                </div>
                {t('Blog_PapSmearTest_Title')}
              </a>
            </li>
            <li>
              <a href={t('Blog_STD_URL')}>
                <div className="img-block">
                  <Img src={imageSTD} alt="post 1" layout="responsive" />
                </div>
                {t('Blog_STD_Title')}
              </a>
            </li>
            <li>
              <a href={t('Blog_CardiovascularDiseases_URL')}>
                <div className="img-block">
                  <Img src={imageCardiovascularDiseases} alt="post 1" layout="responsive" />
                </div>
                {t('Blog_CardiovascularDiseases_Title')}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="blog_right_box">
        <div className="tagcloud">
          <h2>Tags</h2>
          <ul>
            <li>
              <a href="https://goo.gl/maps/dkfrVPiwuRgkqN2p6">Clínica Latina en Houston Tx</a>
            </li>
            <li>
              <a href="https://www.google.com/search?q=clinica+hispana+salud+y+esperanza&sxsrf=ALiCzsYQzojSelGhXW_g8JTLN2zObbYtUw%3A1658215150809&ei=7lrWYoqLMe_GrgSk35n4Bg&gs_ssp=eJwFwUsKgCAQAFDaBt3BFq1T0snxCN1i_JRCSCaBdfre64f5mIUoJVooduGdmXjTILn3KK3SEBwIwxvupFaHCFrIgAq20Z0pJ0cspnpRJlbpfDx7WahXuCl_9AN-uhuW&oq=cli&gs_lcp=Cgdnd3Mtd2l6EAMYATIECCMQJzIKCC4QxwEQrwEQJzIGCCMQJxATMgcIABDJAxBDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQguEIAEOgQIABBDOgsILhCABBDHARDRA0oECEEYAEoECEYYAFAAWJQDYMQMaABwAXgAgAFTiAHtAZIBATOYAQCgAQHAAQE&sclient=gws-wiz">Clinica Hispana</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
