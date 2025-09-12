import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="max-w-5xl mx-auto py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-black-100 p-8 rounded-2xl shadow-xl flex flex-col items-start hover:scale-102 transition duration-300 border border-[#232946]/10"
      >
        <h2 className="text-white font-black text-[40px] mb-4 drop-shadow">About Me</h2>
        <p className="text-secondary text-[18px] font-medium mb-4">
          I'm Mukul Singh, a frontend-focused developer with a strong foundation in data-driven applications. I enjoy building modern UIs using React, Tailwind CSS, and Framer Motion. I’ve also worked on backend projects using Python and Machine Learning, including NLP models. I regularly practice Data Structures and Algorithms, primarily in <span className="text-[#915EFF] font-semibold">C++</span>, to strengthen my problem-solving skills and write efficient code. Additionally, I create business dashboards in Tableau to visualize insights dynamically.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
