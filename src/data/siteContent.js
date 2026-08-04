import heroQuarry from '../assets/images/ChamarajanagarQuarry/quarry-hero.webp'
import aboutStone from '../assets/images/ChamarajanagarQuarry/about-stone.webp'
import quarryAerial from '../assets/images/ChamarajanagarQuarry/quarry-aerial.webp'
import quarryWide from '../assets/images/ChamarajanagarQuarry/quarry-wide.webp'
import serviceBlocks from '../assets/images/ChamarajanagarQuarry/service-blocks.webp'
import serviceSlabs from '../assets/images/ChamarajanagarQuarry/service-slabs.webp'
import serviceCustom from '../assets/images/ChamarajanagarQuarry/service-custom.webp'
import blockClose from '../assets/images/ChamarajanagarQuarry/block-close.webp'
import sunsetBlocks from '../assets/images/ChamarajanagarQuarry/sunset-blocks.webp'
import quarrySunset from '../assets/images/ChamarajanagarQuarry/quarry-sunset.webp'
import quarryDetail from '../assets/images/ChamarajanagarQuarry/quarry-detail.webp'
import heroTexture from '../assets/images/ChamarajanagarQuarry/hero-texture.webp'
import khammamGallery15 from '../assets/images/KhammamQuarry/quary2 (15).webp'
import khammamGallery17 from '../assets/images/KhammamQuarry/quary2 (17).webp'
import khammamGallery18 from '../assets/images/KhammamQuarry/quary2 (18).webp'
import khammamGallery19 from '../assets/images/KhammamQuarry/quary2 (19).webp'
import khammamGallery21 from '../assets/images/KhammamQuarry/quary2 (21).webp'
import khammamGallery22 from '../assets/images/KhammamQuarry/quary2 (22).webp'
import khammamGallery23 from '../assets/images/KhammamQuarry/quary2 (23).webp'
import khammamGallery24 from '../assets/images/KhammamQuarry/quary2 (24).webp'
import khammamGallery25 from '../assets/images/KhammamQuarry/quary2 (25).webp'
import khammamBlackGraniteDisplay from '../assets/images/KhammamQuarry/khammam-black-granite-display.webp'
import khammamAboutSlabBanner from '../assets/images/KhammamQuarry/khammam-about-slab-banner.webp'
import khammamSlabsYard from '../assets/images/KhammamQuarry/khammam-slabs-yard.webp'
import khammamCustomProcessing from '../assets/images/KhammamQuarry/quary2-16.webp'
import khammamFeature from '../assets/images/KhammamQuarry/quary2-20.webp'
import thalavadiStoneTexture from '../assets/images/ThalavadiQuarry/thalavadi-stone-texture.webp'

const galleryImages = Object.entries(
  import.meta.glob('../assets/images/ChamarajanagarQuarry/gallery-*.webp', { eager: true, import: 'default' }),
)
  .sort(([first], [second]) => first.localeCompare(second))
  .map(([, image]) => image)

const khammamImages = [
  khammamGallery15,
  khammamGallery17,
  khammamGallery18,
  khammamGallery19,
  khammamGallery21,
  khammamGallery22,
  khammamGallery23,
  khammamGallery24,
  khammamGallery25,
  khammamBlackGraniteDisplay,
  khammamAboutSlabBanner,
  khammamSlabsYard,
  khammamCustomProcessing,
  khammamFeature,
]

const mixedGalleryImages = Array.from({ length: Math.max(galleryImages.length, khammamImages.length) }, (_, index) => [
  galleryImages[index],
  khammamImages[index],
]).flat().filter(Boolean)

export const site = {
  name: 'Sri Adiseshu',
  suffix: 'Minerals Pvt Ltd',
  email: 'sales@asmstones.com',
  phone: '8549922444',
  address: 'Chamarajanagar, Khammam and Thalavadi quarry operations',
  locations: [
    {
      label: 'Chamarajanagar - Veeranapura, Karnataka',
      href: 'https://www.google.com/maps/search/?api=1&query=WV26%2BQ44%2C%20Veeranapura%2C%20Karnataka%2C%20India',
    },
    {
      label: 'Khammam - Ravigudem, Telangana',
      href: 'https://www.google.com/maps/search/?api=1&query=92PP%2BM6M%20Ravigudem%2C%20Telangana',
    },
    {
      label: 'Thalavadi - Mallankuli, Tamil Nadu',
      href: 'https://www.google.com/maps/search/?api=1&query=QX6C%2BR8H%20Mallankuli%2C%20Tamil%20Nadu',
    },
  ],
}

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Quarries', path: '/quarries' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Services', path: '/services' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact Us', path: '/contact' },
]

