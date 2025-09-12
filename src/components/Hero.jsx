          <div className="w-1 sm:h-80 h-40 violet-gradient" />
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 px-6">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
        </div>
        <div>
              <h1 className="font-black text-white text-[40px] sm:text-[60px] lg:text-[80px] lg:leading-[98px] mt-2">
                <Typewriter
                  words={["Hi, I'm ", "Hi, I'm ", "Hi, I'm "]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={40}
                  delaySpeed={1000}
                  onType={(count) => {}}
                />
                <span className="text-[#915EFF]">Mukul Singh</span>
              </h1>
              <p className="text-[#dfd9ff] font-medium text-[16px] sm:text-[26px] lg:text-[30px] lg:leading-[40px] mt-2">
                I develop 3D visuals, user interfaces, and web applications
              </p>
        </div>
      </div>
      {/* 3D Desktop Model Canvas will go here */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
