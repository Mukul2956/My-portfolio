import { motion } from "framer-motion";

const projects = [
  {
    name: "CareerPilot",
    description:
      "An AI-powered career guidance platform that analyzes a user’s skills, interests, and academic profile to recommend personalized career paths, courses, and job roles.",
    tags: ["ai", "llm", "career-recommendation", "webapp"],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    source_code_link: "https://github.com/Mukul2956/CareerPilot",
  },
  {
    name: "DocBot",
    description:
      "A document-intelligence chatbot that understands, extracts, and answers questions from uploaded PDFs, research papers, and text files using large language models.",
    tags: ["llm", "rag", "document-qa", "chatbot"],
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    source_code_link: "https://github.com/Mukul2956/Doc-Bot",
  },
  {
    name: "Rubric-ai",
    description:
      "An automated rubric-based evaluation system that grades student answers using NLP and provides detailed feedback, scores, and improvement suggestions — ensuring fair, scalable academic assessment.",
    tags: ["nlp", "rubric-grading", "edtech", "ai-evaluation"],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    source_code_link: "https://github.com/Mukul2956/Rubric-AI",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-5xl mx-auto py-20 px-6">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <h2 className="text-white font-black text-[40px] mb-4 drop-shadow-lg">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div key={idx} className="bg-black-100 rounded-2xl p-6 shadow-card hover:scale-105 transition duration-300 hover:bg-[#915EFF]/20 flex flex-col items-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.2 }}>
              <div className="w-full flex justify-center mb-4">
                <img src={project.image} alt={project.name} className="w-48 h-32 object-cover rounded-xl shadow-lg border-2 border-[#915EFF]/40" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2 drop-shadow">{project.name}</h3>
              <p className="text-secondary text-md mb-2 text-center drop-shadow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2 justify-center">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 bg-[#915EFF]/20 rounded text-white drop-shadow">#{tag}</span>
                ))}
              </div>
              <a href={project.source_code_link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm font-bold">Source Code</a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
