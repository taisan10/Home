import { Container } from "../../UI/UiComponent";
// import WorksData from "../CaseStudy/index/WorksData";

const caseStudies = [
  {
    logo: "/Client_Logo/1.png",
    title: "Brand Growth for NovaTech",
    desc: "We helped NovaTech scale their digital presence with targeted campaigns and visual storytelling. eckout rate after our funnel optimization and retargeting ad",
    image: "/Grid/1.jpg",
  theme: "bg-[#FAFFD7] text-black",
  },
  {
    logo: "/Client_Logo/3.png",
    title: "Social Strategy for EcoNest",
    desc: "EcoNest gained a loyal following through our eco-conscious content and influencer partnerships.",
    image: "/Grid/2.jpg",
  },
  {
    logo: "/Client_Logo/4.png",
    title: "UI Revamp for PixelForge",
    desc: "We redesigned PixelForge’s interface to improve usability and boost engagement by 40%.",
    image: "/Grid/3.jpg",
  },
  {
    logo: "/Client_Logo/5.png",
    title: "Launch Campaign for FitFuel",
    desc: "FitFuel’s product launch reached 1M+ views with our video-first marketing strategy.",
    image: "/Grid/4.jpg",
  },
  {
    logo: "/Client_Logo/6.png",
    title: "Rebranding for LuxeAura",
    desc: "We transformed LuxeAura’s brand identity with elegant visuals and a cohesive digital voice.",
    image: "/Grid/5.jpg",
  },
  {
    logo: "/Client_Logo/7.png",
    title: "Conversion Boost for ShopSphere",
    desc: "ShopSphere tripled their checkout rate after our funnel optimization and retargeting ads.",
    image: "/Grid/5.jpg",
  },
  {
    logo: "/Client_Logo/8.png",
    title: "Content Expansion for LearnLoop",
    desc: "We helped LearnLoop scale their content library and drive organic traffic through SEO.",
    image: "/Grid/6.jpg",
  },
  {
    logo: "/Client_Logo/9.png",
    title: "Influencer Network for GlowGrid",
    desc: "GlowGrid’s reach exploded after we built a micro-influencer network tailored to their niche.",
    image: "/Grid/7.jpg",
  },
];
  
export default function Testimonial() {
 
  return (
    <section className="relative bg-black px-4 sm:px-6 py-20 sm:py-20 lg:py-26 ">
      <Container>
       <div className="relative -mb-40" style={{ height: `${caseStudies.length * 60}vh` }} >
          {caseStudies.map((item, i) => (
            <div
              key={i}
              className={`sticky  top-20 z-[${9 + i}]`}
              style={{ height: "60vh" }}
            >
         <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-row md:flex-row items-center mx-auto
  w-70 sm:w-150 md:w-180 lg:w-200
  h-80 sm:h-70 md:h-70 lg:h-70
  gap-6 p-4 sm:p-6 md:p-5">
                {/* Left: Logo + Text */}
                <div className="md:w-3/4 space-y-4 text-center md:text-left">
                  <img src={item.logo} alt="Logo" className="h-16 mx-auto md:mx-0" />
                  <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>

                {/* Right: Image */}
              <div className="hidden md:block  md:w-1/4">
                  <img
                    src={item.image}
                    alt="Case Study"
                    className="w-full sm:w-60 md:w-50 lg:w-50 h-50 sm:h-50 md:h-60 lg:h-60 rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
