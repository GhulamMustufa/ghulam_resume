import { AchievementsSection } from '@/sections/AchievementsSection'
import { SkillsSection } from '@/sections/SkillsSection'
import { ExperienceSection } from '@/sections/ExperienceSection'
import { EducationSection } from '@/sections/EducationSection'

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--color-text-main)' }}>About Me</h1>
        <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
          I am a Senior Software Engineer specializing in frontend and mobile development, with a strong focus on AI integration and scalable SaaS architectures. Here is a summary of my background, skills, and experience.
        </p>
      </div>
      
      <div className="flex flex-col gap-12">
        <AchievementsSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
      </div>
    </div>
  )
}
