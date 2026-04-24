import { Users, MapPin, Phone, Mail, MessageCircle, Briefcase, Award, Star } from 'lucide-react'

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      experience: '15+ Years',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
      expertise: ['Property Valuation', 'Market Analysis', 'Legal Compliance'],
      contact: { phone: '+919876543210', email: 'rajesh@premiumestate.com' }
    },
    {
      name: 'Priya Sharma',
      role: 'Senior Property Consultant',
      experience: '10+ Years',
      image: 'https://images.unsplash.com/photo-1494790108757-9c397625a663?w=200',
      expertise: ['Residential Properties', 'Client Relations', 'Negotiation'],
      contact: { phone: '+919876543211', email: 'priya@premiumestate.com' }
    },
    {
      name: 'Amit Verma',
      role: 'Commercial Property Expert',
      experience: '8+ Years',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
      expertise: ['Commercial Real Estate', 'Investment Properties', 'ROI Analysis'],
      contact: { phone: '+919876543212', email: 'amit@premiumestate.com' }
    },
    {
      name: 'Sneha Reddy',
      role: 'Legal & Documentation Head',
      experience: '12+ Years',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
      expertise: ['Property Law', 'Documentation', 'RERA Compliance'],
      contact: { phone: '+919876543213', email: 'sneha@premiumestate.com' }
    }
  ]

  const departments = [
    {
      name: 'Sales & Marketing',
      head: 'Priya Sharma',
      members: 15,
      description: 'Expert team for property sales and marketing'
    },
    {
      name: 'Legal & Documentation',
      head: 'Sneha Reddy',
      members: 8,
      description: 'Complete legal support and documentation'
    },
    {
      name: 'Property Management',
      head: 'Amit Verma',
      members: 12,
      description: 'Commercial and residential property management'
    },
    {
      name: 'Customer Support',
      head: 'Support Team',
      members: 20,
      description: '24/7 customer assistance and support'
    }
  ]

  const achievements = [
    { icon: '🏆', title: 'Best Team 2023', description: 'Recognized as top real estate team' },
    { icon: '⭐', title: '100% Client Satisfaction', description: 'Consistent 5-star ratings' },
    { icon: '🎯', title: 'Expert Team', description: 'Highly skilled professionals' },
    { icon: '🤝', title: 'Team Collaboration', description: 'Seamless teamwork' }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our dedicated team of professionals committed to your real estate success
          </p>
        </div>

        {/* Team Members */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Leadership Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Member Image */}
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {member.experience}
                  </div>
                </div>

                {/* Member Details */}
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                  
                  {/* Expertise */}
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-gray-700 mb-2">Expertise:</h5>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Options */}
                  <div className="space-y-2">
                    <a
                      href={`tel:${member.contact.phone}`}
                      className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-3 py-2 rounded-lg text-sm transition-colors duration-200"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call</span>
                    </a>
                    <div className="flex space-x-2">
                      <a
                        href={`mailto:${member.contact.email}`}
                        className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm transition-colors duration-200"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Email</span>
                      </a>
                      <a
                        href={`https://wa.me/${member.contact.phone.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-sm transition-colors duration-200"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Departments */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Departments</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-300 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{dept.name}</h4>
                    <p className="text-sm text-gray-600">{dept.head}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">{dept.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary-600">
                    {dept.members} Members
                  </span>
                  <Users className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Achievements */}
        <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Team Achievements</h3>
            <p className="text-xl text-gray-100">
              Recognition and awards that reflect our team's excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <h4 className="text-lg font-bold mb-2">{achievement.title}</h4>
                <p className="text-gray-200 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>

          {/* Join Team CTA */}
          <div className="bg-white/10 backdrop-blur-custom rounded-xl p-6 border border-white/20">
            <h4 className="text-xl font-bold mb-4 text-center">Join Our Growing Team</h4>
            <p className="text-gray-200 mb-6 text-center">
              We're always looking for talented professionals to join our mission of transforming real estate experience
            </p>
            <div className="text-center">
              <a
                href="/contact"
                className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Explore Career Opportunities
              </a>
            </div>
          </div>
        </div>

        {/* Contact Team */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect With Our Team</h3>
          <p className="text-gray-600 mb-6">
            Get expert guidance from our experienced professionals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="btn-primary flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Team</span>
            </a>
            <a
              href="https://wa.me/+919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Team</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection
