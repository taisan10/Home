
import { Container, GradientText } from "./UiComponent";
import { useState } from "react";

export default function ContactNew() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phoneCode: "+91",
    phone: "",
    role: "",
    services: [],
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const updatedServices = checked
          ? [...prev.services, value]
          : prev.services.filter((service) => service !== value);
        return { ...prev, services: updatedServices };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.email) {
      setStatus("❌ Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setStatus("");

    const CONTACT_API = import.meta.env.VITE_CONTACT_API;

    try {
      const res = await fetch(CONTACT_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({
          firstName: "",
          email: "",
          phoneCode: "+91",
          phone: "",
          role: "",
          services: [],
          message,
        });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Something went wrong. Try again later.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="bg-neutral text-white py-16 sm:py-20">
      <Container className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="lg:text-8xl text-4xl sm:text-5xl font-bold text-start mb-10 -mt-10">
          Connect with us  
          <br />
          directly
        </h1>
        <hr className="border-gray-400 mb-4" />

        {/* Email */}
        <div className="mb-10 text-lg md:text-2xl">
          <a
            href="mailto:sales@bluenosemarketing.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-sm md:text-md">
              <GradientText>— </GradientText>
            </span>
            sales@bluenosemarketing.com
          </a>
        </div>

        {/* Layout */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Left */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h5 className="text-2xl sm:text-3xl font-bold">
              We're listening, reach out anytime!
            </h5>
          </div>

          {/* Right */}
          <div className="w-full md:w-1/2 text-start">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 border-b border-gray-400">
              Your Details
            </h3>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div>
                <label htmlFor="firstName" className="block mb-1 text-2xl font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full text-lg bg-black border-b border-gray-600 text-gray-200 py-2 focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block mb-1 text-2xl font-semibold">
                  Phone Number
                </label>
                <div className="flex items-center gap-3">
                  <select
                    name="phoneCode"
                    value={formData.phoneCode}
                    onChange={handleChange}
                    className="bg-black text-lg border-b border-gray-600 text-gray-200 py-2 focus:outline-none focus:border-cyan-400"
                  >
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                  </select>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="flex-1 bg-black text-lg border-b border-gray-600 text-gray-200 py-2 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-1 text-2xl font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full text-lg bg-black border-b border-gray-600 text-gray-200 py-2 focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* Role */}
              <div>
                <label htmlFor="role" className="block mb-1 text-2xl font-semibold">
                  Are you a Creator or a Brand?
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full text-lg bg-black border-b border-gray-600 text-gray-200 py-2 focus:outline-none focus:border-cyan-400"
                >
                  <option value="">Select option</option>
                  <option value="Creator">Creator</option>
                  <option value="Brand">Brand</option>
                </select>
              </div>

              {/* Services */}
              <div>
                <label className="block mb-2 text-2xl font-semibold">
                  What services are you looking for?
                </label>
                <div className="flex flex-col gap-3 text-gray-300 text-xl">
                  {[ "Social Media Handling", "Video Production","Events","Influencer Marketing", "Others"].map((service) => (
                    <label key={service} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value={service}
                        checked={formData.services.includes(service)}
                        onChange={handleChange}
                        className="accent-cyan-400"
                      />
                      {service}
                    </label>
                  ))}
                </div>
              </div>
            <div>

              <div>
                <label className="block mb-2 text-2xl font-semibold">
Message For Us:
                </label>
               <textarea
               id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Something in your mind we should know?"
                rows="4"
                className="w-full px-4 py-2 rounded-lg text-white border-b border-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              </div>
            </div>


              {/* Submit */}
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-8 py-3 text-lg font-medium text-white shadow-lg hover:scale-105 transition disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>

              {status && (
                <div
                  className={`text-sm mt-2 ${
                    status.includes("❌") ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
