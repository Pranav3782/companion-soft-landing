const ImageStorySection = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container px-4 lg:px-8">
        <div className="relative max-w-5xl mx-auto rounded-4xl overflow-hidden shadow-medium animate-fade-up">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2832&auto=format&fit=crop"
            alt="People connecting authentically"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-card">
              Because{" "}
              <span className="italic">real</span> connections
              <br />
              happen in <span className="italic">real</span> life
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageStorySection;
