import LoadingScreen from '@/components/LoadingScreen'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Results from '@/components/Results'
import Services from '@/components/Services'
import WhatYouGet from '@/components/WhatYouGet'
import HowItWorks from '@/components/HowItWorks'
import Tools from '@/components/Tools'
import WhoThisIsFor from '@/components/WhoThisIsFor'
import Guarantee from '@/components/Guarantee'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Header />
      
      {/* Main content area for search engines */}
      <main>
        <Hero />
        <Results />
        <Services />
        <WhatYouGet />
        <HowItWorks />
        <Tools />
        <WhoThisIsFor />
        <Guarantee />
        <FAQ />
        <Contact />
      </main>
      
      <Footer />
    </>
  )
}