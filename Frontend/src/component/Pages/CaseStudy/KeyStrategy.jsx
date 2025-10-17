

export function Strategic({ data }) {
  return (
    <section id="key-strategy" className="px-6 py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Strategies Implemented:</h2>
      <ul className="list-disc list-inside text-gray-700 text-lg max-w-6xl leading-relaxed space-y-2">
        {data.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
