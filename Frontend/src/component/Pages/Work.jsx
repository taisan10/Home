

// // export default function Work() {
// //   return <h1 className="text-center text-3xl p-10">Work Page</h1>;
// // }
// BetmodeCase.jsx






import { useEffect, useState } from "react";


import { OverviewSection } from "./CaseStudy/Overview";
import { HeroSection } from "./CaseStudy/HeroSection";
import { ServicesProvided } from "./CaseStudy/ServicesProvided";
import { ChallengeSection } from "./CaseStudy/Challenge";
import { ApproachSection } from "./CaseStudy/Approach";
import { CuriousSection } from "./CaseStudy/CuriousAbout";
import { CaseStudiesSections } from "./CaseStudy/OtherCaseStudy";
import { Strategic } from "./CaseStudy/KeyStrategy";

<HeroSection />


const Sidebar = () => {
  const links = [
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
      links.forEach((link) => {
        const section = document.getElementById(
          link.toLowerCase().replace(/\s+/g, "-")
        );
        if (section && window.scrollY >= section.offsetTop - 100) {
          current = link;
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

        {links.map((link) => {
          const linkId = link.toLowerCase().replace(/\s+/g, "-");
          const isActive = active === link;
          return (
            <a
              key={link}
              href={`#${linkId}`}
              className={`block font-medium px-2 py-1 rounded transition-colors ${
                isActive
                  ? "text-blue-600 border-l-4 border-blue-600"
                  : "text-gray-800 hover:text-blue-600"
              }`}
            >
              {link}
            </a>
          );
        })}
      </nav>
    </aside>
  );
};

<>
<OverviewSection />
<ServicesProvided />
<ChallengeSection />
<ApproachSection />
<Strategic />
<CuriousSection />
</>


const CaseStudyLayout = () => {
  return (
  <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <OverviewSection />
        <ServicesProvided />
        <ChallengeSection />
        <ApproachSection />
        <Strategic />
        <CuriousSection />
      </main>
    </div>
  );
};

<CaseStudiesSections />

const Work = () => (
  <div>
    <HeroSection />
    <CaseStudyLayout />
    <CaseStudiesSections />
  </div>
);

export default Work;
