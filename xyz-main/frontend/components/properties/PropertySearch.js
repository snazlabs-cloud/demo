'use client'
import { useState } from 'react'
import { Search, MapPin, Home, DollarSign, Filter, ArrowRight } from 'lucide-react'

const PropertySearch = () => {
  const [searchData, setSearchData] = useState({
    location: '',
    propertyType: '',
    category: '',
    minPrice: '',
    maxPrice: ''
  })

  const propertyTypes = [
    { value: '', label: 'All Types' },
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'plot', label: 'Plot/Land' },
    { value: 'flat', label: 'Flat/Apartment' },
    { value: 'villa', label: 'Villa/House' }
  ]

  const categories = [
    { value: '', label: 'Buy/Rent' },
    { value: 'buy', label: 'Buy' },
    { value: 'rent', label: 'Rent' }
  ]

  const priceRanges = [
    { value: '', label: 'Min Price' },
    { value: '1000000', label: '₹10 Lakhs' },
    { value: '2500000', label: '₹25 Lakhs' },
    { value: '5000000', label: '₹50 Lakhs' },
    { value: '10000000', label: '₹1 Crore' },
    { value: '20000000', label: '₹2 Crores' },
    { value: '50000000', label: '₹5 Crores' }
  ]

  const maxPriceRanges = [
    { value: '', label: 'Max Price' },
    { value: '2500000', label: '₹25 Lakhs' },
    { value: '5000000', label: '₹50 Lakhs' },
    { value: '10000000', label: '₹1 Crore' },
    { value: '20000000', label: '₹2 Crores' },
    { value: '50000000', label: '₹5 Crores' },
    { value: '100000000', label: '₹10 Crores' }
  ]

  const handleInputChange = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value
    })
  }

  const handleSearch = (e) => {
    e.preventDefault()
    // Update URL with search parameters
    const params = new URLSearchParams()
    Object.entries(searchData).forEach(([key, value]) => {
      if (value) params.append(key, value)
    })
    
    window.location.href = `/properties?${params.toString()}`
  }

  const popularLocations = [
    'Gurgaon', 'Noida', 'Delhi', 'Mumbai', 'Bangalore', 'Pune', 'Hyderabad', 'Chennai'
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Property
          </h2>
          <p className="text-xl text-gray-600">
            Search from thousands of verified properties across major cities
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Location Search */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Location
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="location"
                    value={searchData.location}
                    onChange={handleInputChange}
                    placeholder="Enter area, city, or locality..."
                    className="input-field pl-10"
                  />
                  <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Home className="w-4 h-4 inline mr-1" />
                  Property Type
                </label>
                <select
                  name="propertyType"
                  value={searchData.propertyType}
                  onChange={handleInputChange}
                  className="input-field"
                >
                  {propertyTypes.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Filter className="w-4 h-4 inline mr-1" />
                  Category
                </label>
                <select
                  name="category"
                  value={searchData.category}
                  onChange={handleInputChange}
                  className="input-field"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <DollarSign className="w-4 h-4 inline mr-1" />
                  Budget
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <select
                    name="minPrice"
                    value={searchData.minPrice}
                    onChange={handleInputChange}
                    className="input-field text-sm"
                  >
                    {priceRanges.map(range => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                  <select
                    name="maxPrice"
                    value={searchData.maxPrice}
                    onChange={handleInputChange}
                    className="input-field text-sm"
                  >
                    {maxPriceRanges.map(range => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="btn-primary px-12 py-4 text-lg"
              >
                <span className="flex items-center space-x-2">
                  <Search className="w-5 h-5" />
                  <span>Search Properties</span>
                </span>
              </button>
            </div>
          </form>

          {/* Popular Locations */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-3">Popular Searches:</p>
            <div className="flex flex-wrap gap-2">
              {popularLocations.map((location) => (
                <button
                  key={location}
                  onClick={() => setSearchData({ ...searchData, location })}
                  className="px-3 py-1 bg-gray-100 hover:bg-primary-100 hover:text-primary-700 rounded-full text-sm font-medium transition-colors duration-200"
                >
                  {location}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">1000+</div>
            <div className="text-gray-600">Active Properties</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">20+</div>
            <div className="text-gray-600">Cities Covered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-gray-600">Verified Listings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PropertySearch
