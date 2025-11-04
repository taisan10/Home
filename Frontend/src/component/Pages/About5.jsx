

import React from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
// import teamImage from "../assets/dashboard.png";

// Map marker icon fix for Leaflet in React
const icon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const AboutPage = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans overflow-hidden">
      {/* ---------------- HERO ---------------- */}
      <section className="relative text-center py-28 px-6 bg-gradient-to-b from-gray-900 to-gray-950">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold text-yellow-400 mb-6 -mt-10"
        >
          About Bluenose Digital Marketing
        </motion.h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed -mb-18">
          Building global brands through innovation, strategy, and technology — from North America to the UK, we drive businesses forward in the digital era.
        </p>
      </section>

      {/* ---------------- CORE PHILOSOPHY ---------------- */}
      <section className="py-24 px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center -mt-40">
        <motion.img
            src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80"
          alt="Bluenose Team"
          {...fadeUp}
          className="rounded-2xl shadow-2xl h-120 w-100"
        />
        <motion.div {...fadeUp}>
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">
            Our Core Philosophy
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            At Bluenose, marketing isn’t just about clicks — it’s about connection. 
            We create campaigns that blend creativity with precision, powered by empathy and data.
          </p>
          <ul className="space-y-3 text-gray-400 text-base">
            <li>💡 <strong>Creativity with Purpose</strong> — every pixel tells a story.</li>
            <li>📊 <strong>Data with Empathy</strong> — we read numbers, but we feel people.</li>
            <li>⚡ <strong>Innovation with Integrity</strong> — no shortcuts, only smart solutions.</li>
            <li>🌎 <strong>Sustainability in Digital</strong> — growth that respects the planet.</li>
          </ul>
        </motion.div>
      </section>

      {/* ---------------- MISSION / VISION / VALUES ---------------- */}
      <section className="bg-gray-900 py-24 px-8 text-center -mt-15">
        <h2 className="text-3xl font-bold text-yellow-400 mb-12 -mt-15">Mission. Vision. Values.</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { title: "Mission", desc: "Empower brands to reach their full digital potential through data-driven creativity." },
            { title: "Vision", desc: "To become the most trusted digital growth partner across US, Canada, and the UK." },
            { title: "Values", desc: "Integrity, innovation, and inclusivity in every campaign we craft." },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-yellow-400/30 transition"
            >
              <h3 className="text-2xl font-semibold text-yellow-300 mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- GLOBAL PRESENCE ---------------- */}
      <section className="py-24 px-8 max-w-7xl mx-auto -mt-15">
        <motion.h2 {...fadeUp} className="text-3xl font-bold text-yellow-400 text-center mb-8">
          Global Presence
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {[
            {
              country: "🇺🇸 United States",
              city: "New York, San Francisco",
              text: "Empowering startups and enterprises with strategic marketing that scales.",
            },
            {
              country: "🇨🇦 Canada",
              city: "Toronto, Vancouver",
              text: "Helping Canadian brands connect emotionally and grow sustainably.",
            },
            {
              country: "🇬🇧 United Kingdom",
              city: "London, Manchester",
              text: "Delivering creative campaigns with global reach and local relevance.",
            },
          ].map((office, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-gray-800 rounded-2xl p-10 shadow-lg hover:shadow-yellow-400/40 transition"
            >
              <h3 className="text-2xl font-semibold text-yellow-300 mb-2">
                {office.country}
              </h3>
              <p className="text-gray-400 mb-3">{office.city}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{office.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- INTERACTIVE MAP ---------------- */}
      <section className="bg-gray-900 py-24 px-8 text-center -mt-15">
        <h2 className="text-3xl font-bold text-yellow-400 mb-10 -mt-15">
          Our Global Offices
        </h2>
        <div className="max-w-5xl mx-auto h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-800">
          <MapContainer
            center={[51, -0.1]}
            zoom={2.5}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            <Marker position={[40.7128, -74.006]} icon={icon}>
              <Popup>🇺🇸 Bluenose US Office - New York</Popup>
            </Marker>
            <Marker position={[43.65107, -79.347015]} icon={icon}>
              <Popup>🇨🇦 Bluenose Canada Office - Toronto</Popup>
            </Marker>
            <Marker position={[51.5072, -0.1276]} icon={icon}>
              <Popup>🇬🇧 Bluenose UK Office - London</Popup>
            </Marker>
          </MapContainer>
        </div>
      </section>

{/* ---------------- LEADERSHIP / FUTURE ---------------- */}
      <section className="py-24 px-8 max-w-5xl mx-auto text-center -mt-15">
        <motion.h2 {...fadeUp} className="text-3xl font-bold text-yellow-400 mb-10 -mt-5">
          The Future We’re Building
        </motion.h2>
        <motion.p
          {...fadeUp}
          className="max-w-3xl mx-auto text-gray-300 leading-relaxed text-lg mb-12"
        >
          Our vision extends beyond marketing — we’re creating a digital ecosystem that’s inclusive, ethical, and impactful. From AI-driven insights to sustainable growth strategies, we’re shaping the next era of brand building.
        </motion.p>
        <motion.div
          {...fadeUp}
          className="bg-gray-800 p-10 rounded-2xl max-w-3xl mx-auto shadow-lg hover:shadow-yellow-400/40 transition"
        >
          <p className="text-yellow-300 italic text-lg">
            “We don’t chase trends — we craft transformations.”
          </p>
          <p className="text-gray-400 mt-4">— Leadership Team, Bluenose Digital Marketing</p>
        </motion.div>
      </section>






      {/* ---------------- TEAM SECTION ---------------- */}
      <section className="py-24 px-8 max-w-7xl mx-auto text-center -mt-35">
        <motion.h2 {...fadeUp} className="text-3xl font-bold text-yellow-400 mb-12">
          Meet Our Leadership
        </motion.h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              name: "Sarah Johnson",
              role: "CEO & Strategy Director",
              img: "https://randomuser.me/api/portraits/women/68.jpg",
            },
            {
              name: "Daniel Carter",
              role: "Creative Head",
              img: "https://randomuser.me/api/portraits/men/75.jpg",
            },
            {
              name: "Emma Wilson",
              role: "Digital Marketing Lead",
              img: "https://randomuser.me/api/portraits/women/65.jpg",
            },
          ].map((member, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-yellow-400/30 transition"
            >
              <div className="relative">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-yellow-300">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm mt-1">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


    {/* ---------------- JOIN OUR TEAM ---------------- */}
<section className="relative py-24 px-8 text-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950">
  <motion.img
    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80"
    alt="Team Working"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 0.15 }}
    transition={{ duration: 1 }}
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="relative z-10 max-w-3xl mx-auto">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6"
    >
      Join Our Global Team
    </motion.h2>
    <p className="text-gray-300 text-lg mb-10 leading-relaxed">
      At Bluenose, we’re more than a digital agency — we’re a movement of thinkers, creators, and innovators shaping the future of marketing.  
      Whether you’re in design, analytics, or strategy — your next chapter starts here.
    </p>
    <motion.a
      href="/careers"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block bg-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition"
    >
      Explore Careers
    </motion.a>
  </div>
</section>

    </div>
  );
};

export default AboutPage;








