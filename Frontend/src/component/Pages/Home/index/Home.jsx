import ContactPage from "../../../UI/Contactpage";
// import { CollageSlider } from "../Grid";/


import Hero from "../Hero";
import Kpi from "../Kpi";
import Work from "../OurWork";
import Services from "../Service";

import Video from "../Video";




export default function Home(){
  return(
          <div className="min-h-screen bg-neutral-950 text-white selection:bg-sky-400/30 ">
          <>
          <Hero />
          <Video />
          <Kpi />
          <Work />
         {/* <CollageSlider /> */}
          <Services />
      
          <ContactPage />
          </>
          
          </div>
  )
}