import React from 'react'

import Layout from '../layout/layout'
import SEO from '../layout/seo'
import TC from '../../static/assets/tc.png'
import PageBanner from '../layout/page-banner'

function TermsAndConditionsPage() {
  const termsAndConditions = `        
      Here is an example of a terms of service for a business consulting firm and YouTube channel that offers business courses online:

      1. Scope of services: Business Educated provides business consulting services and offers business courses online through our YouTube channel. We strive to provide accurate and valuable information, but we cannot guarantee the completeness or accuracy of all content.

      2. Disclaimer of warranties: Business Educated provides our services "as is" and makes no warranties, express or implied, about the completeness, accuracy, reliability, suitability, or availability of our services or the information provided.

      3. Limitation of liability: Business Educated will not be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, arising from the use of our services or the information provided.

      4. Intellectual property: All content provided by Business Educated is protected by copyright and may not be reproduced without our written consent.

      5. Termination: Business Educated reserves the right to terminate or suspend access to our services at any time and without notice.
      
      6. Governing law: These terms of service will be governed by the laws of the state of ACT.

      These terms of service outline the scope of the services provided by Business Educated and clarify our disclaimer of warranties and limitation of liability. They also address intellectual property rights and specify the governing law for the agreement. It is important to carefully read and understand these terms before accessing or using our services.
    `
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <PageBanner
        headline={{
          pageTitle: "T&C's",
          title: 'Terms of service',
          description: `Our terms of service`,
          // ctas: [{ title: 'Book now', href: '/booking' }],
          imageSrc: TC,
          imageAlt: 'abstract reading man',
        }}
      />

      <section className="whitespace-pre-line text-left relative w-full mt-[11vh] h-full">
        <p className="md:px-12 px-6 w-full h-full">{termsAndConditions}</p>
      </section>
    </Layout>
  )
}

export default TermsAndConditionsPage
