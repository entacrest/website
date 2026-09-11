import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import Homepage from "@/features/home/Homepage";
import ProductPage from "@/features/product/ProductPage";
import WorkPage from "@/features/work/WorkPage";
import AboutPage from "@/features/about/AboutPage";
import CareerPage from "@/features/career/CareerPage";
import BlogPage from "@/features/blog/BlogPage";
import SingleBlogPage from "@/features/singleBlog/SingleBlogPage";
import ContactPage from "@/features/contact/ContactPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const NotFound = () => (
  <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-24">
    <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">404</p>
    <h1 className="text-3xl font-bold text-ink-900">Page not found</h1>
  </main>
);

function App() {
  return (
    <>
      <ScrollToTop />
      <Toaster position="bottom-right" />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<SingleBlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
