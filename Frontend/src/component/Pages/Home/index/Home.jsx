


import Contact from "../Contact";
import Hero from "../Hero";
import Kpi from "../Kpi";
import OurWork from "../OurWork";
import { RatingSection } from "../Rating";

import Services from "../Service";
import Testimonial from "../Testimonial";

import Video from "../Video";




export default function Home(){
  return(
          <div className="min-h-screen bg-neutral-950 text-white selection:bg-sky-400/30 ">
          <>
          <Hero />
          <Video />
          <Kpi />
          <OurWork />
          {/* <Testimonial /> */}
          {/* <RatingSection /> */}
     
          <Services />
      
    <Contact />
          </>
          
          </div>
  )
}