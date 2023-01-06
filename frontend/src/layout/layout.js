import PropTypes from 'prop-types'
import React from 'react'

import Header from './header'
import Footer from './footer'

function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col min-h-screen font-sans text-gray-900">
        <Header />

        <main>{children}</main>
        {/* <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16"> */}
        {/* </main> */}

        <Footer />
      </div>
      {/* google ads */}
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1539774641450591"
        crossOrigin="anonymous"
      ></script>
      {/* stripe */}
      <script src="https://js.stripe.com/v3/" async></script>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
