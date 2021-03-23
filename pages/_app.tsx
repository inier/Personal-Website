/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { GoogleFonts } from 'next-google-fonts'
import Nav from '../src/components/Nav'
import ScrollToTop from '../src/containers/scrollToTop'
import Footer from '../src/components/Footer'
import '../src/css/tailwind.css'
import CallToAction from '../src/components/CallToAction'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" />
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="Logo Icon" type="image/png" href="/fav.png" />
    </Head>
    <Nav />
    <Component {...pageProps} />
    <section className="w-full mt-8 bg-gradient-to-b from-black to-gray-900">
      <CallToAction />
      <ScrollToTop />
      <Footer />
    </section>
  </>
)

export default App
