import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import { Typewriter } from 'react-simple-typewriter';
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    // Basic empty check
    if (!name || !email || !message) {
      toast.error("⚠️ Please fill out all fields.");
      return;
    }

    // Basic email format check (simple regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("🚫 Please enter a valid email address.");
      return;
    }

    emailjs.sendForm(
      'service_t4fswdi',
      'template_lqzfmh5',
      form.current,
      'rub54SZDRBc9nivPO'
    ).then(
      () => {
        toast.success('✅ Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        toast.error('❌ Failed to send the message. Try again later.');
        console.error(error);
      }
    );
  };

  return (
    <div className={`relative overflow-hidden min-h-screen ${darkMode ? "bg-[#0f172a]" : "bg-[#f0f9ff]"} text-${darkMode ? "white" : "black"}`}>
      {/* ✨ Animated background blobs */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-200"></div>
      </div>

      {/* 🔒 All content sits above background */}
      <div className="relative z-10">
        <Toaster position="top-right" />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Hero Section */}
        <motion.section
          id="home"
          className="min-h-screen flex flex-col items-center justify-center px-6 text-center pt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4">
            👋 Hi, I'm <span className="text-blue-500">Mukul Singh</span>
            <br />
            <span className="text-2xl text-gray-500 dark:text-gray-300">
              <Typewriter
                words={['Frontend Developer', 'React Enthusiast', 'UI/UX Designer']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          className="py-20 px-6 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I'm a frontend-focused developer with a strong foundation in data-driven applications. I enjoy building modern UIs using <strong className="text-blue-500">React</strong>, styling them with <strong className="text-blue-500">Tailwind CSS</strong>, and bringing them to life with <strong className="text-blue-500">Framer Motion</strong>.
            I’ve also worked on backend projects using <strong className="text-blue-500">Python</strong> and <strong className="text-blue-500">Machine Learning</strong>, including <strong className="text-blue-500">NLP</strong> models.
            I regularly practice <strong className="text-blue-500">Data Structures and Algorithms</strong> to strengthen my problem-solving skills and write efficient code.
            Additionally, I create business dashboards in <strong className="text-blue-500">Tableau</strong> to visualize insights dynamically.
          </p>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="py-20 px-6 bg-white dark:bg-gray-900 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-10">Skills</h2>

          {/* First Row */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {[
              { name: 'HTML', icon: '🌐' },
              { name: 'CSS', icon: '🎨' },
              { name: 'JavaScript', icon: '🟨' },
              { name: 'React', icon: '⚛️' },
              { name: 'Tailwind', icon: '💨' },
              { name: 'Python', icon: '🐍' },
              { name: 'Git', icon: '🔧' },
              { name: 'Firebase', icon: '🔥' },
            ].map((skill, index) => (
              <div
                key={index}
                className="w-28 h-28 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md transform transition hover:scale-110 cursor-pointer"
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'MySQL', icon: '🗄️' },
              { name: 'TensorFlow', icon: '🧠' },
              { name: 'Scikit-learn', icon: '📘' },
              { name: 'NLP', icon: '🗣️' },
              { name: 'Tableau', icon: '📊' },
            ].map((skill, index) => (
              <div
                key={index}
                className="w-28 h-28 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md transform transition hover:scale-110 cursor-pointer"
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="py-20 px-6 bg-gray-100 dark:bg-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3 className="text-xl font-bold mb-2">🧠 FactSense</h3>
              <p>A BERT-powered Fake News Detection app with live web UI using Streamlit.</p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3 className="text-xl font-bold mb-2">🎬 Netflix Clone</h3>
              <p>A responsive Netflix UI built with React, Firebase, and TMDB API.</p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3 className="text-xl font-bold mb-2">🎞️ MovieGround</h3>
              <p>Content-based filtering system recommending movies using cosine similarity.</p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3 className="text-xl font-bold mb-2">📊 Pizza Sales Dashboard</h3>
              <p>An interactive and dynamic sales analysis dashboard built with Tableau.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="py-20 px-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Get In Touch</h2>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="max-w-xl mx-auto space-y-4 text-left bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md border dark:bg-gray-800 dark:border-gray-700"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md border dark:bg-gray-800 dark:border-gray-700"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 rounded-md border dark:bg-gray-800 dark:border-gray-700"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </motion.section>

        {/* Footer */}
        <footer className="py-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Mukul Singh. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
