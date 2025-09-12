import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 max-w-4xl mx-auto text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        I'm a frontend-focused developer with a strong foundation in data-driven applications. I enjoy building modern UIs using <span className="text-blue-500">React</span>, styling them with <span className="text-blue-500">Tailwind CSS</span>, and bringing them to life with <span className="text-blue-500">Framer Motion</span>.<br />
        I’ve also worked on backend projects using <span className="text-blue-500">Python</span> and <span className="text-blue-500">Machine Learning</span>, including <span className="text-blue-500">NLP</span> models.<br />
        I regularly practice <span className="text-blue-500">Data Structures and Algorithms</span> to strengthen my problem-solving skills and write efficient code.<br />
        Additionally, I create business dashboards in <span className="text-blue-500">Tableau</span> to visualize insights dynamically.
      </p>
    </motion.section>
  );
}
