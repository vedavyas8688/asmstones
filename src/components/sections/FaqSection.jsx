import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { faqs } from '../../data/siteContent'

function FaqSection({ columns = false }) {
  const [openIndex, setOpenIndex] = useState(0)
  const visibleFaqs = columns ? faqs : faqs.slice(0, 6)

  return (
    <section className="bg-[var(--color-paper)] px-6 py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-[1320px] gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div>
          <h2 className="text-[4rem] font-extrabold leading-none text-[var(--color-ink)] sm:text-[5.5rem] lg:text-[6rem]">
            FAQs
          </h2>
          <p className="mt-8 max-w-md text-lg leading-8 text-[var(--color-text)]">
            We understand that choosing the right Absolute Black granite supplier raises questions about quality,
            delivery, finishes, and order planning.
          </p>
          <Link
            className="premium-hover-button mt-10 inline-flex min-h-14 items-center justify-center gap-7 rounded-full px-8 font-extrabold shadow-2xl"
            to="/contact"
          >
            Get started <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid gap-4">
          {visibleFaqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <article
                className={`transition duration-300 ${
                  isOpen ? 'bg-[var(--color-accent)] text-white' : 'bg-white text-black'
                }`}
                key={faq.question}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex min-h-[92px] w-full items-center justify-between gap-5 px-7 py-6 text-left text-lg font-extrabold sm:text-xl"
                >
                  <span>
                    {index + 1}. {faq.question}
                  </span>
                  {isOpen ? <ChevronUp className="shrink-0" size={22} /> : <ChevronDown className="shrink-0" size={22} />}
                </button>
                <div
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="min-h-0">
                    <p className="px-7 pb-8 text-base leading-8 text-white/90">{faq.answer}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
