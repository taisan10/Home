

import { Container } from "../../UI/UiComponent";

export function ApproachSection({ data }) {
  return (
    <section id="approach" className="bg-gray-50 text-gray-900 py-12 sm:py-16">
      <Container>
        <div className="rounded-3xl bg-gradient-to-r from-sky-500 to-cyan-400 p-6 sm:p-8 ring-1 ring-white/10 text-black">
          <h2 className="text-3xl font-bold mb-6 text-white">Approach</h2>
          <ul className="list-disc list-outside space-y-6 text-[15px] sm:text-lg text-white leading-relaxed max-w-6xl pl-6">
            {data.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
