import CircularGallery from "../components/ui/CircularGallery";
import Galaxy from "../components/ui/Galaxy";

export const TravelGallery = () => {
  return (
    <section
      id="travel-gallery"
      className="py-24 px-4 relative overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Softer Galaxy Background */}
      <div className="absolute inset-0 z-0 opacity-70 blur-sm">
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={0.8}       // lighter density
          glowIntensity={0.3} // softer glow
          saturation={0.5}    // less color saturation
          hueShift={220}      // keep cooler tones
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center">
        {/* Heading (centered, capped width) */}
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A <span className="text-glow">Journey</span> Through My Adventures
          </h2>

          <h3 className="text-muted-foreground mb-12">
            Exploring and capturing cultures, places, and moments that inspire me!
          </h3>
        </div>

        {/* Full-width Circular Gallery */}
        <div
          style={{
            height: "600px",
            position: "relative",
            marginBottom: "100px",
            width: "100vw",
          }}
        >
          <CircularGallery
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </div>
    </section>
  );
};