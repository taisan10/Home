





import { Container } from "../UI/UiComponent";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneCode: "", // default empty
    phone: "",
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
    <section id="contact" className="py-16 sm:py-20">
      <Container className="grid gap-8 sm:gap-12 md:grid-cols-2 items-start">
        <div>
          <h3 className="text-3xl sm:text-4xl font-semibold leading-tight mb-4 sm:mb-6">
            Ready to Elevate Your Marketing?
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-white/80 text-base sm:text-lg">
            <li>• How does the Bluenose agency work for your brand?</li>
            <li>• How can you do marketing at scale better, faster and cheaper?</li>
            <li>• How we’re different from agencies, freelancers and in‑house teams (hint: faster & leaner!)</li>
            <li>• Which subscription plan fits your growth goals?</li>
          </ul>
        </div>

        <div className="rounded-[24px] sm:rounded-[28px] bg-white p-5 sm:p-8 shadow-xl text-neutral-900">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-3 sm:gap-4 text-neutral-900"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm"
                placeholder="First Name*"
                required
              />
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm"
                placeholder="Last Name"
              />
            </div>

            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Work Email*"
              className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm"
              required
            />

            <div className="flex gap-2">
              <select
                name="phoneCode"
                value={formData.phoneCode}
                onChange={handleChange}
                className="w-24 rounded-xl border border-neutral-200 bg-white px-3 py-3 text-sm"
              >
                <option value="">Code</option>
                <option value="+44">+44</option>
                <option value="+1">+1</option>
                <option value="+91">+91</option>
              </select>

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone (optional)"
                className="flex-1 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="What tasks would you like to solve?"
              className="min-h-[120px] rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm"
            />

            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-3 text-sm font-medium text-white shadow-lg disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Chat With Us  "}
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
      </Container>
    </section>
  );
}
