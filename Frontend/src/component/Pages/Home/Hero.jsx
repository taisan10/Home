import {
  Container,
  GradientText,
  PrimaryButton,
  LogoCarousel,

} from "../../UI/UiComponent";

export default function Hero() {

const logos = Array.from({ length: 16 }, (_, i) => `/Client_Logo/${i + 1}.png`);


  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(14,165,233,.22),transparent),radial-gradient(40%_40%_at_10%_80%,rgba(20,184,166,.18),transparent)]" />

      <Container className="py-14 sm:py-25 md:py-28 lg:py-28 text-center mt-5 sm:-mt-10">
        <h1 className="w-full text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
          <GradientText> We are Bluenose, </GradientText>
         for us <i>  Your Story  <br /> is above all. </i>
        </h1>

        <p className="mt-5 sm:mt-6 max-w-3xl mx-auto text-white/70 text-base sm:text-lg">
          From day one, we embrace your goals as our own and translate them into action through results- driven marketing.
        </p>

        <div className="mt-6 sm:mt-8 flex justify-center gap-3 sm:gap-4">
          <PrimaryButton href="/contact">Book A Callback</PrimaryButton>
        </div>

        <div className="mt-1 md:mt-3 lg:-mt-3">
          <LogoCarousel items={logos} />
        </div>
      </Container>
    </section>
  );
}



































