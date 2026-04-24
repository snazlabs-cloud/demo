'use client'
import { Bed, Bath, Square, MapPin, Heart, Phone, MessageCircle, Eye } from 'lucide-react'

const PropertyList = ({ properties, loading, pagination, onPageChange }) => {
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
    console.log('Added to wishlist:', propertyId)
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="spinner"></div>
      </div>
    )
  }

  if (properties.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">🏠</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No Properties Found</h3>
        <p className="text-gray-600 mb-6">
          Try adjusting your filters or search criteria
        </p>
        <button
          onClick={() => window.location.reload()}
          className="btn-primary"
        >
          Clear Filters
        </button>
      </div>
    )
  }

  return (
    <div>
      {/* Results Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {pagination.total} Properties Found
          </h2>
          <p className="text-gray-600">
            Showing {((pagination.page - 1) * pagination.limit) + 1} to{' '}
            {Math.min(pagination.page * pagination.limit, pagination.total)} properties
          </p>
        </div>
        
        {/* Sort Dropdown */}
        <select className="input-field w-auto">
          <option>Sort by: Newest First</option>
          <option>Sort by: Price: Low to High</option>
          <option>Sort by: Price: High to Low</option>
          <option>Sort by: Most Popular</option>
        </select>
      </div>

      {/* Property Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {properties.map((property) => (
          <div
            key={property.id}
            className="card group cursor-pointer"
            onClick={() => window.location.href = `/properties/${property.id}`}
          >
            {/* Property Image */}
            <div className="relative overflow-hidden h-48">
              <img
                src={property.images[0]?.url || '/placeholder-property.jpg'}
                alt={property.images[0]?.alt || property.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col space-y-2">
                {property.featured && (
                  <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                )}
                <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {property.category === 'buy' ? 'For Sale' : 'For Rent'}
                </span>
              </div>

              {/* Price Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-white text-primary-600 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  {formatPrice(property.price)}
                </span>
              </div>

              {/* View Count */}
              <div className="absolute bottom-4 left-4">
                <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-custom rounded-full px-3 py-1">
                  <Eye className="w-4 h-4 text-white" />
                  <span className="text-white text-sm">{property.views || 0}</span>
                </div>
              </div>

              {/* Wishlist Button */}
              <button
                onClick={(e) => handleWishlist(e, property.id)}
                className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 transition-colors duration-200"
              >
                <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
              </button>
            </div>

            {/* Property Details */}
            <div className="p-6 space-y-4">
              {/* Title and Location */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
                  {property.title}
                </h3>
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                  <span className="line-clamp-1">
                    {property.location.area}, {property.location.city}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm line-clamp-2">
                {property.description}
              </p>

              {/* Specifications */}
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Bed className="w-4 h-4" />
                  <span>{property.specifications.bedrooms} Beds</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Bath className="w-4 h-4" />
                  <span>{property.specifications.bathrooms} Baths</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Square className="w-4 h-4" />
                  <span>{property.specifications.area} {property.specifications.areaUnit}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleCallClick(property.contactInfo.phone)
                  }}
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-2 px-3 rounded-lg font-medium transition-colors duration-200 text-sm"
                >
                  <Phone className="w-4 h-4 inline mr-1" />
                  Call
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleWhatsAppClick(property)
                  }}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded-lg font-medium transition-colors duration-200 text-sm"
                >
                  <MessageCircle className="w-4 h-4 inline mr-1" />
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {pagination.pages > 1 && (
        <div className="flex items-center justify-center space-x-2">
          <button
            onClick={() => onPageChange(pagination.page - 1)}
            disabled={pagination.page === 1}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          <div className="flex space-x-2">
            {Array.from({ length: pagination.pages }, (_, i) => (
              <button
                key={i}
                onClick={() => onPageChange(i + 1)}
                className={`px-4 py-2 rounded-lg ${
                  pagination.page === i + 1
                    ? 'bg-primary-600 text-white'
                    : 'border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => onPageChange(pagination.page + 1)}
            disabled={pagination.page === pagination.pages}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

export default PropertyList
