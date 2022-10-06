import React, { useState } from "react";
import Script from 'next/script';

const Facebook = () => {
  return (
    <div>
      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat"></div>
      <Script id="facebook" strategy="lazyOnload">
        {`
                  
        (function () {
        var options = {
          facebook: "6343B4F1", // Facebook page ID
        call_to_action: "Envíanos un mensaje", // Call to action
        button_color: "#129BF4", // Color of button
        position: "right", // Position may be 'right' or 'left'
        };
        var proto = 'https:', host = "getbutton.io", url = proto + '//static.' + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () {WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();

              `}
      </Script>
    </div>
  );
}

export default Facebook;
