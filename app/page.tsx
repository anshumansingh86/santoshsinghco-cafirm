import { buildJsonLd } from '@/lib/structured-data'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustStrip from '@/components/TrustStrip'
import About from '@/components/About'
import Services from '@/components/Services'
import Approach from '@/components/Approach'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const jsonLd = buildJsonLd()

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <Approach />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
