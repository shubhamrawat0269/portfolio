import {
  About,
  Contact,
  HeroSection,
  Navbar,
  GithubActivity,
  JourneySection,
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
      <GithubActivity />
      <About />
      <JourneySection />
      {/* <Services /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
      {/* <ScrollToTopButton /> */}
    </>
  );
}
