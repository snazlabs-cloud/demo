'use client'
import { useState } from 'react'
import { Search, Phone, MessageCircle, ArrowRight, Home, Building, TrendingUp } from 'lucide-react'

const Hero = () => {
  const [selectedService, setSelectedService] = useState('buy')

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '+919876543210'
  const companyPhone = process.env.NEXT_PUBLIC_COMPANY_PHONE || '+919876543210'

  const services = [
    { id: 'buy', label: 'Buy Property', icon: Home },
    { id: 'sell', label: 'Sell Property', icon: Building },
    { id: 'invest', label: 'Investment', icon: TrendingUp }
  ]

  return (
    <section className="hero-gradient text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-custom rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">Premium Real Estate Services</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Find Your Dream
                <span className="block text-accent-400">Home With Us</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Expert guidance for buying, selling, and investing in premium properties across India. 
                15+ years of trusted service with 5000+ happy clients.
              </p>
            </div>

            {/* Service Selection */}
            <div className="bg-white/10 backdrop-blur-custom rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-bold mb-4">What are you looking for?</h3>
              <div className="grid grid-cols-3 gap-3">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      selectedService === service.id
                        ? 'bg-white text-primary-600 border-white'
                        : 'border-white/30 hover:border-white/60'
                    }`}
                  >
                    <service.icon className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-sm font-medium">{service.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${companyPhone}`}
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Expert Now</span>
              </a>
              <a
                href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Chat</span>
              </a>
            </div>

            {/* Quick Contact Info */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-white/10 backdrop-blur-custom rounded-lg p-3 border border-white/20">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-accent-400" />
                  <span>{companyPhone}</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-custom rounded-lg p-3 border border-white/20">
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4 text-accent-400" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-custom rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Us?</h3>
              
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-400 mb-2">15+</div>
                  <div className="text-gray-200">Years Experience</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-400 mb-2">5000+</div>
                  <div className="text-gray-200">Happy Clients</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-400 mb-2">1000+</div>
                  <div className="text-gray-200">Properties Sold</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-400 mb-2">98%</div>
                  <div className="text-gray-200">Client Satisfaction</div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="/contact"
                  className="inline-flex items-center space-x-2 bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero
