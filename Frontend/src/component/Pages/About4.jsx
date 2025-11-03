import React from "react";
import { motion } from "framer-motion";
// import teamImage from "../assets/dashboard.png";
const timeline = [
  {
    year: "2016",
    title: "Founded in Halifax, Canada",
    desc: "Bluenose started with a small team of 3 passionate marketers determined to make creative, data-driven marketing accessible to startups.",
  },
  {
    year: "2018",
    title: "First International Client",
    desc: "Expanded into the US and partnered with Silicon Valley tech firms, optimizing digital ad performance by 200%.",
  },
  {
    year: "2020",
    title: "Global Expansion",
    desc: "Opened remote hubs in the UK and India, building a globally distributed creative team.",
  },
  {
    year: "2023",
    title: "AI-Powered Marketing Tools",
    desc: "Launched proprietary AI dashboards to automate insights and reduce campaign waste by 40%.",
  },
  {
    year: "2025",
    title: "Future Ready",
    desc: "Now serving over 120+ clients worldwide — leading with purpose, transparency, and innovation.",
  },
];

const AboutPage = () => {
  const stats = [
    { label: "Global Clients", value: "120+" },
    { label: "Campaigns Delivered", value: "5K+" },
    { label: "ROI Growth Avg.", value: "320%" },
    { label: "Active Markets", value: "14 Countries" },
  ];

  const tools = [
    "Google Analytics", "HubSpot", "Ahrefs", "Meta Ads", "Webflow", "Figma", "SEMRush",
  ];

  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="text-center py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-950">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-4"
        >
          About Bluenose Digital Marketing
        </motion.h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
          Bluenose is a global digital marketing agency helping ambitious brands grow with data,
          creativity, and purpose. Headquartered in Canada, we blend North American strategy
          with global execution excellence.
        </p>
      </section>

      {/* Our Story in Numbers */}
      <section className="py-16 px-6 bg-gray-900">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-12">
          Our Story in Numbers
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-400/40 transition"
            >
              <h3 className="text-4xl font-extrabold text-blue-300 mb-2">{s.value}</h3>
              <p className="text-gray-400">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-blue-400 mb-4">
            A Message from Our Founder
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            “When I started Bluenose, my vision was clear — to create a marketing agency that
            values integrity, creativity, and measurable results equally. Our clients aren’t
            just businesses — they’re partners in building something meaningful.”
          </p>
          <p className="text-blue-300 font-semibold">— Sarah Bennett, Founder & CEO</p>
        </motion.div>
        <motion.img
          src="Client_Logo/1.png"
          alt="Founder"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* Company Timeline Journey */}