export const images = {
  heroQuarry,
  aboutStone,
  quarryAerial,
  quarryWide,
  serviceBlocks,
  serviceSlabs,
  serviceCustom,
  blockClose,
  sunsetBlocks,
  quarrySunset,
  quarryDetail,
  heroTexture,
}

export const quarryImages = {
  chamarajanagar: [
    quarrySunset,
    serviceSlabs,
    serviceBlocks,
    heroQuarry,
    quarryDetail,
    blockClose,
  ],
  khammam: khammamImages,
  thalavadi: [thalavadiStoneTexture],
}

export const quarryFeatureImages = {
  chamarajanagar: quarrySunset,
  khammam: khammamFeature,
  thalavadi: thalavadiStoneTexture,
}

export const pageBanners = {
  about: khammamAboutSlabBanner,
  faq: khammamSlabsYard,
}

export const aboutPoints = [
  'Direct Quarry Sourcing & Processing',
  'Premium Blocks, Slabs & Custom Sizes',
  'Strict Quality Control & Grading',
  'Reliable Supply for Bulk Orders',
  'Export-Ready Granite Solutions',
]

export const services = [
  {
    title: 'Granite Block Supply',
    description:
      'Premium Absolute Black granite blocks sourced directly from our quarries for unmatched quality and consistency.',
    image: serviceBlocks,
  },
  {
    title: 'Precision Cut Slabs',
    description:
      'Precision-cut slabs with accurate dimensions and smooth finishes for versatile architectural and interior use.',
    image: quarryAerial,
  },
  {
    title: 'Custom Size Processing',
    description:
      'Tailor-made granite solutions cut to exact specifications to suit unique project requirements.',
    image: khammamCustomProcessing,
  },
  {
    title: 'Bulk Order Fulfillment',
    description:
      'Efficient handling of large-volume orders with reliable supply and timely delivery across locations.',
    image: blockClose,
  },
  {
    title: 'Export-Grade Packaging & Delivery',
    description:
      'Secure packaging and reliable logistics for safe, damage-free delivery worldwide.',
    image: serviceSlabs,
  },
]

export const quarries = [
  {
    id: 'chamarajanagar',
    index: '01',
    title: 'Absolute Black - Chamarajanagar',
    name: 'Absolute Black',
    place: 'Chamarajanagar',
    state: 'Karnataka',
    material: 'Premium Absolute Black Granite',
    application: 'Blocks & Slabs Supply',
    finish: 'Polished',
    image: quarrySunset,
    description:
      'Our Chamarajanagar quarry is widely recognized for deep jet-black color and exceptional uniformity. The material is ideal for premium slabs, monuments, counters and architectural applications.',
  },
  {
    id: 'khammam',
    index: '02',
    title: 'Khammam Granite',
    name: 'Absolute Black',
    place: 'Khammam',
    state: 'Telangana',
    material: 'Absolute Black Granite',
    application: 'Bulk Blocks & Processing',
    finish: 'Polished, Honed',
    image: khammamImages[0] || serviceSlabs,
    description:
      'Khammam operations support consistent block supply, processing coordination and dependable logistics for bulk domestic and export requirements.',
  },
  {
    id: 'thalavadi',
    index: '03',
    title: 'Absolute Black - Thalavadi',
    name: 'Absolute Black',
    place: 'Thalavadi',
    state: 'Tamil Nadu',
    material: 'Absolute Black Granite',
    application: 'Custom Slabs',
    finish: 'Polished, Flamed',
    image: thalavadiStoneTexture,
    description:
      'Thalavadi sourcing focuses on durable Absolute Black material for outdoor, interior and large-scale construction projects.',
  },
]

export const qualityStats = [
  { label: 'Quality Consistency', value: 95 },
  { label: 'Processing Precision', value: 92 },
  { label: 'On-Time Delivery', value: 99 },
  { label: 'Customer Satisfaction', value: 95 },
]

