'use client'
import { useState } from 'react'
import { Star, ExternalLink, Quote } from 'lucide-react'

const GoogleReviews = () => {
  const [showAllReviews, setShowAllReviews] = useState(false)

  const googleRating = {
    rating: 4.8,
    totalReviews: 347,
    fiveStar: 245,
    fourStar: 72,
    threeStar: 20,
    twoStar: 8,
    oneStar: 2
  }

  const reviews = [
    {
      id: 1,
      name: 'Rahul Sharma',
      rating: 5,
      date: '2 weeks ago',
      content: 'Excellent service! Found my dream home through Premium Estate. The team was very professional and helped with all documentation. Highly recommend!',
      helpful: 23
    },
    {
      id: 2,
      name: 'Priya Nair',
      rating: 5,
      date: '1 month ago',
      content: 'As an NRI, I was worried about property investment. Premium Estate made everything so easy. Great communication and transparent process.',
      helpful: 18
    },
    {
      id: 3,
      name: 'Amit Verma',
      rating: 4,
      date: '1 month ago',
      content: 'Good experience overall. Found a commercial property for my business. Team was knowledgeable about market rates and locations.',
      helpful: 15
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      rating: 5,
      date: '2 months ago',
      content: 'Sold my property through Premium Estate. Got the best price in the market. Team handled everything professionally.',
      helpful: 31
    },
    {
      id: 5,
      name: 'Vikram Singh',
      rating: 5,
      date: '3 months ago',
      content: 'Very satisfied with their service. Helped me find a luxury apartment within my budget. Great negotiation skills!',
      helpful: 27
    }
  ]

  const renderStars = (rating, size = 'normal') => {
    const starSize = size === 'large' ? 'w-6 h-6' : 'w-5 h-5'
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`${starSize} ${
          i < rating ? 'fill-accent-400 text-accent-400' : 'text-gray-300'
        }`}
      />
    ))
  }

  const ratingDistribution = [
    { stars: 5, count: googleRating.fiveStar, percentage: 71 },
    { stars: 4, count: googleRating.fourStar, percentage: 21 },
    { stars: 3, count: googleRating.threeStar, percentage: 6 },
    { stars: 2, count: googleRating.twoStar, percentage: 2 },
    { stars: 1, count: googleRating.oneStar, percentage: 1 }
  ]

  const displayReviews = showAllReviews ? reviews : reviews.slice(0, 3)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Google Reviews & Ratings
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real reviews from verified clients on Google
          </p>
        </div>

        {/* Rating Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Overall Rating */}
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="text-6xl font-bold text-gray-900">{googleRating.rating}</div>
                <div className="flex items-center justify-center space-x-1 mt-2">
                  {renderStars(Math.round(googleRating.rating), 'large')}
                </div>
              </div>
              <p className="text-gray-600 text-lg mb-4">
                Based on {googleRating.totalReviews} reviews
              </p>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <span className="font-semibold text-gray-700">Google Rating</span>
              </div>
            </div>

            {/* Right Side - Rating Distribution */}
            <div className="space-y-3">
              {ratingDistribution.map((item) => (
                <div key={item.stars} className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1 w-20">
                    {renderStars(item.stars)}
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-200 rounded-full h-2 mb-1">
                      <div
                        className="bg-accent-400 h-2 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-sm text-gray-600 w-12 text-right">
                    {item.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayReviews.map((review) => (
              <div key={review.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Review Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="font-bold text-gray-600">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{review.name}</h4>
                      <div className="flex items-center space-x-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>

                {/* Review Content */}
                <div className="mb-4">
                  <p className="text-gray-700 line-clamp-3">
                    {review.content}
                  </p>
                </div>

                {/* Review Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <Quote className="w-4 h-4" />
                    <span>{review.helpful} helpful</span>
                  </div>
                  <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Show More/Less Button */}
          {reviews.length > 3 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllReviews(!showAllReviews)}
                className="btn-outline"
              >
                {showAllReviews ? 'Show Less Reviews' : 'Show All Reviews'}
              </button>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 text-white text-center">
          <Quote className="w-16 h-16 mx-auto mb-6 text-accent-400" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Experience Our Premium Service
          </h3>
          <p className="text-xl text-gray-100 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied clients who found their dream properties with us
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://www.google.com/search?q=Premium+Real+Estate+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <ExternalLink className="w-5 h-5" />
              <span>View All Google Reviews</span>
            </a>
            <a
              href="/contact"
              className="bg-accent-500 hover:bg-accent-600 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Write a Review
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-400 mb-2">4.8/5</div>
              <div className="text-gray-200">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-400 mb-2">347+</div>
              <div className="text-gray-200">Total Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-400 mb-2">98%</div>
              <div className="text-gray-200">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-400 mb-2">24/7</div>
              <div className="text-gray-200">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GoogleReviews
