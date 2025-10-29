import { Container } from "../../UI/UiComponent";
import { useState, useEffect, useRef } from "react";

export default function Video() {
  // ✅ Multiple categories

//  const videoCategories = {
//   UGC: [
//     "http://localhost:5000/video/UGC/UGC.mp4",
//     "http://localhost:5000/video/UGC/UGC1.mp4",
//     "http://localhost:5000/video/UGC/UGC2.mp4",
//     "http://localhost:5000/video/UGC/UGC3.mp4",
//     "http://localhost:5000/video/UGC/UGC4.mp4",
//   ],
//   EVENTS: [
//     "http://localhost:5000/video/Events/Events.mp4",
//     "http://localhost:5000/video/Events/Events%201.mp4",
//     "http://localhost:5000/video/Events/Events%202.mp4",
//     "http://localhost:5000/video/Events/Events%203.mp4",
//     "http://localhost:5000/video/Events/Events%204.mp4",
//   ],
//   SMM: [
//     "http://localhost:5000/video/SMM/SMM.mp4",
//     "http://localhost:5000/video/SMM/SMM1.mp4",
//     "http://localhost:5000/video/SMM/SMM2.mp4",
//     "http://localhost:5000/video/SMM/SMM3.mp4",
//     "http://localhost:5000/video/SMM/SMM4.mp4",
//   ],
//   "Video Production": [
//     "http://localhost:5000/video/Video%20Production/Video%20Production.mp4",
//     "http://localhost:5000/video/Video%20Production/Video%20Production1.mp4",
//     "http://localhost:5000/video/Video%20Production/Video%20Production2.mp4",
//     "http://localhost:5000/video/Video%20Production/Video%20Production3.mp4",
//     "http://localhost:5000/video/Video%20Production/Video%20Production4.mp4",
//   ],
//   "Personal Branding": [
//     "http://localhost:5000/video/Personal%20Branding/Personal%20Branding5.mp4",
//     "http://localhost:5000/video/Personal%20Branding/Personal%20Branding1.mp4",
//     "http://localhost:5000/video/Personal%20Branding/Personal%20Branding2.mp4",
//     "http://localhost:5000/video/Personal%20Branding/Personal%20Branding.mp4",
//     "http://localhost:5000/video/Personal%20Branding/Personal%20Branding3.mp4",
//   ],
//   "Influencer Marketing": [
//     "http://localhost:5000/video/Influencer%20Marketing/Influencer%20marketing.mp4",
//     "http://localhost:5000/video/Influencer%20Marketing/Influencer%20marketing1.mp4",
//     "http://localhost:5000/video/Influencer%20Marketing/Influencer%20marketing2.mp4",
//     "http://localhost:5000/video/Influencer%20Marketing/Influencer%20marketing3.mp4",
//     "http://localhost:5000/video/Influencer%20Marketing/Influencer%20marketing4.mp4",
//   ],
// };




 const videoCategories = {
  UGC: [
    "http://72.60.173.145:5000/video/UGC/UGC.mp4",
    "http://72.60.173.145:5000/video/UGC/UGC1.mp4",
    "http://72.60.173.145:5000/video/UGC/UGC2.mp4",
    "http://72.60.173.145:5000/video/UGC/UGC3.mp4",
    "http://72.60.173.145:5000/video/UGC/UGC4.mp4",
  ],
  EVENTS: [
    "http://72.60.173.145:5000/video/Events/Events.mp4",
    "http://72.60.173.145:5000/video/Events/Events%201.mp4",
    "http://72.60.173.145:5000/video/Events/Events%202.mp4",
    "http://72.60.173.145:5000/video/Events/Events%203.mp4",
    "http://72.60.173.145:5000/video/Events/Events%204.mp4",
  ],
  SMM: [
    "http://72.60.173.145:5000/video/SMM/SMM.mp4",
    "http://72.60.173.145:5000/video/SMM/SMM1.mp4",
    "http://72.60.173.145:5000/video/SMM/SMM2.mp4",
    "http://72.60.173.145:5000/video/SMM/SMM3.mp4",
    "http://72.60.173.145:5000/video/SMM/SMM4.mp4",
  ],
  "Video Production": [
    "http://72.60.173.145:5000/video/Video%20Production/Video%20Production.mp4",
    "http://72.60.173.145:5000/video/Video%20Production/Video%20Production1.mp4",
    "http://72.60.173.145:5000/video/Video%20Production/Video%20Production2.mp4",
    "http://72.60.173.145:5000/video/Video%20Production/Video%20Production3.mp4",
    "http://72.60.173.145:5000/video/Video%20Production/Video%20Production4.mp4",
  ],
  "Personal Branding": [
    "http://72.60.173.145:5000/video/Personal%20Branding/Personal%20Branding5.mp4",
    "http://72.60.173.145:5000/video/Personal%20Branding/Personal%20Branding1.mp4",
    "http://72.60.173.145:5000/video/Personal%20Branding/Personal%20Branding2.mp4",
    "http://72.60.173.145:5000/video/Personal%20Branding/Personal%20Branding.mp4",
    "http://72.60.173.145:5000/video/Personal%20Branding/Personal%20Branding3.mp4",
  ],
  "Influencer Marketing": [
    "http://72.60.173.145:5000/video/Influencer%20Marketing/Influencer%20marketing.mp4",
    "http://72.60.173.145:5000/video/Influencer%20Marketing/Influencer%20marketing1.mp4",
    "http://72.60.173.145:5000/video/Influencer%20Marketing/Influencer%20marketing2.mp4",
    "http://72.60.173.145:5000/video/Influencer%20Marketing/Influencer%20marketing3.mp4",
    "http://72.60.173.145:5000/video/Influencer%20Marketing/Influencer%20marketing4.mp4",
  ],
};

  const categories = Object.keys(videoCategories);

  // ✅ Active category state
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const videos = videoCategories[activeCategory];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [mutedStates, setMutedStates] = useState(
    videos.map(() => true) // sab mute by default
  );

  const [visibleVideos, setVisibleVideos] = useState(
  videos.map(() => false)
); 


  // ✅ Reset when category changes
  useEffect(() => {
    setCurrentIndex(0);
    setMutedStates(videos.map(() => true));
    setVisibleVideos(videos.map(() => true)); // reset visibility
    videoRefs.current = []; // ✅ Reset refs

  }, [activeCategory]);

  // ✅ Responsive visible slides
  const getVisibleSlides = () => {
    if (window.innerWidth < 640) return 1; // mobile
    if (window.innerWidth < 1024) return 2; // tablet
    return 4; // desktop
  };

  const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides());

  useEffect(() => {
    const handleResize = () => setVisibleSlides(getVisibleSlides());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < videos.length - visibleSlides) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // ✅ Ek hi video unmute rahe
  const toggleMute = (index) => {
    setMutedStates((prev) =>
      prev.map((_, i) => (i === index ? !prev[i] : true))
    );
  };

const sectionRef = useRef(null);
const videoRefs = useRef([]);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          // ✅ Mute all actual video elements
          videoElementsRef.current.forEach((vid) => {
            if (vid) vid.muted = true;
          });
        }
      });
    },
    { threshold: 0.1 }
  );

  if (sectionRef.current) observer.observe(sectionRef.current);

  return () => {
    if (sectionRef.current) observer.unobserve(sectionRef.current);
  };
}, []);

