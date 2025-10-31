




















import { motion } from "framer-motion";
import { Container } from "../../component/UI/UiComponent";
// import { Button } from "@/components/ui/button";
import { Lightbulb, Users, Globe2, Target } from "lucide-react";

export default function About() {
  return (
    <section className="bg-gradient-to-br from-[#0a0a0a] via-[#1b1b1b] to-[#111] text-white overflow-hidden">
      <Container className="py-20">
        {/* --- Intro Section --- */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-100 bg-clip-text text-transparent">
            Redefining The Way Businesses Hire
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed text-lg">
            At <span className="text-yellow-300 font-semibold">Bansal Consultancy</span>, we don’t just connect people and companies — 
            we align passion with purpose, vision with value, and skill with success.
            Every placement we make is a story of transformation, trust, and triumph.
          </p>
        </motion.div>

        {/* --- Vision & Mission Cards --- */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div
            className="bg-[#181818] rounded-2xl p-8 shadow-lg border border-yellow-500/20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Lightbulb className="text-yellow-400 w-10 h-10 mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              To create a world where the right opportunity meets the right talent 
              — building bridges that lead to sustainable growth, innovation, and 
              fulfillment for both companies and professionals.
            </p>
          </motion.div>

          <motion.div
            className="bg-[#181818] rounded-2xl p-8 shadow-lg border border-yellow-500/20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Target className="text-yellow-400 w-10 h-10 mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              Empower individuals and companies by offering transparent, reliable, 
              and fast hiring solutions — ensuring every match contributes to 
              a more efficient and inspired workforce.
            </p>
          </motion.div>
        </div>

        {/* --- Story Section --- */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <motion.img
            src="/about/teamwork.jpg"
            alt="Team collaboration"
            className="rounded-2xl shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-bold text-yellow-300 mb-4">
              Our Story — From Vision to Value
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              What started as a small consultancy with a bold dream has now become 
              a trusted name in workforce solutions. We’ve evolved with the industry, 
              adapting to modern technologies, and understanding the heart of every business need.
            </p>
            <p className="text-gray-400">
              Today, we continue our journey — bridging skill gaps, mentoring professionals, 
              and redefining hiring with a human touch.
            </p>
          </motion.div>
        </div>

        {/* --- Our Process to Impact (same as before) --- */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-10 text-yellow-300">
            Our Process to Impact
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Understanding You", desc: "We begin by listening deeply to your needs, goals, and aspirations." },
              { icon: Globe2, title: "Global Research", desc: "Our experts research market trends and identify the best-fit talent." },
              { icon: Target, title: "Tailored Strategy", desc: "Each hiring solution is custom-built to align with your company’s culture." },
              { icon: Lightbulb, title: "Impact & Growth", desc: "We measure success not by numbers, but by the value we deliver." },
            ].map((step, idx) => (
              <div key={idx} className="bg-[#181818] rounded-2xl p-6 shadow-md border border-yellow-400/10 hover:scale-105 transition">
                <step.icon className="text-yellow-300 w-10 h-10 mb-4 mx-auto" />
                <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- CTA --- */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold mb-4">
            Let’s Create an Impact Together
          </h3>
          <p className="text-gray-400 mb-8">
            Join hands with Bansal Consultancy and experience the new age of hiring excellence.
          </p>
          {/* <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full">
            Get in Touch
          </Button> */}
        </motion.div>
      </Container>
    </section>
  );
}
