


import {GradientText,Container,SectionTitle} from  "../../../UI/UiComponent"


const helpItems = [
   {
    title: "Our visuals don’t feel consistent across channels. ",
    answer:
      " We craft cohesive graphics across social media, web, and print so your brand looks polished and professional everywhere. ",
  },
  {
    title: "Our marketing visuals fail to grab attention. ",
    answer:
      " We design bold, memorable graphics that capture your audience’s eye and drive engagement. ",
  },
  {
    title: "We don’t have a clear graphic identity. ",
    answer:
      " We develop complete brand graphic kits — logos, color schemes, and templates, that make your business instantly recognizable. ",
  },
  {
    title: "Presentations and decks look dull.",
    answer:
      "We turn slides into visually engaging graphics that tell your story and impress stakeholders.",
  },
  {
    title: "Creating graphics takes too much time internally. ",
    answer:
      " Our team delivers fast, high-quality visuals so your staff can focus on strategy and growth. ",
  },
  {
    title: "Our graphics aren’t optimized for every platform. ",
    answer:
      "We produce platform-specific visuals ,from Instagram posts to LinkedIn banners, that fit perfectly and perform effectively. ",
  },
  {
    title: "Previous designers delivered generic results. ",
    answer:
      " Every graphic we create is tailored to your brand, audience, and objectives, no stock templates.",
  },
  {
    title: "We struggle to show complex ideas visually. ",
    answer:
      "We create infographics, charts, and visual storytelling graphics that make even technical concepts clear and engaging. ",
  },
  {
    title:
      "Our brand visuals don’t feel premium. ",
    answer:
      " With modern layouts, sophisticated designs, and attention to detail, we elevate your brand’s visual presence. ",
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
              Challenges Our Clients Faced Before  <br />
              <GradientText>Working With Us
</GradientText>
            </>
          }
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {helpItems.map((item, idx) => (
           <div
  key={idx}
  className="group relative bg-neutral-900 border border-transparent rounded-2xl p-6 h-56 flex flex-col justify-start 
  transition duration-300 
  hover:border-purple-500/70 hover:shadow-[0_0_0.5rem_0.2rem_rgba(168,85,247,0.2)]"
>
              <div className="text-4xl text-white/30 mb-4"><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 11.102C0 5.17007 2.98259 1.46939 8.94776 0V4.4898C7.3607 4.97959 6.23881 5.71429 5.58209 6.69388C4.92537 7.61905 4.62438 9.08844 4.6791 11.102H8.94776V20H0V11.102ZM22 4.4898C20.4129 4.97959 19.291 5.71429 18.6343 6.69388C17.9776 7.61905 17.6766 9.08844 17.7313 11.102H22V20H13.0522V11.102C13.0522 5.17007 16.0348 1.46939 22 0V4.4898Z" fill="#333333"></path></svg></div>
              <h3 className="text-lg font-semibold leading-snug">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
