import Hero from '../components/Hero'
import PropertySearch from '../components/PropertySearch'
import FeaturedProperties from '../components/FeaturedProperties'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import GoogleReviews from '../components/GoogleReviews'
import LeadCaptureForm from '../components/LeadCaptureForm'
import FAQ from '../components/FAQ'
import CTASection from '../components/CTASection'

export default function Home() {
  return (
    <main>
      <Hero />
      <PropertySearch />
      <FeaturedProperties />
      <WhyChooseUs />
      <Testimonials />
      <GoogleReviews />
      <LeadCaptureForm />
      <FAQ />
      <CTASection />
    </main>
  )
}