import { Container, GradientText } from "../../UI/UiComponent";
import { FaInstagram, FaPaintBrush, FaVideo, FaCut } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Working() {
 const services = [
    {
      title: "Social Media Management",
      desc: "We manage your daily online presence, build thriving communities, and run targeted campaigns that guarantee consistent engagement and growth.",
      icon: <FaInstagram  />,
      bg: "from-purple-900 via-black to-gray-900",
    },
    {
      title: "Graphic Design",
      desc: "Creating bespoke visual assets, from powerful brand identities to scroll-stopping ad creatives, designed to communicate your message instantly.",
      icon: <FaPaintBrush  />,
      bg: "from-gray-900 via-zinc-900 to-black",
    },
    {
      title: "Influencer Marketing",
      desc: "Connecting your brand with authentic voices and high-impact creators to generate trust, scale reach, and drive real conversions.",
      icon: <FaVideo  />,
      bg: "from-black via-gray-900 to-slate-900",
    },
    {
      title: "Videography & Video Editing",
      desc: "Producing high-definition, strategic videos and reels that capture attention and tell your brand’s story with cinematic quality.",
      icon: <FaCut  />,
      bg: "from-zinc-900 via-gray-900 to-black",
    },
  ];



//  const services = [
//     {
//       title: "Social Media Management",
//       desc: "Crafting content strategies that boost engagement and build your brand identity across platforms.",
//       icon: <FaInstagram className="text-gray-200 group-hover:text-white transition-colors duration-300" />,
//     },
//     {
//       title: "Graphic Design",
//       desc: "Designing visual stories — from minimal logos to modern carousel creatives that connect instantly.",
//       icon: <FaPaintBrush className="text-gray-200 group-hover:text-white transition-colors duration-300" />,
//     },
//     {
//       title: "Videography",
//       desc: "Cinematic shoots that tell your brand’s story with emotion, creativity, and vision.",
//       icon: <FaVideo className="text-gray-200 group-hover:text-white transition-colors duration-300" />,
//     },
//     {
//       title: "Video Editing",
//       desc: "Editing your visuals into powerful stories that convert viewers into loyal fans.",
//       icon: <FaCut className="text-gray-200 group-hover:text-white transition-colors duration-300" />,
//     },
//   ];

  return (
    <section className="-mt-15 sm:-mt-15 bg-neutral text-white">
      <Container>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
           <GradientText>
              What We Do
          </GradientText>
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Building brand impact through design, strategy, and storytelling.
          </p>
        </div>


        <div className="grid gap-8 min-[480px]:grid-cols-2 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 ">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-black p-6 rounded-2xl shadow-lg transition hover:shadow-sky-400/40 hover:-translate-y-2"
        >
            <div
              key={i}
             
            >
              <div className="text-4xl mb-4 flex justify-center">{service.icon}</div>
            <h3 className="font-semibold text-xl mb-2"> <GradientText>{service.title}</GradientText> </h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {service.desc}
              </p>
            </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}


// import { Container } from "../../UI/UiComponent";

// export default function Working() {
//   return (
//     <section>
//       <Container>
//         {/* OUR WORK */}
//         <div className="max-w-6xl mx-auto text-center -mt-12">
//           <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
//             {[
//               {
//                 title: "Social Media Manager",
//                 desc: "We build and refine your brand's presence across platforms.",
//                 icon: "📱",
//               },
//               {
//                 title: "Graphic Designing",
//                 desc: "Transforming ideas into stunning visual stories.",
//                 icon: "🎨",
//               },
//               {
//                 title: "Video Editing",
//                 desc: "Crafting your vision with precision and flair.",
//                 icon: "🎬",
//               },
//               {
//                 title: "Videography",
//                 desc: "Capturing moments that tell your story.",
//                 icon: "📹",
//               },
//             ].map((step, i) => (
//               <div
//                 key={i}
//                 className="bg-black p-6 rounded-xl hover:shadow-lg hover:shadow-sky-500/10 transition-all"
//               >
//                 <div className="text-3xl mb-3">{step.icon}</div>
//                 <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
//                 <p className="text-gray-400 text-sm">{step.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }