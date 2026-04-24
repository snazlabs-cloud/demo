import { TrendingUp, Award, Building, Users, MapPin, Target, Shield, Clock } from 'lucide-react'

const ExperienceSection = () => {
  const experienceStats = [
    {
      icon: Building,
      value: '1000+',
      label: 'Properties Sold',
      description: 'Successfully completed property transactions'
    },
    {
      icon: Users,
      value: '5000+',
      label: 'Happy Clients',
      description: 'Families and businesses served'
    },
    {
      icon: MapPin,
      value: '20+',
      label: 'Cities Covered',
      description: 'Presence across major Indian cities'
    },
    {
      icon: Award,
      value: '15+',
      label: 'Years Experience',
      description: 'Industry expertise and knowledge'
    }
  ]

  const expertiseAreas = [
    {
      icon: Target,
      title: 'Market Analysis',
      description: 'Deep understanding of real estate market trends and pricing strategies',
      features: ['Real-time market data', 'Price trend analysis', 'Investment insights']
    },
    {
      icon: Shield,
      title: 'Legal Compliance',
      description: 'Complete legal documentation and regulatory compliance',
      features: ['RERA compliance', 'Title verification', 'Documentation support']
    },
    {
      icon: Building,
      title: 'Property Valuation',
      description: 'Accurate property assessment and valuation services',
      features: ['Expert valuation', 'Comparative analysis', 'ROI calculations']
    },
    {
      icon: Users,
      title: 'Client Management',
      description: 'Personalized service throughout the property journey',
      features: ['Dedicated consultants', 'Regular updates', 'Post-sale support']
    }
  ]

  const achievements = [
    { year: '2023', achievement: 'Best Real Estate Agency - North India' },
    { year: '2022', achievement: '1000+ Properties Sold Milestone' },
    { year: '2021', achievement: 'ISO 9001:2015 Certification' },
    { year: '2020', achievement: 'Expanded to 15+ Cities' },
    { year: '2019', achievement: '500+ Happy Clients Milestone' },
    { year: '2018', achievement: 'RERA Certification' }
  ]

  const marketPresence = [
    { city: 'Delhi NCR', properties: '300+', offices: '3' },
    { city: 'Mumbai', properties: '250+', offices: '2' },
    { city: 'Bangalore', properties: '200+', offices: '2' },
    { city: 'Pune', properties: '150+', offices: '1' },
    { city: 'Hyderabad', properties: '100+', offices: '1' },
    { city: 'Chennai', properties: '80+', offices: '1' }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Experience & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            15+ years of excellence in real estate with proven track record and market leadership
          </p>
        </div>

        {/* Experience Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {experienceStats.map((stat, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Expertise Areas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Areas of Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <area.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{area.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{area.description}</p>
                <ul className="space-y-1">
                  {area.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-accent-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Timeline */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Journey</h3>
            <div className="space-y-4">
              {achievements.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary-600">{item.year}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-medium">{item.achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Market Presence</h3>
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-100">
              <div className="space-y-4">
                {marketPresence.map((city, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900">{city.city}</h4>
                      <p className="text-sm text-gray-600">{city.properties} Properties</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-primary-600">{city.offices} Offices</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Why Trust Our Experience?</h3>
            <p className="text-xl text-gray-100">
              Our proven track record speaks for our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 text-accent-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold mb-2">15+ Years</h4>
              <p className="text-gray-200">
                Consistent service and growth in the real estate industry
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-accent-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold mb-2">5000+ Clients</h4>
              <p className="text-gray-200">
                Trusted by thousands of satisfied customers across India
              </p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-accent-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold mb-2">Award Winning</h4>
              <p className="text-gray-200">
                Recognized for excellence and innovation in real estate
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="/contact"
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Experience Our Expertise
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