<section className="bg-gray-950 py-20 px-6">
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl font-bold text-center text-blue-400 mb-14"
  >
    Our Journey So Far
  </motion.h2>

  <div className="relative max-w-5xl mx-auto">
    <div className="absolute left-4 sm:left-1/2 md:left-1/2 lg:left-1/2 transform -translate-x-1/2 w-1 bg-blue-400/40 h-full"> </div>

    {[
      {
        year: "2016",
        title: "Founded in Halifax, Canada",
        desc: "Bluenose started with a small team of 3 passionate marketers determined to make creative, data-driven marketing accessible to startups.",
      },
      {
        year: "2018",
        title: "First International Client",
        desc: "Expanded into the US and partnered with Silicon Valley tech firms, optimizing digital ad performance by 200%.",
      },
      {
        year: "2020",
        title: "Global Expansion",
        desc: "Opened remote hubs in the UK and India, building a globally distributed creative team.",
      },
      {
        year: "2023",
        title: "AI-Powered Marketing Tools",
        desc: "Launched proprietary AI dashboards to automate insights and reduce campaign waste by 40%.",
      },
      {
        year: "2025",
        title: "Future Ready",
        desc: "Now serving over 120+ clients worldwide — leading with purpose, transparency, and innovation.",
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className={`mb-12 flex flex-col md:flex-row items-start  md:items-center lg:items-center ${
          index % 2 === 0 ? "md:flex-row-reverse" : ""
        }`}
      >
        
        <div className="md:w-1/2 md:text-right px-8">
          <h3 className="text-2xl font-bold text-blue-300">{item.year}</h3>
          <p className="text-lg text-yellow-400">{item.title}</p>
        </div>
        <div className="w-4 h-4 bg-blue-400 rounded-full shadow-lg mx-2 md:mx-8"></div>
        <div className="md:w-1/2 px-8 sm:px-6 md:px-6 lg:f ">
          <p className="text-gray-300">{item.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>

{/* Company Culture Parallax Section */}
<section className="relative py-20 sm:py-28 bg-gray-900 overflow-hidden">
  {/* Radial Overlay */}
  <div
    className="absolute inset-0"
    style={{
      background: "radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
    }}
  ></div>

  {/* Heading + Description */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="text-center relative z-10 px-4"
  >
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-4 sm:mb-6">
      Our Culture Moves with You
    </h2>
    <p className="max-w-xl mx-auto text-gray-300 text-sm sm:text-base mb-10 sm:mb-12">
      Innovation, collaboration, and inclusion are not buzzwords for us — they’re our daily DNA.
      Every campaign, every pixel, every insight is crafted with heart and purpose.
    </p>
  </motion.div>

  {/* Image Layout */}
  <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-0 h-auto md:h-[400px] px-4">
    {/* Image 1 */}
    <motion.img
      src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80"
      alt="Team 1"
      className="rounded-xl shadow-xl w-[220px] h-[160px] md:absolute md:w-[260px] md:h-[200px] md:left-[18%] md:top-[40%]"
      whileHover={{ scale: 1.05 }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    />

    {/* Image 2 */}
    <motion.img
      src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2?auto=format&fit=crop&w=600&q=80"
      alt="Team 2"
      className="rounded-xl shadow-xl w-[240px] h-[180px] md:absolute md:w-[300px] md:h-[200px] md:right-[18%] md:top-[50%]"
      whileHover={{ scale: 1.05 }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.7 }}
    />

    {/* Image 3 */}
    <motion.img
      src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80"
      alt="Office"
      className="rounded-xl shadow-xl w-[240px] h-[180px] md:absolute md:w-[300px] md:h-[250px] md:right-[40%] md:top-[0%]"
      whileHover={{ scale: 1.05 }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    />
  </div>
</section>


      {/* Our Philosophy */}
      <section className="bg-gray-900 py-20 px-6 text-center -mt-10 md:-mt-13">
        <h2 className="text-3xl font-bold text-blue-400 mb-12">
          Our Core Philosophy
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Human-Centered Strategy",
              desc: "We believe marketing should connect deeply with real human needs and emotions.",
            },
            {
              title: "Data with Soul",
              desc: "Analytics guide us, but empathy shapes our storytelling.",
            },
            {
              title: "Sustainable Impact",
              desc: "We build brands that make a positive, lasting difference — not just clicks.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-blue-400/40 transition"
            >
              <h3 className="text-2xl font-semibold text-blue-300 mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-400 mb-12">
          Our Global Presence
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-gray-300 mb-10"
        >
          From Toronto to London, Dubai to Singapore — Bluenose teams collaborate across time zones
          to deliver consistent, high-performing campaigns for our clients around the world.
        </motion.p>
        <div className="flex flex-wrap justify-center gap-6 text-blue-300 font-semibold">
          {["Canada", "USA", "UK", "UAE", "Singapore", "Australia", "India"].map((loc, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="border border-blue-400/40 px-5 py-2 rounded-full hover:bg-blue-500/20 transition"
            >
              {loc}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-gray-900 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-400 mb-10">
          Tools & Platforms We Trust
        </h2>
        <div className="flex flex-wrap justify-center gap-6 text-gray-300">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-gray-800 px-5 py-3 rounded-xl shadow hover:shadow-blue-400/30 transition"
            >
              {tool}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-blue-400 mb-6"
        >
          Our Vision for 2030
        </motion.h2>
        <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
          By 2030, Bluenose aims to be a carbon-neutral, AI-integrated marketing agency that
          empowers 10,000+ businesses worldwide to scale sustainably and ethically.
        </p>
      </section>

    
    </div>
  );
};

export default AboutPage;


// import { motion } from "framer-motion";
// // import bannerImg from "../assets/dashboard.png"; // replace with your image

// const AboutPage = () => {
//   return (
//     <div className="bg-gray-950 text-white min-h-screen font-sans">
//       {/* Hero Section */}
//       <section className="text-center py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-950">
//         <motion.h1
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-4"
//         >
//           About Bluenose Digital Marketing
//         </motion.h1>
//         <p className="text-gray-300 max-w-2xl mx-auto text-lg">
//           We help brands grow through powerful digital marketing strategies, data-driven
//           decisions, and creative storytelling that converts.
//         </p>
//       </section>

//       {/* Who We Are */}
//       <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//         <motion.img
//          src= "/Client_Logo/1.png"
//           alt="Our Team"
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           className="rounded-2xl shadow-lg"
//         />
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-3xl font-bold text-blue-400 mb-4">Who We Are</h2>
//           <p className="text-gray-300 leading-relaxed">
//             Bluenose Digital Marketing is a full-service agency focused on helping
//             businesses thrive online. From startups to enterprises, we combine creativity
//             with analytics to deliver impactful campaigns that drive measurable growth.
//           </p>
//         </motion.div>
//       </section>

//       {/* Our Mission & Vision */}
//       <section className="bg-gray-900 py-16 px-6 text-center">
//         <h2 className="text-3xl font-bold text-blue-400 mb-10">Our Mission & Vision</h2>
//         <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-blue-400/40 transition"
//           >
//             <h3 className="text-2xl font-semibold mb-3 text-blue-300">Our Mission</h3>
//             <p className="text-gray-300">
//               To empower brands with data-driven digital marketing strategies that amplify
//               visibility, engagement, and revenue.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-blue-400/40 transition"
//           >
//             <h3 className="text-2xl font-semibold mb-3 text-blue-300">Our Vision</h3>
//             <p className="text-gray-300">
//               To be a global leader in digital marketing innovation — inspiring creativity,
//               building brands, and shaping the digital future.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* What We Do */}
//       <section className="py-20 px-6 text-center">
//         <h2 className="text-3xl font-bold text-blue-400 mb-10">What We Do</h2>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {[
//             {
//               title: "SEO Optimization",
//               desc: "Boost your search visibility and bring organic traffic that converts.",
//             },
//             {
//               title: "Social Media Marketing",
//               desc: "Engage audiences with strategic campaigns and impactful storytelling.",
//             },
//             {
//               title: "Google Ads & PPC",
//               desc: "Maximize ROI with performance-driven paid advertising campaigns.",
//             },
//             {
//               title: "Content Creation",
//               desc: "We craft content that resonates with your audience and builds brand trust.",
//             },
//             {
//               title: "Email Marketing",
//               desc: "Nurture relationships and increase conversions through smart automation.",
//             },
//             {
//               title: "Website Development",
//               desc: "Designing modern, fast, and SEO-friendly websites that convert visitors.",
//             },
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//               className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-400/40 transition"
//             >
//               <h3 className="text-xl font-semibold text-blue-300 mb-2">
//                 {item.title}
//               </h3>
//               <p className="text-gray-400 text-sm">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Our Process */}
//       <section className="bg-gray-900 py-16 px-6 text-center">
//         <h2 className="text-3xl font-bold text-blue-400 mb-10">Our Process</h2>
//         <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
//           {["Research", "Strategy", "Execution", "Optimization"].map((step, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-400/40 transition"
//             >
//               <h3 className="text-xl font-semibold text-blue-300 mb-2">{step}</h3>
//               <p className="text-gray-400 text-sm">
//                 We combine creativity with analytics in every phase — ensuring your campaigns
//                 deliver real, measurable results.
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-20 px-6 text-center">
//         <h2 className="text-3xl font-bold text-blue-400 mb-10">What Our Clients Say</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {[
//             {
//               name: "Rahul Sharma",
//               feedback:
//                 "Bluenose transformed our social media presence — we saw 3x engagement in just two months!",
//             },
//             {
//               name: "Sneha Kapoor",
//               feedback:
//                 "Their SEO team helped us rank on the first page for competitive keywords. Excellent work!",
//             },
//             {
//               name: "Amit Verma",
//               feedback:
//                 "Professional, transparent, and creative — Bluenose is our go-to digital partner.",
//             },
//           ].map((client, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: i * 0.2 }}
//               className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-400/40 transition"
//             >
//               <p className="text-gray-300 italic mb-4">“{client.feedback}”</p>
//               <h4 className="text-blue-300 font-semibold">{client.name}</h4>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 py-6 text-center text-gray-400 text-sm">
//         © {new Date().getFullYear()} Bluenose Digital Marketing. All rights reserved.
//       </footer>
//     </div>
//   );
// };

// export default AboutPage;

