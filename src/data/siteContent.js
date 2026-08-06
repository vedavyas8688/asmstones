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
import khammamGallery15 from '../assets/images/KhammamQuarry/khammam-granite-quarry-block-yard.webp'
import khammamGallery17 from '../assets/images/KhammamQuarry/khammam-black-granite-polished-slabs.webp'
import khammamGallery18 from '../assets/images/KhammamQuarry/khammam-granite-slab-processing-unit.webp'
import khammamGallery19 from '../assets/images/KhammamQuarry/khammam-granite-stacked-cut-slabs.webp'
import khammamGallery21 from '../assets/images/KhammamQuarry/khammam-absolute-black-slab-stock.webp'
import khammamGallery22 from '../assets/images/KhammamQuarry/khammam-granite-indoor-slab-storage.webp'
import khammamGallery23 from '../assets/images/KhammamQuarry/khammam-black-granite-slab-stack.webp'
import khammamGallery24 from '../assets/images/KhammamQuarry/khammam-granite-textured-slab-sample.webp'
import khammamGallery25 from '../assets/images/KhammamQuarry/khammam-large-granite-yard-slabs.webp'
import khammamBlackGraniteDisplay from '../assets/images/KhammamQuarry/khammam-black-granite-contact-banner.webp'
import khammamAboutSlabBanner from '../assets/images/KhammamQuarry/khammam-about-slab-banner.webp'
import khammamSlabsYard from '../assets/images/KhammamQuarry/khammam-slabs-yard.webp'
import khammamCustomProcessing from '../assets/images/KhammamQuarry/khammam-custom-size-granite-processing.webp'
import khammamFeature from '../assets/images/KhammamQuarry/khammam-polished-black-granite-feature.webp'
import thalavadiStoneTexture from '../assets/images/ThalavadiQuarry/thalavadi-stone-texture.webp'

const galleryImages = Object.entries(
  import.meta.glob('../assets/images/ChamarajanagarQuarry/chamarajanagar-*.webp', { eager: true, import: 'default' }),
)
  .sort(([first], [second]) => first.localeCompare(second))
  .map(([, image]) => image)

const khammamImages = [
  khammamGallery18,
  khammamGallery19,
  khammamGallery21,
  khammamGallery22,
  khammamGallery23,
  khammamGallery24,
  khammamGallery25,
  khammamBlackGraniteDisplay,
  khammamAboutSlabBanner,
  khammamGallery17,
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
  khammamBlackGraniteDisplay,
}

