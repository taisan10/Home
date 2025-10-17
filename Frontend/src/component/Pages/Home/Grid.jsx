// import { Container,GradientText } from "../../UI/UiComponent";

// export function CollageSlider() {
//   const collageImages = [
//     "/Grid/11.png",
//     "/Grid/111.png",
//     // "/Grid/1.png",
//     "/Grid/22.png",
//     // "/Grid/2.png",
//     "/Grid/33.png",
//     // "/Grid/3.png",
//     "/Grid/4.jpeg",
//     "/Grid/5.png",
//     "/Grid/6.png",
//   ];

//   return (
//     <section className="py-10 bg-black">
//       <Container>
        
      
//       <div className="overflow-x-auto  scrollbar-hide">  
//         <div>

//         <h1 className="w-full text-center text-3xl sm:text-5xl lg:text-4xl font-semibold mb-7 leading-tight">
//   <GradientText> Visual Portfolio </GradientText>
// </h1>

//  <p className="mt-5 sm:mt-6 max-w-3xl mx-auto text-white/70 text-base text-center mb-10 sm:text-lg">
//           From concept to creation, visual storytelling that elevates hospitality brands!
//         </p>
//         </div>


//         <div className="flex gap-6 px-4 sm:px-8">
//           {collageImages.map((src, index) => (
//             <div key={index} className="min-w-[200px] sm:min-w-[400px] lg:min-w-[200px] flex-shrink-0">
//               <img
//                 src={src}
//                 alt={`Grid ${index + 1}`}
//                 className="rounded-xl shadow-md w-full h-120 object-cover"
//                 />
//             </div>
//           ))}
//         </div>
//       </div>
//           </Container>
//     </section>
//   );
// }