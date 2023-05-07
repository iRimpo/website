import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-[#FCE44D]">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#000000]" />
          <div className="w-1 sm:h-80 h-40 bg-[#000000]" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}text-black`}>Hi, I'm <span className="text-black">Richard</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-black-100`}>A 1st year Computer Engineering Student <br className="sm:block hidden" /> @ Diablo Valley College</p>
        </div>
      </div>
      
    <ComputersCanvas />

    </section>
  )
}

export default Hero