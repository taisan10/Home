import {
  Container,
  GradientText,
  SectionTitle,
  Stat,
  
} from "../../UI/UiComponent";


export default function Kpi(){
  return(
    <section className="py-12 sm:py-16">
              <Container>
                <SectionTitle
                  title={<>The Next Era of Marketing, <GradientText>Designed for Growth
</GradientText> </>}
                />
                <div className="mt-10 grid grid-cols-[48%_48%] gap-3  sm:grid-cols-[48%_48%] lg:grid-cols-[24%_24%_48%] ">
                 
                  <Stat
                    kpi="3x"
          
              
              title="Faster Go-to-Market"
              desc="Accelerate launches with agile strategy and creative execution."
              />
                  <Stat
                    kpi="100%"
               
                  
                    title="Transparent Pricing"
                    desc="No hidden fees. No fine print. Only clear, results-driven value."
                  />
                  <div className="w-85 lg:w-full">
                   <Stat
                    
                    kpi="10.3M+"
                
                    title="Total Views"
                    desc="Campaigns that captured attention and delivered massive reach. Proven results with impactful digital strategies."
                    />
                    </div>
                </div>
             <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-[48%_24%_24%]">
                  
                  <Stat
                    kpi="100%"
       
                    title="Data-Driven Decisions"
                    desc="Every strategy is backed by analytics. No guesswork, just results."
                  />
                  <Stat
                    kpi="15+"
           
                    title="Industries Served"
                    desc="From cafés to hotels, proven strategies that drive real growth across every niche."
                  />
                     <div className="w-85 lg:w-full">

                  <Stat
                    kpi="24/7"
                    className=" "
                    title="Strategic Support"
                    desc="Always available to align, analyze, and advance your marketing goals."
                    />
                    </div>
                </div>
              </Container>
            </section>
  )
}




// import {
//   Container,
//   GradientText,
//   SectionTitle,
//   Stat,
  
// } from "../../UI/UiComponent";


// export default function Kpi(){
//   return(
//     <section className="py-12 sm:py-16 ">
//   <Container>
//     <SectionTitle
//       title={
//         <>
//           The Next Era of Marketing,{" "}
//           <GradientText>Designed for Growth</GradientText>
//         </>
//       }
//     />

//     {/* ✅ Wrapper for small/tablet (acts as unified 3x2 grid) */}
//     <div className="mt-10 lg:mt-10" >

//     <div className=" grid gap-4 grid-cols-2 sm:grid-cols-2 sm:grid-rows-3 lg:hidden">
//       <Stat
//         kpi="3x"
//         title="Faster Go-to-Market"
//         desc="Accelerate launches with agile strategy and creative execution."
//         />
//       <Stat
//         kpi="100%"
//         title="Transparent Pricing"
//         desc="No hidden fees. No fine print. Only clear, results-driven value."
//         />
//       <Stat
//         kpi="10.3M+"
//         title="Total Views"
//         desc="Campaigns that captured attention and delivered massive reach."
//         />
//       <Stat
//         kpi="100%"
//         title="Data-Driven Decisions"
//         desc="Every strategy is backed by analytics. No guesswork, just results."
//         />
//       <Stat
//         kpi="15+"
//         title="Industries Served"
//         desc="From cafés to hotels, proven strategies that drive real growth."
//         />
//       <Stat
//         kpi="24/7"
//         title="Strategic Support"
//         desc="Always available to align, analyze, and advance your marketing goals."
//         />
//     </div>

//     {/* ✅ Original layout preserved for laptop */}
//     <div className="hidden lg:block">
//       {/* First Row (same as before) */}
//       <div className="grid grid-cols-[48%_48%] gap-4 lg:grid-cols-[24%_24%_48%]">
//         <Stat
//           kpi="3x"
//           title="Faster Go-to-Market"
//           desc="Accelerate launches with agile strategy and creative execution."
//           />
//         <Stat
//           kpi="100%"
//           title="Transparent Pricing"
//           desc="No hidden fees. No fine print. Only clear, results-driven value."
//           />
//         <div className="col-span-2 lg:col-span-1">
//           <Stat
//             kpi="10.3M+"
//             title="Total Views"
//             desc="Campaigns that captured attention and delivered massive reach. Proven results with impactful digital strategies."
//             />
//         </div>
//       </div>

//       {/* Second Row (same as before) */}
//       <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-[49%_24%_24%]">
//         <Stat
//           kpi="100%"
//           title="Data-Driven Decisions"
//           desc="Every strategy is backed by analytics. No guesswork, just results."
//           />
//         <Stat
//           kpi="15+"
//           title="Industries Served"
//           desc="From cafés to hotels, proven strategies that drive real growth across every niche."
//           />
//         <div className="col-span-2 lg:col-span-1">
//           <Stat
//             kpi="24/7"
//             title="Strategic Support"
//             desc="Always available to align, analyze, and advance your marketing goals - for growth."
//             />
//         </div>
//       </div>
//     </div>
//             </div>
//   </Container>
// </section>

//       )
//       }
