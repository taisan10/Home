import { Container, GradientText } from "../../UI/UiComponent";
import { motion } from "framer-motion";

export default function Journey(){
  return(
    
    <div className="-mt-20 bg-neutral " >

      {/* Company Timeline Journey */}
<section className=" py-20 px-6 " >
  <Container>
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className=" text-3xl  font-bold text-center  mb-10"
  >
   <GradientText> Our Journey  </GradientText>
  </motion.h2>

  <div className="relative max-w-5xl mx-auto">
    <div className="absolute left-4 sm:left-4 md:left-1/2 lg:left-1/2 transform -translate-x-1/2 w-1 bg-blue-400/40 h-full"> </div>

    {[
      {
        year: "September 2024 ",
        title: "The vision was born",
        desc: "To build a digital marketing agency that blends creativity with data-driven results.",
      },
      {
        year: "December 2024",
        title: "First Office: Halifax Launch",
        desc: "We opened our first office in Halifax,Canada, bringing brands closer to their audiences with impactful strategies.",
      },
      {
        year: "February 2025",
        title: "Team Growth: 20+ Experts",
        desc: "Our family grew into a team of 20+ digital experts - from strategies and designers to performance marketers.",
      },
      {
        year: "September 2025",
        title: "India Launch: Global Expansion",
        desc: "We Launched our India office, expanding our global reach and scaling solutions for clients worldwide.",
      },
      
    ].map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className={`mb-12 flex flex-col md:flex-row items-start sm:items-start md:items-center lg:items-center ${
          index % 2 === 0 ? "md:flex-row-reverse" : ""
        }`}
      >
        
        <div className="md:w-1/2 md:text-right px-8">
          <h3 className="text-2xl font-bold  text-gray-50 ">{item.year}</h3>
          <p className="text-lg bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">{item.title}</p>
        </div>
        <div className="w-4 h-4 bg-sky-400 rounded-full shadow-lg mx-2  md:mx-8"></div>
        <div className="md:w-1/2 px-8 sm:px-6 md:px-6 lg:f ">
          <p className="text-gray-300">{item.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>
  </Container>
</section>
</div>
  )
}