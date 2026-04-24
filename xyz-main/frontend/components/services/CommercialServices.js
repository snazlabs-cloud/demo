import { Building, Store, Factory, TrendingUp, Phone, MessageCircle, MapPin } from 'lucide-react'

const CommercialServices = () => {
  const services = [
    {
      icon: Building,
      title: 'Office Spaces',
      description: 'Modern office spaces with premium amenities and excellent connectivity',
      features: ['Fully Furnished', 'Co-working Spaces', 'Private Offices', 'Meeting Rooms']
    },
    {
      icon: Store,
      title: 'Retail Shops',
      description: 'Prime retail locations with high footfall and excellent visibility',
      features: ['High Street', 'Mall Spaces', 'Food Courts', 'Showrooms']
    },
    {
      icon: Factory,
      title: 'Industrial Properties',
      description: 'Warehouses and industrial spaces for manufacturing and logistics',
      features: ['Warehouses', 'Factory Spaces', 'Logistics Hubs', 'Industrial Parks']
    }
  ]

  const featuredProperties = [
    {
      title: 'Premium Office Space in Gurgaon',
      price: '₹2.5 Crore',
      location: 'Sector 18, Gurgaon',
      specs: '5000 sqft, Fully Furnished',
      type: 'Buy'
    },
    {
      title: 'Retail Shop in Delhi',
      price: '₹3 Crore',
      location: 'Connaught Place, Delhi',
      specs: '2000 sqft, Ground Floor',
      type: 'Buy'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Commercial Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Office spaces, shops, and commercial investments - Grow your business with prime locations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Properties */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Commercial Properties</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProperties.map((property, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{property.title}</h4>
                    <div className="flex items-center space-x-2 text-gray-600 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{property.specs}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-accent-600">{property.price}</span>
                    <p className="text-sm text-gray-600">{property.type}</p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <a
                    href="tel:+919876543210"
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-2 px-3 rounded-lg font-medium transition-colors duration-200 text-sm text-center"
                  >
                    <Phone className="w-4 h-4 inline mr-1" />
                    Call
                  </a>
                  <a
                    href="https://wa.me/+919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded-lg font-medium transition-colors duration-200 text-sm text-center"
                  >
                    <MessageCircle className="w-4 h-4 inline mr-1" />
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Benefits */}
        <div className="bg-gradient-to-r from-accent-500 to-primary-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Commercial Investment Benefits</h3>
            <p className="text-xl text-gray-100">
              High returns and long-term growth potential
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-accent-400 mx-auto mb-4" />
              <h4 className="font-bold mb-2">High ROI</h4>
              <p className="text-gray-200 text-sm">Excellent rental yields</p>
            </div>
            <div className="text-center">
              <Building className="w-12 h-12 text-accent-400 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Prime Locations</h4>
              <p className="text-gray-200 text-sm">Business district properties</p>
            </div>
            <div className="text-center">
              <Store className="w-12 h-12 text-accent-400 mx-auto mb-4" />
              <h4 className="font-bold mb-2">High Demand</h4>
              <p className="text-gray-200 text-sm">Growing commercial market</p>
            </div>
            <div className="text-center">
              <Factory className="w-12 h-12 text-accent-400 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Long-term Value</h4>
              <p className="text-gray-200 text-sm">Appreciation potential</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommercialServices
