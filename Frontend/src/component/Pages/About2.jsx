




import { useState, useEffect } from "react";

export default function Works() {
  const [isMdScreen, setIsMdScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMdScreen(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
    const team = [
    {
      name: "Karan Patel",
      role: "Visual Designer",
      quote: "Design speaks when words can’t.",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Nisha Patel",
      role: "Content Strategist",
      quote: "Words don’t sell — stories do.",
      image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Karan Mehta",
      role: "Brand Consultant",
      quote: "Every brand has a soul — we just help reveal it.",
      image: "https://images.unsplash.com/photo-1573496799515-eebbb63814f2?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Ishan Verma",
      role: "Digital Media Analyst",
      quote: "Data tells us where emotion meets logic.",
      image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const services = [
    {
      title: "Social Media Management",
      desc: "We craft content calendars, manage engagement, and grow your brand voice across platforms.",
      icon: "📱",
    },
    {
      title: "Graphic Design",
      desc: "From logos to carousels, we design visuals that speak louder than words.",
      icon: "🎨",
    },
    {
      title: "Videography",
      desc: "We shoot cinematic content that captures attention and emotion.",
      icon: "🎥",
    },
    {
      title: "Video Editing",
      desc: "We edit with rhythm, emotion, and clarity — turning raw footage into stories.",
      icon: "✂️",
    },
  ];

  const values = [
    "🚀 Innovation",
    "🎯 Impact",
    "💬 Transparency",
    "🔥 Passion",
    "🤝 Collaboration",
    "🌍 Responsibility",
  ];

  return (
    <section className="bg-[#0d0d0d] text-white px-4 sm:px-8 md:px-16 py-16 space-y-24">
      {/* HERO */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-sky-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
          We Don’t Market Brands — We Build Movements
        </h1>
        <p className="mt-4 text-gray-300 text-lg">
          We’re a digital marketing collective that blends design, data, and
          storytelling to help brands grow — not just louder, but smarter.
        </p>
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
          alt="Team working"
          className="mt-10 rounded-2xl shadow-2xl w-80 h-60  mx-auto"
        />
      </div>

      {/* OUR PURPOSE */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-3">Our Purpose</h2>
        <p className="text-gray-400 leading-relaxed">
          We exist to help businesses express themselves fearlessly in the
          digital world. Every campaign we create is built on insight, driven by
          creativity, and guided by measurable growth.
        </p>
      </div>

      {/* CORE VALUES */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm font-medium text-gray-200">
          {values.map((val, i) => (
            <li
              key={i}
              className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-xl hover:scale-105 transition-transform"
            >
              {val}
            </li>
          ))}
        </ul>
      </div>

      {/* OUR PROCESS */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">How We Work</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {[
            {
              title: "Research",
              desc: "We dive deep into audience insights and market behavior.",
              icon: "🔍",
            },
            {
              title: "Strategy",
              desc: "We create campaigns that align creativity with conversions.",
              icon: "🧠",
            },
            {
              title: "Execution",
              desc: "Our designers, writers, and editors bring strategy to life.",
              icon: "🎬",
            },
            {
              title: "Optimization",
              desc: "We measure, refine, and evolve — ensuring consistent growth.",
              icon: "📈",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="bg-gray-900 p-6 rounded-xl hover:shadow-lg hover:shadow-sky-500/10 transition-all"
            >
              <div className="text-3xl mb-3">{step.icon}</div>
              <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
 {/* Services */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-center">What We Do</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6 text-sm">
          {services.map((service, i) => (
            <div key={i} className="bg-gray-900 rounded-xl shadow p-5 text-center">
              <div className="text-3xl mb-2">{service.icon}</div>
              <h3 className="font-bold text-lg mb-1 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>


  {/* The Team */}
      <div>
        <h2 className="text-3xl font-bold mb-4 text-center">Meet Our Dreamers</h2>
        <p className="text-gray-400 text-center mb-8">
          A team of thinkers, creators, and strategists who live to make digital feel personal.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member, i) => (
            <div key={i} className="w-44 text-center">
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full w-32 h-32 object-cover mx-auto mb-3 border-2 border-yellow-400"
              />
              <p className="font-semibold text-white">{member.name}</p>
              <p className="text-xs text-yellow-400">{member.role}</p>
              <p className="text-xs italic text-gray-400 mt-1">“{member.quote}”</p>
            </div>
          ))}
        </div>
      </div>

      {/* CULTURE SECTION */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Work Culture</h2>
        <p className="text-gray-400 mb-6">
          We believe creativity thrives in freedom. Our culture encourages open
          ideas, daily learning, and bold experimentation — because the best
          results are born when passion meets play.
        </p>
          <img
          src="/Public/Client_Logo/1.png"
          alt="Startup Journey"
          className="rounded-xl shadow-lg mx-auto w-80 h-60 "
        />
      </div>

      {/* TESTIMONIAL */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Client Love ❤️</h2>
        <p className="text-gray-300 italic">
          “Working with this team was like having an in-house creative partner.
          They understood our vision, elevated our brand, and made every post
          feel powerful.”
        </p>
        <p className="mt-3 text-gray-500">— A Happy Client, Startup Founder</p>
           <img
          src="/Public/Client_Logo/2.png"
          alt="Startup Journey"
          className="rounded-xl shadow-lg mx-auto w-80 h-60 "
        />
      </div>

     {/* Mission & Vision */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Mission & Vision</h2>
        <p className="text-base text-gray-300 mb-6">
          Our mission is to empower brands with emotionally resonant digital content. Our vision is to become the most trusted creative partner for businesses seeking impact through design, video, and strategy.
        </p>
        <img
           src="/Public/Client_Logo/3.png"
          alt="Mission and Vision"
          className="rounded-xl shadow-lg mx-auto w-80 h-60"
        />
      </div>
 
      {/* Our Story */}
       <div className="text-center max-w-3xl mx-auto">
         <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <p className="text-base text-gray-300 mb-6">
           From a two-person startup to a full-service creative agency, our journey has been driven by curiosity, courage, and client trust. We’ve grown through experimentation, iteration, and relentless pursuit of quality.
        </p>  
        <img
           src="/Public/Client_Logo/4.png"
          alt="Startup Journey"
          className="rounded-xl shadow-lg mx-auto w-80 h-60 "
        />   
      </div>

      {/* Testimonials */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
        <p className="text-base text-gray-300 mb-6">
          “Working with this team felt like collaborating with artists who understand business. Our engagement soared.” — Happy Client
        </p>
        <img
           src="/Public/Client_Logo/5.png"
          alt="Startup Journey"
          className="rounded-xl shadow-lg mx-auto w-50 h-50 "
        />
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to Transform Your Digital Story?
        </h2>
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-sky-400 to-teal-400 hover:from-teal-400 hover:to-emerald-400 text-black font-semibold px-8 py-3 rounded-full shadow-lg transition-transform hover:-translate-y-1"
        >
          Let’s Collaborate
        </a>
      </div>
    </section>
  );
}