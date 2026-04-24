'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp, Phone, MessageCircle, HelpCircle } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What types of properties do you deal with?',
      answer: 'We deal with all types of residential and commercial properties including apartments, villas, independent houses, plots, office spaces, retail outlets, and industrial properties. We have properties available for buying, selling, and renting across major cities in India.'
    },
    {
      question: 'How do I start the property buying process?',
      answer: 'Starting is easy! Simply fill out our enquiry form or call us directly. Our expert will understand your requirements, show you matching properties, arrange site visits, help with negotiation, and assist with complete documentation and registration process.'
    },
    {
      question: 'Do you charge any consultation fees?',
      answer: 'No, we offer free initial consultation for all our clients. You can discuss your requirements with our experts without any charges. Fees only apply for specific services like property management or legal documentation.'
    },
    {
      question: 'Are your properties legally verified?',
      answer: 'Yes, absolutely! All our listed properties are thoroughly verified by our legal team. We provide complete documentation including title deeds, approval certificates, and encumbrance certificates. We ensure 100% legal compliance for all properties.'
    },
    {
      question: 'Can NRI clients use your services?',
      answer: 'Yes, we have specialized services for NRI clients including virtual property tours, power of attorney assistance, complete property management, and investment guidance. Our NRI desk handles all specific requirements for overseas investors.'
    },
    {
      question: 'How do you help with property negotiation?',
      answer: 'Our expert negotiators use market analysis and comparative pricing to get you the best deal. We have deep knowledge of local property rates and leverage our relationships to negotiate favorable terms and prices for our clients.'
    },
    {
      question: 'What locations do you cover?',
      answer: 'We cover major cities across India including Delhi NCR, Mumbai, Bangalore, Pune, Hyderabad, Chennai, Kolkata, and emerging tier-2 and tier-3 cities. We are continuously expanding our presence to serve more locations.'
    },
    {
      question: 'Do you provide home loan assistance?',
      answer: 'Yes, we have partnerships with leading banks and financial institutions. We help you get pre-approved loans, assist with documentation, ensure you get the best interest rates, and guide you through the complete loan approval process.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '+919876543210'
  const companyPhone = process.env.NEXT_PUBLIC_COMPANY_PHONE || '+919876543210'

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-primary-600" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions? Find answers to common queries about our services and processes
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Still Have Questions?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our real estate experts are here to help you with any queries you may have
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            <a
              href={`tel:${companyPhone}`}
              className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Our Expert</span>
            </a>
            <a
              href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-500 hover:bg-accent-600 px-6 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Additional Help */}
          <div className="bg-white/10 backdrop-blur-custom rounded-xl p-6 border border-white/20">
            <h4 className="text-lg font-bold mb-4">Other Ways to Reach Us</h4>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h5 className="font-semibold mb-2">📞 Call Us</h5>
                <p className="text-gray-200">Direct assistance for urgent queries</p>
                <p className="text-accent-400 font-medium mt-1">{companyPhone}</p>
              </div>
              <div>
                <h5 className="font-semibold mb-2">💬 WhatsApp</h5>
                <p className="text-gray-200">Quick responses for property enquiries</p>
                <p className="text-accent-400 font-medium mt-1">{whatsappNumber}</p>
              </div>
              <div>
                <h5 className="font-semibold mb-2">📧 Email</h5>
                <p className="text-gray-200">Detailed enquiries and documentation</p>
                <p className="text-accent-400 font-medium mt-1">info@premiumestate.com</p>
              </div>
              <div>
                <h5 className="font-semibold mb-2">📍 Visit Office</h5>
                <p className="text-gray-200">Face-to-face consultation</p>
                <p className="text-accent-400 font-medium mt-1">Gurgaon, Sector 15</p>
              </div>
            </div>
          </div>

          {/* Trust Message */}
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-200">
              <strong>Promise:</strong> We respond to all enquiries within 24 hours 
              and provide complete transparency throughout your property journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
