import React from 'react'

import Layout from '../layout/layout'
import SEO from '../layout/seo'
import COOKIES from '../../static/assets/cookies.png'
import PageBanner from '../layout/page-banner'
function CookiePolicyPage() {
  const cookiePolicy = `        
        Privacy Policy for Business Educated

        Last updated: 23/12/2022

        Business Educated (“us”, “we”, or “our”) operates www.businesseducated.com (the “Site”). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Site and the choices you have associated with that data.

        We use your data to provide and improve the Site. By using the Site, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.

        Information Collection and Use

        We collect several different types of information for various purposes to provide and improve our Site to you.

        Types of Data Collected

        Personal Data

        While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:

        Email address
        First name and last name
        Phone number
        Address, State, Province, ZIP/Postal code, City
        Cookies and Usage Data
        Usage Data

        We may also collect information how the Site is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.

        Tracking & Cookies Data

        We use cookies and similar tracking technologies to track the activity on our Site and hold certain information.

        Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Site.

        You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.

        Examples of Cookies we use:

        Session Cookies. We use Session Cookies to operate our Site.
        Preference Cookies. We use Preference Cookies to remember your preferences and various settings.
        Security Cookies. We use Security Cookies for security purposes.
        Use of Data

        Business Educated uses the collected data for various purposes:

        To provide and maintain the Site
        To notify you about changes to our Site
        To allow you to participate in interactive features of our Service when you choose to do so
        To provide customer care and support
        To provide analysis or valuable information so that we can improve the Site
        To monitor the usage of the Site
        To detect, prevent and address technical issues
        Transfer of Data

        Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.

        If you are located outside [Country] and choose to provide information to us, please note that we transfer the data, including Personal Data, to [Country] and process it there.

        Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.

        Business Educated will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.

        Disclosure of Data

        Legal Requirements

        Business Educated may disclose your Personal Data in the good faith belief that such action is necessary to:

        To comply with a legal obligation
        To protect and defend the rights or property of Business Educated
        To prevent or investigate possible wrongdoing in connection with the Site
        To protect the personal safety of users of the Site or the public
        To protect against legal liability
        Security of Data

        The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.

        Service Providers

        We may employ third party companies and individuals to facilitate our Site ("Service Providers"), to provide the Site on our behalf, to perform Site-related services or to assist us in analyzing how our Site is used.

        These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.

        Analytics

        We may use third-party Service Providers to monitor and analyze the use of our Site.

        Google Analytics

        Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Site. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.

        You can opt-out of having made your activity on the Site available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about visits activity.

        For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: https://policies.google.com/privacy?hl=en

        Links to Other Sites

        Our Site may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.

        We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.

        Children's Privacy

        Our Site does not address anyone under the age of 13 ("Children").

        We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.

        Changes to This Privacy Policy

        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.

        We encourage you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.

        Contact Us

        If you have any questions about this Privacy Policy, please contact us:

        By email: businesseducatedofficial@gmail.com
        By visiting this page on our website
    `
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <PageBanner
        headline={{
          pageTitle: 'Cookie Policy',
          title: 'Cookies!',
          description: `Our cookie policy`,
          // ctas: [{ title: 'Book now', href: '/booking' }],
          imageSrc: COOKIES,
          imageAlt: 'abstract reading man',
        }}
      />

      <section className="whitespace-pre-line text-left relative w-full mt-[11vh] h-full">
        <p className="md:px-12 px-6 w-full h-full">{cookiePolicy}</p>
      </section>
    </Layout>
  )
}

export default CookiePolicyPage
