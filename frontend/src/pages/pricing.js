import React from "react";

import Layout from "../layout/layout";
import Pricing from "../components/pricing";
import SEO from "../layout/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-center">
       <Pricing/>
      </section>
    </Layout>
  );
}

export default IndexPage;
