import { Phone, MessageCircle, Calendar, MapPin, CheckCircle, ArrowRight } from 'lucide-react'

const CTASection = () => {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '+919876543210'
  const companyPhone = process.env.NEXT_PUBLIC_COMPANY_PHONE || '+919876543210'

  const ctaOptions = [
    {
      icon: Phone,
      title: 'Call Our Expert',
      description: 'Get immediate assistance from our property specialists',
      action: 'Call Now',
      href: `tel:${companyPhone}`,
      color: 'bg-primary-600 hover:bg-primary-700',
      delay: 'animation-delay-100'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Enquiry',
      description: 'Chat with our experts for quick property guidance',
      action: 'Start Chat',
      href: `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`,
      color: 'bg-green-500 hover:bg-green-600',
      delay: 'animation-delay-200'
    },
    {
      icon: Calendar,
      title: 'Schedule Site Visit',
      description: 'Book a personalized tour of your preferred properties',
      action: 'Book Visit',
      href: '/contact',
      color: 'bg-accent-500 hover:bg-accent-600',
      delay: 'animation-delay-300'
    }
  ]

  const trustIndicators = [
    { icon: '🏢', label: 'RERA Certified' },
    { icon: '🏆', label: 'Award Winning' },
    { icon: '⭐', label: '4.8/5 Rating' },
    { icon: '👥', label: '5000+ Clients' }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take the first step towards your perfect home with our expert guidance
          </p>
        </div>

        {/* Main CTA Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {ctaOptions.map((option, index) => (
            <div key={index} className="text-center space-y-4">
              <div className={`w-20 h-20 ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:scale-110 transition-all duration-300 ${option.delay}`}>
                <option.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h3>
              <p className="text-gray-600 mb-6">{option.description}</p>
              <a
                href={option.href}
                target={option.href.startsWith('https') ? '_blank' : '_self'}
                rel={option.href.startsWith('https') ? 'noopener noreferrer' : ''}
                className={`${option.color} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:-translate-y-1 inline-flex items-center space-x-2`}
              >
                <span>{option.action}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Why Trust Premium Estate?
            </h3>
            <p className="text-xl text-gray-100 mb-8">
              We combine expertise, transparency, and dedication to deliver exceptional real estate services
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{indicator.icon}</div>
                <p className="font-semibold">{indicator.label}</p>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4">Your Dream Property Awaits!</h4>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied clients who found their perfect homes with our expert guidance and personalized service
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/properties"
                className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Browse Properties</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="bg-accent-400 hover:bg-accent-500 px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Phone className="w-5 h-5 text-accent-400" />
                  <span className="font-bold">24/7 Support</span>
                </div>
                <p className="text-gray-200 text-sm">Round-the-clock assistance</p>
              </div>
              <div>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-accent-400" />
                  <span className="font-bold">Verified Properties</span>
                </div>
                <p className="text-gray-200 text-sm">100% authentic listings</p>
              </div>
              <div>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <MapPin className="w-5 h-5 text-accent-400" />
                  <span className="font-bold">Pan India</span>
                </div>
                <p className="text-gray-200 text-sm">20+ cities covered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
