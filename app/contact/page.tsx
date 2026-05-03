import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen">
      
      {/* --- NAVIGATION (Notice 'Contact' is now the active link) --- */}
      <nav className="w-full pt-12 pb-6 px-8 flex justify-center items-center gap-8 md:gap-16 text-lg md:text-2xl font-light tracking-wide">
        <Link href="/" className="relative group py-2 text-[#634832] hover:text-[#38220f] transition-colors duration-300">
          <span>Profile</span>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#38220f] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
        </Link>
        
        <Link href="/portofolio" className="relative group py-2 text-[#634832] hover:text-[#38220f] transition-colors duration-300">
          <span>Portfolio</span>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#38220f] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
        </Link>

        <Link href="/contact" className="relative group py-2">
          <span className="text-[#38220f] font-medium">Contact</span>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#38220f] scale-x-100 transition-transform duration-300 ease-out"></span>
        </Link>
      </nav>

      {/* --- CONTACT CONTENT --- */}
      <main className="max-w-2xl mx-auto mt-24 px-8 flex flex-col items-center text-center">
        
        <h1 className="text-5xl font-medium tracking-tight text-[#38220f] mb-6">
          Let's Work Together
        </h1>
        
        <p className="text-xl text-[#634832] font-light mb-12 leading-relaxed">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        {/* Big Email Button */}
        <a 
          href="mailto:your.email@example.com" 
          className="bg-[#38220f] text-[#ece0d1] text-lg px-8 py-4 rounded-full hover:bg-[#634832] hover:-translate-y-1 transition-all duration-300 shadow-md flex items-center gap-3"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          Say Hello
        </a>

      </main>
    </div>
  );
}