import { Plus } from 'lucide-react'
import PageHero from '../components/sections/PageHero'
import { gallery, images } from '../data/siteContent'

function Gallery() {
  return (
    <main>
      <PageHero title="Gallery" image={images.quarryAerial} />
      <section className="bg-white px-6 py-20 lg:py-32">
        <div className="mx-auto grid w-full max-w-[1080px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((image, index) => (
            <button className="group relative overflow-hidden bg-[var(--color-line)]" type="button" key={`${image}-${index}`}>
              <img className="aspect-[1.48/1] w-full object-cover transition group-hover:scale-105" src={image} alt={`ASM granite gallery ${index + 1}`} decoding="async" />
              <span className="absolute bottom-0 right-0 grid size-10 place-items-center bg-[var(--color-accent)] text-white">
                <Plus size={18} />
              </span>
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Gallery
