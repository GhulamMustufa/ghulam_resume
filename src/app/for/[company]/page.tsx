import { IntroVideoSection } from '@/sections/IntroVideoSection'
import { AchievementsSection } from '@/sections/AchievementsSection'
import { ProjectsSection } from '@/sections/ProjectsSection'
import { ServicesSection } from '@/sections/ServicesSection'
import { SkillsSection } from '@/sections/SkillsSection'
import { ExperienceSection } from '@/sections/ExperienceSection'
import { EducationSection } from '@/sections/EducationSection'
import { TestimonialsSection } from '@/sections/TestimonialsSection'
import { AIFocusSection } from '@/sections/AIFocusSection'
import { ContactSection } from '@/sections/ContactSection'
import { TrojanHeroSection } from '@/sections/TrojanHeroSection'

export default async function TrojanPage({ 
  params, 
  searchParams 
}: { 
  params: Promise<{ company: string }>, 
  searchParams: Promise<{ d?: string }> 
}) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  
  const companyName = resolvedParams.company;
  let decodedData = null;
  
  if (resolvedSearchParams.d) {
    try {
      const buffer = Buffer.from(resolvedSearchParams.d, 'base64');
      decodedData = JSON.parse(buffer.toString('utf8'));
    } catch (e) {
      console.error("Failed to decode Trojan payload:", e);
    }
  }
  
  return (
    <>
      <TrojanHeroSection urlCompany={companyName} data={decodedData} />
      <IntroVideoSection />
      <AchievementsSection />
      <ProjectsSection />
      <ServicesSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <TestimonialsSection />
      <AIFocusSection />
      <ContactSection />
    </>
  )
}
