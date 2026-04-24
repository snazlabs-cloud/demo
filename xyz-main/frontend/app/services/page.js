import ServicesHero from '../../components/services/ServicesHero'
import ResidentialServices from '../../components/services/ResidentialServices'
import CommercialServices from '../../components/services/CommercialServices'
import InvestmentServices from '../../components/services/InvestmentServices'
import DocumentationServices from '../../components/services/DocumentationServices'
import ProcessOverview from '../../components/services/ProcessOverview'
import ServiceCTA from '../../components/services/ServiceCTA'

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ResidentialServices />
      <CommercialServices />
      <InvestmentServices />
      <DocumentationServices />
      <ProcessOverview />
      <ServiceCTA />
    </main>
  )
}
