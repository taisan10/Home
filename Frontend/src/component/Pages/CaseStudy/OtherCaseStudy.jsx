

import { Container } from "../../UI/UiComponent";


import WorksData from "./index/WorksData";

export function CaseStudiesSections({ data }) {

    const activeWork = WorksData[0];
  return (
    <section className="bg-gray-50 px-6 py-8 -mt-15 sm:-mt-18 ">
      <Container>
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Read other Case Studies Of Company
        </h2>

        <div className="grid md:grid-cols-2 gap-10 ">
          {data.map((study, i) => (
            <a key={i} href={`/work/${study.slug}`} className="block rounded-xl overflow-hidden shadow-lg h-90 sm:h-100  ">

            <div key={i} className="rounded-xl overflow-hidden shadow-lg flex flex-col justify-between h-90 sm:h-100 ">
              <div className={`${study.theme} text-black p-6 flex flex-col justify-between h-full`}>
                <div>
                  <h3 className="text-2xl font-bold mb-6">{study.title}</h3>
                  <p className="text-lg">{study.desc}</p>
                </div>



{/* left + right */}
<div className="w-full flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 lg:-mt-1">
  
  {/* Left: metrics */}
  <div className="hidden sm:block w-full md:w-2/3">
  <div className="grid grid-cols-2 sm:grid-cols-1 sm:p-1  md:grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
  {activeWork?.overview?.otherCaseStudiesmetrics
    ?.slice(0, (window.innerWidth >= 768 && window.innerWidth <= 1020) ? 2 : 4).map((stat, idx) => (
    <div key={idx} className="bg-white text-black rounded-lg px-2 md:px-5 lg:px-1  py-2 text-center shadow-md ">
      <div className="text-sm sm:text-base md:text-lg  lg:text-lg  font-bold leading-tight break-words">
        {stat.value}
      </div>
      <div className="text-xs sm:text-sm  md:text-xs  font-medium ">{stat.label}</div>
    </div>
  ))}
</div>
  </div>

  {/* Right: image */}
 <div className="  w-1/2 md:w-1/2 flex justify-center md:justify-end  md:mt-0">
  <img
    src={study.img}
    alt={study.title}
    className="w-45 sm:w-3/4 md:w-4/5 lg:w-7/8 rounded-lg object-contain h-40"
  />
</div>
</div>
              </div>
            </div>
            </a>

          ))}
        </div>
      </Container>
    </section>
  );
}

