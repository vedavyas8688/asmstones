import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import FloatingContact from './components/layout/FloatingContact'
import ContactPopup from './components/layout/ContactPopup'
import ScrollToTop from './components/layout/ScrollToTop'
import SeoManager from './components/seo/SeoManager'
import About from './pages/About'
import BlogDetail from './pages/BlogDetail'
import Blogs from './pages/Blogs'
import ContactUs from './pages/ContactUs'
import FAQ from './pages/FAQ'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import Quarries from './pages/Quarries'
import QuarryDetail from './pages/QuarryDetail'
import Services from './pages/Services'

function App() {
  return (
    <BrowserRouter>
      <SeoManager />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/quarries" element={<Quarries />} />
        <Route path="/quarries/:id" element={<QuarryDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <ContactPopup />
      <FloatingContact />
      <Footer />
    </BrowserRouter>
  )
}

export default App
