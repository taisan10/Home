import { GradientText, Container, SectionTitle } from "../../../UI/UiComponent";

const helpItems = [

   {
    title: "Social media wasn’t delivering measurable results.",
    answer:
      "Bluenose Marketing provides full transparency and data-driven insights, ensuring every strategy is focused on real business outcomes",
  },
  {
    title: "Uncertainty around which campaigns converted",
    answer:
      "Every campaign is supported by analytics and detailed reporting, so clients always know what drives impact.",
  },
  {
    title: "Low engagement despite consistent posting.",
    answer:
      "Bluenose Marketing creates platform-specific content that encourages interaction and builds loyal, active communities.",
  },
  {
    title: "Limited time or expertise to manage social media effectively.",
    answer:
      "Bluenose Marketing manages end-to-end social media operations — strategy, content, scheduling, advertising, and reporting — allowing clients to focus on core business activities.",
  },
  {
    title: "Inconsistent brand presence across channels.",
    answer:
      "Bluenose Marketing ensures visual and tonal consistency across all platforms, delivering a cohesive and recognizable brand experience.",
  },
  {
    title: "Generic solutions from previous agencies. ",
    answer:
      "Bluenose Marketing delivers fully customized strategies tailored to each client’s industry, audience, and objectives.",
  },
  {
    title: "Rapid business growth requiring scalable support.",
    answer:
      "Bluenose Marketing provides flexible plans and dedicated teams that scale alongside clients’ growth.",
  },
  {
    title: "Operating in complex or niche industries. ",
    answer:
      " Bluenose Marketing has experience helping clients in competitive and regulated sectors, including fintech, SaaS, and technology, stand out effectively. ",
  },
  {
    title: "Uncertainty about which platforms to prioritize. ",
    answer:
      "Bluenose Marketing identifies the most effective channels based on audience and business goals, optimizing every post, ad, and budget allocation. ",
  },
];

export function ChallengesSection() {
  return (
    <section className="relative overflow-hidden bg-black text-white py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(14,165,233,.15),transparent),radial-gradient(40%_40%_at_10%_80%,rgba(20,184,166,.12),transparent)] " />
      <Container>
        <SectionTitle
          title={
            <>
              Barriers to Success Before <br />
              <GradientText> Working With Us</GradientText>
            </>
          }
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {helpItems.map((item, idx) => (
           <div
  key={idx}
  className="group relative bg-neutral-900 border border-transparent rounded-2xl p-6 flex flex-col justify-start 
             transition duration-300 hover:border-purple-500/70 hover:shadow-[0_0_0.5rem_0.2rem_rgba(168,85,247,0.2)]
             h-full"
>
              <div className="text-4xl text-white/30 mb-4">
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 11.102C0 5.17007 2.98259 1.46939 8.94776 0V4.4898C7.3607 4.97959 6.23881 5.71429 5.58209 6.69388C4.92537 7.61905 4.62438 9.08844 4.6791 11.102H8.94776V20H0V11.102ZM22 4.4898C20.4129 4.97959 19.291 5.71429 18.6343 6.69388C17.9776 7.61905 17.6766 9.08844 17.7313 11.102H22V20H13.0522V11.102C13.0522 5.17007 16.0348 1.46939 22 0V4.4898Z"
                    fill="#333333"
                  ></path>
                </svg>
              </div>
              <h3
                className="text-lg font-semibold leading-snug transition-all duration-300 
             group-hover:text-base group-hover:text-sky-400"
              >
                {item.title}
              </h3>
              <p
                className="text-white/60 text-sm mt-4 opacity-0 group-hover:opacity-100 
             group-hover:text-lg group-hover:text-white transition-all duration-300"
              >
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
