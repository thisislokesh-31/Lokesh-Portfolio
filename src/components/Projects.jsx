const projects = [
  {
    title: "Noir E-Commerce",
    role: "Lead Developer",
    desc: "A boutique storefront with seamless transitions and a brutalist, typography-heavy design. Built for high performance and visual impact.",
    tags: ["React", "Tailwind", "Framer Motion"]
  },
  {
    title: "Sepia Social",
    role: "Full-Stack Engineer",
    desc: "A social network for vintage photography enthusiasts. Features real-time chat, film grain filters, and chronological feeds.",
    tags: ["Next.js", "PostgreSQL", "WebSockets"]
  },
  {
    title: "The Grand Budapest API",
    role: "Backend Architect",
    desc: "A RESTful API serving curated color palettes and cinematic data for frontend developers aiming for a specific aesthetic.",
    tags: ["Node.js", "Express", "MongoDB"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 film-grain relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-marathon text-5xl text-cream mb-16 text-center">Featured Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative border border-muted-gold/20 p-8 hover:border-muted-gold/60 transition-colors duration-500 bg-espresso/50 flex flex-col h-full">
              <div className="absolute top-0 left-0 w-full h-full bg-rust/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <h3 className="font-marathon text-2xl text-muted-gold mb-2">{project.title}</h3>
              <p className="text-rust text-xs uppercase tracking-[0.15em] mb-6">{project.role}</p>
              <p className="text-cream/70 text-sm leading-relaxed mb-8 flex-grow">{project.desc}</p>
              
              <div className="flex flex-wrap gap-3 mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs text-cream/50 uppercase tracking-wider border-b border-cream/20 pb-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
