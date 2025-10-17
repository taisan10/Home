


import { useEffect, useState, useRef } from "react";

export function OverviewSection({ data }) {
  const { summary, metrics } = data;
  const [counts, setCounts] = useState(metrics.map(() => 0));
  const sectionRef = useRef(null);

  // Helper: Parse raw metric string into numeric value
const parseMetricValue = (raw) => {
  const value = parseFloat(raw); // handles decimals like 83.6
  const suffix = raw.replace(/[0-9.,]/g, "").trim(); // e.g. "%", "K", "M"

  if (suffix.includes("M")) return Math.round(value * 1_000_000);
  if (suffix.includes("K")) return Math.round(value * 1_000);
  if (suffix.includes("%")) return value; // keep decimal for percentage

  return Math.round(value); // fallback
};

  // Animate counters when section enters viewport
  useEffect(() => {
    let observer;
    let countersStarted = false;

    const startCounting = () => {
      const duration = 5000;
      const frameRate = 60;
      const totalFrames = Math.round((duration / 1000) * frameRate);
      const easeOutQuad = (t) => t * (2 - t);

      metrics.forEach((metric, i) => {
        const countTo = parseMetricValue(metric.value);
        let frame = 0;

        const counter = setInterval(() => {
          frame++;
          const progress = easeOutQuad(frame / totalFrames);
          const current = metric.value.includes("%")
  ? parseFloat((countTo * progress).toFixed(1)) // preserve one decimal for %
  : Math.floor(countTo * progress); // integer for others

          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[i] = current;
            return newCounts;
          });

          if (frame === totalFrames) clearInterval(counter);
        }, 1000 / frameRate);
      });
    };

    if (sectionRef.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !countersStarted) {
            countersStarted = true;
            startCounting();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer && sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [metrics]);

  // Format animated value with suffix
const formatValue = (value, metric) => {
  const isPercent = metric.value.includes("%");
  return isPercent
    ? `${value.toFixed(1)}%`
    : `${Math.round(value).toLocaleString("en-US")}+`;
};

  return (
    <section ref={sectionRef} id="overview" className="px-4 sm:px-6 py-10 bg-gray-50">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center sm:text-left">
        Overview
      </h2>

      <div className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl space-y-6 mb-10 mx-auto sm:mx-0 px-2 sm:px-0">
        {summary.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-md sm:max-w-xl mx-auto">
        {metrics.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all text-center sm:text-left"
          >
            <div className="text-xl sm:text-2xl font-bold text-blue-900">
              {formatValue(counts[index], item)}


            </div>
            <div className="text-xs sm:text-sm text-gray-600">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}


