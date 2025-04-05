import {
  About,
  Contact,
  HeroSection,
  Navbar,
  Portfolio,
  Services,
  Footer,
} from "./components";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
