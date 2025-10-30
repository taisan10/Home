import { Container, SectionTitle, PrimaryButton } from "../UI/UiComponent";
export default function Company() {
//   return <h1 className="text-center text-3xl p-10">Company Page</h1>;
// }


// export default function AboutUs() {
  return (
    <section className="py-12 px-4 sm:px-6 md:px-12 text-center">
      <Container>

        {/* 1. Hero Section */}
        <SectionTitle
          title="Who We Are"
          subtitle="We build scalable digital experiences with design and precision."
        />

        {/* 2. Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-left">
          <div>
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-base opacity-80">
              To empower brands with modular, performance-driven digital solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <p className="text-base opacity-80">
              To make design and technology accessible, scalable, and future-proof for every creator.
            </p>
          </div>
        </div>

        {/* 3. Core Values */}
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-4">Our Values</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm font-medium">
            <li>🧠 Precision</li>
            <li>⚡ Speed</li>
            <li>🎯 Ownership</li>
            <li>🔍 Transparency</li>
            <li>📐 Craftsmanship</li>
            <li>🌱 Scalability</li>
          </ul>
        </div>

        {/* 4. Team Section (Optional) */}
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-4">Meet the Team</h3>
          <p className="text-base opacity-80 mb-6">
            We’re a small, focused team with big ideas and even bigger execution.
          </p>
          {/* Add team cards or group photo here */}
        </div>

        {/* 5. Capabilities / What We Do */}
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-4">What We Do</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm font-medium">
            <li>🔧 UI/UX Engineering</li>
            <li>🚀 Full-stack Deployment</li>
            <li>🎥 Secure Streaming & DRM</li>
            <li>📊 Data Structuring & Workflow Design</li>
            <li>🖼️ Visual Accuracy & Layout Matching</li>
            <li>📦 Performance Optimization</li>
          </ul>
        </div>

        {/* 6. Timeline / Story (Optional) */}
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-4">Our Journey</h3>
          <ul className="text-left text-sm opacity-80 space-y-2">
            <li><strong>2020:</strong> Founded with a vision for modular design</li>
            <li><strong>2021:</strong> First enterprise deployment</li>
            <li><strong>2022:</strong> Scaled to global clients</li>
            <li><strong>2023:</strong> Introduced secure streaming workflows</li>
          </ul>
        </div>

        {/* 7. CTA */}
        <div className="mt-12">
          <PrimaryButton href="/contact">Get In Touch</PrimaryButton>
        </div>

      </Container>
    </section>
  );
}