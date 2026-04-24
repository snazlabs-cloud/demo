'use client'
import { useState, useEffect } from 'react'
import { MessageCircle, Phone, X, ChevronUp } from 'lucide-react'

const WhatsAppButton = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '+919876543210'
  const companyPhone = process.env.NEXT_PUBLIC_COMPANY_PHONE || '+919876543210'

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* WhatsApp and Call Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 animate-pulse-slow"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        )}

        {isExpanded && (
          <div className="bg-white rounded-lg shadow-2xl p-4 min-w-[200px] border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-gray-900">Quick Contact</span>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-3">
              <a
                href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">WhatsApp</span>
              </a>
              
              <a
                href={`tel:${companyPhone}`}
                className="flex items-center space-x-3 bg-primary-600 hover:bg-primary-700 text-white px-4 py-3 rounded-lg transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">Call Now</span>
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Sticky Mobile Call Button */}
      <div className="lg:hidden fixed bottom-6 left-6 z-40">
        <a
          href={`tel:${companyPhone}`}
          className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center space-x-2"
        >
          <Phone className="w-5 h-5" />
          <span className="font-medium">Call</span>
        </a>
      </div>
    </>
  )
}

export default WhatsAppButton
