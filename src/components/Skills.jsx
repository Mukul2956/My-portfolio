import { motion } from "framer-motion";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiPython, SiGit, SiFirebase, SiMysql, SiTensorflow, SiScikitlearn, SiTableau, SiCplusplus, SiNodedotjs, SiMongodb, SiTypescript, SiRedux } from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss3 },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: SiReact },
  { name: 'Redux', icon: SiRedux },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Python', icon: SiPython },
  { name: 'C++', icon: SiCplusplus },
  { name: 'Git', icon: SiGit },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'MySQL', icon: SiMysql },
  { name: 'TensorFlow', icon: SiTensorflow },
  { name: 'Scikit-learn', icon: SiScikitlearn },
  { name: 'Tableau', icon: SiTableau },
];

const Skills = () => {
  return (
    <section id="skills" className="max-w-5xl mx-auto py-20 px-6">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex flex-col items-center">
        <h2 className="text-white font-black text-[40px] mb-4 drop-shadow-lg">Skills & Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center mb-8">
          {skills.map(({ name, icon: Icon }, idx) => (
            <motion.div key={idx} className="w-28 h-28 flex flex-col items-center justify-center bg-black-100 rounded-xl shadow-card hover:scale-110 transition duration-300 hover:bg-[#915EFF]/20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }}>
              <Icon className="text-4xl mb-2 text-[#915EFF] drop-shadow" />
              <span className="text-md font-medium text-white drop-shadow text-center">{name}</span>
            </motion.div>
          ))}
        </div>
  <a href="https://drive.google.com/file/d/1MF8RuflyMgoFp4qL5RNLXXmVsIHG19uD/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-[#915EFF] text-white font-bold rounded-lg shadow hover:bg-[#7a3fdc] transition">Download Resume</a>
      </motion.div>
    </section>
  );
};

export default Skills;
