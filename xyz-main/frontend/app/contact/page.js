import ContactHero from '../../components/contact/ContactHero'
import ContactForm from '../../components/contact/ContactForm'
import ContactInfo from '../../components/contact/ContactInfo'
import GoogleMap from '../../components/contact/GoogleMap'
import ContactFAQ from '../../components/contact/ContactFAQ'

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
        </div>
      </div>
      <GoogleMap />
      <ContactFAQ />
    </main>
  )
}
