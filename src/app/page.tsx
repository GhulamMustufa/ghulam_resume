import { HeroSection } from '@/sections/HeroSection'
import { AchievementsSection } from '@/sections/AchievementsSection'
import { ProjectsSection } from '@/sections/ProjectsSection'
import { ServicesSection } from '@/sections/ServicesSection'
import { SkillsSection } from '@/sections/SkillsSection'
import { ExperienceSection } from '@/sections/ExperienceSection'
import { EducationSection } from '@/sections/EducationSection'
import { TestimonialsSection } from '@/sections/TestimonialsSection'
import { AIFocusSection } from '@/sections/AIFocusSection'
import { ContactSection } from '@/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
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
