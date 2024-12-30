import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import Project from '@/components/Project'
import Work from '@/components/Work-together'
import Extension from '@/components/Extension'
import Customise from '@/components/Customise'
import PricingSection from '@/components/Pricing'
import Sponsers from '@/components/Sponsers'
import Testimonals from '@/components/Testimonals'

  import Taskey from '@/components/Taskey'
import FooterSection from '@/components/Footer'

export default function Home() {
  return (
    <div className=''>
    <main className="min-h-screen bg-[#002B59]">
      <Navbar />
      <Hero />
    </main>
    <Project/>
    <Work/>
    <Extension/>
    <Customise/>
    <PricingSection/>
   <Taskey/>
   <Sponsers/>
   <Testimonals/>
   <FooterSection/>
    </div>
  )
}

