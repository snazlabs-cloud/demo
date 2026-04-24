'use client'
import { useState, useEffect } from 'react'
import PropertySearch from '../../components/properties/PropertySearch'
import PropertyList from '../../components/properties/PropertyList'

export default function PropertiesPage() {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    type: '',
    category: '',
    minPrice: '',
    maxPrice: '',
    location: '',
    featured: false
  })
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: 0,
    pages: 0
  })

  useEffect(() => {
    fetchProperties()
  }, [filters, pagination.page])

  const fetchProperties = async () => {
    try {
      setLoading(true)
      // Mock data for demo
      const mockProperties = [
        {
          id: 1,
          title: 'Luxury 3BHK Apartment in Gurgaon',
          description: 'Premium 3BHK apartment with modern amenities, excellent connectivity, and great neighborhood',
          price: 15000000,
          category: 'rent',
          type: 'residential',
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
          type: 'residential',
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
          featured: false,
          contactInfo: {
            phone: '+919876543210',
            whatsapp: '+919876543210'
          }
        }
      ]

      setProperties(mockProperties)
      setPagination(prev => ({
        ...prev,
        total: mockProperties.length,
        pages: Math.ceil(mockProperties.length / prev.limit)
      }))
    } catch (error) {
      console.error('Error fetching properties:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)
    setPagination(prev => ({ ...prev, page: 1 }))
  }

  const handlePageChange = (page) => {
    setPagination(prev => ({ ...prev, page }))
  }

  return (
    <main>
      <PropertySearch />
      <div className="container-custom py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <PropertyList
              properties={properties}
              loading={loading}
              pagination={pagination}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
