import { About, HeroSection, Navbar, Portfolio, Services } from "./components";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Portfolio />
    </>
  );
}
