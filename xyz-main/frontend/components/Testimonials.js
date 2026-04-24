'use client'
import { useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      type: 'First-time Homebuyer',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4?w=100',
      content: 'Premium Estate made my first home buying experience incredibly smooth. Their team guided me through every step, from property selection to documentation. I found my dream home within my budget!',
      location: 'Gurgaon'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      type: 'Property Investor',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108757-9c397625a663?w=100',
      content: 'As an NRI investor, I was worried about property management. Premium Estate handled everything perfectly - from finding the right property to managing tenants and maintenance. Excellent service!',
      location: 'Mumbai'
    },
    {
      id: 3,
      name: 'Amit Verma',
      type: 'Commercial Property Buyer',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      content: 'I needed a commercial space for my startup. Premium Estate understood my requirements perfectly and found me an ideal office location with great connectivity. Highly recommend their services!',
      location: 'Bangalore'
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      type: 'Home Seller',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
      content: 'Selling my property was made so easy by Premium Estate. They handled everything professionally - from valuation to finding the right buyer. Got the best market price!',
      location: 'Pune'
    }
  ]

  const additionalTestimonials = [
    {
      name: 'Vikram Singh',
      type: 'Luxury Home Buyer',
      rating: 5,
      content: 'Found my luxury villa through Premium Estate. Their attention to detail and understanding of premium properties is unmatched. The entire process was transparent and professional.',
      location: 'Hyderabad'
    },
    {
      name: 'Anjali Patel',
      type: 'First-time Investor',
      rating: 5,
      content: 'New to real estate investment, Premium Estate guided me perfectly. They helped me understand the market and make informed decisions. Great returns on my investments!',
      location: 'Chennai'
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'fill-accent-400 text-accent-400' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from real clients who found their perfect properties with us
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              
              <div className="flex-1 mx-8">
                <div className="text-center">
                  <Quote className="w-12 h-12 text-primary-600 mx-auto mb-6" />
                  
                  <div className="mb-8">
                    <p className="text-xl text-gray-700 leading-relaxed italic">
                      "{testimonials[currentTestimonial].content}"
                    </p>
                  </div>

                  <div className="flex items-center justify-center space-x-1 mb-4">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>

                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="text-left">
                      <h4 className="font-bold text-gray-900 text-lg">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-gray-600">
                        {testimonials[currentTestimonial].type}
                      </p>
                      <p className="text-sm text-primary-600">
                        📍 {testimonials[currentTestimonial].location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentTestimonial
                      ? 'bg-primary-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">More Success Stories</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-left">
                <div className="flex items-center space-x-1 mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.type}</p>
                    <p className="text-xs text-primary-600">📍 {testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Join Our Happy Family of Clients
          </h3>
          <p className="text-xl text-gray-100 mb-6">
            Experience the same premium service that our clients love
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Start Your Journey
            </a>
            <a
              href="/properties"
              className="bg-accent-500 hover:bg-accent-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Browse Properties
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
