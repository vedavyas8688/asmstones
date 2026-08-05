import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { news, quarries, site } from "../../data/siteContent";

const SITE_URL = "https://asmstones.com";
const OG_IMAGE = `${SITE_URL}/images/og-image.jpg`;
const LOGO_IMAGE = `${SITE_URL}/asmstones-logo-1.webp`;

const DEFAULT_TITLE =
  "Absolute Black Granite Supplier | Sri Adiseshu Minerals Pvt Ltd";

const DEFAULT_DESCRIPTION =
  "Sri Adiseshu Minerals Pvt Ltd supplies premium Absolute Black granite blocks, slabs, and custom sizes directly from our quarries for domestic and export projects.";

const DEFAULT_KEYWORDS =
  "Absolute Black granite, black granite supplier, granite quarry, granite blocks, granite slabs, Chamarajanagar granite, Khammam granite, Thalavadi granite";

 const staticMeta = {
  "/": {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },

  "/about": {
    title: "Absolute Black Granite Quarry Owner | Sri Adiseshu Minerals",
    description:
      "Learn about Sri Adiseshu Minerals, a quarry owner and manufacturer of premium Absolute Black Granite, delivering quality stone directly from our own quarries worldwide.",
  },

  "/quarries": {
    title: "Absolute Black Granite Quarries | Sri Adiseshu Minerals",
    description:
      "Discover our own Absolute Black Granite quarries in Chamarajanagar, Khammam, and Thalavadi, supplying premium granite blocks and slabs directly from the source.",
  },

  "/gallery": {
    title: "Absolute Black Granite Gallery | Sri Adiseshu Minerals",
    description:
      "Explore our gallery featuring our own Absolute Black Granite quarries, premium blocks, polished slabs, processing facilities, and completed stone products.",
  },

  "/services": {
    title: "Absolute Black Granite Manufacturer | Sri Adiseshu Minerals",
    description:
      "We manufacture and supply Absolute Black Granite from our own quarries, offering blocks, slabs, custom cutting, polishing, and bulk supply worldwide.",
  },

  "/blogs": {
    title: "Absolute Black Granite Blog | Sri Adiseshu Minerals",
    description:
      "Read expert insights on Absolute Black Granite, quarry operations, manufacturing, applications, maintenance, and industry knowledge from Sri Adiseshu Minerals.",
  },

  "/faq": {
    title: "Absolute Black Granite FAQ | Sri Adiseshu Minerals",
    description:
      "Find answers about our Absolute Black Granite, quarry ownership, manufacturing process, custom sizes, quality standards, and worldwide supply.",
  },

  "/contact": {
    title: "Contact Absolute Black Granite Experts | Sri Adiseshu Minerals",
    description:
      "Contact Sri Adiseshu Minerals for premium Absolute Black Granite from our own quarries. Request pricing, custom sizes, slabs, blocks, and bulk supply.",
  },
};

function setMetaAttribute(selector, attribute, value) {
  const element = document.head.querySelector(selector);
  if (element) {
    element.setAttribute(attribute, value);
  }
}

function setMetaContent(selector, content) {
  setMetaAttribute(selector, "content", content);
}

function getRouteMeta(pathname) {
  const quarryMatch = pathname.match(/^\/quarries\/([^/]+)$/);
  if (quarryMatch) {
    const quarry = quarries.find((item) => item.id === quarryMatch[1]);
    if (quarry) {
      return {
        title: `${quarry.material} Granite Quarry - ${quarry.title} | Sri Adiseshu Minerals`,
        description: `${quarry.description} Source premium ${quarry.material} granite blocks, slabs, and custom sizes directly from Sri Adiseshu Minerals with reliable quarry-backed supply.`,
      };
    }
  }

  const blogMatch = pathname.match(/^\/blogs\/([^/]+)$/);
  if (blogMatch) {
    const blog = news.find((item) => item.id === blogMatch[1]);
    if (blog) {
      return {
 title: `${blog.title} | Absolute Black Granite Blog`,
          description:
  blog.excerpt ||
  'Read expert insights on Absolute Black granite, quarrying, applications, and industry trends from Sri Adiseshu Minerals.'
      };
    }
  }

  return staticMeta[pathname] || staticMeta["/"];
}

function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
  const meta = getRouteMeta(pathname);
  const canonicalUrl = `${SITE_URL}${pathname === "/" ? "" : pathname}`;
  const ogImage = OG_IMAGE;

  // Title & Description
  document.title = meta.title;
  setMetaContent('meta[name="description"]', meta.description);
  setMetaContent('meta[name="keywords"]', DEFAULT_KEYWORDS);

  // Open Graph
  setMetaContent('meta[property="og:title"]', meta.title);
  setMetaContent('meta[property="og:description"]', meta.description);
  setMetaContent('meta[property="og:url"]', canonicalUrl);
  setMetaContent('meta[property="og:type"]', "website");
  setMetaContent('meta[property="og:image"]', ogImage);

  // Twitter
  setMetaContent('meta[name="twitter:title"]', meta.title);
  setMetaContent('meta[name="twitter:description"]', meta.description);
  setMetaContent('meta[name="twitter:card"]', "summary_large_image");
  setMetaContent('meta[name="twitter:image"]', ogImage);

  // Robots
  setMetaContent(
    'meta[name="robots"]',
    "index,follow,max-image-preview:large"
  );

  // Canonical
  setMetaAttribute("link[rel='canonical']", "href", canonicalUrl);

  // Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: `${site.name} ${site.suffix}`,
    url: SITE_URL,
    email: site.email,
    telephone: site.phone,
    description: meta.description,
    logo: LOGO_IMAGE,
    areaServed: [
      "India",
      "Karnataka",
      "Telangana",
      "Tamil Nadu",
    ],
    knowsAbout: [
      "Absolute Black Granite",
      "Granite Blocks",
      "Granite Slabs",
      "Granite Quarry Supply",
    ],
  };

  const script = document.getElementById("structured-data");
  if (script) {
    script.textContent = JSON.stringify(structuredData);
  }
}, [pathname]);

  return null;
}

export default SeoManager;
