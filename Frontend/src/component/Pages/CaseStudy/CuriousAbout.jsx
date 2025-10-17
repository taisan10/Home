import { Container } from "../../UI/UiComponent";

export function CuriousSection({ data }) {
  return (
    <section id="curious-about-our-approach" className="py-12 sm:py-16 bg-gray-50">
      <Container>
        <div className="rounded-3xl bg-gradient-to-r from-sky-500 to-cyan-400 p-6 sm:p-8 ring-1 ring-white/10">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-xl sm:text-3xl font-semibold">{data.heading}</h3>
            <p className="mt-2 text-white/80">{data.subtext}</p>
            <div className="mt-5 sm:mt-6">
              <a
                href="#contact"
                className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
              >
                {data.button}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}