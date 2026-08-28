import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        // We mask the analytics script as a generic internal asset
        source: '/assets/ui-metrics.js',
        // In the future, you will point this to your actual VPS IP or stats subdomain
        destination: 'https://stats.ghulam-mustafa.com/script.js',
      },
      {
        // We mask the tracking endpoint as a standard internal API
        source: '/api/ui-metrics/send',
        destination: 'https://stats.ghulam-mustafa.com/api/send',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/scanned',
        destination: '/?ref=qr_vcard',
        permanent: false, // false because we might want to change analytics tags later
      },
      {
        source: '/cal',
        destination: 'https://cal.com/ghulam-mustafa-ecxxcu/15min',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/GhulamMustufa',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/ghulam909',
        permanent: true,
      },
      {
        source: '/wa',
        destination: 'https://wa.me/923087015957',
        permanent: true,
      },
      {
        source: '/comaudit/:domain',
        destination: '/audit/:domain',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
