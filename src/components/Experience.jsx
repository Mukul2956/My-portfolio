import { motion } from "framer-motion";

const experiences = [
  {
    title: "Oracle Generative AI Certified Professional",
    company: "Oracle",
    date: "2025",
    points: [
      "Achieved Oracle Generative AI Professional certification, validating expertise in generative AI concepts and Oracle cloud tools.",
      "Demonstrated advanced skills in building, deploying, and optimizing generative AI models for enterprise applications."
    ]
  },
  {
    title: "Open Source Contributor",
    company: "Community Projects",
    date: "2024 - 2025",
    points: [
      "Contributed to open source projects, improving codebases and adding new features.",
      "Collaborated with global developer communities and participated in code reviews and documentation updates."
    ]
  },
  {
    title: "Frontend Developer",
    company: "Freelance",
    date: "2022 - Present",
    points: [
      "Developed modern, responsive UIs using React and Tailwind CSS.",
      "Built data-driven dashboards and business analytics tools.",
      "Collaborated with clients to deliver custom web solutions.",
      "Integrated APIs and third-party services for dynamic content."
    ]
  },
  {
    title: "Data Science & ML Projects",
    company: "Personal Projects",
    date: "2021 - Present",
    points: [
      "Created NLP models and machine learning pipelines in Python.",
      "Implemented content-based filtering and recommendation systems.",
      "Visualized insights with Tableau and custom dashboards."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="max-w-7xl mx-auto py-20 px-6">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <h2 className="text-white font-black text-[40px] mb-12 drop-shadow-lg">Experience</h2>
        <div className="relative flex flex-row items-start w-full">
          <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-[#915EFF] to-transparent rounded-full"></div>
          <div className="flex flex-col w-full pl-20">
            {experiences.map((exp, idx) => (
              <motion.div key={idx} className="relative mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.2 }}>
                <div className="flex items-center mb-4">
                  <span className="animate-pulse w-5 h-5 rounded-full bg-[#915EFF] border-4 border-white shadow-lg absolute -left-12 top-0"></span>
                  <h3 className="text-white text-2xl font-bold drop-shadow">{exp.title}</h3>
                </div>
                <div className="ml-2">
                  <p className="text-secondary text-md mb-1 font-semibold drop-shadow">{exp.company}</p>
                  <p className="text-[#915EFF] text-sm mb-3 font-bold">{exp.date}</p>
                  <ul className="list-disc ml-5 text-white-100 text-[15px] space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="drop-shadow text-white/90 leading-relaxed">{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
