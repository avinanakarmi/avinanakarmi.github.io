import About from './sections/about';
import Projects from './sections/projects';
import Experiences from './sections/experiences';

const sections = ["about", "projects", "experience"];

const App = () => {
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

      {/* Sidebar Navigation */}
      <nav className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white w-16 flex flex-col items-center py-4 space-y-4">
        {
          sections.map((section) => (
            <a key={section} href={`#${section}`} onClick={(e) => handleScroll(e, `#${section}`)} className="w-10 h-10 bg-accentYellow rounded-full flex items-center justify-center hover:bg-accentTeal">{section.charAt(0).toUpperCase()}</a>
          ))
        }
      </nav>
    </div>
  );
}

export default App;
