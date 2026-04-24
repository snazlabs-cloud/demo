'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { User, Phone, Mail, MapPin, DollarSign, Send, CheckCircle } from 'lucide-react'
import toast from 'react-hot-toast'

const LeadCaptureForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast.success('Thank you! Our expert will contact you within 24 hours.')
      reset()
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = [
    { value: 'buy', label: 'Buy Property' },
    { value: 'sell', label: 'Sell Property' },
    { value: 'rent', label: 'Rent Property' },
    { value: 'invest', label: 'Investment' },
    { value: 'consultation', label: 'Free Consultation' }
  ]

  const budgets = [
    { value: '', label: 'Select Budget' },
    { value: '2500000', label: '₹25 Lakhs' },
    { value: '5000000', label: '₹50 Lakhs' },
    { value: '10000000', label: '₹1 Crore' },
    { value: '20000000', label: '₹2 Crores' },
    { value: '50000000', label: '₹5 Crores' },
    { value: '100000000', label: '₹10+ Crores' }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get Expert Property Guidance
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Fill in your details and our property experts will help you find the perfect property that matches your requirements and budget.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-accent-500 flex-shrink-0" />
                <span className="text-gray-700">Free consultation with property experts</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-accent-500 flex-shrink-0" />
                <span className="text-gray-700">Access to exclusive property listings</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-accent-500 flex-shrink-0" />
                <span className="text-gray-700">Best price negotiation support</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-accent-500 flex-shrink-0" />
                <span className="text-gray-700">Complete documentation assistance</span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
              <h4 className="font-bold text-gray-900 mb-4">Why Trust Us?</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🏆</span>
                  <span className="text-gray-700">15+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">👥</span>
                  <span className="text-gray-700">5000+ Happy Clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🏢</span>
                  <span className="text-gray-700">RERA Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">⭐</span>
                  <span className="text-gray-700">4.8/5 Rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Quick Enquiry Form
            </h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name and Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-1" />
                    Full Name *
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    placeholder="Your full name"
                    className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Phone Number *
                  </label>
                  <input
                    {...register('phone', { 
                      required: 'Phone is required',
                      pattern: {
                        value: /^[6-9]\d{9,15}$/,
                        message: 'Please enter a valid phone number'
                      }
                    })}
                    type="tel"
                    placeholder="Your phone number"
                    className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-1" />
                  Email Address *
                </label>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Please enter a valid email'
                    }
                  })}
                  type="email"
                  placeholder="your.email@example.com"
                  className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Service and Budget */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type *
                  </label>
                  <select
                    {...register('service', { required: 'Please select a service' })}
                    className={`input-field ${errors.service ? 'border-red-500' : ''}`}
                  >
                    <option value="">Select Service</option>
                    {services.map(service => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <DollarSign className="w-4 h-4 inline mr-1" />
                    Budget Range
                  </label>
                  <select
                    {...register('budget')}
                    className="input-field"
                  >
                    {budgets.map(budget => (
                      <option key={budget.value} value={budget.value}>
                        {budget.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Preferred Location
                </label>
                <input
                  {...register('location')}
                  type="text"
                  placeholder="City, Area, or Locality"
                  className="input-field"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="input-field resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Get Free Consultation</span>
                  </>
                )}
              </button>
            </form>

            {/* Privacy Note */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-sm text-blue-800">
                <strong>Privacy Guaranteed:</strong> Your information is secure and will never be shared with third parties. 
                We respect your privacy and will only contact you regarding your property enquiry.
              </p>
            </div>

            {/* Quick Contact */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4">Prefer to talk directly?</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">Call Now</span>
                </a>
                <a
                  href="https://wa.me/+919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <Send className="w-4 h-4" />
                  <span className="font-medium">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeadCaptureForm
