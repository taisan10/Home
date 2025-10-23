
import React, { useState } from "react";

export   function GradientText({ children }) {
  return (
    <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
      {children}
    </span>
  );
}

 export  function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}

export  function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* For local dev in this canvas we keep the uploaded path. In Next.js, swap to /bluenose-logo.png */}
      <img
        src="/logo 3.png"
        alt="Bluenose Digital Marketing"
        className="h-38  w-auto lg:h-45"
      />
    </div>
  );
}

export   function NavLink({ children, href = "#", onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-sm font-medium text-black hover:text-sky-600 transition"
    >
      {children}
    </a>
  );
}

export   function PrimaryButton({ children, href = "#" }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-sky-500/20 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400   bg-gradient-to-r from-sky-500 to-cyan-400"
    >
      {children}
    </a>
  );
}

// KPI Card
//  export   function Stat({ kpi, accent, title, desc }) {
//   const accentClasses = {
//     purple: "bg-gradient-to-r from-sky-400 via-cyan-400",
//     pink: "from-pink-400 to-rose-400",
//     orange: "from-orange-400 to-amber-400",
//     sky: "from-sky-400 to-cyan-400",
//   };

export   function Stat({ kpi, accent, title, desc }) {
  const accentClasses = {
    purple: " from-sky-400 to-cyan-400",
   
  };
  return (
    <div className="rounded-[22px] bg-white/5 p-6 sm:p-8 ring-5 ring-white/0 shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset]">
      <div className="text-4xl sm:text-6xl font-semibold tracking-tight">
        {kpi}
      </div>
      <div className="mt-3 text-2xl font-medium">
        <span
          className={`bg-gradient-to-r ${
            accentClasses[accent] || accentClasses.purple
          } bg-clip-text text-transparent`}
        >
          {title}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-white/70">{desc}</p>
    </div>
  );
}

export   function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <div className="mb-3 text-xs uppercase tracking-[0.2em] text-white/60">
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl sm:text-4xl font-semibold">{title}</h2>
      {subtitle && <p className="mt-3 text-white/70">{subtitle}</p>}
    </div>
  );
}


export   function Avatar({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover ring-2 ring-white/20"
    />
  );
}

export   function TeamStrip() {
  const people = new Array(9)
    .fill(0)
    .map((_, i) => `https://i.pravatar.cc/80?img=${i + 1}`);
  return (
    <div className="mt-6  flex flex-wrap items-center justify-center gap-1 sm:gap-1">
      {people.map((p, i) => (
        <Avatar key={i} src={p} alt={`Team member ${i + 1}`} />
      ))}
    </div>
  );
}

export function MobileNav({ open, setOpen, navItems }) {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className={`md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 transition ${
          open ? "bg-black/40 opacity-100" : "bg-black/0 opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      {open && ( 
      <div
        className={`fixed -top-10 right-0 z-50 h-full w-80 max-w-[85vw] transform bg-white shadow-xl transition ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 bg-white">
          <Logo />
          <button
            aria-label="Close menu"
            className="p-2 bg-black rounded-xl text-white"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-4 p-4 text-black bg-white h-145">
          {navItems.map((item, idx) =>
            item.children ? (
              <div key={item.label}>
                <button
                  className="flex justify-between items-center w-full text-left font-medium hover:text-sky-500 "
                  onClick={() => setExpanded(expanded === idx ? null : idx)}
                >
                  {item.label}
                  <span>{expanded === idx ? "−" : "+"}</span>
                </button>
                {expanded === idx && (
                  <div className="ml-4 mt-6 flex flex-col gap-2 ">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.label}
                        href={child.href}
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink key={item.label} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            )
          )}
          <PrimaryButton href="#contact">Book Intro Call</PrimaryButton>
        </nav>
      </div>
      )}
    </div>
  );
}




// Continuous marquee for client logos (only images)

export function LogoCarousel({ items }) {
  return (
    <section className="py-10 overflow-hidden">
      <div className="animate-slide flex gap-10 items-center whitespace-nowrap w-max">
        {[...items, ...items].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Logo ${index}`}
            className="h-32 w-auto opacity-100 hover:opacity-90 transition"
          />
        ))}
      </div>
    </section>
  );
}


// Dynamic logo ke liye 

// export function LogoCarousel({ items }) {
//   return (
//     <section className="py-10 overflow-hidden">
//       <div className="animate-slide flex gap-10 items-center whitespace-nowrap w-max">
//         {[...items, ...items].map((logo, index) => (
//           <a
//             key={index}
//             href={logo.href}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               src={logo.image}
//               alt={`Logo ${index + 1}`}
//               className="h-32 w-auto opacity-100 hover:opacity-90 transition"
//             />
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// }



export function CaseStudySection({ title, description, image }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 py-10 border-b border-gray-200">
      {/* Left: Text */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl font-bold mb-4 text-black ">{title}</h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>

      {/* Right: Image */}
      <div className="md:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full max-w-sm mx-auto rounded-xl shadow-md"
        />
      </div>
    </div>
  );
}