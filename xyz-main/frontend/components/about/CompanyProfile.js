import { Award, Users, Building, TrendingUp, CheckCircle } from 'lucide-react'

const CompanyProfile = () => {
  const stats = [
    { icon: Users, value: '5000+', label: 'Happy Clients' },
    { icon: Building, value: '1000+', label: 'Properties Sold' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: TrendingUp, value: '98%', label: 'Satisfaction Rate' }
  ]

  const achievements = [
    'RERA Certified Real Estate Agency',
    'ISO 9001:2015 Certified',
    'Best Real Estate Agency 2023',
    '5000+ Successful Transactions',
    '20+ Cities Coverage',
    '24/7 Customer Support'
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                About Premium Estate
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Your trusted partner in finding the perfect property for over 15 years
              </p>
            </div>

            <div className="prose prose-lg text-gray-700">
              <p>
                Founded in 2009, Premium Estate has grown from a small local agency to one of the most trusted real estate companies in India. 
                Our journey has been defined by our commitment to excellence, transparency, and client satisfaction.
              </p>
              <p>
                We specialize in residential and commercial properties across major Indian cities, helping thousands of families and businesses 
                find their ideal spaces. Our team of experienced professionals understands the nuances of the real estate market and 
                provides personalized solutions for each client.
              </p>
              <p>
                At Premium Estate, we believe that buying or selling property should be a smooth, transparent, and rewarding experience. 
                Our customer-centric approach, combined with our extensive market knowledge, ensures that every transaction is handled with 
                the utmost care and professionalism.
              </p>
            </div>

            {/* Core Values */}
            <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
              <h3 className="text-xl font-bold text-primary-900 mb-4">Our Core Values</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span className="text-primary-800">Transparency</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span className="text-primary-800">Integrity</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span className="text-primary-800">Excellence</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span className="text-primary-800">Customer First</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-gray-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="bg-accent-50 rounded-xl p-6 border border-accent-100">
              <h3 className="text-xl font-bold text-accent-900 mb-4">Our Achievements</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                    <span className="text-accent-800">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-4">Join Our Success Story</h3>
              <p className="mb-6">
                Experience the Premium Estate difference and let us help you find your perfect property
              </p>
              <a
                href="/contact"
                className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyProfile
