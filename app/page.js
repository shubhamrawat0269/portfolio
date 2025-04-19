import {
  About,
  Contact,
  HeroSection,
  Navbar,
  Portfolio,
  Services,
  Footer,
  ScrollToTopButton,
} from "@/app/components";

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
      <ScrollToTopButton />
    </>
  );
}
