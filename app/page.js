import {
  About,
  Contact,
  HeroSection,
  Navbar,
  GithubActivity,
  JourneySection,
  StatsBar,
  BeyondCode,
  CareerSection,
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
      <StatsBar />
      <BeyondCode />
      <CareerSection />
      <Contact />
      <Footer />
      <ScrollToTopButton />
      {/* <Services /> */}
    </>
  );
}
