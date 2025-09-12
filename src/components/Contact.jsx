import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();
    if (!name || !email || !message) {
      setStatus("⚠️ Please fill out all fields.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("🚫 Please enter a valid email address.");
      return;
    }
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setStatus("✅ Message sent successfully!");
      form.current.reset();
    } catch (error) {
      setStatus("❌ Failed to send the message. Try again later.");
      console.error(error);
    }
    setTimeout(() => setStatus("") , 4000);
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto py-20 px-6 relative">
      {status && (
        <div className="fixed top-8 right-8 z-50">
          <div
            className={`backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg px-6 py-4 rounded-2xl text-lg font-semibold text-white flex items-center gap-2 animate-fade-in ${status.includes('✅') ? 'border-green-400' : status.includes('❌') ? 'border-red-400' : 'border-yellow-400'}`}
            style={{ minWidth: '220px', maxWidth: '350px' }}
          >
            {status.includes('✅') && <span className="text-green-400 text-xl">✔</span>}
            {status.includes('❌') && <span className="text-red-400 text-xl">✖</span>}
            {status.includes('⚠️') && <span className="text-yellow-400 text-xl">⚠️</span>}
            {status.includes('🚫') && <span className="text-yellow-400 text-xl">🚫</span>}
            <span>{status.replace(/[✅❌⚠️🚫]/g, '')}</span>
          </div>
        </div>
      )}
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
  <h2 className="text-white font-black text-[40px] mb-4 drop-shadow-lg">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-4 text-left bg-black-100 p-8 rounded-xl shadow-lg">
          <input type="text" name="user_name" placeholder="Your Name" required className="w-full p-3 rounded-md border bg-black-200 text-white" />
          <input type="email" name="user_email" placeholder="Your Email" required className="w-full p-3 rounded-md border bg-black-200 text-white" />
          <textarea name="message" placeholder="Your Message" rows="5" required className="w-full p-3 rounded-md border bg-black-200 text-white"></textarea>
          <button type="submit" className="w-full bg-[#915EFF] hover:bg-[#7a3fdc] text-white py-3 rounded-md transition font-bold">Send Message</button>
        </form>
      </motion.div>
      {/* 3D Earth model can be added here if assets are available */}
    </section>
  );
};

export default Contact;
