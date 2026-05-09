import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen pb-20">
      
      {/* --- NAVIGATION --- */}
      <nav className="w-full pt-12 pb-6 px-8 flex justify-center items-center gap-8 md:gap-16 text-lg md:text-2xl font-light tracking-wide">
        <Link href="/" className="relative group py-2">
          <span className="text-[#38220f] font-medium">Profile</span>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#38220f] scale-x-100 transition-transform duration-300 ease-out"></span>
        </Link>
        <Link href="/portofolio" className="relative group py-2 text-[#634832] hover:text-[#38220f] transition-colors duration-300">
          <span>Portfolio</span>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#38220f] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
        </Link>
        <Link href="/contact" className="relative group py-2 text-[#634832] hover:text-[#38220f] transition-colors duration-300">
          <span>Contact</span>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#38220f] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
        </Link>
      </nav>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <main className="max-w-5xl mx-auto mt-16 px-8 flex flex-col gap-24">
        
        {/* 1. HERO SECTION */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-[#38220f] mb-6">
              Hi, I'm Luthfi.
            </h1>
            <p className="text-xl md:text-2xl text-[#634832] font-light max-w-xl mb-10 leading-relaxed">
              I transform complex data into actionable insights and engineer intelligent systems that solve real-world problems.
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-6">
              <a href="https://github.com/luthfillah31" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 border border-[#dbc1ac] rounded-full text-[#634832] hover:text-[#ece0d1] hover:bg-[#967259] hover:border-[#967259] hover:-translate-y-1 transition-all duration-300 shadow-sm" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7a4.6 4.6 0 0 0-1.39-3.2 4.6 4.6 0 0 0 .14-3.1s-1.14-.36-3.4 1.18a11.8 11.8 0 0 0-6 0C7.14 1.36 6 1.72 6 1.72a4.6 4.6 0 0 0 .14 3.1 4.6 4.6 0 0 0-1.39 3.2c0 5.6 3.35 6.62 6.5 7A4.8 4.8 0 0 0 10 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 border border-[#dbc1ac] rounded-full text-[#634832] hover:text-[#ece0d1] hover:bg-[#967259] hover:border-[#967259] hover:-translate-y-1 transition-all duration-300 shadow-sm" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Abstract Shape / Placeholder for your actual photo */}
          <div className="w-64 h-64 md:w-80 md:h-80 shrink-0 bg-gradient-to-tr from-[#dbc1ac]/40 to-transparent rounded-full border border-[#dbc1ac] flex items-center justify-center text-[#967259] shadow-inner">
            <span className="opacity-50 text-sm tracking-widest">[YOUR PHOTO HERE]</span>
          </div>
        </section>

        {/* 2. ABOUT & SKILLS SECTION */}
        <section className="grid md:grid-cols-2 gap-16 border-t border-[#dbc1ac]/50 pt-16">
          
          {/* About Me Text */}
          <div>
            <h2 className="text-3xl font-semibold text-[#38220f] mb-6">My Story</h2>
            <div className="space-y-4 text-[#634832] leading-relaxed">
              <p>
                I am a Data Science graduate and a dedicated Data and AI enthusiast with a deep love for solving complex problems. I thrive on turning raw, unstructured data into intelligent, scalable solutions.
              </p>
              <p>
                My experience spans across the entire data pipeline. From building analytics and automation tools to researching Large Language Models and computer vision systems, I specialize in engineering end-to-end systems that deliver real-world impact.
              </p>
              <p>
                When I'm not writing code or analyzing trends, you can usually find me brewing the perfect cup of coffee or exploring new tech stacks.
              </p>
            </div>
          </div>

          {/* Core Technologies / Skills Tags */}
          <div>
            <h2 className="text-3xl font-semibold text-[#38220f] mb-6">Core Arsenal</h2>
            <div className="flex flex-wrap gap-3">
              {/* You can easily add or remove skills from this list! */}
              {[
                "Python", "SQL", "Next.js", "React", "TypeScript", 
                "Power BI", "Machine Learning", "Streamlit","Langchain", 
                "Pandas", "Scikit-Learn", "Tailwind CSS", "Git"
              ].map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 border border-[#dbc1ac] rounded-full text-sm font-medium text-[#634832] bg-white/40 shadow-sm hover:border-[#967259] hover:text-[#38220f] hover:bg-[#dbc1ac]/20 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
            
          </div>

        </section>

      </main>
    </div>
  );
}