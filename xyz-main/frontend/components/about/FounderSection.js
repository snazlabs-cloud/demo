import { Phone, MessageCircle, Mail, Award, Users, Building } from 'lucide-react'

const FounderSection = () => {
  const founderInfo = {
    name: 'Rajesh Kumar',
    title: 'Founder & CEO',
    experience: '15+ Years',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
    education: ['MBA - IIM Ahmedabad', 'B.Tech - IIT Delhi'],
    certifications: ['RERA Certified', 'Real Estate License', 'Property Law Expert']
  }

  const expertise = [
    { icon: Building, title: 'Property Valuation', description: 'Expert in market analysis and property pricing' },
    { icon: Users, title: 'Client Relations', description: 'Building lasting relationships with clients' },
    { icon: Award, title: 'Legal Expertise', description: 'Deep knowledge of property laws and regulations' }
  ]

  const achievements = [
    'Successfully closed 1000+ property deals',
    'Built network of 500+ verified properties',
    'Trained 50+ real estate professionals',
    'Recognized as Top Real Estate Consultant 2023'
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Founder Image and Info */}
          <div className="space-y-6">
            <div className="relative">
              <img
                src={founderInfo.image}
                alt={founderInfo.name}
                className="w-full rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold">{founderInfo.experience}</div>
                <div className="text-sm">Experience</div>
              </div>
            </div>

            {/* Contact Options */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Connect with Founder</h3>
              <div className="space-y-3">
                <a
                  href="tel:+919876543210"
                  className="flex items-center space-x-3 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-lg transition-colors duration-200"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">Direct Call</span>
                </a>
                <a
                  href="https://wa.me/+919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg transition-colors duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-medium">WhatsApp</span>
                </a>
                <a
                  href="mailto:founder@premiumestate.com"
                  className="flex items-center space-x-3 bg-accent-500 hover:bg-accent-600 text-white p-3 rounded-lg transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right - Founder Details */}
          <div className="space-y-8">
            {/* Founder Bio */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Founder
              </h2>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary-600 mb-2">{founderInfo.name}</h3>
                <p className="text-lg text-gray-600">{founderInfo.title}</p>
              </div>
              
              <div className="prose prose-lg text-gray-700">
                <p>
                  {founderInfo.name} is a visionary leader in the real estate industry with over 15 years of experience 
                  in property consulting and management. His journey began with a simple mission: to make property buying and 
                  selling a transparent and hassle-free experience for every Indian.
                </p>
                <p>
                  After completing his MBA from IIM Ahmedabad and B.Tech from IIT Delhi, he identified the gaps in the 
                  traditional real estate sector and founded Premium Estate in 2009. His technical background combined with 
                  business acumen has helped revolutionize how people approach property transactions.
                </p>
                <p>
                  Under his leadership, Premium Estate has grown from a small startup to one of the most trusted names 
                  in Indian real estate, serving over 5000 satisfied clients across 20+ cities.
                </p>
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Education & Certifications</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-700 mb-3">Education</h5>
                  <ul className="space-y-2">
                    {founderInfo.education.map((edu, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                        <span className="text-gray-600">{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700 mb-3">Certifications</h5>
                  <ul className="space-y-2">
                    {founderInfo.certifications.map((cert, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                        <span className="text-gray-600">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Expertise Areas */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">Areas of Expertise</h4>
              <div className="grid gap-4">
                {expertise.map((area, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-gray-50 rounded-lg p-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <area.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">{area.title}</h5>
                      <p className="text-gray-600 text-sm">{area.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Achievements */}
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-100">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Key Achievements</h4>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-accent-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="bg-primary-600 text-white rounded-xl p-6">
              <h4 className="text-lg font-bold mb-3">Founder's Message</h4>
              <p className="mb-4">
                "At Premium Estate, we don't just sell properties; we build relationships and dreams. Every client is 
                family, and every transaction is a promise of trust and excellence. Our commitment is to make your 
                real estate journey smooth, transparent, and rewarding."
              </p>
              <p className="text-accent-200">
                - {founderInfo.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FounderSection
