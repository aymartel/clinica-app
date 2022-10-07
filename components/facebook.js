import React, { useState } from "react";
import Script from 'next/script';

const Facebook = () => {
  return (
    <div>
      <div id="fb-root"></div>

      {/* <div id="fb-customer-chat" className="fb-customerchat"></div> */}
      <div className="elfsight-app-a75f1304-9300-4da6-94bb-ffd22745c5e4"></div>
      <Script src="https://apps.elfsight.com/p/platform.js" defer strategy="lazyOnload">
        {`
                  
               
                 

              `}
      </Script>
    </div>
  );
}

export default Facebook;
