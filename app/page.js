import {
  About,
  Contact,
  HeroSection,
  Navbar,
  GithubActivity,
  JourneySection,
  StatsBar,
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
      {/* <Services /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
      {/* <ScrollToTopButton /> */}
    </>
  );
}
