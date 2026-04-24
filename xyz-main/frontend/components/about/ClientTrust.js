import { Shield, Award, Users, CheckCircle, Star, TrendingUp, Phone, MessageCircle } from 'lucide-react'

const ClientTrust = () => {
  const trustFactors = [
    {
      icon: Shield,
      title: '100% Verified Properties',
      description: 'All properties are legally verified with complete documentation',
      color: 'text-primary-600'
    },
    {
      icon: Award,
      title: 'RERA Certified',
      description: 'Fully compliant with Real Estate Regulatory Authority guidelines',
      color: 'text-accent-500'
    },
    {
      icon: Users,
      title: '5000+ Happy Clients',
      description: 'Trusted by thousands of satisfied customers across India',
      color: 'text-primary-600'
    },
    {
      icon: CheckCircle,
      title: 'Transparent Pricing',
      description: 'No hidden charges, complete clarity in all transactions',
      color: 'text-accent-500'
    }
  ]

  const testimonials = [
    {
      name: 'Rahul Sharma',
      type: 'First-time Homebuyer',
      rating: 5,
      content: 'Premium Estate made my first home buying experience incredibly smooth. Their team guided me through every step with complete transparency.',
      location: 'Gurgaon'
    },
    {
      name: 'Priya Nair',
      type: 'NRI Investor',
      rating: 5,
      content: 'As an NRI, I was worried about property investment. Premium Estate handled everything perfectly. Great communication and service.',
      location: 'Mumbai'
    },
    {
      name: 'Amit Verma',
      type: 'Commercial Property',
      rating: 5,
      content: 'Found the perfect office space for my startup. Professional service and great market knowledge. Highly recommended!',
      location: 'Bangalore'
    }
  ]

  const guarantees = [
    {
      title: 'Best Price Guarantee',
      description: 'We ensure you get the best market price for your property',
      icon: '💰'
    },
    {
      title: 'Legal Safety',
      description: 'Complete legal verification and documentation support',
      icon: '📋'
    },
    {
      title: 'Transparent Process',
      description: 'No hidden charges, complete clarity at every step',
      icon: '🔍'
    },
    {
      title: 'Post-Sale Support',
      description: 'Assistance even after the deal is completed',
      icon: '🤝'
    }
  ]

  const trustStats = [
    { value: '98%', label: 'Client Satisfaction' },
    { value: '15+', label: 'Years Experience' },
    { value: '1000+', label: 'Properties Sold' },
    { value: '24/7', label: 'Support Available' }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
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
            Why Clients Trust Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Building trust through transparency, expertise, and exceptional service
          </p>
        </div>

        {/* Trust Factors */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustFactors.map((factor, index) => (
            <div key={index} className="text-center space-y-4">
              <div className={`w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6`}>
                <factor.icon className={`w-8 h-8 ${factor.color}`} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{factor.title}</h3>
              <p className="text-gray-600 text-sm">{factor.description}</p>
            </div>
          ))}
        </div>

        {/* Client Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-1 mb-4">
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

        {/* Guarantees */}
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Our Guarantees
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center">
                <div className="text-3xl mb-4">{guarantee.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{guarantee.title}</h4>
                <p className="text-gray-600 text-sm">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Statistics */}
        <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Trust Built on Results
            </h3>
            <p className="text-xl text-gray-100">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {trustStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4">Experience Trusted Service</h4>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied clients who have found their perfect properties with our trusted and transparent service
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Consult Expert</span>
              </a>
              <a
                href="https://wa.me/+919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-500 hover:bg-accent-600 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-accent-400" />
                <span className="font-semibold">RERA Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-accent-400" />
                <span className="font-semibold">ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-6 h-6 text-accent-400" />
                <span className="font-semibold">15+ Years</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-accent-400" />
                <span className="font-semibold">5000+ Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientTrust
