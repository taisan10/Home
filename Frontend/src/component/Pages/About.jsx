
















import { Container } from "../../component/UI/UiComponent";




// import { motion } from "framer-motion";
// // import { Button } from "@/components/ui/button";
// import { Lightbulb, Users, Globe2, Target } from "lucide-react";

// export default function About() {
//   return (
//     <section className="bg-gradient-to-br from-[#0a0a0a] via-[#1b1b1b] to-[#111] text-white overflow-hidden">
//       <Container className="py-20">
//         {/* --- Intro Section --- */}
//         <motion.div
//           className="text-center mb-20"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-100 bg-clip-text text-transparent">
//             Redefining The Way Businesses Hire
//           </h2>
//           <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed text-lg">
//             At <span className="text-yellow-300 font-semibold">Bansal Consultancy</span>, we don’t just connect people and companies — 
//             we align passion with purpose, vision with value, and skill with success.
//             Every placement we make is a story of transformation, trust, and triumph.
//           </p>
//         </motion.div>

//         {/* --- Vision & Mission Cards --- */}
//         <div className="grid md:grid-cols-2 gap-8 mb-24">
//           <motion.div
//             className="bg-[#181818] rounded-2xl p-8 shadow-lg border border-yellow-500/20"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Lightbulb className="text-yellow-400 w-10 h-10 mb-4" />
//             <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
//             <p className="text-gray-400 leading-relaxed">
//               To create a world where the right opportunity meets the right talent 
//               — building bridges that lead to sustainable growth, innovation, and 
//               fulfillment for both companies and professionals.
//             </p>
//           </motion.div>

//           <motion.div
//             className="bg-[#181818] rounded-2xl p-8 shadow-lg border border-yellow-500/20"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Target className="text-yellow-400 w-10 h-10 mb-4" />
//             <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
//             <p className="text-gray-400 leading-relaxed">
//               Empower individuals and companies by offering transparent, reliable, 
//               and fast hiring solutions — ensuring every match contributes to 
//               a more efficient and inspired workforce.
//             </p>
//           </motion.div>
//         </div>

//         {/* --- Story Section --- */}
//         <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
//           <motion.img
//             src="/about/teamwork.jpg"
//             alt="Team collaboration"
//             className="rounded-2xl shadow-lg"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//           />
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <h3 className="text-3xl font-bold text-yellow-300 mb-4">
//               Our Story — From Vision to Value
//             </h3>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               What started as a small consultancy with a bold dream has now become 
//               a trusted name in workforce solutions. We’ve evolved with the industry, 
//               adapting to modern technologies, and understanding the heart of every business need.
//             </p>
//             <p className="text-gray-400">
//               Today, we continue our journey — bridging skill gaps, mentoring professionals, 
//               and redefining hiring with a human touch.
//             </p>
//           </motion.div>
//         </div>

//         {/* --- Our Process to Impact (same as before) --- */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-4xl font-bold mb-10 text-yellow-300">
//             Our Process to Impact
//           </h2>
//           <div className="grid md:grid-cols-4 gap-8">
//             {[
//               { icon: Users, title: "Understanding You", desc: "We begin by listening deeply to your needs, goals, and aspirations." },
//               { icon: Globe2, title: "Global Research", desc: "Our experts research market trends and identify the best-fit talent." },
//               { icon: Target, title: "Tailored Strategy", desc: "Each hiring solution is custom-built to align with your company’s culture." },
//               { icon: Lightbulb, title: "Impact & Growth", desc: "We measure success not by numbers, but by the value we deliver." },
//             ].map((step, idx) => (
//               <div key={idx} className="bg-[#181818] rounded-2xl p-6 shadow-md border border-yellow-400/10 hover:scale-105 transition">
//                 <step.icon className="text-yellow-300 w-10 h-10 mb-4 mx-auto" />
//                 <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
//                 <p className="text-gray-400">{step.desc}</p>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         {/* --- CTA --- */}
//         <motion.div
//           className="text-center mt-20"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <h3 className="text-2xl font-semibold mb-4">
//             Let’s Create an Impact Together
//           </h3>
//           <p className="text-gray-400 mb-8">
//             Join hands with Bansal Consultancy and experience the new age of hiring excellence.
//           </p>
//           {/* <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full">
//             Get in Touch
//           </Button> */}
//         </motion.div>
//       </Container>
//     </section>


//   );
// }




// const caseStudies = [
//   {
//     logo: "/Client_Logo/1.png",
//     title: "Brand Growth for NovaTech",
//     desc: "We helped NovaTech scale their digital presence with targeted campaigns and visual storytelling.",
//     image: "/Grid/1.jpg",
//   },
//   {
//     logo: "/Client_Logo/3.png",
//     title: "Social Strategy for EcoNest",
//     desc: "EcoNest gained a loyal following through our eco-conscious content and influencer partnerships.",
//     image: "/Grid/2.jpg",
//   },
//   {
//     logo: "/Client_Logo/4.png",
//     title: "UI Revamp for PixelForge",
//     desc: "We redesigned PixelForge’s interface to improve usability and boost engagement by 40%.",
//     image: "/Grid/3.jpg",
//   },
//   {
//     logo: "/Client_Logo/5.png",
//     title: "Launch Campaign for FitFuel",
//     desc: "FitFuel’s product launch reached 1M+ views with our video-first marketing strategy.",
//     image: "/Grid/4.jpg",
//   },
//   {
//     logo: "/Client_Logo/6.png",
//     title: "Rebranding for LuxeAura",
//     desc: "We transformed LuxeAura’s brand identity with elegant visuals and a cohesive digital voice.",
//     image: "/Grid/5.jpg",
//   },
//   {
//     logo: "/Client_Logo/7.png",
//     title: "Conversion Boost for ShopSphere",
//     desc: "ShopSphere tripled their checkout rate after our funnel optimization and retargeting ads.",
//     image: "/Grid/5.jpg",
//   },
//   {
//     logo: "/Client_Logo/8.png",
//     title: "Content Expansion for LearnLoop",
//     desc: "We helped LearnLoop scale their content library and drive organic traffic through SEO.",
//     image: "/Grid/6.jpg",
//   },
//   {
//     logo: "/Client_Logo/9.png",
//     title: "Influencer Network for GlowGrid",
//     desc: "GlowGrid’s reach exploded after we built a micro-influencer network tailored to their niche.",
//     image: "/Grid/7.jpg",
//   },
// ];
  
// export default function CaseStudyStack() {
//   return (
//     <section className="relative bg-black px-4 sm:px-6 py-20 sm:py-28">
//       <Container>
//         <div className="relative h-[760vh]">
//           {caseStudies.map((item, i) => (
//             <div
//               key={i}
//               className={`sticky top-0 z-[${10 + i}]`}
//               style={{ height: "100vh" }}
//             >
//               <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center mx-auto 
//                 w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[50%] 
//                 min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[100px] 
//                 gap-6 p-6 sm:p-8 md:p-10">
                
//                 {/* Left: Logo + Text */}
//                 <div className="md:w-1/2 space-y-4 text-center md:text-left">
//                   <img src={item.logo} alt="Logo" className="h-16 mx-auto md:mx-0" />
//                   <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
//                   <p className="text-gray-600">{item.desc}</p>
//                 </div>

//                 {/* Right: Image */}
//                 <div className="md:w-1/2">
//                   <img
//                     src={item.image}
//                     alt="Case Study"
//                     className="w-full h-auto max-h-[400px] rounded-lg object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }




const caseStudies = [
  {
    logo: "/Client_Logo/1.png",
    title: "Brand Growth for NovaTech",
    desc: "We helped NovaTech scale their digital presence with targeted campaigns and visual storytelling. eckout rate after our funnel optimization and retargeting ad",
    image: "/Grid/1.jpg",
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
  
export default function CaseStudyStack() {
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