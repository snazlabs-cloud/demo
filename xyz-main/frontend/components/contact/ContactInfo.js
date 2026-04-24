import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactInfo() {
  return (
    <section className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Details</h2>
      
      <div className="space-y-6">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Phone className="w-5 h-5 text-primary-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
            <p className="text-gray-600">+91 98765 43210</p>
            <p className="text-sm text-gray-500">24/7 Support Available</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
            <p className="text-gray-600">+91 98765 43210</p>
            <p className="text-sm text-gray-500">Instant Response</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Mail className="w-5 h-5 text-accent-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
            <p className="text-gray-600">contact@premiumestate.com</p>
            <p className="text-sm text-gray-500">info@premiumestate.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
            <p className="text-gray-600">Sector 62, Noida</p>
            <p className="text-gray-600">Uttar Pradesh, India</p>
            <p className="text-sm text-gray-500">Pin: 201301</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Working Hours</h3>
            <p className="text-gray-600">Monday - Saturday</p>
            <p className="text-gray-600">9:00 AM - 7:00 PM</p>
            <p className="text-sm text-gray-500">Sunday: Emergency Support Only</p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-white rounded-lg border border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-3">Quick Connect</h4>
        <div className="space-y-2">
          <a
            href="tel:+919876543210"
            className="block w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 text-center"
          >
            Call Now
          </a>
          <a
            href="https://wa.me/+919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 text-center"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}
