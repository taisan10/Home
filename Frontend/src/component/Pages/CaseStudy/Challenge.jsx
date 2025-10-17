


export function ChallengeSection({ data }) {
  return (
    <section id="challenge" className="px-6 py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Challenge</h2>

      {data.summary.map((p, i) => (
        <p key={i} className="text-gray-700 text-lg max-w-6xl leading-relaxed mb-4">
          {p}
        </p>
      ))}

      <h3 className="text-gray-900 font-semibold text-lg mb-2">{data.heading}</h3>
      <ul className="list-disc list-inside text-gray-700 text-lg max-w-3xl leading-relaxed space-y-2">
        {data.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </section>
  );
}
