import { FeaturesSection } from '@/components/FeaturesSection'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { IntroSection } from '@/components/IntroSection'
import { ProfileStatsSection } from '@/components/ProfileStatsSection'

export default function Home() {
  return (
    <div className="bg-[#0c0c0c] overflow-hidden w-full relative">
      {/* Background decorative elements */}
      <div className="absolute top-[-888px] left-[-223px] w-[1410px] h-[1410px] bg-[#5a2afbb2] rounded-[705.06px] blur-[312.45px] opacity-70 pointer-events-none" />

      <div className="absolute top-[-335px] left-[526px] w-[1448px] h-[1232px] flex opacity-25 pointer-events-none">
        <div className="mt-[359.3px] w-[1410.13px] h-[513.47px] ml-[19.1px] bg-[#dffe0f] rounded-[705.06px/256.73px] rotate-[-35.18deg] blur-[115.25px] opacity-[0.42]" />
      </div>

      <div className="absolute top-[145px] left-[-1357px] w-[421px] h-[421px] bg-[#420efe] pointer-events-none" />
      <div className="absolute top-[1071px] left-[-1357px] w-[421px] h-[421px] bg-[#1d1e27] pointer-events-none" />
      <div className="absolute top-[621px] left-[-1357px] w-[421px] h-[421px] bg-[#141419] pointer-events-none" />

      {/* Header Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="relative">
        <HeroSection />
        <IntroSection />
        <FeaturesSection />
        <ProfileStatsSection />
        <Footer />
      </main>
    </div>
  )
}
