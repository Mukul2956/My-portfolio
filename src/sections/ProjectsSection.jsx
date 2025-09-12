import { motion } from 'framer-motion';

const projects = [
  {
    title: '🎬 Netflix Clone',
    description: 'A responsive Netflix UI built with React, Firebase, and TMDB API.'
  },
  {
    title: '🎞️ MovieGround',
    description: 'Content-based filtering system recommending movies using cosine similarity.'
  },
  {
    title: '📊 Pizza Sales Dashboard',
    description: 'An interactive and dynamic sales analysis dashboard built with Tableau.'
  }
];

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="py-20 px-6 max-w-5xl mx-auto text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
      <h2 className="text-3xl font-semibold mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md hover:scale-105 transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
