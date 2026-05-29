import { ImageResponse } from 'next/og'

export const alt = 'Ghulam Mustafa — Senior Full-Stack & Mobile Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const stats = [
  { value: '100K+', label: 'App Users' },
  { value: '50%', label: 'API Latency Cut' },
  { value: '99.9%', label: 'Uptime' },
  { value: '5+', label: 'Years Exp.' },
]

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #020617 0%, #0c1628 55%, #020617 100%)',
          padding: '64px 72px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Top section */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Availability badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(52,211,153,0.10)',
              border: '1px solid rgba(110,231,183,0.25)',
              borderRadius: '40px',
              padding: '8px 18px',
              marginBottom: '40px',
              alignSelf: 'flex-start',
            }}
          >
            <div
              style={{
                display: 'flex',
                width: '9px',
                height: '9px',
                borderRadius: '50%',
                background: '#34d399',
                flexShrink: 0,
              }}
            />
            <div style={{ color: '#6ee7b7', fontSize: '15px', fontWeight: 600 }}>
              Open to Work · Full-Time &amp; Contract
            </div>
          </div>

          {/* Name */}
          <div
            style={{
              display: 'flex',
              color: '#ffffff',
              fontSize: '70px',
              fontWeight: 700,
              letterSpacing: '-2px',
              lineHeight: '1',
              marginBottom: '22px',
            }}
          >
            GHULAM MUSTAFA
          </div>

          {/* Title */}
          <div
            style={{
              display: 'flex',
              color: '#38bdf8',
              fontSize: '28px',
              fontWeight: 600,
              marginBottom: '18px',
            }}
          >
            Senior Full-Stack &amp; Mobile Engineer
          </div>

          {/* Tech stack */}
          <div
            style={{
              display: 'flex',
              color: '#475569',
              fontSize: '17px',
              fontWeight: 400,
              letterSpacing: '0.5px',
            }}
          >
            React · React Native · Node.js · TypeScript · Next.js · AI / LLM
          </div>
        </div>

        {/* Bottom section */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}
        >
          {/* Stat cards */}
          <div style={{ display: 'flex', gap: '14px' }}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  borderRadius: '14px',
                  padding: '20px 26px',
                  minWidth: '138px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    color: '#ffffff',
                    fontSize: '32px',
                    fontWeight: 700,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    display: 'flex',
                    color: '#64748b',
                    fontSize: '13px',
                    marginTop: '6px',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Site URL */}
          <div
            style={{
              display: 'flex',
              color: '#334155',
              fontSize: '14px',
              letterSpacing: '0.3px',
            }}
          >
            resume-ghulam.vercel.app
          </div>
        </div>
      </div>
    ),
    size,
  )
}
