import ContactSection from "../components/sections/ContactSection";
import FaqSection from "../components/sections/FaqSection";
import HeroSection from "../components/sections/HeroSection";
import NewsSection from "../components/sections/NewsSection";
import QuarryFeatureSection from "../components/sections/QuarryFeatureSection";
import QuarryGallerySection from "../components/sections/QuarryGallerySection";
import ServicesSection from "../components/sections/ServicesSection";
import VideoSection from "../components/sections/VideoSection";
import WhyChooseSection from "../components/sections/WhyChooseSection";

function Home() {
  return (
    <main>
      <HeroSection />
      <QuarryFeatureSection />
      <ServicesSection />
      <VideoSection />
      <WhyChooseSection />
      <NewsSection />

      <QuarryGallerySection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}

export default Home;