export const reasons = [
  {
    title: 'Premium Quality Granite',
    description:
      'We ensure top-grade Absolute Black granite with uniform color, superior finish, and strict quality checks at every stage.',
  },
  {
    title: 'Direct Quarry Sourcing',
    description:
      'With our own quarries in Chamarajanagar, Khammam, and Thalavadi, we guarantee authenticity and consistency.',
  },
  {
    title: 'Reliable Supply',
    description:
      'We handle both small and bulk orders efficiently with a strong logistics network and timely delivery.',
  },
  {
    title: 'Expertise',
    description:
      'Our experienced team ensures smooth operations from quarrying to processing and final dispatch.',
  },
]

export const news = [
  {
    id: 'absolute-black-granite-modern-construction',
    title: 'Absolute Black Granite for Modern Construction',
    date: 'July 1, 2026',
    excerpt:
      'Absolute Black granite has become one of the most preferred materials in modern architecture, known for its timeless elegance and strength.',
    image: serviceSlabs,
    sections: [
      {
        heading: 'Why Absolute Black Works for Modern Projects',
        body:
          'Modern construction depends on materials that stay visually refined while handling daily use. Absolute Black granite gives architects and builders a dense, consistent stone surface that feels premium in commercial lobbies, luxury residences, exterior steps, wall cladding, counters, and monument work. Its deep tone brings contrast without adding visual noise, which makes it easy to pair with glass, metal, timber, concrete, and warm lighting.',
      },
      {
        heading: 'Strength, Finish, and Long-Term Value',
        body:
          'The value of this granite is not only in its color. The stone is selected for structural soundness, processed for accurate sizing, and finished to match the use case. A polished surface creates a high-end interior look, while honed or flamed finishes can support practical movement areas. Good block selection also reduces wastage during cutting, which helps projects maintain better cost control from procurement to installation.',
      },
      {
        heading: 'Where Builders Use It Most',
        body:
          'Absolute Black granite is commonly used for kitchen counters, staircases, flooring borders, facade bands, reception desks, lift cladding, outdoor paving, memorials, and custom architectural pieces. The material suits both minimal modern design and traditional premium applications because it does not fight with the surrounding palette. It becomes the quiet anchor of the space.',
      },
      {
        heading: 'Buying Direct from Quarry-Linked Suppliers',
        body:
          'When granite is sourced through a quarry-linked supplier, buyers get better control over block quality, sizing expectations, finish planning, and bulk order timelines. This is especially important for large projects where color consistency and delivery reliability matter. Clear communication on dimensions, quantity, finish, edge treatment, and destination helps avoid delays once processing begins.',
      },
    ],
  },
  {
    id: 'applications-absolute-black-granite-architecture',
    title: 'Applications of Absolute Black Granite in Modern Architecture',
    date: 'July 10, 2026',
    excerpt:
      'Absolute Black granite is one of the most versatile and widely used natural stones in modern architecture.',
    image: sunsetBlocks,
    sections: [
      {
        heading: 'A Material for Clean Architectural Lines',
        body:
          'Absolute Black granite is favored in modern architecture because it supports crisp, confident lines. It can be used as a strong visual base in flooring, as a refined vertical surface in wall cladding, or as a durable work surface in counters and tables. The stone adds depth without relying on heavy patterning, so it keeps the architecture calm and composed.',
      },
      {
        heading: 'Interior Applications',
        body:
          'Inside a building, Absolute Black granite is often used for kitchen countertops, vanity tops, stair treads, skirting, flooring accents, window sills, and reception counters. The material works especially well where designers want a sharp contrast against lighter walls or cabinetry. With the right finish, it can read as polished luxury or understated utility.',
      },
      {
        heading: 'Exterior and Commercial Uses',
        body:
          'For exterior projects, the stone can be processed for steps, paving, wall bands, entrance portals, landscape edges, and facade details. Commercial projects often choose it because the color remains professional, the surface is easy to maintain, and the material can be supplied in bulk with consistent grading when planned correctly.',
      },
      {
        heading: 'Designing with Finish and Scale',
        body:
          'The same granite can feel very different depending on its finish and scale. Large polished slabs create a premium reflective character, honed surfaces feel softer and more contemporary, and textured finishes add grip for movement areas. Matching the finish to the location is what makes the material perform well over time.',
      },
    ],
  },
  {
    id: 'key-factors-buying-absolute-black-granite',
    title: 'Key Factors to Consider Before Buying Absolute Black Granite',
    date: 'July 20, 2026',
    excerpt:
      'Selecting the right Absolute Black granite is essential to ensure durability, aesthetics, and long-term value for your project.',
    image: blockClose,
    sections: [
      {
        heading: 'Check Color Consistency First',
        body:
          'The first thing to review is the depth and consistency of the black tone. Premium Absolute Black granite should have a strong, even appearance across the required quantity. For large orders, buyers should discuss block availability, slab matching, and acceptable natural variation before finalizing procurement.',
      },
      {
        heading: 'Match the Finish to the Use',
        body:
          'Finish selection affects both appearance and performance. Polished granite suits counters, interior cladding, and premium surfaces. Honed finishes are softer and less reflective. Flamed or textured finishes may be more suitable for outdoor or movement areas where grip is important. The best choice depends on location, traffic, maintenance expectations, and design intent.',
      },
      {
        heading: 'Confirm Sizes, Thickness, and Processing',
        body:
          'Before ordering, confirm the required sizes, thickness, tolerances, edge details, and packaging needs. Clear technical requirements reduce cutting waste and make dispatch smoother. This is especially important when the granite is being used in multiple zones of a project, because small sizing changes can affect installation planning.',
      },
      {
        heading: 'Choose Reliable Supply and Logistics',
        body:
          'Reliable supply is as important as material quality. A strong supplier should help with quarry sourcing, quality inspection, processing coordination, packaging, and delivery timelines. For export or bulk domestic orders, logistics planning should begin early so the material arrives safely and on schedule.',
      },
    ],
  },
]

