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
      <Portfolio />
      {/* <About /> */}
      {/* <Services /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
      <ScrollToTopButton />
    </>
  );
}
