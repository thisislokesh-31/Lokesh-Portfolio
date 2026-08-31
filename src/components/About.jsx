export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-cocoa/30 border-y border-muted-gold/10 film-grain relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-marathon text-4xl md:text-5xl text-muted-gold mb-8">About Me</h2>
        <p className="text-cream/80 text-lg leading-relaxed mb-6">
          I am a passionate and dedicated B.Tech Computer Science (Data Science) student with a strong interest in Data Science, Artificial Intelligence, Machine Learning, and Software Development. I enjoy solving real-world problems through technology and continuously improving my technical skills by working on projects and learning modern tools.
        </p>
        <p className="text-cream/80 text-lg leading-relaxed mb-6">
          I have knowledge of Python, Java, SQL, HTML, CSS, JavaScript, Data Structures &amp; Algorithms, Object-Oriented Programming (OOP), and Data Analysis. I am always eager to learn new technologies, collaborate with teams, and build innovative solutions.
        </p>
        <p className="text-cream/80 text-lg leading-relaxed mb-10">
          I am currently seeking internship opportunities where I can apply my knowledge, gain industry experience, and contribute to meaningful projects while growing as a software and data professional.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left border-t border-muted-gold/20 pt-10">
          <div>
            <h4 className="font-marathon text-rust text-3xl mb-3">Languages</h4>
            <ul className="text-cream/60 space-y-2 text-sm tracking-wide">
              <li>Python</li>
              <li>Java Basics</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>NumPy</li>
              <li>Pandas</li>
            </ul>
          </div>
          <div>
            <h4 className="font-marathon text-rust text-3xl mb-3">Frameworks</h4>
            <ul className="text-cream/60 space-y-2 text-sm tracking-wide">
              <li>React</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div>
            <h4 className="font-marathon text-rust text-3xl mb-3">Tools</h4>
            <ul className="text-cream/60 space-y-2 text-sm tracking-wide">
              <li>Tableau</li>
              <li>Power BI</li>
              <li>Google Collab</li>
            </ul>
          </div>
          <div>
            <h4 className="font-marathon text-rust text-3xl mb-3">Concepts</h4>
            <ul className="text-cream/60 space-y-2 text-sm tracking-wide">
              <li>Object-Oriented Programming(OOP)</li>
              <li>Database Management System(DBMS)</li>
              <li>Data Structures</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
