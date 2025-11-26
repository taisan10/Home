import { Container,GradientText } from "../UI/UiComponent";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneCode: "",
    phone: "",
    role: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.email || !formData.message) {
      setStatus("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setStatus("");

    const phoneCodes = ["+91", "+1", "+44"];
    let submittedPhones = [];

    if (formData.phone) {
      if (formData.phoneCode) {
        submittedPhones = [`${formData.phoneCode} ${formData.phone}`];
      } else {
        submittedPhones = phoneCodes.map((code) => `${code} ${formData.phone}`);
      }
    }

    const payload = {
      ...formData,
      submittedPhones,
    };

    const CONTACT_API = import.meta.env.VITE_CONTACT_API;
    try {
      const res = await fetch(CONTACT_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneCode: "",
          phone: "",
          role: "",
          message: "",
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
    <section id="contact" className="bg-neutral text-white py-16 sm:py-20 -mb-30">
      <Container className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="lg:text-8xl text-4xl sm:text-5xl font-bold text-start mb-10 -mt-10">
        Connect with us  
         <br />
        directly
        </h1>
        <hr className="border-gray-400 mb-4" />
    


       {/* <a className="mb-10 text-lg md:text-2xl"> <span className="text-2xl"> <GradientText>— </GradientText></span>sales@bluenosemarketing.com</a> */}
<div className="mb-10 text-lg md:text-2xl">


       <a
              href="mailto:sales@bluenosemarketing.com"
              target="_blank"
              rel="noopener noreferrer"
            >
          <span className="text-sm md:text-md">
              <GradientText>— </GradientText> </span>sales@bluenosemarketing.com
            </a>
            </div>

        {/* Left + Right */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Left Side */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h5 className="text-2xl sm:text-3xl font-bold">
            We're listening, reach out anytime!

            </h5>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 text-start">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 border-b border-gray-400">
              Your Details
            </h3>


            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="First Name"
                  className="w-full px-4 py-2 rounded-lg text-white border-b border-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full px-4 py-2 rounded-lg text-white border-b border-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>

              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg text-white border-b border-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />

              <div className="flex gap-2 items-center">
                <select
                  name="phoneCode"
                  value={formData.phoneCode}
                  onChange={handleChange}
                  className="w-1/3 px-4 py-2 rounded-lg text-white bg-black border-b border-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-400"
                >
                  <option value="">Code</option>
                  <option value="+44">+44</option>
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                </select>

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone (optional)"
                  className="w-2/3 px-4 py-2 rounded-lg text-white border-b border-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-black border-b border-gray-50 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
              >
                <option value="">Are you a Creator or a Brand?</option>
                <option value="Creator">Creator</option>
                <option value="Brand">Brand</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What services are you looking for?"
                rows="4"
                className="w-full px-4 py-2 rounded-lg text-white border-b border-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />

              <button type="submit" className="rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-3 text-sm font-medium text-white shadow-lg disabled:opacity-50" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
          </button>

              {status && (
                <div
                  className={`text-sm mt-2 ${
                    status.includes("❌") || status.includes("Please")
                      ? "text-red-600"
                      : "text-green-700"
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

