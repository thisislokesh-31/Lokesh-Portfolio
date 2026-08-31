export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative film-grain">
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#12100E_100%)] pointer-events-none opacity-80"></div>
      
      <div className="text-center z-10 px-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-8">
          <img 
            src="/profile.png" 
            alt="Lokesh Yarramsetti" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-muted-gold/50 sepia-[.3] contrast-125 shadow-[0_0_30px_rgba(212,175,55,0.15)]"
          />
          <div className="text-center md:text-left">
            <p className="text-rust tracking-[0.3em] uppercase text-sm mb-2 font-medium">Data Scientist</p>
            <h1 className="font-marathon text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-cream drop-shadow-2xl leading-none">
              LOKESH<br className="hidden md:block" /> YARRAMSETTI
            </h1>
          </div>
        </div>
        <p className="max-w-xl mx-auto text-cream/70 text-lg md:text-xl font-light leading-relaxed">
          B.Tech CSE (Data Science) | Aspiring Data Scientist | Machine Learning | Python | Data Analytics | Building Data-Driven Solutions
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
          <a href="#projects" className="border border-muted-gold text-muted-gold px-10 py-4 uppercase tracking-[0.2em] text-xs hover:bg-muted-gold hover:text-espresso transition-all duration-500 font-bold">
            View Projects
          </a>
          <a href="#contact" className="border border-transparent text-cream px-10 py-4 uppercase tracking-[0.2em] text-xs hover:border-cream/30 transition-all duration-500">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
