import { ArrowRight, CalendarDays } from 'lucide-react'
import { Link } from 'react-router-dom'
import { news } from '../../data/siteContent'

function NewsSection({ showAction = true }) {
  return (
    <section className="bg-white px-6 py-20 lg:py-32">
      <div className="mx-auto mb-9 grid w-full max-w-[1280px] items-start gap-8 lg:grid-cols-[1fr_minmax(18rem,36rem)_auto]">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-accent)] sm:text-sm">
            Latest Blogs
          </p>
          <h2 className="text-[2rem] font-bold leading-tight text-[var(--color-ink)] sm:text-5xl">Our latest blogs</h2>
        </div>
        <p className="max-w-xl leading-8 text-[var(--color-text)]">
          Stay updated with industry trends, quarry insights, and practical guides to choosing the best granite.
        </p>
        {showAction && (
          <Link
            className="premium-hover-button inline-flex min-h-16 items-center justify-center gap-3 px-8 font-extrabold uppercase"
            to="/blogs"
          >
            View More <ArrowRight size={16} />
          </Link>
        )}
      </div>
      <div className="mx-auto grid w-full max-w-[1280px] gap-8 md:grid-cols-2 lg:grid-cols-3" id="news">
        {news.map((item) => (
          <article className="relative bg-white shadow-[var(--shadow-premium)]" key={item.title}>
            <Link to={`/blogs/${item.id}`} aria-label={item.title}>
              <img className="h-64 w-full object-cover transition duration-500 hover:scale-[1.02] lg:h-72" src={item.image} alt={item.title} decoding="async" />
            </Link>
            <span className="absolute right-0 top-56 inline-flex items-center gap-2 bg-[var(--color-accent)] px-5 py-4 text-xs font-extrabold uppercase tracking-wide text-white lg:top-64">
              <CalendarDays size={15} /> {item.date}
            </span>
            <div className="px-7 pb-8 pt-16">
              <h3 className="mb-4 text-2xl font-extrabold leading-tight text-[var(--color-ink)]">
                <Link className="transition hover:text-[var(--color-accent)]" to={`/blogs/${item.id}`}>
                  {item.title}
                </Link>
              </h3>
              <p className="leading-8 text-[var(--color-text)]">{item.excerpt}</p>
              <Link className="mt-5 inline-flex items-center gap-2 font-extrabold uppercase text-[var(--color-ink)] transition hover:text-[var(--color-accent)]" to={`/blogs/${item.id}`}>
                Read More <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default NewsSection
