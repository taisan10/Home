import { useEffect, useState } from "react";
// import WorksData from "./index/WorksData";

export const Sidebar = () => {
  // Sections based on current company or static sections
  const sections = [
    "Overview",
    "Services Provided",
    "Challenge",
    "Approach",
    "Key Strategy",
    "Curious About Our Approach",
  ];

  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const el = document.getElementById(
          section.toLowerCase().replace(/\s+/g, "-")
        );
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = section;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="hidden sm:block sm:sticky sm:top-2 sm:h-screen bg-gray-50 border-r px-4 sm:px-6 py-6 sm:py-10">
      <nav className="space-y-4 md:space-y-6 overflow-x-auto">
        {sections.map((section) => {
          const linkId = section.toLowerCase().replace(/\s+/g, "-");
          const isActive = active === section;
          return (
            <a
              key={section}
              href={`#${linkId}`}
              className={`block font-medium px-2 py-1 rounded transition-colors ${
                isActive
                  ? "text-blue-600 border-l-4 border-blue-600"
                  : "text-gray-800 hover:text-blue-600"
              }`}
            >
              {section}
            </a>
          );
        })}
      </nav>
    </aside>
  );
};
