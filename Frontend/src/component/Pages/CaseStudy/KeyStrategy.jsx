

// export function Strategic({ data }) {
//   return (
//     <section id="key-strategy" className="px-6 py-10 bg-gray-50">
//       <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Strategies Implemented:</h2>
//       <ul className="list-disc list-inside text-gray-700 text-lg max-w-6xl leading-relaxed space-y-2">
//         {data.map((item, i) => (
//           <li key={i}>{item}</li>
//         ))}
//       </ul>
//     </section>
//   );
// }
export function Strategic({ data }) {
  return (
    <section
      id="key-strategy"
      className="px-4 sm:px-6 py-8 sm:py-10 bg-gray-50"
    >
      <h2 className="text-[18px] sm:text-[22px] lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
        Key Strategies Implemented:
      </h2>
      <ul className="list-disc list-inside text-[14px] sm:text-[16px] lg:text-lg text-gray-700 max-w-full sm:max-w-4xl lg:max-w-6xl leading-relaxed space-y-2">
        {data.map((item, i) => (
     <li key={i} className="break-words border-b border-gray-200 pb-2"> 
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}