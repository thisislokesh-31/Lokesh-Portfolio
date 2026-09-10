const projects = [
  {
    title: "AICTE-VOIS-Data-Analytics-Project",
    role: "Data Analyst",
    desc: "Completed as part of my AICTE & VOIS internship in Data Analytics. Explored and analyzed a car dataset including data exploration, descriptive statistics, missing-value checking, and visualization of car names and fuel types.",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
    github: "https://github.com/thisislokesh-31/AICTE-VOIS-Data-Analytics-Project"
  },
  {
    title: "Sales & Demand Forecasting using Machine Learning",
    role: "Machine Learning Engineer",
    desc: "This project focuses on predicting future sales and demand using machine learning techniques. By analyzing historical retail sales data, the system helps businesses make data-driven decisions related to inventory management, demand planning, and revenue forecasting.",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Jupyter Notebook"],
    github: "https://github.com/thisislokesh-31/Sales_Demand_Forecasting"
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
              
              {project.github && (
                <div className="mt-6 pt-6 border-t border-muted-gold/10">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-gold hover:text-cream transition-colors duration-300 inline-flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    View on GitHub
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