export const quarryImages = {
  chamarajanagar: [
    ...galleryImages,
    khammamGallery15,
    khammamSlabsYard,
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
  about: khammamSlabsYard,
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
    title: 'Chamarajanagar',
    name: 'Absolute Black',
    place: 'Chamarajanagar',
    state: 'Karnataka',
    material: 'Absolute Black Granite / Nero Assoluto',
    application: 'Rough Blocks, Granite Slabs & Cobble Stones',
    finish: 'Polish, Leather, Flamed, Honed, Flamed & Brushed',
    image: quarrySunset,
    description:
      'Our Chamarajanagar Black Granite offers a deep, consistent color that instantly elevates any space. Sourced directly from our quarry, it serves as the perfect foundation for luxury countertops, elegant monuments, and demanding architectural projects. Beyond its stunning aesthetics, it is independently tested to ensure it performs beautifully over time delivering incredible strength, ultra-low water absorption, high density, and superior wear resistance.',
    detailIntro:
      'Beyond its stunning aesthetics, Chamarajanagar Black Granite is independently tested to ensure it performs beautifully over time, delivering incredible strength, ultra-low water absorption, high density, and superior wear resistance.',
    detailHeading: 'The Global Appeal of Chamarajanagar Black Granite',
    detailPoints: [
      {
        title: 'Unparalleled Color Consistency',
        description:
          'Exhibits a uniform, pure jet-black hue with negligible graining or color variation. This absolute visual consistency is highly sought after for premium, contemporary architectural applications.',
      },
      {
        title: 'Superior Finish Retention',
        description:
          'Characterized by exceptionally high structural density, this stone sustains a premium, mirror-like polish significantly longer than competing natural stone products, ensuring long-term aesthetic value and reduced maintenance.',
      },
      {
        title: 'Architectural Versatility',
        description:
          'Highly adaptable to diverse design specifications. It maintains structural integrity and sophisticated appearance across honed, leathered, flamed, sandblasted, and other custom finish profiles.',
      },
      {
        title: 'Exceptional Durability and Resilience',
        description:
          'Engineered by nature with remarkably low porosity and superior hardness. It delivers outstanding resistance to stains, moisture penetration, and abrasion for luxury applications, commercial facades, and premium countertops.',
      },
    ],
  },
  {
    id: 'khammam',
    index: '02',
    title: 'Khammam ',
    name: 'Absolute Black',
    place: 'Khammam',
    state: 'Telangana',
    material: 'Absolute Black Granite',
    application: 'Bulk Blocks & Processing',
    finish: 'Polished, Honed',
    image: khammamImages[0] || serviceSlabs,
    description:
      "Globally recognized as Absolute Black, Khammam Black Granite stands as one of the world’s most coveted natural stones. Sourced directly from our own prestigious quarry in Khammam, Telangana specifically the renowned Mannegudem region this stone offers unparalleled quality. Because we own and operate the source, we consistently produce the finest, most flawless blocks available, ensuring a pristine, uniform finish for your most demanding architectural and design projects.",
    detailIntro:
      'Because we own and operate the source, we consistently produce the finest, most flawless blocks available, ensuring a pristine, uniform finish for demanding architectural and design projects.',
    detailHeading: 'The Signature Quality of Our Mannegudem Khammam Black',
    detailPoints: [
      {
        title: 'The "Absolute Black" Standard',
        description:
          'Unlike lesser stones that suffer from heavy veining, grey speckling, or uneven tones, our granite is prized for its completely uniform, deep, velvety inky-black hue.',
      },
      {
        title: 'A Flawless, Mirror-Like Finish',
        description:
          'Thanks to exceptional density and rich mineral composition, the stone achieves a stunning high-gloss polish that reflects light and gives architectural spaces a luxurious feel.',
      },
      {
        title: 'Premium, Defect-Free Yield',
        description:
          "Because we own and operate our quarry, we have direct access to Mannegudem's unique geological formations. This allows us to extract massive, pristine raw blocks without natural cracks or color variations-a rare and highly coveted advantage in the global export market.",
      },
      {
        title: 'Built for Global Architecture',
        description:
          'Engineered by nature to withstand extreme weather, this stark black granite is trusted worldwide for high-end kitchen countertops, luxury commercial flooring, and premium monuments.',
      },
    ],
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
      'Soon to be sourced directly from our privately owned reserves in the Mallakuli / Mallankuzhi region of the Thalavadi belt, our upcoming Thalavadi Black Granite represents the pinnacle of dark natural stone. Currently in the final stages of regulatory approval, this exclusive quarry is poised to become the premier choice for international architects, wholesalers, and monumental masons. Because we own the source and will manage the extraction directly upon clearance, we are preparing to guarantee massive, flawless blocks with complete color consistency for your most expansive commercial and luxury residential projects.',
    detailIntro:
      'Currently in the final stages of regulatory approval, this exclusive quarry is poised to become a premier choice for international architects, wholesalers, and monumental masons seeking massive, flawless blocks with complete color consistency.',
    detailHeading: 'Why Anticipate Our Thalavadi Black?',
    detailPoints: [
      {
        title: 'Unwavering Visual Consistency',
        description:
          'Characterized by a pure, velvety black canvas with virtually zero veining or gray speckling, it provides the seamless, uniform aesthetic demanded by modern minimalist architecture.',
      },
      {
        title: 'Engineered for Extreme Endurance',
        description:
          'Boasting remarkably high compressive strength, this future reserve features stone that can handle heavy structural loads and high-traffic wear without losing integrity.',
      },
      {
        title: 'Ultra-Low Porosity',
        description:
          'With a near-zero water absorption rate, Thalavadi Black is virtually stain-proof and highly resistant to freeze-thaw cycles, making it suitable for hygienic kitchen surfaces and outdoor monuments.',
      },
      {
        title: 'Versatile Premium Finishes',
        description:
          'Its dense crystalline structure is suited for mirror-polish, honed, leathered, and flamed finishes, allowing complete design flexibility for residential, commercial, and monumental work.',
      },
    ],
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
    id: 'absolute-black-granite-guide',
    title: 'Absolute Black Granite: Uses, Finishes, Grades and Buying Guide',
    subtitle: "A clear specification and sourcing guide for one of India's best-known dark natural stones",
    date: 'August 6, 2026',
    author: 'ASM Stones',
    publishNote: 'Published date: August 1, 2026 | Last updated: August 1, 2026',
    metaTitle: 'Absolute Black Granite: Uses & Buying Guide | ASM Stones',
    metaDescription:
      'Explore Absolute Black Granite uses, finishes, grades and quality checks. Learn how to choose slabs for kitchens, interiors, monuments and projects.',
    excerpt:
      'Absolute Black Granite is selected when a project needs a deep, restrained and visually consistent dark surface.',
    image: serviceSlabs,
    featuredImageFilename: 'absolute-black-granite-uses-buying-guide.webp',
    featuredImageAlt: 'Premium Absolute Black Granite slabs prepared for architectural selection',
    primaryKeyword: 'absolute black granite',
    secondaryKeywords:
      'absolute black granite price; absolute black granite slabs; absolute black granite India; black granite quarry; polished absolute black granite; honed black granite',
    hideDefaultChecklist: true,
    tableOfContents: [
      'What Is Absolute Black Granite?',
      'Why Is Absolute Black Granite Popular?',
      'Appearance, Grades and Natural Variation',
      'Absolute Black Granite Finishes',
      'Best Applications',
      'How to Check Quality',
      'ASM Stones Locations',
      'Buying Checklist',
      'Care and Maintenance',
      'Frequently Asked Questions',
      'Conclusion',
    ],
    sections: [
      {
        heading: 'Introduction',
        body:
          'Absolute Black Granite is selected when a project needs a deep, restrained and visually consistent dark surface. It is widely considered for kitchen worktops, vanity tops, wall panels, floors, steps, monuments, memorials and commercial interiors. Yet the name alone does not guarantee that every slab will look or perform the same. Colour depth, mineral visibility, finish quality, dimensions, batch consistency and fabrication all influence the final result. This guide explains what Absolute Black Granite is, how common finishes change its appearance, where it is used, how quality is evaluated and what buyers should specify before confirming an order.',
      },
      {
        heading: 'What Is Absolute Black Granite?',
        blocks: [
          {
            type: 'paragraph',
            text:
              'Absolute Black Granite is a commercial dimension-stone name used for a dense, dark stone valued for its near-uniform appearance. In the stone trade, the term "granite" can cover a broader group of hard natural stones than the strict geological definition. Buyers should therefore judge the offered material by the approved sample, actual lot, finish, test information and project specification rather than relying only on the trade name.',
          },
          {
            type: 'paragraph',
            text:
              'For company sourcing information, start with the ASM Stones quarry overview. The quarry pages should present current material photographs and clear location-specific details.',
            links: [{ label: 'ASM Stones quarry overview', to: '/quarries' }],
          },
        ],
      },
      {
        heading: 'Why Is Absolute Black Granite Popular?',
        blocks: [
          {
            type: 'list',
            items: [
              {
                title: 'Minimal appearance',
                description:
                  'Its dark, controlled visual character supports modern and classical design without competing with surrounding materials.',
              },
              {
                title: 'Strong contrast',
                description:
                  'It pairs effectively with white surfaces, timber, brass, stainless steel, glass, concrete and coloured cabinetry.',
              },
              {
                title: 'Finish flexibility',
                description:
                  'Polished, honed, leathered and textured finishes can produce very different design outcomes from the same stone.',
              },
              {
                title: 'Multiple formats',
                description:
                  'It can be supplied as blocks, slabs, tiles and cut-to-size architectural components, subject to available dimensions and processing.',
              },
              {
                title: 'Broad project use',
                description:
                  'It is considered for residential, hospitality, retail, institutional, landscape and memorial applications.',
              },
            ],
          },
        ],
      },
      {
        heading: 'Appearance, Grades and Natural Variation',
        blocks: [
          {
            type: 'paragraph',
            text:
              'Buyers often describe Absolute Black Granite by colour depth and visual uniformity. However, grading names are not universally standardised. Terms such as premium, commercial, first choice or export quality can mean different things to different suppliers. A reliable purchase specification should replace vague grade labels with measurable and visual acceptance criteria.',
          },
          {
            type: 'list',
            items: [
              {
                title: 'Colour and Mineral Visibility',
                description:
                  'A high-uniformity selection normally shows a deep background with limited visible variation from a normal viewing distance. Other selections may show fine mineral specks, slight tone changes or features that become more visible under strong light. These are best evaluated on full slabs, not only on a small hand sample.',
              },
              {
                title: 'Natural Features Versus Damage',
                description:
                  'Natural stone may contain mineral concentrations, small veins, healed fissures or textural changes. These should not automatically be treated as defects. At the same time, open cracks, weak repairs, edge damage or unacceptable surface issues should be identified before fabrication. The approved standard should clearly distinguish acceptable natural character from damage.',
              },
              {
                title: 'Finish and Light Conditions',
                description:
                  'A dark polished slab can appear deeper and more reflective than the same material in a honed or flamed finish. Inspection should therefore happen in the specified finish and under realistic lighting. Strong directional light is useful for checking polish, flatness, resin marks, scratches and reflection consistency.',
              },
            ],
          },
        ],
      },
      {
        heading: 'Absolute Black Granite Finishes',
        blocks: [
          {
            type: 'paragraph',
            text:
              'Finish affects colour, texture, slip behaviour, maintenance visibility and the way the stone interacts with light. Always approve a physical sample in the exact finish required.',
          },
          {
            type: 'table',
            headers: ['FINISH', 'VISUAL EFFECT', 'COMMON USE', 'BUYER CHECK'],
            rows: [
              [
                'Polished',
                'Deep black, glossy and reflective',
                'Countertops, vanity tops, wall panels, monuments',
                'Check reflection, polish consistency and surface marks under direct light',
              ],
              [
                'Honed',
                'Smooth matte or low sheen',
                'Contemporary counters, floors and wall panels',
                'Approve tone, handling-mark visibility and cleaning expectations',
              ],
              [
                'Leathered',
                'Textured surface with controlled sheen',
                'Feature counters, bars and statement walls',
                'Approve texture depth, edge finish and cleaning method',
              ],
              [
                'Flamed / textured',
                'Rougher, lighter-looking surface',
                'Exterior paving, steps and selected landscape work',
                'Confirm suitability, texture consistency and project performance requirements',
              ],
            ],
          },
        ],
      },
      {
        heading: 'Best Applications for Absolute Black Granite',
        blocks: [
          {
            type: 'list',
            items: [
              {
                title: 'Kitchen and Vanity Surfaces',
                description:
                  'Absolute Black Granite can create a precise, architectural appearance in kitchens and bathrooms. It works particularly well with light cabinetry, natural wood, neutral walls and warm metal details. Before cutting, approve the actual slab layout, seam positions, cut-outs, edge profile, backsplash alignment and the location of any natural features.',
              },
              {
                title: 'Flooring, Stairs and Wall Cladding',
                description:
                  'Dark stone can establish a formal, continuous visual language across lobby floors, staircases, skirting and wall panels. For larger areas, material should be planned by batch. The designer must also select a finish that suits traffic, cleaning routines and the required surface texture.',
              },
              {
                title: 'Monuments, Memorials and Engraved Work',
                description:
                  'A dark polished background can provide strong contrast for lettering, symbols and decorative work. Buyers should provide the engraving method, letter depth, piece dimensions, face finish, edge finish and exposure conditions before production.',
              },
              {
                title: 'Exterior and Landscape Applications',
                description:
                  'Absolute Black Granite may be considered for facades, steps, paving, kerbs and landscape details, but exterior suitability must be confirmed for the specific stone, finish, thickness, fixing system, climate and engineering specification. Appearance alone is not enough.',
              },
            ],
          },
          {
            type: 'paragraph',
            text:
              'Use the ASM Stones gallery to show full slabs, finishes and completed applications, and link project enquiries to granite services.',
            links: [
              { label: 'ASM Stones gallery', to: '/gallery' },
              { label: 'granite services', to: '/services' },
            ],
          },
        ],
      },
      {
        heading: 'How to Check Absolute Black Granite Quality',
        blocks: [
          {
            type: 'list',
            items: [
              'Approve a current physical sample and full-slab images from the actual lot.',
              'State the acceptable colour range, mineral visibility and natural features in writing.',
              'Confirm slab or piece dimensions, thickness and tolerances.',
              'Inspect polish, flatness, texture consistency, edges and repairs under suitable light.',
              'Review batch consistency for phased or high-volume projects.',
              'Request relevant test information when the architect, engineer or destination market requires it.',
              'Agree on piece identification, packing, container planning and inspection procedures before dispatch.',
            ],
          },
        ],
      },
      {
        heading: 'ASM Stones Locations',
        blocks: [
          {
            type: 'paragraph',
            text:
              'ASM Stones has three location pages planned for quarry and sourcing information. Use these pages to show original photographs, available material, finish options, quality-control steps and enquiry details rather than repeating identical copy across all three pages.',
          },
          {
            type: 'list',
            items: [
              { title: 'Chamarajanagar - Veerenapura, Karnataka', to: '/quarries/chamarajanagar' },
              { title: 'Khammam - Ravigudem, Telangana', to: '/quarries/khammam' },
              { title: 'Thalavadi - Mallankuli, Tamil Nadu', to: '/quarries/thalavadi' },
            ],
          },
          {
            type: 'paragraph',
            text:
              'For an overview, visit the ASM Stones quarries page. Each location page should have unique text, images and project information to avoid duplicate content.',
            links: [{ label: 'ASM Stones quarries page', to: '/quarries' }],
          },
        ],
      },
      {
        heading: 'Absolute Black Granite Buying Checklist',
        blocks: [
          {
            type: 'table',
            headers: ['INFORMATION TO SHARE', 'WHY IT IS NEEDED'],
            rows: [
              ['Application and destination', 'The end use and exposure conditions affect finish, thickness, testing and packing decisions.'],
              ['Required format', 'Blocks, random slabs, calibrated slabs, tiles and cut-to-size pieces require different planning.'],
              ['Finish and edge details', 'Surface and edge processing influence appearance, production time and cost.'],
              ['Dimensions, thickness and tolerances', 'Clear measurements reduce fabrication and installation disputes.'],
              ['Quantity and delivery schedule', 'Volume and phasing influence lot selection, processing and logistics.'],
              ['Inspection and documentation', 'State sample approval, photographs, testing, marking and paperwork expectations.'],
            ],
          },
        ],
      },
      {
        heading: 'Care and Maintenance',
        body:
          'Routine care should be based on the actual stone, finish and installation. Use a soft cloth or mop and a pH-neutral product intended for natural stone. Wipe spills promptly, keep abrasive grit away from floors and avoid experimenting with strongly acidic or abrasive cleaners. Sealing should not follow an automatic calendar; test the surface and follow the guidance of the fabricator, installer and sealer manufacturer.',
      },
      {
        heading: 'Frequently Asked Questions',
        blocks: [
          {
            type: 'faq',
            items: [
              {
                question: 'Is Absolute Black Granite completely plain black?',
                answer:
                  'It is valued for a deep and relatively consistent appearance, but natural stone can still show fine mineral character, subtle tonal changes or features that become visible under certain light. Approve the actual lot.',
              },
              {
                question: 'Which finish makes Absolute Black Granite look darkest?',
                answer:
                  'A well-executed polished finish usually deepens the colour and increases reflection. Honed and textured finishes normally look softer or lighter.',
              },
              {
                question: 'Is Absolute Black Granite suitable for kitchens?',
                answer:
                  "It is widely considered for kitchen worktops. The final result depends on slab quality, fabrication, installation, surface care and the project's practical requirements.",
              },
              {
                question: 'Does Absolute Black Granite need sealing?',
                answer:
                  'Sealing requirements vary with the stone, finish, exposure and installation. Test and follow professional guidance rather than applying sealer automatically.',
              },
              {
                question: 'Why do suppliers quote different grades?',
                answer:
                  'Grade names are not universal. Compare actual colour range, slab quality, dimensions, finish, repairs, tolerances and documentation instead of relying only on labels.',
              },
              {
                question: 'Can it be used outdoors?',
                answer:
                  'Many dark stones are used outdoors, but the specific stone, finish, thickness, fixing method and technical requirements must be checked for the intended exposure.',
              },
              {
                question: 'How should importers approve a lot?',
                answer:
                  'Use a current reference sample, full-slab photographs or video, written acceptance criteria, agreed inspection steps and clear packing documentation.',
              },
            ],
          },
        ],
      },
      {
        heading: 'Conclusion',
        body:
          'Absolute Black Granite can deliver a highly controlled, premium surface when the material, finish and quality expectations are specified clearly. Approve the actual lot, define dimensions and tolerances, inspect under realistic lighting and coordinate fabrication and logistics before production. Continue with the ASM Stones blog library for related granite selection and maintenance guides.',
      },
      {
        heading: 'Get in Touch',
        blocks: [
          {
            type: 'paragraph',
            text:
              'Planning a Absolute Black Granite requirement? Share the material, finish, dimensions, quantity, application and destination so the ASM Stones team can review the requirement clearly.',
          },
          {
            type: 'list',
            items: [
              'ASMSTONES',
              'LOCATIONS',
              { title: 'Chamarajanagar - Veerenapura, Karnataka', to: '/quarries/chamarajanagar' },
              { title: 'Khammam - Ravigudem, Telangana', to: '/quarries/khammam' },
              { title: 'Thalavadi - Mallankuli, Tamil Nadu', to: '/quarries/thalavadi' },
              'Phone: 8549922444',
              'Email: sales@asmstones.com',
              { title: 'Send an enquiry through asmstones.com/contact', to: '/contact' },
            ],
          },
        ],
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
