import React, { Fragment, useContext, useEffect, useState } from "react";
import Head from "next/head";
import { Link as ScrollLink } from "react-scroll";
import MobileMenu from "./mobile-menu";
import { MenuContext } from "@/context/menu-context";
import { useTranslations } from 'next-intl';

const Layout = ({ children }) => {
  const t = useTranslations('Index');
  const [scrollTop, setScrollTop] = useState(false);
  const { menuStatus } = useContext(MenuContext);
  const handleScrollTop = () => {
    if (window.scrollY > 70) {
      setScrollTop(true);
    } else if (window.scrollY < 70) {
      setScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, [scrollTop]);

  return (
    <Fragment>
      <Head>
        <meta name="robots" content="all"/>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <title itemProp="name">
          Clínica Hispana Salud y Esperanza | Medical Clinic | Houston TX
        </title>
        <meta itemProp="description" name="description" content={t('MetaDescription_Home')} />
        <meta name="keywords" content="Clínica, Hispana, Houston Tx" />
        <meta name="author" content="Andi Martel Karpio" />
        <meta name="Revisit-after" content="7 days" />
        <meta name="copyright" content="Clínica Hispana Salud y Esperanza" />
        <meta name='og:image' content='https://www.clinicahispanasaludesperanza.com/_next/static/media/logo.4f03e442.svg'/>
        <meta name='og:postal-code' content='77072'/>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BZV75YPKRP"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              url: "https://clinicahispanasaludesperanza.com/",
              logo: "https://clinicahispanasaludesperanza.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fassets%2Fimages%2Flogo.d15bd0882bd9bb11d3e3882533a564fd.svg&w=256&q=75",
              priceRange: "$$",
              image: "https://clinicahispanasaludesperanza.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fassets%2Fimages%2Flogo.d15bd0882bd9bb11d3e3882533a564fd.svg&w=256&q=75",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "157"
              }
            })
          }}
        />

      </Head>
      <div id="wrapper">{children}</div>

      {true === menuStatus ? <MobileMenu /> : null}
      {scrollTop === true ? (
        <ScrollLink
          to="wrapper"
          smooth={true}
          duration={500}
          id="backToTop"
          className="scroll-to-top scroll-to-target"
        >
          <i className="fa fa-angle-up"></i>
        </ScrollLink>
      ) : null}
    </Fragment>
  );
};

export default Layout;
