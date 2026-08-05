import { ArrowLeft, ArrowRight, CalendarDays, CheckCircle2 } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import FaqSection from '../components/sections/FaqSection'
import { news } from '../data/siteContent'

function BlogDetail() {
  const { id } = useParams()
  const blog = news.find((item) => item.id === id)

  if (!blog) {
    return <Navigate to="/blogs" replace />
  }

  const relatedBlogs = news.filter((item) => item.id !== blog.id).slice(0, 2)

  return (
    <main className="bg-white">
      <section
        className="relative min-h-[520px] overflow-hidden bg-cover bg-center px-6 py-24 text-white lg:min-h-[680px] lg:py-36"
        style={{ backgroundImage: `url(${blog.image})` }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto flex min-h-[360px] w-full max-w-[1180px] flex-col justify-end lg:min-h-[430px]">
          <Link className="mb-10 inline-flex w-fit items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-white" to="/blogs">
            <ArrowLeft size={16} /> Blogs
          </Link>
          <span className="mb-5 inline-flex w-fit items-center gap-2 bg-[var(--color-accent)] px-5 py-3 text-xs font-extrabold uppercase tracking-wide">
            <CalendarDays size={15} /> {blog.date}
          </span>
          <h1 className="max-w-[920px] text-[2.4rem] font-extrabold leading-tight sm:text-5xl lg:text-[4.5rem]">
            {blog.title}
          </h1>
          <p className="mt-7 max-w-3xl text-base font-semibold leading-8 text-white sm:text-lg">{blog.excerpt}</p>
        </div>
      </section>

      <section className="min-h-[220svh] px-6 py-20 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1180px] gap-12 lg:grid-cols-[1fr_340px]">
          <article className="space-y-14">
            {blog.sections.map((section) => (
              <section className="border-b border-[var(--color-line)] pb-14 last:border-0" key={section.heading}>
                <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  Sri Adiseshu Minerals
                </p>
                <h2 className="mb-6 text-3xl font-extrabold leading-tight text-[var(--color-ink)] lg:text-4xl">
                  {section.heading}
                </h2>
                <p className="text-lg leading-9 text-[var(--color-text)]">{section.body}</p>
              </section>
            ))}

            <section className="grid gap-6 bg-white p-8 sm:grid-cols-2 lg:p-10">
              {[
                'Direct quarry sourcing',
                'Consistent block selection',
                'Custom thickness support',
                'Bulk and export-ready supply',
              ].map((point) => (
                <div className="flex items-center gap-3 font-extrabold text-[var(--color-ink)]" key={point}>
                  <CheckCircle2 className="text-[var(--color-accent-strong)]" size={22} />
                  {point}
                </div>
              ))}
            </section>
          </article>

          <aside className="lg:sticky lg:top-36 lg:h-fit">
            <div className="bg-[var(--color-deep)] p-8 text-white">
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                Need Granite?
              </p>
              <h2 className="text-3xl font-extrabold leading-tight">Plan your next Absolute Black granite order.</h2>
              <p className="mt-5 leading-8 text-white/80">
                Share your quantity, size, finish, and delivery requirement. Our team can guide you from quarry selection
                to dispatch.
              </p>
              <Link className="premium-hover-button mt-7 inline-flex min-h-14 items-center justify-center gap-2 px-6 font-extrabold uppercase" to="/contact">
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-8 border border-[var(--color-line)] p-8">
              <h2 className="mb-6 text-2xl font-extrabold text-[var(--color-ink)]">Recommended Blogs</h2>
              <div className="space-y-6">
                {relatedBlogs.map((item) => (
                  <Link
                    className="group grid grid-cols-[5.5rem_1fr] gap-4 border-b border-[var(--color-line)] pb-5 transition last:border-0 hover:text-[var(--color-accent)]"
                    key={item.id}
                    to={`/blogs/${item.id}`}
                  >
                    <img className="aspect-square w-full object-cover" src={item.image} alt={item.title} loading="lazy" decoding="async" />
                    <span>
                      <span className="text-xs font-extrabold uppercase tracking-wide text-[var(--color-accent)]">
                        {item.date}
                      </span>
                      <span className="mt-2 block font-extrabold leading-6 text-[var(--color-ink)] transition group-hover:text-[var(--color-accent)]">
                        {item.title}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
      <FaqSection />
    </main>
  )
}

export default BlogDetail
