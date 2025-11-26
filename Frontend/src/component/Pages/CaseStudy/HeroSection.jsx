import { Container, PrimaryButton } from "../../UI/UiComponent";
import { motion } from "framer-motion";

export function HeroSection({ data }) {
  const { title, subtitle, tags, image, theme } = data;

  return (
    <section className={`${theme} px-4 sm:px-6 py-20 sm:py-28 pt-38 sm:pt-40 -mt-20   -mb-16 md:-mb-5 lg:-mb-5`}>
      <Container className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-6 ">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`text-4xl md:text-6xl font-bold leading-tight   ${
    ["Hearthstone Inn","Garden Retreat","Sake Cafe","Besharam "].some(val =>  title.includes(val))
      ? "text-gray-100"
      : "text-black"
  }`}
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`text-lg md:text-xl font-medium ${
    ["1.6K", "67K+","9.7K+","60K"].some(val => subtitle.includes(val))
      ? "text-gray-100"
      : "text-black"
  }`}
          >
            {subtitle}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 pt-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            {tags.map((tag) => (
              <button
                key={tag}
                className="bg-white text-black font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition"
              >
                {tag}
              </button>
            ))}
          </motion.div>
       
          <motion.div
            className="flex flex-wrap gap-3 pt-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.9 }}
          >
           <div className="hidden md:block  ">
                       <PrimaryButton href="/contact">Book A Callback</PrimaryButton>
                     </div>
          </motion.div>
        </div>

        {/* Right Side */}
        <div className="w-full max-w-xs -mt-5 md:mt-2 -mb-10 md:mb-10 sm:max-w-sm md:max-w-md rounded-lg">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            src={image}
            alt={title}
            className="max-w-xs md:max-w-md rounded-lg"
          />
        </div>
      </Container>
    </section>
  );
}
