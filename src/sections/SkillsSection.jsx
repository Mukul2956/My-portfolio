import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiPython, SiGit, SiFirebase, SiMysql, SiTensorflow, SiScikitlearn, SiTableau } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss3 },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'React', icon: SiReact },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Python', icon: SiPython },
  { name: 'Git', icon: SiGit },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'MySQL', icon: SiMysql },
  { name: 'TensorFlow', icon: SiTensorflow },
  { name: 'Scikit-learn', icon: SiScikitlearn },
  { name: 'Tableau', icon: SiTableau },
];

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      className="py-20 px-6 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.1 }}
    >
      <h2 className="text-3xl font-semibold mb-10">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
        {skills.map(({ name, icon: Icon }, idx) => (
          <motion.div
            key={idx}
            className="w-28 h-28 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md transform transition hover:scale-110 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <Icon className="text-4xl mb-2 text-blue-500" />
            <span className="text-md font-medium">{name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
