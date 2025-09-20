import { useState, useEffect } from 'react';
import About from './sections/about';
import Projects from './sections/projects';
import Experiences from './sections/experiences';

const sections = ["about", "projects", "experiences"];

const App = () => {
    const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observers = [];

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(section);
            }
          },
          { root: null, rootMargin: "0px", threshold: 0.6 } // 60% visible
        );
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [sections]);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', duration: 10 });
    }
  };

  return (
    <div className="App snap-y snap-mandatory h-screen overflow-scroll flex bg-background text-textPrimary">
      {/* Main Content */}
      <div className="flex-1">
        <About />
        <Projects />
        <Experiences />
      </div>

      {/* Floating Sidebar Navigation */}
      <nav className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-transparent w-32 flex flex-col items-center py-4 z-50">
        {sections.map((section) => {
          const isActive = activeSection === section;
          return (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => handleScroll(e, `#${section}`)}
              className={`w-full flex items-center justify-center transition-all duration-200
          ${isActive
                  ? "bg-accentTeal text-white font-bold h-12 text-sm"
                  : "bg-gray-700 text-gray-300 hover:bg-accentTeal hover:text-white h-10 text-xs"
                }`}
            >
              My {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          );
        })}
      </nav>

    </div>
  );
}

export default App;
