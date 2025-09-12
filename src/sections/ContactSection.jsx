
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();
    if (!name || !email || !message) {
      alert('⚠️ Please fill out all fields.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('🚫 Please enter a valid email address.');
      return;
    }
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      alert('✅ Message sent successfully!');
      form.current.reset();
    } catch (error) {
      alert('❌ Failed to send the message. Try again later.');
      console.error(error);
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-6 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-semibold mb-6">Get In Touch</h2>
      <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-4 text-left bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
        <input type="text" name="user_name" placeholder="Your Name" required className="w-full p-3 rounded-md border dark:bg-gray-800 dark:border-gray-700" />
        <input type="email" name="user_email" placeholder="Your Email" required className="w-full p-3 rounded-md border dark:bg-gray-800 dark:border-gray-700" />
        <textarea name="message" placeholder="Your Message" rows="5" required className="w-full p-3 rounded-md border dark:bg-gray-800 dark:border-gray-700"></textarea>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md transition">Send Message</button>
      </form>
    </motion.section>
  );
}
