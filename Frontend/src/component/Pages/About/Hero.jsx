import {
  Container,
  GradientText,
  PrimaryButton,


} from "../../UI/UiComponent";

export default function Hero() {




  return (
    <section className="relative overflow-hidden bg-neutral">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(14,165,233,.22),transparent),radial-gradient(40%_40%_at_10%_80%,rgba(20,184,166,.18),transparent)]" />

      <Container className="py-10 sm:py-28 md:py-28 lg:py-2 text-center mt-5 sm:mt-15 md:-mt-10 lg:mt-15">
        <h1 className="w-full text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
           We Solve Your 
          <GradientText>  Digital Puzzles  </GradientText>
        
        </h1>

        <p className="mt-5 sm:mt-4 sm:-mb-5 md:-mb-0  text-sm  sm:text-2xl  max-w-3xl mx-auto text-white/70 text-base sm:text-lg">
          Tired of confusing jargon and promises? <GradientText> Bluenose provides</GradientText> crystal-clear strategy and dedicated support, ensuring your brand dominates the digital landscape, stress-free.
        </p>

        {/* <div className="mt-6 sm:mt-8 flex justify-center gap-3 sm:gap-4">
          <PrimaryButton href="#contact">Book A Free Audit</PrimaryButton>
        </div> */}

       
      </Container>
    </section>
  );
}



































