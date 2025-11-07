
import { useEffect, useRef, useState } from "react";
import {
  Container,
  GradientText,
  SectionTitle,
  Stat,
} from "../../UI/UiComponent";

export default function Kpi() {
  const [showDelayedStats, setShowDelayedStats] = useState(false);
  const [isTinyScreen, setIsTinyScreen] = useState(false);
  const sectionRef = useRef(null);
 const timerRef = useRef(null); // ✅

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 450) setIsTinyScreen(true);
  }, []);

  useEffect(() => {
    if (!isTinyScreen || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start timer when section enters view
          timerRef.current = setTimeout(() => setShowDelayedStats(true), 3000);
        } else {
          // Reset when section leaves view
          if (timerRef.current) clearTimeout(timerRef.current);
          setShowDelayedStats(false);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isTinyScreen]);

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-18 -mt-13 sm:-mt-12 md:-mt-15 lg:-mt-15"
    >
      <Container>
    <SectionTitle
  title={
    <div className="whitespace-normal lg:whitespace-nowrap">
      The Next Era of Marketing,{" "}
      <br className="block lg:hidden" />
      <GradientText>Designed for Growth</GradientText>
    </div>
  }
/>
        <div className="mt-5 sm:mt-5   md:mt-5 lg:mt-10">
          {/* ✅ Mobile <400px logic */}
          {isTinyScreen ? (
            <div className="grid grid-cols-1 gap-4 md:hidden">
              {!showDelayedStats ? (
                <>
                  <Stat
                    kpi="3x"
                    title="Growth"
                    desc="Smart strategy and creative execution that drives growth."
                  />
                  <Stat
                    kpi="100%"
                    title="Clear Costs"
                    desc="Straightforward pricing backed by honest partnerships."
                  />
                  <Stat
                    kpi="10.3M+"
                    title="Total Views That Convert"
                    desc="We don't just create visibility, we create campaigns that turn viewers into loyal customers."
                  />
                </>
              ) : (
                <>
                  <Stat
                    kpi="100%"
                    title="Results Through Analytics"
                    desc="Every decision backed by real analytics. No guesswork. Just proven strategies that deliver measurable results.
"
                  />
                  <Stat
                    kpi="50+"
                    title="Growing Brands"
                    desc="From startups to established brands, we've partnered with over 50+ businesses to deliver real,  growth."
                  />
                  <Stat
                    kpi="24/7"
                    title="Strategic Support"
                    desc="Your marketing partner, always available to refine strategy, analyze performance, and drive growth for your business."
                  />
                </>
              )}
            </div>
          ) : (
            // ✅ Normal layout for ≥400px
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 sm:grid-rows-3 md:hidden">
               <Stat
                    kpi="3x"
                    title="Growth"
                    desc="Smart strategy and creative execution that drives growth."
                  />
          <Stat
                    kpi="100%"
                    title="Clear Costs"
                    desc="Straightforward pricing backed by honest partnerships."
                  />
               <Stat
                    kpi="10.3M+"
                    title="Total Views That Convert"
                    desc="We don't just create visibility, we create campaigns that turn viewers into loyal customers."
                  />
            <Stat
                    kpi="100%"
                    title="Results Through Analytics"
                    desc="Every decision backed by real analytics. No guesswork. Just proven strategies that deliver measurable results.
"
                  />
                  <Stat
                    kpi="50+"
                    title="Growing Brands"
                    desc="From startups to established brands, we've partnered with over 50+ businesses to deliver real,  growth."
                  />
                  <Stat
                    kpi="24/7"
                    title="Strategic Support"
                    desc="Your marketing partner, always available to refine strategy, analyze performance, and drive growth for your business."
                  />
            </div>
          )}

          {/* ✅ Desktop layout preserved */}
          <div className="hidden md:block">
            <div className="grid grid-cols-[48%_48%] gap-4 lg:grid-cols-[24%_24%_48%]">
                <Stat
                    kpi="3x"
                    title="Growth"
                    desc="Smart strategy and creative execution that drives growth."
                  />
                  <Stat
                    kpi="100%"
                    title="Clear Costs"
                    desc="Straightforward pricing backed by honest partnerships."
                  />
              <div className="col-span-2 lg:col-span-1">
                 <Stat
                    kpi="10.3M+"
                    title="Total Views That Convert"
                    desc="We don't just create visibility, we create campaigns that turn viewers into loyal customers."
                  />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-[49%_24%_24%]">
               <Stat
                    kpi="100%"
                    title="Results Through Analytics"
                    desc="Every decision backed by real analytics. No guesswork. Just proven strategies that deliver measurable results.
"
                  />
                  <Stat
                    kpi="50+"
                    title="Growing Brands"
                    desc="From startups to established brands, we've partnered with over 50+ businesses to deliver real,  growth."
                  />
              <div className="col-span-2 lg:col-span-1">
                <Stat
                    kpi="24/7"
                    title="Strategic Support"
                    desc="Your marketing partner, always available to refine strategy, analyze performance, and drive growth for your business."
                  />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}