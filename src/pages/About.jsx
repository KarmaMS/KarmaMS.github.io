import { ThemeToggle } from "../components/ThemeToggle";
import { CustomBackground } from "../components/CustomBackground";
import { NavBar } from "../components/NavBar";
import { AboutHero } from "../components/AboutHero";
import { TravelGallery } from "../components/TravelGallery";
import { Footer } from "../components/Footer";

export const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NavBar />
      <CustomBackground />
      <ThemeToggle />

      <main>
        <AboutHero />
        <TravelGallery />
      </main>

      <Footer />
    </div>
  );
};