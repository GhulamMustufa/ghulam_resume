import type { MetadataRoute } from 'next'
import { projects, services } from '@/data/portfolioData'
import { seoServices } from '@/data/seoServices'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ghulam-mustafa.com'

  // Only canonical indexable 200 OK pages (excluding /scanned redirect and /qr utility)
  const staticRoutes = ['', '/about'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const allServices = [...services, ...seoServices]
  const serviceRoutes = allServices.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...projectRoutes, ...serviceRoutes]
}
