import { Target, Eye, Heart, Shield, Award, Users } from 'lucide-react'

const MissionVision = () => {
  const missionVision = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To make property buying and selling a transparent, hassle-free, and rewarding experience for every Indian by combining technology, expertise, and personalized service.',
      color: 'from-primary-600 to-primary-700'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To become India\'s most trusted real estate platform, setting new standards for transparency, customer satisfaction, and innovation in the property sector.',
      color: 'from-accent-500 to-accent-600'
    }
  ]

  const coreValues = [
    {
      icon: Shield,
      title: 'Transparency',
      description: 'Complete transparency in all dealings, pricing, and documentation'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honest and ethical practices in every client interaction'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Putting client needs and satisfaction above everything else'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Continuous improvement and pursuit of perfection in service'
    }
  ]

  const commitments = [
    {
      title: 'Quality Service',
      description: 'Premium service standards with attention to every detail',
      icon: '⭐'
    },
    {
      title: 'Fair Pricing',
      description: 'Competitive and transparent pricing with no hidden costs',
      icon: '💰'
    },
    {
      title: 'Legal Compliance',
      description: '100% legal compliance and documentation support',
      icon: '📋'
    },
    {
      title: 'Customer Support',
      description: '24/7 support and assistance throughout your journey',
      icon: '🤝'
    },
    {
      title: 'Market Expertise',
      description: 'Deep market knowledge and expert guidance',
      icon: '📊'
    },
    {
      title: 'Innovation',
      description: 'Modern technology and innovative solutions',
      icon: '💡'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mission & Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our guiding principles and commitment to transforming real estate experience
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {missionVision.map((item, index) => (
            <div key={index} className={`bg-gradient-to-r ${item.color} rounded-2xl p-8 text-white`}>
              <div className="w-16 h-16 bg-white/20 backdrop-blur-custom rounded-full flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">{item.title}</h3>
              <p className="text-lg text-white/90 leading-relaxed text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Commitments */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Commitments</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commitments.map((commitment, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-300 transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl mb-2">{commitment.icon}</span>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{commitment.title}</h4>
                    <p className="text-gray-600 text-sm">{commitment.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Promise Section */}
        <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Promise to You</h3>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
              At Premium Estate, we promise to be your trusted partner in your real estate journey. 
              We combine our expertise, technology, and commitment to deliver exceptional service that exceeds your expectations.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-custom rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold mb-2">Trust & Security</h4>
                <p className="text-gray-200">
                  Your trust is our most valuable asset
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-custom rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold mb-2">Personal Care</h4>
                <p className="text-gray-200">
                  Every client is treated like family
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-custom rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold mb-2">Excellence</h4>
                <p className="text-gray-200">
                  We strive for perfection in everything
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-custom rounded-xl p-6 border border-white/20">
              <h4 className="text-xl font-bold mb-4">Join Our Mission</h4>
              <p className="text-gray-200 mb-6">
                Experience the Premium Estate difference and let us help you find your perfect property with transparency, trust, and excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Start Your Journey
                </a>
                <a
                  href="/properties"
                  className="bg-accent-500 hover:bg-accent-600 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Browse Properties
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision
