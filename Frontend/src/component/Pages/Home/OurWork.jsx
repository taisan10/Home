



import {
  PrimaryButton,
  GradientText,
  Container,
  SectionTitle,
} from "../../UI/UiComponent";

import { useSwipeable } from "react-swipeable";
import WorksData from "../CaseStudy/index/WorksData";
import { useEffect, useState, useRef } from "react";

export default function OurWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextWork = () => setActiveIndex((prev) => (prev + 1) % WorksData.length);
  const prevWork = () => setActiveIndex((prev) => (prev === 0 ? WorksData.length - 1 : prev - 1));
  const activeWork = WorksData[activeIndex];

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: nextWork,
    onSwipedRight: prevWork,
    preventDefaultTouchmoveEvent: false,
    trackMouse: true,
  });

  // Image transition logic
  const [showSecondImage, setShowSecondImage] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    let observer;
    let timer;

    function handleIntersection(entries) {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setShowSecondImage(false);
        timer = setTimeout(() => {
          setShowSecondImage(true);
        }, 2000);
      } else {
        clearTimeout(timer);
        setShowSecondImage(false);
      }
    }

    observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
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

  // Stat transition logic (only for md and above)
  const [showDelayedStats, setShowDelayedStats] = useState(false);
  const [isMdScreen, setIsMdScreen] = useState(false);
  const statsRef = useRef(null);
  const timerRef = useRef(null);

 useEffect(() => {
  const handleResize = () => {
    const width = window.innerWidth;
    setIsMdScreen(width >= 760 && width <= 1110);
  };

  handleResize(); // Initial check
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

  useEffect(() => {
    if (!isMdScreen || !statsRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timerRef.current = setTimeout(() => setShowDelayedStats(true), 3000);
        } else {
          if (timerRef.current) clearTimeout(timerRef.current);
          setShowDelayedStats(false);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(statsRef.current);

    return () => {
      observer.disconnect();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isMdScreen, activeIndex]);

  useEffect(() => {
    setShowDelayedStats(false);
  }, [activeIndex]);

  const metrics = activeWork.overview.metrics;
  const initialStats = metrics.slice(0, 3);
  const delayedStats = metrics.slice(3, 6);


  const tabRefs = useRef([]);
  const scrollRef = useRef(null);
const scrollTabs = (direction) => {
  const container = scrollRef.current;
  if (!container) return;

  const scrollAmount = 150;
  container.scrollBy({
    left: direction === "left" ? -scrollAmount : scrollAmount,
    behavior: "smooth",
  });

  // Optional: shift active tab index
  const newIndex =
    direction === "left"
      ? Math.max(activeIndex - 1, 0)
      : Math.min(activeIndex + 1, WorksData.length - 1);

  setActiveIndex(newIndex);
  tabRefs.current[newIndex]?.scrollIntoView({
    behavior: "smooth",
    inline: "start",
    block: "nearest",
  });
};


  return (
    <section
      ref={sectionRef}
      className="py-12 px-4 sm:px-6 md:px-12 -mt-22 sm:-mt-24 md:-mt-22 lg:-mt-22 text-center"
    >
      <Container>
        <h4 className="text-3xl md:text-5xl lg:text-5xl bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent font-bold">
        Client Results
        </h4>
{/* Container */}
<div className="relative w-full mb-5 sm:mb-10 mt-5 md:mt-5 lg:mt-7">
  {/* Left Button (absolute, does not affect layout) */}
  <button
    onClick={() => scrollTabs("left")}
    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-gray-500 shadow-md rounded-full p-2"
    aria-label="scroll left"
  >
    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </button>

  {/* Scrollable Tabs */}
  <div
    ref={scrollRef}
    className="w-full overflow-x-auto scrollbar-hide scroll-smooth px-0"
    style={{ scrollPaddingLeft: "3rem", scrollPaddingRight: "2.5rem" }}
  >
    <div className="flex flex-nowrap justify-start gap-2 sm:gap-3 min-w-max pl-12 pr-6">
      {WorksData.map((work, index) => (
        <button
          key={work.id}
          ref={(el) => (tabRefs.current[index] = el)}
          onClick={() => {
            setActiveIndex(index);
            tabRefs.current[index]?.scrollIntoView({
              behavior: "smooth",
              inline: "start",
              block: "nearest",
            });
          }}
          className={`whitespace-nowrap px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-md font-medium transition-all duration-300 ${
            activeIndex === index ? `${work.heroSection.theme}` : "bg-gray-50 text-gray-700 hover:bg-gray-200"
          } , ${
    ["Hearthstone Inn","Garden Retreat","Sake Cafe","Besharam "].some(val =>  activeWork.name.includes(val))
      ? "text-gray-100"
      : "text-black"
  }`}
        >
          {work.name}
        </button>
      ))}

      {/* optional invisible spacer to guarantee last tab fully visible */}
      <div className="w-6 flex-shrink-0" aria-hidden="true" />
    </div>
  </div>

  {/* Right Button */}
  <button
    onClick={() => scrollTabs("right")}
    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-gray-500 shadow-md rounded-full p-2"
    aria-label="scroll right"
  >
    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </button>
</div>

        {/* Active Work Details with swipe support */}
        <div
          {...handlers}
          className={`${activeWork.heroSection.theme} rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10 shadow-xl`}
        >
          {/* Left: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-6 text-center md:text-left">
        
            <h3
  className={`text-2xl sm:text-3xl md:text-4xl font-bold   ${
    ["Hearthstone Inn","Garden Retreat","Sake Cafe","Besharam "].some(val =>  activeWork.name.includes(val))
      ? "text-gray-100"
      : "text-black"
  }`}
>
  {activeWork.name}
</h3>

<p
  className={`text-base sm:text-lg opacity-90 ${
    ["1.6K", "67K+","9.7K+","60K"].some(val => activeWork.heroSection.subtitle.includes(val))
      ? "text-gray-100"
      : "text-black"
  }`}
>
  {activeWork.heroSection.subtitle}
</p>

            {/* Stats */}
            <div
              ref={statsRef}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4"
            >
              {isMdScreen
                ? (!showDelayedStats ? initialStats : delayedStats).map((stat, idx) => (
                    <div
                      key={idx}
                      className="bg-white text-black rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-center shadow-md"
                    >
                      <div className="text-lg sm:text-xl md:text-2xl font-bold">{stat.value}</div>
                      <div className="text-xs sm:text-sm font-medium">{stat.label}</div>
                    </div>
                  ))
                : metrics.map((stat, idx) => (
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
              <PrimaryButton href={`/work/${activeWork.slug}`}>Read More</PrimaryButton>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="w-full md:w-1/2 flex justify-end px-4 sm:px-20   md:px-1 lg:px-2">
            <div className="relative flex items-center justify-center w-full max-w-[95%] sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[7/10] lg:aspect-[5/5]">
              {/* First Logo Image */}
              <img
                src={activeWork.heroSection.image}
                alt={activeWork.name}
                className={`object-contain w-full h-full transition-opacity duration-700 ${
                  showSecondImage ? "opacity-0" : "opacity-100"
                }`}
              />

              {/* Second Grid Image */}
              {showSecondImage && (
                <img
                  src={activeWork.grid.image}
                  alt={activeWork.name}
                  className="absolute inset-0 w-full h-full ml-0 sm:ml-0 md:ml-o lg:ml-5 object-contain transition-opacity duration-700"
                />
              )}
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <PrimaryButton href="/contact">Book A Callback</PrimaryButton>
          <div className="flex gap-2 sm:gap-3">
            <button
              onClick={() => scrollTabs("left")}
              className="w-10 h-10 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 text-white shadow-md z-10"
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
              onClick={() => scrollTabs("right")}
              className="w-10 h-10 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 text-white shadow-md z-10"
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