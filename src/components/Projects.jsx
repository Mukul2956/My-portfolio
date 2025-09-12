import { motion } from "framer-motion";

const projects = [
  {
    name: "FactSense",
    description: "A fake news detection web app using machine learning and NLP techniques to classify news articles as real or fake.",
    tags: ["react", "ml", "nlp", "webapp"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    source_code_link: "https://github.com/Mukul2956/FactSense"
  },
  {
    name: "NetClone",
    description: "A Netflix clone web app built with React and Firebase, featuring authentication and movie browsing.",
    tags: ["react", "firebase", "clone"],
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    source_code_link: "https://github.com/Mukul2956/Net-Clone"
  },
  {
    name: "MovieGround",
    description: "A movie recommender system using machine learning and content-based filtering.",
    tags: ["python", "ml", "recommendation"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    source_code_link: "https://github.com/Mukul2956/Movie-Recommender-System-ML"
  }
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
