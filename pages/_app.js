import "bootstrap/dist/css/bootstrap.min.css";
import "node_modules/swiper/swiper-bundle.min.css";
import "@fontsource/josefin-sans/100.css";
import "@fontsource/josefin-sans/300.css";
import "@fontsource/josefin-sans/400.css";
import "@fontsource/josefin-sans/600.css";
import "@fontsource/josefin-sans/600-italic.css";
import "@fontsource/josefin-sans/700.css";
import "@/css/animate.css";
import "@/css/font-awesome.min.css";
import "@/css/fontello.css";
import "@/css/style.css";
import "@/css/responsive.css";
import { NextIntlProvider } from 'next-intl'
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider
      // To achieve consistent date, time and number formatting
      // across the app, you can define a set of global formats.
      formats={{
        dateTime: {
          short: {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          },
        },
      }}
      messages={pageProps.messages}
      // Providing an explicit value for `now` ensures consistent formatting of
      // relative values regardless of the server or client environment.
      now={new Date(pageProps.now)}
      // Also an explicit time zone is helpful to ensure dates render the
      // same way on the client as on the server, which might be located
      // in a different time zone.
      timeZone="Austria/Vienna"
    >
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${`G-BZV75YPKRP`}');
          `,
        }}
      />
      <Component {...pageProps} />
    </NextIntlProvider>
  )
}

export default MyApp
