import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      
      {/* --- BIG, SMOOTH NAVIGATION --- */}
      <nav className="w-full pt-12 pb-6 px-8 flex justify-center items-center gap-8 md:gap-16 text-lg md:text-2xl font-light tracking-wide">
        <Link 
          href="/" 
          className="relative group py-2"
        >
          <span className="text-[#38220f] font-medium">Profile</span>
          {/* Smooth animated underline */}
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#38220f] scale-x-100 transition-transform duration-300 ease-out"></span>
        </Link>
        
        <Link 
          href="/portfolio" 
          className="relative group py-2 text-[#634832] hover:text-[#38220f] transition-colors duration-300"
        >
          <span>Portfolio</span>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#38220f] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
        </Link>

        <Link 
          href="/contact" 
          className="relative group py-2 text-[#634832] hover:text-[#38220f] transition-colors duration-300"
        >
          <span>Contact</span>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#38220f] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
        </Link>
      </nav>

      {/* --- MAIN PROFILE CONTENT --- */}
      <main className="max-w-4xl mx-auto mt-24 px-8 flex flex-col items-center text-center animate-fade-in-up">
        
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-[#38220f] mb-6">
          Hi, I'm Luthfillah.
        </h1>
        
        <p className="text-xl md:text-2xl text-[#634832] font-light max-w-2xl mb-12 leading-relaxed">
          A passionate developer building digital experiences. Welcome to my personal slice of the internet.
        </p>

        {/* --- SOCIAL LINKS --- */}
        <div className="flex gap-6">
          {/* GitHub Button */}
          <a 
            href="https://github.com/luthfillah31" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center p-4 border border-[#dbc1ac] rounded-full text-[#634832] hover:text-[#ece0d1] hover:bg-[#967259] hover:border-[#967259] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7a4.6 4.6 0 0 0-1.39-3.2 4.6 4.6 0 0 0 .14-3.1s-1.14-.36-3.4 1.18a11.8 11.8 0 0 0-6 0C7.14 1.36 6 1.72 6 1.72a4.6 4.6 0 0 0 .14 3.1 4.6 4.6 0 0 0-1.39 3.2c0 5.6 3.35 6.62 6.5 7A4.8 4.8 0 0 0 10 18v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>

          {/* LinkedIn Button */}
          <a 
            href="https://linkedin.com/in/luthfillahakhtarfakhrudin" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center p-4 border border-[#dbc1ac] rounded-full text-[#634832] hover:text-[#ece0d1] hover:bg-[#967259] hover:border-[#967259] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </main>

    </div>
  );
}