export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-espresso/90 backdrop-blur-md border-b border-muted-gold/10">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <a href="#hero" className="font-marathon text-3xl md:text-4xl text-muted-gold tracking-widest">LOKESH'S PORTFOLIO</a>
        <div className="hidden md:flex space-x-8 text-xs uppercase tracking-[0.2em] font-medium text-cream/80">
          <a href="#about" className="hover:text-muted-gold transition-colors duration-300">About</a>
          <a href="#skills" className="hover:text-muted-gold transition-colors duration-300">Skills</a>
          <a href="#projects" className="hover:text-muted-gold transition-colors duration-300">Projects</a>
          <a href="#contact" className="hover:text-muted-gold transition-colors duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
}
