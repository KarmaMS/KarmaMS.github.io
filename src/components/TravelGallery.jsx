import CircularGallery from "../components/ui/CircularGallery";

export const TravelGallery = () => {
  return (
    <section id="travel-gallery" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          A <span className="text-glow">Journey</span> Through My Adventures
        </h2>

        {/* Subheading */}
        <h3 className="text-muted-foreground mb-12">
          Exploring and capturing cultures, places, and moments that inspire me!
        </h3>

        {/* Gallery */}
        <div style={{ height: "600px", position: "relative" }}>
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