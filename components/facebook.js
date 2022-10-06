import React, { useState } from "react";
import Script from 'next/script';

const Facebook = () => {
  return (
    <div>
      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat"></div>
      <Script id="facebook" strategy="lazyOnload">
        {`
                  
                  
                  window.callbellSettings = {
                    token: "XqSZoVpZjUWwnrHYGnnMtBt4"
                  };
            
                  (function(){var w=window;var ic=w.callbell;if(typeof ic==="function"){ic('reattach_activator');ic('update',callbellSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Callbell=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://dash.callbell.eu/include/'+window.callbellSettings.token+'.js';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()
         

              `}
      </Script>
    </div>
  );
}

export default Facebook;
