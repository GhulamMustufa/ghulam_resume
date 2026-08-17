import fs from 'fs';
import path from 'path';
import Link from 'next/link';

type Props = {
  params: Promise<{ domain: string }>
}

export async function generateMetadata({ params }: Props) {
  const { domain } = await params;
  return {
    title: `Technical Audit: ${domain} | Ghulam Mustafa`,
    description: `A custom Google PageSpeed performance audit for ${domain}.`,
  };
}

export default async function AuditPage({ params }: Props) {
  const { domain } = await params;
  
  // Read the JSON database dynamically on the server
  const dataPath = path.join(process.cwd(), 'src/data/audit_data.json');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let auditDb: any = {};
  
  try {
    const fileContents = fs.readFileSync(dataPath, 'utf8');
    auditDb = JSON.parse(fileContents);
  } catch (e) {
    console.error("Could not load audit data:", e);
  }
  
  const audit = auditDb[domain];
  
  if (!audit) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Audit Not Found</h1>
        <p className="text-[var(--color-text-secondary)] mb-8">We could not find a pre-generated audit for <span className="font-mono text-[var(--color-text-main)]">{domain}</span>.</p>
        <Link href="/" className="accent-button px-6 py-3 font-medium inline-block">
          Return to Portfolio
        </Link>
      </div>
    );
  }
  
  const score = audit.performance_score;
  let scoreColor = 'text-green-500';
  if (score < 50) scoreColor = 'text-red-500';
  else if (score < 90) scoreColor = 'text-yellow-500';

  return (
    <div className="pt-16 pb-16">
      {/* Main Content */}
      <div className="mb-12">
        <div 
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
          style={{ 
            background: 'var(--color-accent-blue-bg)', 
            border: '1px solid var(--color-accent-blue-border)',
            color: 'var(--color-accent-blue-text)'
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Private Audit Report
        </div>
        <h1 className="text-display mb-4" style={{ color: 'var(--color-text-main)' }}>
          Performance Audit for <span style={{ color: 'var(--color-accent-blue-text)' }}>{audit.company_name}</span>
        </h1>
        <p className="text-body-lg max-w-3xl mt-6" style={{ color: 'var(--color-text-secondary)' }}>
          We ran <span className="text-mono px-2 py-1 rounded-md" style={{ background: 'var(--color-bg-subtle)', color: 'var(--color-text-main)' }}>{audit.domain}</span> through Google&apos;s official PageSpeed Insights engine on a simulated mobile connection. Here are your Core Web Vitals.
        </p>
      </div>

      {/* Score Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="surface-card col-span-1 md:col-span-1 p-8 flex flex-col items-center justify-center text-center">
          <div className="text-caption mb-2" style={{ color: 'var(--color-text-secondary)' }}>Google Performance Score</div>
          <div className={`text-7xl font-bold ${scoreColor} tracking-tighter leading-none my-2`}>{score}</div>
          <div className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>/ 100</div>
        </div>
        
        <div className="surface-card col-span-1 md:col-span-2 p-8">
          <h3 className="text-section-title mb-6" style={{ color: 'var(--color-text-main)' }}>Core Web Vitals Breakdown</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-8">
            
            <div>
              <div className="text-sm mb-1" style={{ color: 'var(--color-text-secondary)' }}>Largest Contentful Paint (LCP)</div>
              <div className="text-2xl text-mono font-semibold" style={{ color: 'var(--color-text-main)' }}>{audit.metrics["LCP"]}</div>
              <div className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>Time for main content to load.</div>
            </div>
            
            <div>
              <div className="text-sm mb-1" style={{ color: 'var(--color-text-secondary)' }}>First Contentful Paint (FCP)</div>
              <div className="text-2xl text-mono font-semibold" style={{ color: 'var(--color-text-main)' }}>{audit.metrics["FCP"]}</div>
              <div className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>Time until first text/image appears.</div>
            </div>
            
            <div>
              <div className="text-sm mb-1" style={{ color: 'var(--color-text-secondary)' }}>Speed Index</div>
              <div className="text-2xl text-mono font-semibold" style={{ color: 'var(--color-text-main)' }}>{audit.metrics["Speed Index"]}</div>
              <div className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>How quickly contents are visually populated.</div>
            </div>
            
            <div>
              <div className="text-sm mb-1" style={{ color: 'var(--color-text-secondary)' }}>Total Blocking Time</div>
              <div className="text-2xl text-mono font-semibold" style={{ color: 'var(--color-text-main)' }}>{audit.metrics["Total Blocking Time"]}</div>
              <div className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>Time the page is blocked from user input.</div>
            </div>

          </div>
        </div>
      </div>

      {/* Warning / Pitch Section */}
      <div className="surface-card-inset p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" style={{ background: 'var(--color-radial)' }}></div>
        
        <h2 className="text-section-title mb-4" style={{ color: 'var(--color-text-main)' }}>What does this mean for your business?</h2>
        
        <div className="text-body-lg max-w-none mb-10 space-y-4" style={{ color: 'var(--color-text-secondary)' }}>
          <p>
            According to Google&apos;s official consumer data, <strong style={{ color: 'var(--color-text-main)' }}>53% of mobile site visits are abandoned</strong> if a page takes longer than 3 seconds to load. 
          </p>
          {score < 90 && (
            <p className="text-red-400 font-medium">
              With a score of {score}, {audit.company_name} is actively losing potential clients to faster competitors. 
              Google also penalizes slow websites by pushing them down in organic SEO rankings.
            </p>
          )}
          <p>
            As a Senior Full-Stack Engineer, I specialize in rebuilding digital infrastructure. I can refactor your frontend using Next.js and React to achieve a 95+ Google Performance Score, instantly increasing your conversion rates and organic traffic.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://cal.com/ghulam/15min" target="_blank" rel="noreferrer" className="accent-button inline-flex items-center justify-center gap-2 px-8 py-4 transition-all text-lg">
            Book a Free Strategy Call
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </div>
      
      <div className="mt-12 text-center text-caption opacity-70" style={{ color: 'var(--color-text-secondary)' }}>
        Report generated on {audit.scraped_at} using Google PageSpeed Insights API.
      </div>
    </div>
  );
}
