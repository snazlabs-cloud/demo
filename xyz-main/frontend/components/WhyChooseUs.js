import { CheckCircle, Shield, TrendingUp, Users, Award, Clock } from 'lucide-react'

const WhyChooseUs = () => {
  const features = [
    {
      icon: CheckCircle,
      title: 'Verified Properties',
      description: 'All properties are thoroughly verified with complete legal documentation and clear titles',
      highlight: '100% Authentic'
    },
    {
      icon: Shield,
      title: 'Expert Guidance',
      description: '15+ years of experience in real estate with deep market knowledge',
      highlight: 'Professional Service'
    },
    {
      icon: TrendingUp,
      title: 'Best Prices',
      description: 'Negotiate the best deals with our expert market analysis and pricing insights',
      highlight: 'Value for Money'
    },
    {
      icon: Users,
      title: '5000+ Happy Clients',
      description: 'Trusted by thousands of satisfied customers across India',
      highlight: 'Proven Track Record'
    }
  ]

  const trustBadges = [
    { name: 'RERA Certified', icon: '🏢' },
    { name: 'ISO Certified', icon: '🏆' },
    { name: 'Government Approved', icon: '🏛️' },
    { name: 'Award Winning', icon: '⭐' }
  ]

  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '5000+', label: 'Happy Clients' },
    { value: '1000+', label: 'Properties Sold' },
    { value: '98%', label: 'Satisfaction Rate' }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Premium Estate?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine expertise, trust, and technology to deliver exceptional real estate services
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <span className="inline-block bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-semibold">
                {feature.highlight}
              </span>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Certifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{badge.icon}</div>
                <p className="font-semibold text-gray-900">{badge.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Achievements</h3>
            <p className="text-xl text-gray-100">
              Numbers that speak for our commitment and excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">{stat.value}</div>
                <div className="text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <h4 className="text-xl font-bold mb-4">Ready to Find Your Dream Property?</h4>
            <p className="text-gray-200 mb-6">
              Let our experts guide you through every step of your real estate journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Get Free Consultation
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
      </div>
    </section>
  )
}

export default WhyChooseUs
