import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/cal',
        destination: 'https://cal.com/ghulammustafa',
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
