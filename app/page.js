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
  Footer,
  ScrollToTopButton,
  Projects,
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
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
