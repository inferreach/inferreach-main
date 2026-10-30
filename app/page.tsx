import LoadingScreen from '@/components/LoadingScreen'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Results from '@/components/Results'
import Services from '@/components/Services'
import WhatYouGet from '@/components/WhatYouGet'
import HowItWorks from '@/components/HowItWorks'
import WhoThisIsFor from '@/components/WhoThisIsFor'

import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Header />
      
      <main>
        <Hero />
        <Results />
        <Services />
        <WhatYouGet />
        <HowItWorks />
        {/* <Tools /> is removed from here */}
        <WhoThisIsFor />
        
        <FAQ />
        <Contact />
      </main>
      
      <Footer />
      <CookieBanner />
    </>
  )
}