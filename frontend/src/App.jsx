
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PackageSection from "./components/PackageSection";
import PackageCategory from "./pages/PackageCategory";
import PackageDetails from "./pages/PackageDetails";
import NotFound from "./pages/NotFound";
import AboutSection from "./components/AboutSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";

function Home() {
  return (
    <>
    <main>
      <Hero />
      <PackageSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
    </main>
    <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/packages/:category"
          element={<PackageCategory />}
        />

        <Route
          path="/packages/:category/:packageId"
          element={<PackageDetails />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
