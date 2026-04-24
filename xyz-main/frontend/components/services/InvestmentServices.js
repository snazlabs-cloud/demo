import { TrendingUp, Target, Shield, Award, Phone, MessageCircle, Calculator } from 'lucide-react'

const InvestmentServices = () => {
  const services = [
    {
      icon: Target,
      title: 'Investment Analysis',
      description: 'Comprehensive analysis of property investment opportunities',
      features: ['ROI Calculations', 'Market Trends', 'Risk Assessment', 'Growth Potential']
    },
    {
      icon: Shield,
      title: 'Portfolio Management',
      description: 'Diversified property portfolio management for maximum returns',
      features: ['Asset Allocation', 'Risk Management', 'Performance Tracking', 'Rebalancing']
    },
    {
      icon: Award,
      title: 'NRI Investment',
      description: 'Specialized investment services for Non-Resident Indians',
      features: ['NRI Legal Compliance', 'Repatriation Support', 'Tax Planning', 'Remote Management']
    }
  ]

  const investmentStats = [
    { value: '15-20%', label: 'Average ROI' },
    { value: '500+', label: 'Investment Properties' },
    { value: '₹1000Cr+', label: 'Portfolio Value' },
    { value: '98%', label: 'Client Satisfaction' }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Investment Consulting</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Smart property investment guidance with ROI focus - Build wealth through real estate
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Investment Stats */}
        <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Investment Performance</h3>
            <p className="text-xl text-gray-100">
              Proven track record of delivering excellent returns
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {investmentStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Calculator */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">ROI Calculator</h3>
            <p className="text-gray-600">
              Estimate your potential returns on property investment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Investment Amount</label>
              <input
                type="text"
                placeholder="₹50,00,000"
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Expected Annual Return</label>
              <input
                type="text"
                placeholder="15%"
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Investment Period</label>
              <select className="input-field">
                <option>5 Years</option>
                <option>10 Years</option>
                <option>15 Years</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
              <select className="input-field">
                <option>Residential</option>
                <option>Commercial</option>
                <option>Mixed</option>
              </select>
            </div>
          </div>

          <div className="text-center">
            <button className="btn-primary flex items-center space-x-2 mx-auto">
              <Calculator className="w-5 h-5" />
              <span>Calculate Returns</span>
            </button>
          </div>
        </div>

        {/* Why Choose Our Investment Services */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Investment Services?</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <TrendingUp className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Expert Market Analysis</h4>
                  <p className="text-gray-600">Deep understanding of market trends and growth patterns</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Risk Management</h4>
                  <p className="text-gray-600">Comprehensive risk assessment and mitigation strategies</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Target className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Customized Solutions</h4>
                  <p className="text-gray-600">Tailored investment strategies based on your goals</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-xl p-8">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Start Your Investment Journey</h4>
            <p className="text-gray-700 mb-6">
              Let our investment experts help you build wealth through smart property investments
            </p>
            <div className="space-y-3">
              <a
                href="tel:+919876543210"
                className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                <span>Call Investment Expert</span>
              </a>
              <a
                href="https://wa.me/+919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InvestmentServices
