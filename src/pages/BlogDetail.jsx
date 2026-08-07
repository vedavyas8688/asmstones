import { ArrowLeft, ArrowRight, CalendarDays, CheckCircle2 } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import FaqSection from '../components/sections/FaqSection'
import { news } from '../data/siteContent'

function slugifyHeading(text) {
  return text
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function renderLinkedText(text, links = []) {
  if (!links.length) {
    return text
  }

  const parts = []
  let cursor = 0

  links.forEach((link) => {
    const index = text.indexOf(link.label, cursor)
    if (index === -1) {
      return
    }

    if (index > cursor) {
      parts.push(text.slice(cursor, index))
    }

    parts.push(
      <Link className="font-extrabold text-[var(--color-accent)] underline-offset-4 hover:underline" key={`${link.to}-${index}`} to={link.to}>
        {link.label}
      </Link>,
    )
    cursor = index + link.label.length
  })

  if (cursor < text.length) {
    parts.push(text.slice(cursor))
  }

  return parts
}

function renderBlogBlock(block) {
  if (block.type === 'paragraph') {
    return <p className="text-lg leading-9 text-[var(--color-text)]">{renderLinkedText(block.text, block.links)}</p>
  }

  if (block.type === 'list') {
    return (
      <ul className="space-y-4 text-lg leading-9 text-[var(--color-text)]">
        {block.items.map((item) => (
          <li className="border-l-4 border-[var(--color-accent)] pl-5" key={item.title || item.label || item}>
            {item.to ? (
              <Link className="font-extrabold text-[var(--color-accent)] underline-offset-4 hover:underline" to={item.to}>
                {item.title || item.label}
              </Link>
            ) : item.title ? (
              <strong className="block text-[var(--color-ink)]">{item.title}</strong>
            ) : null}
            {item.description ? renderLinkedText(item.description, item.links) : item.to ? null : item}
          </li>
        ))}
      </ul>
    )
  }

  if (block.type === 'table') {
    return (
      <div className="overflow-x-auto border border-[var(--color-line)]">
        <table className="w-full min-w-[720px] border-collapse text-left text-base">
          <thead className="bg-black text-white">
            <tr>
              {block.headers.map((header) => (
                <th className="border border-black px-5 py-4 font-extrabold" key={header}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row) => (
              <tr className="border-t border-[var(--color-line)]" key={row.join('-')}>
                {row.map((cell) => (
                  <td className="border border-[var(--color-line)] px-5 py-4 leading-7" key={cell}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  if (block.type === 'faq') {
    return (
      <div className="grid gap-5">
        {block.items.map((item) => (
          <div className="border border-[var(--color-line)] p-6" key={item.question}>
            <h3 className="text-xl font-extrabold text-[var(--color-ink)]">{item.question}</h3>
            <p className="mt-3 leading-8 text-[var(--color-text)]">{item.answer}</p>
          </div>
        ))}
      </div>
    )
  }

  return null
}

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
        className="relative h-[70svh] min-h-[420px] max-h-[680px] overflow-hidden bg-cover bg-center px-6 py-16 text-white lg:py-20"
        style={{ backgroundImage: `url(${blog.image})` }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1180px] flex-col justify-end">
          <Link className="mb-6 inline-flex w-fit items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-white" to="/blogs">
            <ArrowLeft size={16} /> Blogs
          </Link>
          <span className="mb-5 inline-flex w-fit items-center gap-2 bg-[var(--color-accent)] px-5 py-3 text-xs font-extrabold uppercase tracking-wide">
            <CalendarDays size={15} /> {blog.date}
          </span>
          <h1 className="max-w-[820px] text-3xl font-extrabold leading-tight sm:text-4xl xl:text-[3.6rem]">
            {blog.title}
          </h1>
          {blog.subtitle ? (
            <p className="mt-4 max-w-2xl text-base font-extrabold leading-7 text-white lg:text-lg">{blog.subtitle}</p>
          ) : null}
          <p className="mt-6 max-w-2xl text-sm font-semibold leading-7 text-white sm:text-base">{blog.excerpt}</p>
        </div>
      </section>

      <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1180px] gap-12 lg:grid-cols-[1fr_340px]">
          <article className="space-y-14">
            {blog.tableOfContents ? (
              <section className="border border-[var(--color-line)] p-8">
                <h2 className="mb-5 text-2xl font-extrabold text-[var(--color-ink)]">Table of Contents</h2>
                <ol className="grid gap-3 text-lg font-bold text-[var(--color-text)] sm:grid-cols-2">
                  {blog.tableOfContents.map((item) => (
                    <li key={item}>
                      <a className="underline-offset-4 transition hover:text-[var(--color-accent)] hover:underline" href={`#${slugifyHeading(item)}`}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ol>
              </section>
            ) : null}

            {(blog.sections || []).map((section) => (
              <section className="scroll-mt-28 space-y-6 pb-14" id={slugifyHeading(section.heading)} key={section.heading}>
                <h2 className="text-3xl font-extrabold leading-tight text-[var(--color-ink)] lg:text-4xl">
                  {section.heading}
                </h2>
                {section.body ? <p className="text-lg leading-9 text-[var(--color-text)]">{section.body}</p> : null}
                {(section.blocks || []).map((block, index) => (
                  <div key={`${section.heading}-${index}`}>{renderBlogBlock(block)}</div>
                ))}
              </section>
            ))}

            {blog.author ? (
              <section className="border border-[var(--color-line)] p-8">
                <p className="font-extrabold text-[var(--color-ink)]">Author: {blog.author}</p>
                {blog.publishNote ? <p className="mt-3 leading-8 text-[var(--color-text)]">{blog.publishNote}</p> : null}
              </section>
            ) : null}

            {blog.hideDefaultChecklist ? null : (
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
            )}
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
      {blog.hideDefaultChecklist ? null : <FaqSection />}
    </main>
  )
}

export default BlogDetail