useEffect(() => {
  const observers = [];
  const timeout = setTimeout(() => {
    videoRefs.current.forEach((videoEl, idx) => {
      if (!videoEl) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleVideos((prev) =>
              prev.map((v, i) => (i === idx ? true : v))
            );
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(videoEl);
      observers.push(observer);
    });
  }, 100); // ✅ Delay to allow DOM render

  return () => {
    clearTimeout(timeout);
    observers.forEach((observer) => observer.disconnect());
  };
}, [videos, currentIndex]);

const videoElementsRef = useRef([]);

  return (
    <section className="-mt-20 md:-mt-25 lg:-mt-30">
      <Container>
        {/* Category Buttons Section */}
        <div className="w-full overflow-x-auto scrollbar-hide scroll-smooth relative z-10">
          <div className="flex flex-nowrap gap-3 justify-start sm:justify-center p-4 min-w-max bg-cream-50 rounded-xl">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-8 sm:px-10 py-2 rounded-full text-base sm:text-lg font-medium transition border ${
                    isActive
                      ? "bg-sky-500 text-white border-sky-500 shadow-md"
                      : "bg-white text-gray-800 border-cream-300 hover:bg-cream-100"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* ✅ Videos Slider */}
        <div 
         ref={sectionRef}
         className="relative w-full py-10 overflow-hidden -mt-5 md:-mt-5 lg:-mt-5">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                (currentIndex * 100) / visibleSlides
              }%)`,
            }}
          >
            {videos.map((video, idx) => (
              <div
                key={idx}
                className="relative flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-2"
              >
                <div className="relative w-full aspect-[9/16] bg-black rounded-[2rem] border border-neutral-800 shadow-xl overflow-hidden">
                  {/* Video */}
           <div
  ref={(el) => (videoRefs.current[idx] = el)}
  className="relative w-full h-full"
>
  {visibleVideos[idx] && (
    <video
  ref={(el) => (videoElementsRef.current[idx] = el)}
  src={video}
  className="w-full h-full object-cover"
  autoPlay
  loop
  muted={mutedStates[idx]}
  preload="none"
  playsInline
  crossOrigin="anonymous"
onError={() => console.error("Video failed:", video)}
/>
  )}
</div>
                  {/* Mute/Unmute Button */}
                  <button
                    onClick={() => toggleMute(idx)}
                    className="absolute top-2 right-2 bg-black/60 text-white p-2 rounded-full text-xs hover:bg-black transition"
                  >
                    {mutedStates[idx] ? "🔇" : "🔊"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          {currentIndex > 0 && (
            <button
              onClick={prevSlide}
              className="absolute -left-0.5 top-1/2 -translate-y-1/2 z-40 bg-white text-black p-3 rounded-full "
            >
              {"<"}
            </button>
          )}

          {/* Right Arrow */}
          {currentIndex < videos.length - visibleSlides && (
            <button
              onClick={nextSlide}
              className="absolute -right-0.5  top-1/2 -translate-y-1/2 z-40 bg-white text-black p-3 rounded-full"
            >
              {">"}
            </button>
          )}
        </div>
      </Container>
    </section>
  );
}