

import { useState, useRef, useEffect } from "react";
import { Container, Logo, PrimaryButton, MobileNav } from "../UI/UiComponent";



import WorksData from "../Pages/CaseStudy/index/WorksData";


export default function Header() {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  let timeoutId = useRef(null);




const workNavChildren = WorksData.map((item) => ({
  label: item.names,
  href: `/work/${item.slug}`, 
}));



  const navItems = [
    { label: "Home", href: "/" },
    
{
  label: "Work",
  children: workNavChildren,
}



  ];

  // 🟢 Scroll Hide Navbar
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = window.scrollY;
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🟡 Hover Handlers with Delay (Smooth)
  const handleMouseEnter = (label) => {
    clearTimeout(timeoutId.current);
    setIsHovered(label);
  };

  const handleMouseLeave = () => {
    timeoutId.current = setTimeout(() => setIsHovered(null), 200);
  };

  return (
    <header
      className={`sticky top-10 z-40 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-[calc(100%+2.5rem)]"
      }`}
    >
      <Container>
        <div className="flex h-14 sm:h-18 items-center justify-between rounded-full bg-white pl-3 pr-2 sm:px-4 md:px-6 ring-1 ring-black/10 shadow-sm">
          {/* Logo */}
          <a href="/" aria-label="Go to homepage">
            <Logo />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-black relative">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative text-lg"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="hover:text-sky-500 transition flex items-center gap-1">
                    {item.label}
                   
                  </button>
{isHovered === item.label && (
  <div className="absolute left-0 mt-2 bg-gray-50 shadow-xl rounded-xl w-[600px] z-50 flex">
    {/* Left Section */}
    <div className="w-[200px] bg-gray-200 p-6 rounded-l-xl flex flex-col justify-between">
      <div>
        
        <p className="text-sm text-gray-600 mb-4">
          Our strategies are tailored to meet the unique challenges and opportunities of each project.
        </p>
      </div>
      {/* <a
        href="/work"
        className="text-sm text-sky-600 hover:underline font-medium mt-auto"
      >
        View all Work →
      </a> */}
    </div>

    {/* Right Section */}
    <div className="flex-1 bg-gray-50 p-6 grid grid-cols-2 gap-x-6 gap-y-3 rounded-r-xl">
      {item.children.map((child) => (
        <a
          key={child.label}
          href={child.href}
          className="text-sm text-gray-800 hover:text-sky-600 transition"
        >
          {child.label}
        </a>
      ))}
    </div>
  </div>
)}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-sky-500 transition text-lg"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <PrimaryButton href="#contact">Contact Us Now</PrimaryButton>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 w-46    md:hidden">
            <PrimaryButton href="#contact">Contact Us</PrimaryButton>
            <button
              aria-label="Open menu"
              className="grid h-10 w-15 place-items-center rounded-full ring-1 ring-black/10"
              onClick={() => setOpen(true)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="text-black"
              >
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Nav */}
      <MobileNav open={open} setOpen={setOpen} navItems={navItems} />
    </header>
  );
}
