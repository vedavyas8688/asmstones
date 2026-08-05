import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { news, quarries, site } from '../../data/siteContent'

const SITE_URL = 'https://asmstones.com'
const DEFAULT_TITLE = 'Sri Adiseshu Minerals Pvt Ltd | Absolute Black Granite Quarry Supplier'
const DEFAULT_DESCRIPTION =
  'Sri Adiseshu Minerals Pvt Ltd supplies premium Absolute Black granite blocks and slabs from Chamarajanagar, Khammam, and Thalavadi quarry operations.'
const DEFAULT_KEYWORDS =
  'Absolute Black granite, black granite supplier, granite quarry, granite blocks, granite slabs, Chamarajanagar granite, Khammam granite, Thalavadi granite'

const staticMeta = {
  '/': {
    title: DEFAULT_TITLE,
    description:
      'Premium Absolute Black granite blocks and slabs from Sri Adiseshu Minerals Pvt Ltd, with quarry-backed sourcing, processing support, and reliable supply.',
  },
  '/about': {
    title: 'About Sri Adiseshu Minerals | Absolute Black Granite Quarry Operations',
    description:
      'Learn about Sri Adiseshu Minerals Pvt Ltd, a quarry-backed Absolute Black granite supplier serving builders, exporters, architects, and bulk buyers.',
  },
  '/quarries': {
    title: 'Granite Quarries | Chamarajanagar, Khammam and Thalavadi',
    description:
      'Explore Sri Adiseshu Minerals quarry locations for premium Absolute Black granite blocks, slabs, and custom processing requirements.',
  },
  '/gallery': {
    title: 'Granite Gallery | Absolute Black Blocks, Slabs and Quarry Images',
    description:
      'View Absolute Black granite quarry, block, slab, processing, and yard images from Sri Adiseshu Minerals Pvt Ltd.',
  },
  '/services': {
    title: 'Granite Services | Blocks, Slabs, Custom Sizes and Bulk Supply',
    description:
      'Granite block supply, precision cut slabs, custom size processing, bulk order fulfillment, packaging, and delivery support.',
  },
  '/blogs': {
    title: 'Granite Blogs | Absolute Black Granite Buying and Application Guides',
    description:
      'Read practical guides about Absolute Black granite applications, buying factors, finishes, sourcing, and project planning.',
  },
  '/faq': {
    title: 'FAQ | Absolute Black Granite Supply Questions',
    description:
      'Answers to common questions about Absolute Black granite quality, finishes, bulk supply, quarry sourcing, and order requirements.',
  },
  '/contact': {
    title: 'Contact Sri Adiseshu Minerals | Granite Blocks and Slabs Enquiry',
    description:
      'Contact Sri Adiseshu Minerals Pvt Ltd for Absolute Black granite blocks, slabs, custom sizes, quarry details, and bulk supply enquiries.',
  },
}

function setMetaAttribute(selector, attribute, value) {
  const element = document.head.querySelector(selector)
  if (element) {
    element.setAttribute(attribute, value)
  }
}

function setMetaContent(selector, content) {
  setMetaAttribute(selector, 'content', content)
}

function getRouteMeta(pathname) {
  const quarryMatch = pathname.match(/^\/quarries\/([^/]+)$/)
  if (quarryMatch) {
    const quarry = quarries.find((item) => item.id === quarryMatch[1])
    if (quarry) {
      return {
        title: `${quarry.title} | ${quarry.material} Quarry`,
        description: `${quarry.description} Contact Sri Adiseshu Minerals for ${quarry.material} blocks, slabs, and processing support.`,
      }
    }
  }

  const blogMatch = pathname.match(/^\/blogs\/([^/]+)$/)
  if (blogMatch) {
    const blog = news.find((item) => item.id === blogMatch[1])
    if (blog) {
      return {
        title: `${blog.title} | Sri Adiseshu Minerals`,
        description: blog.excerpt,
      }
    }
  }

  return staticMeta[pathname] || staticMeta['/']
}

function SeoManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = getRouteMeta(pathname)
    const canonicalUrl = `${SITE_URL}${pathname === '/' ? '' : pathname}`

    document.title = meta.title
    setMetaContent('meta[name="description"]', meta.description)
    setMetaContent('meta[name="keywords"]', DEFAULT_KEYWORDS)
    setMetaContent('meta[property="og:title"]', meta.title)
    setMetaContent('meta[property="og:description"]', meta.description)
    setMetaContent('meta[property="og:url"]', canonicalUrl)
    setMetaContent('meta[name="twitter:title"]', meta.title)
    setMetaContent('meta[name="twitter:description"]', meta.description)
    setMetaAttribute('link[rel="canonical"]', 'href', canonicalUrl)

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: `${site.name} ${site.suffix}`,
      url: SITE_URL,
      email: site.email,
      telephone: site.phone,
      description: DEFAULT_DESCRIPTION,
      areaServed: ['India', 'Karnataka', 'Telangana', 'Tamil Nadu'],
      knowsAbout: ['Absolute Black Granite', 'Granite Blocks', 'Granite Slabs', 'Granite Quarry Supply'],
    }

    const script = document.getElementById('structured-data')
    if (script) {
      script.textContent = JSON.stringify(structuredData)
    }
  }, [pathname])

  return null
}

export default SeoManager
