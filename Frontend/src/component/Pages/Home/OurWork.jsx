

import { PrimaryButton, GradientText, Container } from "../../UI/UiComponent";

import { useSwipeable } from "react-swipeable";

import WorksData from "../CaseStudy/index/WorksData";

import { useEffect, useState, useRef } from "react";
 



export default function Work() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextWork = () => setActiveIndex((prev) => (prev + 1) % WorksData.length);
  const prevWork = () => setActiveIndex((prev) => (prev === 0 ? WorksData.length - 1 : prev - 1));

  const activeWork = WorksData[activeIndex];

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: nextWork,
    onSwipedRight: prevWork,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // timer. first logo , second  grid
  const [showSecondImage, setShowSecondImage] = useState(false);
const sectionRef = useRef(null);

useEffect(() => {
  let observer;
  let timer;

  function handleIntersection(entries) {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setShowSecondImage(false); // Reset
      timer = setTimeout(() => {
        setShowSecondImage(true);
      }, 3000);
    } else {
      clearTimeout(timer);
      setShowSecondImage(false); // Hide second image when out of view
    }
  }

  observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5, // 50% visible
  });

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => {
    if (observer && sectionRef.current) {
      observer.unobserve(sectionRef.current);
    }
    clearTimeout(timer);
  };
}, [activeIndex]);

 

  return (
    <section   
    ref={sectionRef}
    className="py-12 px-4 sm:px-6 md:px-12 text-center">
      <Container>
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-8 sm:mb-10">
          Our Works
        </h2>
      

        {/* Company Tabs */}
        <div className="w-full overflow-x-auto scrollbar-hide scroll-smooth mb-6 sm:mb-10">
          <div className="flex flex-nowrap  justify-start  gap-2 sm:gap-3 px-1 min-w-max ">
            {WorksData.map((work, index) => (
              <button
                key={work.id}
                onClick={() => setActiveIndex(index)}
                className={`whitespace-nowrap px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-md font-medium transition-all duration-300 ${
                  activeIndex === index
                    ? `${work.heroSection.theme}`
                    : "bg-gray-50 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {work.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Work Details with swipe support */}
        <div
          {...handlers}
          className={`${activeWork.heroSection.theme} rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10 shadow-xl`}
        >
          {/* Left: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-6 text-center md:text-left">
           <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
      {activeWork.name}
    </h3>
            <p className="text-base sm:text-lg opacity-90">
              {activeWork.heroSection.subtitle}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-2 lg:grid-cols-2  gap-4 mt-4">
              {activeWork.overview.metrics.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white text-black rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-center shadow-md"
                >
                  <div className="text-lg sm:text-xl md:text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs sm:text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Read More Button */}
            <div className="mt-5 sm:mt-6 items-center">
              <PrimaryButton
                href={`/work/${activeWork.slug}`}
                
              >
                Read More
              </PrimaryButton>
            </div>
          </div>

          {/* Right Side */}
        <div className="w-full md:w-1/2 flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="relative w-full max-w-[90%] sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl sm:rounded-2xl overflow-hidden">
        {/* First Logo Image */}
<img
  src={activeWork.heroSection.image}
  alt={activeWork.name}
  className={`w-full h-auto sm:h-[400px] md:h-[450px] lg:h-[500px] object-contain transition-opacity duration-700 ${
    showSecondImage ? "opacity-0" : "opacity-100"
  }`}
/>

{/* Second Grid Image — Render only after timer */}
{showSecondImage && (
  <img
    src={activeWork.grid.image}
    alt={activeWork.name}
    className="absolute top-0 left-0 w-full h-[190px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-contain opacity-100 transition-opacity duration-700"
  />
)}
      </div>
    </div>




        </div>

        

        {/* Bottom Navigation */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">

           <PrimaryButton href="#contact">Get In Touch With Us</PrimaryButton>
          <div className="flex gap-2 sm:gap-3">
            {/* Prev */}
            <button
              onClick={prevWork}
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 text-white shadow-md"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next */}
            <button
              onClick={nextWork}
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 text-white shadow-md"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
