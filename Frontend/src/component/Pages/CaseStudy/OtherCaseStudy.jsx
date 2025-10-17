

import { Container } from "../../UI/UiComponent";

export function CaseStudiesSections({ data }) {
  return (
    <section className="bg-gray-50 px-6 py-8">
      <Container>
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Read other Case Studies Of Company
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {data.map((study, i) => (
            <a key={i} href={`/work/${study.slug}`} className="block rounded-xl overflow-hidden shadow-lg h-80">

            <div key={i} className="rounded-xl overflow-hidden shadow-lg flex flex-col justify-between h-80">
              <div className={`${study.theme} text-black p-6 flex flex-col justify-between h-full`}>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                  <p className="text-lg">{study.desc}</p>
                </div>
                <img
                  src={study.img}
                  alt={study.title}
                  className="w-40 md:w-48 -mt-4 md:mt-4 rounded-lg object-cover max-h-35 md:max-h-41"
                />
              </div>
            </div>
            </a>

          ))}
        </div>
      </Container>
    </section>
  );
}

