export default function ContactHero() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-500 text-white">
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Our Property Experts</h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
          Talk to us for direct buyer assistance and find your perfect property
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+919876543210"
            className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
          >
            Call Now: +91 98765 43210
          </a>
          <a
            href="https://wa.me/+919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent-500 hover:bg-accent-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}
