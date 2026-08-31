export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-cocoa/50 border-t border-muted-gold/20 film-grain relative">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-marathon text-5xl text-cream mb-6">Fin.</h2>
        <p className="text-cream/60 mb-12">
          Ready to build data-driven solutions? Let's connect.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          <a href="mailto:lokeshyarramsetti2@gmail.com" className="border border-muted-gold text-espresso bg-muted-gold px-8 py-4 uppercase tracking-[0.2em] text-xs hover:bg-transparent hover:text-muted-gold transition-all duration-500 font-bold">
            Send an Email
          </a>
          <a href="/resume.pdf" download className="border border-rust text-rust px-8 py-4 uppercase tracking-[0.2em] text-xs hover:bg-rust hover:text-espresso transition-all duration-500 font-bold flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Download Resume
          </a>
        </div>
        
        <div className="flex justify-center space-x-8 text-sm uppercase tracking-widest text-cream/40">
          <a href="https://github.com/thisislokesh-31" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors duration-300">GitHub</a>
          <a href="https://www.linkedin.com/in/lokesh-yarramsetti-8a2591376/" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors duration-300">LinkedIn</a>
          <a href="https://x.com/thisislokesh_31" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors duration-300">X (Twitter)</a>
        </div>
        
        <p className="mt-16 text-xs text-cream/30 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Lokesh Yarramsetti. All rights reserved.
        </p>
      </div>
    </section>
  );
}
