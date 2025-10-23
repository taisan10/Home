
// export function ServicesProvided({ data }) {
//   return (
//     <section id="services-provided" className="px-6 py-10 bg-gray-50">
//       <h2 className="text-3xl font-bold text-gray-900 mb-6">Services Provided</h2>
//       <div className="flex flex-wrap gap-6">
//         {data.map((service, index) => (
//           <div
//             key={index}
//             className="flex items-center gap-4 bg-white border rounded-lg shadow-sm px-6 py-4"
//           >
//             <div className="text-3xl">{service.icon}</div>
//             <div className="text-lg font-medium text-gray-800">{service.name}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }




export function ServicesProvided({ data }) {
  return (
    <section id="services-provided" className="px-6 py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Services Provided</h2>

      {/* Responsive grid layout */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5">
        {data.map((service, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-3 bg-white border rounded-lg shadow-sm px-4 py-3 text-center sm:text-left"
          >
            <div className="text-3xl">{service.icon}</div>
            <div className="text-lg font-medium text-gray-800">{service.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
