import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import Homepage from "@/features/home/Homepage";
import ProductPage from "@/features/product/ProductPage";
import EmsPage from "@/features/product/EmsPage";
import BuildFlexPage from "@/features/buildflex/BuildFlexPage";
import WorkPage from "@/features/work/WorkPage";
import AboutPage from "@/features/about/AboutPage";
import CareerPage from "@/features/career/CareerPage";
import BlogPage from "@/features/blog/BlogPage";
import SingleBlogPage from "@/features/singleBlog/SingleBlogPage";
import BookCallPage from "@/features/book/BookCallPage";
import OlecPage from "@/features/olec/OlecPage";
import { captureAttribution } from "@/config/attribution";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // Links like /buildflex#apply land on the section instead of the top of the page.
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

const NotFound = () => (
  <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-24">
    <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">404</p>
    <h1 className="text-3xl font-bold text-ink-900">Page not found</h1>
  </main>
);

function App() {
  useEffect(() => {
    captureAttribution();
  }, []);

  return (
    <>
      <ScrollToTop />
      <Toaster position="bottom-right" />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/ems" element={<EmsPage />} />
        <Route path="/buildflex" element={<BuildFlexPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<SingleBlogPage />} />
        <Route path="/book" element={<BookCallPage />} />
        <Route path="/olec" element={<OlecPage />} />
        {/* The old contact form is replaced by the scoping-call booking. */}
        <Route path="/contact" element={<Navigate to="/book?source=contact-redirect" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
