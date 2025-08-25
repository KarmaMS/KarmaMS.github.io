import CircularGallery from "../components/ui/CircularGallery";
import RollingGallery from "../components/ui/RollingGallery";
import Galaxy from "../components/ui/Galaxy";

export const TravelGallery = () => {
  return (
    <section
      id="travel-gallery"
      className="py-24 px-4 relative overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Galaxy Background */}
      <div className="absolute inset-0 z-0">
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5}
          glowIntensity={0.5}
          saturation={0.8}
          hueShift={240}
        />
      </div>

      {/* Foreground Content */}
      <div className="container mx-auto max-w-6xl text-center relative z-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          A <span className="text-glow">Journey</span> Through My Adventures
        </h2>

        {/* Subheading */}
        <h3 className="text-muted-foreground mb-12">
          Exploring and capturing cultures, places, and moments that inspire me!
        </h3>

        {/* Circular Gallery */}
        <div style={{ height: "600px", position: "relative", marginBottom: "100px" }}>
          <CircularGallery
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>

        {/* Rolling Gallery */}
        <div style={{ height: "600px", position: "relative" }}>
          <RollingGallery autoplay={true} pauseOnHover={true} />
        </div>
      </div>
    </section>
  );
};