import CompanyProfile from '../../components/about/CompanyProfile'
import FounderSection from '../../components/about/FounderSection'
import ExperienceSection from '../../components/about/ExperienceSection'
import MissionVision from '../../components/about/MissionVision'
import ClientTrust from '../../components/about/ClientTrust'
import TeamSection from '../../components/about/TeamSection'

export default function AboutPage() {
  return (
    <main>
      <CompanyProfile />
      <FounderSection />
      <ExperienceSection />
      <MissionVision />
      <ClientTrust />
      <TeamSection />
    </main>
  )
}
