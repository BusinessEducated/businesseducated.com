import React from "react";

import Layout from "../layout/layout";
import SEO from "../layout/seo"; 
import PRIVACY from "../../static/assets/privacy.png"; 

function PrivacyPolicyPage() {
    const privacyPolicy = `        
        Cookie Policy for Business Educated

        Last updated: [Insert date]

        Business Educated (“us”, “we”, or “our”) uses cookies on www.businesseducated.com (the “Service”). By using the Service, you consent to the use of cookies.

        Our Cookies Policy explains what cookies are, how we use cookies, how third-parties we may partner with may use cookies on the Service, your choices regarding cookies and further information about cookies.

        What are cookies

        Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.

        Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer or mobile device when you go offline, while session cookies are deleted as soon as you close your web browser.

        How Business Educated uses cookies

        When you use and access the Service, we may place a number of cookies files in your web browser.

        We use cookies for the following purposes:

        To enable certain functions of the Service
        To provide analytics
        To store your preferences
        We use both session and persistent cookies on the Service and we use different types of cookies to run the Service:

        Essential cookies. We may use essential cookies to authenticate users and prevent fraudulent use of user accounts.
        Third-party cookies

        In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on.

        What are your choices regarding cookies

        If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.

        Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.

        Where can you find more information about cookies

        You can learn more about cookies and the following third-party websites:

        AllAboutCookies: http://www.allaboutcookies.org/
        Network Advertising Initiative: http://www.networkadvertising.org/
        Children's Information

        Our Service does not address anyone under the age of 13 ("Children").

        We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your Children has provided us with Personal Information, please contact us. If we become aware that we have collected Personal Information from children without verification of parental consent, we take steps to remove that information from our servers.

        Changes to this Cookies Policy

        We may update our Cookies Policy from time to time. We will notify you of any changes by posting the new Cookies Policy on this page.

        We encourage you to review this Cookies Policy periodically for any changes. Changes to this Cookies Policy are effective when they are posted on this page.

        Contact Us

        If you have any questions about this Cookies Policy, please contact us:

        By email: businesseducatedofficial@gmail.com
        By visiting this page on our website: https://businesseducated.com/

        Please note that this is just a draft and you should customize it to
    `
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      

      <section className="text-center grid-cols-12 grid relative h-[35rem] bg-black w-full mt-[11vh]">
        <div className="text-left col-span-6 overflow-hidden h-full relative m-auto flex">
          <div className="flex flex-col gap-6 m-auto justify-start align-items-start">
            <h1 className="inline-block text-white mb-1 text-4xl font-bold max-w-xs">
              Cookie Policy
            </h1>

            <p className="leading-loose text-white max-w-md">
              Our cookie policy
            </p> 
          </div>
        </div>

        <img className="max-w-[550px] min-h-[550px] hover:mt-6 transition-all ease-in-out rounded-md shadow-2xl mt-12 object-cover col-span-6" src={PRIVACY} />
      </section>

     <section className="whitespace-pre-line text-left relative w-full mt-[11vh] h-full">
        <p className="md:px-12 px-6 w-full h-full">
            {privacyPolicy}
        </p>
      </section>
    </Layout>
  );
}

export default PrivacyPolicyPage;
