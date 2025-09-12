import { motion } from "framer-motion";

const feedbacks = [
  {
    testimonial: "Mukul is a highly skilled developer who delivers modern, responsive web solutions.",
    name: "A. Client",
    designation: "Product Manager",
    company: "Tech Solutions Inc.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    testimonial: "Great collaboration and communication. Highly recommended for frontend and data projects.",
    name: "B. Client",
    designation: "CEO",
    company: "InnovateX",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  }
];

const Feedbacks = () => {
  return (
    <section id="feedbacks" className="max-w-5xl mx-auto py-20 px-6">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <h2 className="text-white font-black text-[40px] mb-4">Testimonials</h2>
        <div className="flex flex-wrap gap-7">
          {feedbacks.map((fb, idx) => (
            <motion.div key={idx} className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.2 }}>
              <p className="text-white font-black text-[48px] mb-2">"</p>
              <p className="text-white tracking-wider text-[18px] mb-4">{fb.testimonial}</p>
              <div className="flex justify-between items-center gap-1">
                <div className="flex-1 flex flex-col">
                  <p className="text-white font-medium text-[16px]">
                    <span className="text-[#915EFF]">@</span> {fb.name}
                  </p>
                  <p className="mt-1 text-secondary text-[12px]">{fb.designation} of {fb.company}</p>
                </div>
                <img src={fb.image} alt={`feedback_by-${fb.name}`} className="w-10 h-10 rounded-full object-cover" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Feedbacks;
