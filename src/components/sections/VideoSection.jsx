import quarryVideo from '../../assets/images/VID20260727131231.mp4'

function VideoSection() {
  return (
    <section className="grid place-items-center bg-white px-5 py-20 lg:py-28">
      <video
        className="aspect-video w-full max-w-[1280px] border border-[var(--color-line)] bg-black object-cover shadow-[var(--shadow-premium)]"
        src={quarryVideo}
        aria-label="Close view of Absolute Black granite texture"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    </section>
  )
}

export default VideoSection
