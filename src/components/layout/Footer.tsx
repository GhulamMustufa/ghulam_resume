import { GitHubIcon, LinkedInIcon } from '@/components/ui/SocialIcons'

export function Footer() {
  return (
    <footer className="mt-4 border-t border-white/10 pb-10 pt-8 text-center">
      <p className="text-xs text-slate-500">
        © {new Date().getFullYear()} Ghulam Mustafa · Built with Next.js & TailwindCSS
      </p>
      <div className="mt-3 flex items-center justify-center gap-5">
        <a
          href="mailto:ghulammustafa.mf@gmail.com"
          className="text-xs text-slate-400 transition hover:text-white"
        >
          ghulammustafa.mf@gmail.com
        </a>
        <span className="h-3 w-px bg-white/15" aria-hidden="true" />
        <a
          href="https://github.com/GhulamMustufa"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          className="text-slate-400 transition hover:text-white"
        >
          <GitHubIcon size={14} />
        </a>
        <a
          href="https://www.linkedin.com/in/ghulam909"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          className="text-slate-400 transition hover:text-white"
        >
          <LinkedInIcon size={14} />
        </a>
      </div>
    </footer>
  )
}
