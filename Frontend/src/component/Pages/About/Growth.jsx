import { Container, GradientText } from "../../UI/UiComponent";
import { motion } from "framer-motion";

export default function Growth(){
  const stats = [
    { label: "Global Clients", value: "120+" },
    { label: "Campaigns Delivered", value: "5K+" },
    { label: "ROI Growth Avg.", value: "320%" },
    { label: "Team Member", value: "200" },
  ];

  return(
<div>
     {/* Our Story in Numbers */}
      <section className="py-16 px-6 bg-neutral -mt-20 sm:-mt-23 md:-mt-24 lg:-mt-5 mb-15">
        <Container>
        {/* <h2 className="text-3xl font-bold text-center  mb-12">
         <GradientText> Our Story in Numbers </GradientText>
        </h2> */}
        <div className="grid  sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-black p-6 rounded-2xl shadow-lg transition hover:shadow-sky-400/40 hover:-translate-y-2"
        >

              <h3 className="text-4xl font-extrabold text-white mb-2">{s.value}</h3>
              <p className="text-gray-400">{s.label}</p>
            </motion.div>
          ))}
        </div>
        </Container>
      </section>
      </div>

  )
}