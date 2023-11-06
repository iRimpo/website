import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  const handleButtonClick = (event) => {
    event.stopPropagation();
  };

  return (
    <section className="relative w-full h-screen mx-auto bg-[#FCE44D]">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#000000]" />
          <div className="w-1 sm:h-80 h-40 bg-[#000000]" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}text-black`}>
            Hi, I'm <span className="text-black">Richard</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black-100`}>
            A 2nd year Computer Science Student
            <br className="sm:block hidden" /> @ Diablo Valley College
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-black flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-black mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
