'use client'
import { useState } from 'react'
import { Bed, Bath, Square, MapPin, Phone, MessageCircle, Heart, Eye, ArrowRight } from 'lucide-react'

const FeaturedProperties = () => {
  const [likedProperties, setLikedProperties] = useState([])

  const featuredProperties = [
    {
      id: 1,
      title: 'Luxury 3BHK Apartment in Gurgaon',
      description: 'Premium 3BHK apartment with modern amenities, excellent connectivity, and great neighborhood',
      price: 15000000,
      category: 'rent',
      location: {
        area: 'Sector 15',
        city: 'Gurgaon',
        state: 'Haryana'
      },
      specifications: {
        bedrooms: 3,
        bathrooms: 3,
        area: 1850,
        areaUnit: 'sqft'
      },
      images: [
        {
          url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400',
          alt: 'Luxury apartment living room',
          isMain: true
        }
      ],
      views: 245,
      featured: true,
      contactInfo: {
        phone: '+919876543210',
        whatsapp: '+919876543210'
      }
    },
    {
      id: 2,
      title: 'Modern 2BHK Flat in Noida',
      description: 'Well-designed 2BHK flat with premium fittings, close to metro station and shopping centers',
      price: 8500000,
      category: 'buy',
      location: {
        area: 'Sector 50',
        city: 'Noida',
        state: 'Uttar Pradesh'
      },
      specifications: {
        bedrooms: 2,
        bathrooms: 2,
        area: 1200,
        areaUnit: 'sqft'
      },
      images: [
        {
          url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400',
          alt: 'Modern apartment interior',
          isMain: true
        }
      ],
      views: 189,
      featured: true,
      contactInfo: {
        phone: '+919876543210',
        whatsapp: '+919876543210'
      }
    },
    {
      id: 3,
      title: 'Premium Villa in Bangalore',
      description: 'Luxury independent villa with private garden, swimming pool, and modern security features',
      price: 35000000,
      category: 'rent',
      location: {
        area: 'Whitefield',
        city: 'Bangalore',
        state: 'Karnataka'
      },
      specifications: {
        bedrooms: 4,
        bathrooms: 4,
        area: 3200,
        areaUnit: 'sqft'
      },
      images: [
        {
          url: 'https://images.unsplash.com/photo-1600607687927-ce2a3b8c9b65?w=400',
          alt: 'Luxury villa exterior',
          isMain: true
        }
      ],
      views: 312,
      featured: true,
      contactInfo: {
        phone: '+919876543210',
        whatsapp: '+919876543210'
      }
    }
  ]

  const formatPrice = (price) => {
    if (price >= 10000000) {
      return `₹${(price / 100000).toFixed(0)} Lakh/month`
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(0)} Lakh`
    }
    return `₹${price.toLocaleString()}`
  }

  const handleWhatsAppClick = (property) => {
    const message = encodeURIComponent(`Hi! I'm interested in this property: ${property.title}`)
    window.open(`https://wa.me/${property.contactInfo.whatsapp.replace(/\D/g, '')}?text=${message}`, '_blank')
  }

  const handleCallClick = (phone) => {
    window.open(`tel:${phone}`)
  }

  const handleWishlist = (e, propertyId) => {
    e.stopPropagation()
    setLikedProperties(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked premium properties with excellent value and prime locations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProperties.map((property) => (
            <div
              key={property.id}
              className="card group cursor-pointer"
              onClick={() => window.location.href = `/properties/${property.id}`}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={property.images[0]?.url}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="font-bold">{property.title}</h3>

                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  {property.location.city}
                </div>

                <div className="flex space-x-4 mt-2 text-sm">
                  <Bed className="w-4 h-4" />
                  <Bath className="w-4 h-4" />
                  <Square className="w-4 h-4" />
                </div>

                <div className="flex mt-4 space-x-2">
                  <button className="btn-primary flex-1">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Call
                  </button>
                  <button className="bg-green-500 text-white px-3 py-2 rounded">
                    <MessageCircle className="w-4 h-4 inline mr-1" />
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="/properties" className="inline-flex items-center space-x-2 btn-primary">
            <span>View All Properties</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProperties
