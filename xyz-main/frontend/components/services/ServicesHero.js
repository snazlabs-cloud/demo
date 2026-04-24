export default function ServicesHero() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-500 text-white">
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Real Estate Services</h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
          Professional property solutions for buyers, sellers, and investors
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/properties"
            className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
          >
            Browse Properties
          </a>
          <a
            href="/contact"
            className="bg-accent-500 hover:bg-accent-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
          >
            Get Expert Help
          </a>
        </div>
      </div>
    </section>
  )
}
