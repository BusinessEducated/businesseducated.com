import React from 'react';

const GoogleAd = () => {
  return (
    <article className="w-full h-full relative">
      <script
        data-ad-client="ca-pub-your-ad-client-id"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-format="auto"
        data-ad-client="ca-pub-your-ad-client-id"
        data-ad-slot="your-ad-slot-id"
      ></ins>
    </article>
  );
};

export default GoogleAd;
