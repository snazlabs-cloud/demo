import { Home, Building, Bed, Bath, Square, MapPin, Phone, MessageCircle } from 'lucide-react'

const ResidentialServices = () => {
  const services = [
    {
      icon: Building,
      title: 'Flats & Apartments',
      description: 'Modern apartments with premium amenities and excellent connectivity',
      features: ['1BHK to 4BHK', 'Ready to Move', 'Under Construction', 'Luxury & Budget']
    },
    {
      icon: Home,
      title: 'Independent Houses',
      description: 'Spacious independent houses and villas with complete privacy',
      features: ['2BHK to 5BHK', 'Gated Communities', 'Premium Locations', 'Customizable']
    },
    {
      icon: Building,
      title: 'Builder Floors',
      description: 'Low-rise builder floors with modern construction',
      features: ['2BHK to 4BHK', 'Stilt Parking', 'Modern Design', 'Prime Locations']
    }
  ]

  const featuredProperties = [
    {
      title: 'Luxury 3BHK in Gurgaon',
      price: '₹1.5 Crore',
      location: 'Sector 15, Gurgaon',
      specs: '3 Beds, 3 Baths, 1850 sqft',
      type: 'Rent'
    },
    {
      title: 'Modern 2BHK in Noida',
      price: '₹85 Lakhs',
      location: 'Sector 50, Noida',
      specs: '2 Beds, 2 Baths, 1200 sqft',
      type: 'Buy'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Residential Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Flats, apartments, villas, and family homes - Find your perfect residential property
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Properties */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Residential Properties</h3>
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
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center space-x-1">
                        <Bed className="w-4 h-4" />
                        <span>{property.specs.split(',')[0]}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Bath className="w-4 h-4" />
                        <span>{property.specs.split(',')[1]}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Square className="w-4 h-4" />
                        <span>{property.specs.split(',')[2]}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-primary-600">{property.price}</span>
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

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Find Your Dream Home</h3>
          <p className="text-xl text-gray-100 mb-6">
            Let our experts help you find the perfect residential property
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/properties"
              className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Browse Properties
            </a>
            <a
              href="/contact"
              className="bg-accent-500 hover:bg-accent-600 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Expert Help
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResidentialServices
