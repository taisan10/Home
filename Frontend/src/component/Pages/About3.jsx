 
import { Container } from "../UI/UiComponent";

import { useEffect, useState } from "react";


export default function AboutUs() {
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsLarge(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pillars = [
    {
      title: "Authenticity",
      desc: "We believe digital marketing should be human — honest, emotional, and real. Every campaign we craft has a pulse, not just pixels.",
      icon: "❤️",
    },
    {
      title: "Strategy",
      desc: "Every creative decision begins with data and insight. We mix intuition with analytics to make campaigns that truly convert.",
      icon: "📊",
    },
    {
      title: "Innovation",
      desc: "We don’t follow digital trends — we create them. From storytelling formats to viral experiments, we constantly push the limits.",
      icon: "🚀",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Listen & Discover",
      desc: "We dive deep into your brand — understanding your audience, vision, and values before crafting a single line of copy or code.",
      img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    },
    {
      step: "02",
      title: "Strategize & Design",
      desc: "Our strategists and creatives collaborate to build a roadmap that merges storytelling, visuals, and performance goals.",
      img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
    },
    {
      step: "03",
      title: "Launch & Grow",
      desc: "We execute with precision, measure in real time, and optimize relentlessly. Growth isn’t luck — it’s the result of disciplined creativity.",
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const team = [
    {
      name: "Rhea Kapoor",
      role: "Chief Vision Officer",
      quote: "Creativity begins where comfort ends.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Dev Singh",
      role: "Performance Lead",
      quote: "Numbers tell stories — we just learn to listen.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Mitali Ghosh",
      role: "Content Director",
      quote: "Brands don’t speak — they express emotion through words.",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Arjun Rao",
      role: "Digital Growth Analyst",
      quote: "Strategy without soul is noise. We bring both.",
      image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="bg-[#0a0a0a] text-white px-6 md:px-12 py-20 space-y-24">

      {/* Intro Section */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
          We Shape Stories That Spark Digital Movements
        </h1>
        <p className="mt-6 text-gray-300 text-lg leading-relaxed">
          We’re a new-age digital marketing collective that believes in the power of storytelling. 
          Every click, every view, every share — we make sure it matters. 
          We don’t chase trends — we build narratives that stay.
        </p>
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
          alt="Creative Office"
          className="mt-10 rounded-2xl w-auto max-w-120 h-auto max-h-80 shadow-lg w-full mx-auto"
        />
      </div>

      {/* Our Essence */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">The Essence of Who We Are</h2>
        <p className="text-gray-400 text-base mb-8">
          Digital Pulse is not an agency. We’re a tribe of creators, data nerds, and storytellers who believe marketing should feel like art with purpose. 
          Our mission is simple — make brands *unforgettable* online.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <div key={i} className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-cyan-400 transition">
              <div className="text-4xl mb-3">{p.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Process */}
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">Our Process to Impact</h2>
        {process.map((p, i) => (
          <div
            key={i}
            className={`flex flex-col ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"} items-center gap-8`}
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full sm:w-1/2 h-auto max-h-80 rounded-2xl shadow-lg object-cover"
            />
            <div className="sm:w-1/2 space-y-3  ">
              <span className="text-cyan-400 font-semibold text-lg">{p.step}</span>
              <h3 className="text-2xl font-bold">{p.title}</h3>
              <p className="text-gray-400 text-base">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* The Culture */} 
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Culture Is Our Superpower</h2>
        <p className="text-gray-400 mb-6">
          We celebrate curiosity, collaboration, and caffeine. Our office hums with energy, 
          laughter, and the belief that good ideas can come from anyone. 
          We don’t work *for* brands — we work *with* them.
        </p>
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
          alt="Office Collaboration"
          className="rounded-xl shadow-xl mx-auto h-auto max-h-80"
        />
      </div>

      {/* Meet The Team */}
      <div>
        <h2 className="text-3xl font-bold mb-4 text-center">Meet The Minds Behind The Magic</h2>
        <p className="text-gray-400 text-center mb-8">
          The brilliance behind our campaigns comes from dreamers who think, feel, and create with intent.
        </p>
        <div className="flex flex-wrap justify-center gap-10">
          {team.map((member, i) => (
            <div key={i} className="w-48 text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-36 h-36 mx-auto rounded-full object-cover mb-3 border-2 border-cyan-400"
              />
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-xs text-cyan-400">{member.role}</p>
              <p className="text-xs italic text-gray-400 mt-1">“{member.quote}”</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center pt-10 border-t border-gray-800">
        <h2 className="text-2xl font-bold mb-3">Let’s Build Your Digital Legacy</h2>
        <p className="text-gray-400 mb-6">
          Whether you're rebranding, scaling, or starting fresh — we’ll help your vision echo across the internet.
        </p>
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-400 hover:to-cyan-500 text-black font-semibold px-8 py-3 rounded-full shadow-lg transition"
        >
          Partner With Us
        </a>
      </div>
    </section>
  );
}
