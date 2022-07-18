import React, { Fragment, useContext, useEffect, useState } from "react";
import Head from "next/head";
import { Link as ScrollLink } from "react-scroll";
import MobileMenu from "./mobile-menu";
import { MenuContext } from "@/context/menu-context";
import { useTranslations } from 'next-intl';

const Layout = ({children}) => {
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
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <title>
          Clínica Hispana Salud y Esperanza | Medical Clinic | Houston TX
        </title>
        <meta name="description" content={t('MetaDescription_Home')} />
        <meta name="keywords" content="Clínica, Hispana, Houston Tx" />
        <meta name="author" content="Andi Martel Karpio" />
        <meta name="Revisit-after" content="7 days" />
        <meta name="copyright" content="Clínica Hispana Salud y Esperanza" />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BZV75YPKRP"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://www.schema.org",
              "@type": "MedicalClinic",
              name: "CLINICA HISPANA SALUD Y ESPERANZA",
              url: "https://clinicahispanasaludesperanza.com/",
              logo: "https://clinicahispanasaludesperanza.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fassets%2Fimages%2Flogo.d15bd0882bd9bb11d3e3882533a564fd.svg&w=256&q=75",
              priceRange: "$$",
              image: "https://clinicahispanasaludesperanza.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fassets%2Fimages%2Flogo.d15bd0882bd9bb11d3e3882533a564fd.svg&w=256&q=75",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "157"
            },
              description: "Clínica latina familiar en Houston, TX. Se brinda atención médica con o sin seguro médico y sin necesidad de cita previa.♥ Tu salud es nuestra prioridad ♥.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "8200 Wilcrest Dr, Houston, TX 77072, EE. UU.",
                addressLocality: "Houston",
                addressRegion: "Texa",
                postalCode: "77072",
                addressCountry: "EE. UU."
              },
              hasMap: "https://www.google.com/maps/place/CLINICA+HISPANA+SALUD+Y+ESPERANZA/@29.6886245,-95.5721777,17z/data=!3m1!4b1!4m5!3m4!1s0x8640dd94b586ec61:0x9fa57c996814e956!8m2!3d29.6886245!4d-95.5721777",
              openingHours: "Mo 09:00-20:00 Tu 09:00-20:00 We 09:00-20:00 Th 09:00-20:00 Fr 09:00-20:00 Sa 09:00-17:00 Su 09:00-17:00",
              telephone: "+1 346-570-2594"
            })
          }}
        />

      </Head>
      <div id="wrapper">{children}</div>

      {true === menuStatus ? <MobileMenu/> : null}
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
