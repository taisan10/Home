import CEO from "../Ceo";
import Growth from "../Growth";
import Hero from "../Hero";
import Join from "../Join";
import Journey from "../Journey";
import Process from "../OurProcess";
import Working from "../Working";

export default function AboutPages(){
  return(
          <div className="min-h-screen bg-neutral-950 text-white selection:bg-sky-400/30 ">
          <>
          <Hero />
     <Growth />
         <CEO />
     <Journey />
          <Working />
       <Process />
       <Join />
          </>
          
          </div>
  )
}