"use client";

import Link from "next/link";
import { useState } from "react";

// --- DUMMY DATA FOR YOUR PROJECTS ---
// You can easily swap these out with your actual projects later!
const projects = [
  {
    id: 1,
    title: "Jakarta Housing Predictor",
    description: "An end-to-end machine learning project predicting real estate prices based on location and proximity to transit.",
    category: "Machine Learning",
    mediumLink: "#",
    appLink: "#"
  },
  {
    id: 2,
    title: "Q3 Sales Performance",
    description: "Interactive dashboard visualizing regional growth, customer churn, and product category trends.",
    category: "Power BI",
    mediumLink: "#",
    appLink: "#"
  },
  {
    id: 3,
    title: "Customer Segmentation",
    description: "Clustered e-commerce customers using K-Means to identify high-value demographics for marketing.",
    category: "Data Analysis",
    mediumLink: "#",
    appLink: "#"
  },
  {
    id: 4,
    title: "Supply Chain Forecasting",
    description: "Time-series forecasting model to predict inventory needs for the next 6 months to reduce warehouse costs.",
    category: "Machine Learning",
    mediumLink: "#",
    appLink: "#"
  }
];

// The filter options
const categories = ["All", "Power BI", "Machine Learning", "Data Analysis"];

export default function Portfolio() {
  // This state remembers which filter button is currently clicked
  const [activeFilter, setActiveFilter] = useState("All");

  // This filters the projects based on the button clicked
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      
      {/* --- NAVIGATION (Notice 'Portfolio' is now the active link) --- */}
      <nav className="w-full pt-12 pb-6 px-8 flex justify-center items-center gap-8 md:gap-16 text-lg md:text-2xl font-light tracking-wide">
        <Link href="/" className="relative group py-2 text-[#634832] hover:text-[#38220f] transition-colors duration-300">
          <span>Profile</span>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#38220f] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
        </Link>
        
        <Link href="/portfolio" className="relative group py-2">
          <span className="text-[#38220f] font-medium">Portfolio</span>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#38220f] scale-x-100 transition-transform duration-300 ease-out"></span>
        </Link>

        <Link href="/contact" className="relative group py-2 text-[#634832] hover:text-[#38220f] transition-colors duration-300">
          <span>Contact</span>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#38220f] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
        </Link>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="w-full mx-auto mt-12 px-8 md:px-16 pb-20">
        
        {/* --- FILTER BUTTONS --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm font-medium
                ${activeFilter === category 
                  ? "bg-[#38220f] text-[#ece0d1] border-[#38220f]" // Active State
                  : "border-[#dbc1ac] text-[#634832] hover:border-[#967259] hover:text-[#38220f]" // Inactive State
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* --- PROJECT GRID (Max 3 Columns) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
                key={project.id} 
                className="border border-[#dbc1ac] p-6 rounded-xl text-left bg-white/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col hover:-translate-y-1 min-h-[380px]"
            >
              <div className="text-xs font-semibold tracking-wider text-[#967259] uppercase mb-3">
                {project.category}
              </div>
              <h3 className="text-2xl font-semibold text-[#38220f] mb-3">
                {project.title}
              </h3>
              <p className="text-[#634832] mb-8 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mt-auto">
                <a 
                  href={project.appLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#967259] text-[#ece0d1] px-4 py-2 rounded-md hover:bg-[#634832] transition-colors text-sm font-medium"
                >
                  Try the App
                </a>
                <a 
                  href={project.mediumLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="border border-[#967259] text-[#967259] px-4 py-2 rounded-md hover:bg-[#dbc1ac] hover:text-[#38220f] transition-colors text-sm font-medium"
                >
                  Read Case Study
                </a>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}