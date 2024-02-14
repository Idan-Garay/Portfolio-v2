import styles from "./page.module.css";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <AboutSection/>
    </main>
  );
}
