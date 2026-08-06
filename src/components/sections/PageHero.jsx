function PageHero({ title, image }) {
  return (
    <section
      className="relative grid min-h-[15rem] place-items-center overflow-hidden bg-cover bg-center md:min-h-[20rem] xl:min-h-[22rem]"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className="relative z-10 text-3xl font-extrabold text-white md:text-5xl">
        {title}
      </h1>
    </section>
  )
}

export default PageHero