export const faqs = [
  {
    question: 'What is Absolute Black granite and why is it popular?',
    answer:
      'Absolute Black granite is a premium natural stone known for its deep black color, durability, and smooth finish, making it ideal for residential and commercial applications.',
  },
  {
    question: 'Where do you source your granite from?',
    answer:
      'We source from our quarry network in Chamarajanagar, Khammam in Telangana, and Thalavadi.',
  },
  {
    question: 'What products do you offer?',
    answer:
      'We supply granite blocks, precision-cut slabs, custom sizes, finished surfaces, and export-ready bulk orders.',
  },
  {
    question: 'Do you handle bulk and export orders?',
    answer:
      'Yes. We support domestic and international bulk orders with secure packaging and logistics coordination.',
  },
  {
    question: 'How do you ensure the quality of your granite?',
    answer:
      'Each block and slab is inspected for color consistency, structural integrity, finish quality, sizing accuracy, and export readiness.',
  },
  {
    question: 'What is the typical delivery timeline for orders?',
    answer:
      'Delivery timelines depend on order size, destination, and processing requirements. We ensure timely dispatch with efficient logistics planning.',
  },
  {
    question: 'What finishes are available for Absolute Black?',
    answer:
      'Common finishes include polished, honed, flamed, and custom finishes depending on the project requirement.',
  },
  {
    question: 'Can you provide custom sizes and thickness?',
    answer:
      'Yes. We process slabs and blocks to custom sizes and thicknesses based on approved project specifications.',
  },
  {
    question: 'Is Absolute Black granite suitable for outdoor use?',
    answer:
      'Yes. Its strength and low porosity make it suitable for many exterior uses when the correct finish is selected.',
  },
  {
    question: 'How can I request a quote or place an order?',
    answer:
      'Send your material, size, quantity, finish, and delivery details through the contact form or email us directly.',
  },
]

export const gallery = mixedGalleryImages

export const contactLocations = [
  {
    name: 'Chamarajanagar - Veeranapura, Karnataka',
    mapQuery: 'WV26+Q44, Veeranapura, Karnataka, India',
    image: quarryDetail,
  },
  {
    name: 'Khammam - Ravigudem, Telangana',
    mapQuery: '92PP+M6M Ravigudem, Telangana',
    image: khammamImages[1] || khammamImages[0] || quarryAerial,
  },
  {
    name: 'Thalavadi - Mallankuli, Tamil Nadu',
    mapQuery: 'QX6C+R8H Mallankuli, Tamil Nadu',
    image: thalavadiStoneTexture,
  },
]
