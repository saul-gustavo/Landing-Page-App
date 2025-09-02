import Hero from "./components/Hero";
import About from "./components/About";
import FAQs from "./components/FAQs";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
function App() {
  return (
    <main className="bg-main-bg">
      <Hero />
      <About />
      <FAQs />
      <CTA />
      <Footer />
    </main>
  );
}

export default App;
