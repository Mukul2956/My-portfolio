import { useEffect, useState } from "react";

const sections = ["Home", "About", "Projects", "Contact"];

export default function Navbar({ darkMode, setDarkMode }) {
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].toLowerCase());
        if (section && scrollY >= section.offsetTop - 100) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="font-bold text-xl">Mukul Singh</span>

        <ul className="flex gap-6 text-sm font-medium">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase()}`}
                className={`transition hover:text-blue-500 ${
                  active === section ? "text-blue-600" : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
