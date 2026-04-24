import { MapPin, ExternalLink } from 'lucide-react'

export default function GoogleMap() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
          <p className="text-xl text-gray-600">
            Find us at our prime location in Noida for personalized consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Office Location</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">
                      Premium Estate<br />
                      Tower A, 3rd Floor<br />
                      Sector 62, Noida<br />
                      Uttar Pradesh - 201301
                    </p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Getting Here</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Nearest Metro: Sector 62 Metro Station (5 mins walk)</li>
                    <li>• Parking: Dedicated parking available</li>
                    <li>• Landmark: Near Sector 62 Market</li>
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Office Hours</h4>
                  <div className="space-y-1 text-gray-600">
                    <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p>Sunday: Emergency Support Only</p>
                    <p className="text-sm text-primary-600">Best time to visit: 10 AM - 6 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="https://maps.google.com/?q=Sector+62+Noida+Premium+Estate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.123456789!2d77.3456789!3d28.5678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQwJzQ2LjQiTiA3N8KwMjAnMjYuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-96"
                />
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Interactive Map</h4>
                <p className="text-gray-600 text-sm">
                  Click on the map to get detailed directions from your location
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Schedule Your Visit</h3>
            <p className="text-xl text-gray-100 mb-6">
              Book an appointment with our property experts for personalized consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Call to Schedule
              </a>
              <a
                href="https://wa.me/+919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-500 hover:bg-accent-600 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                WhatsApp Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
