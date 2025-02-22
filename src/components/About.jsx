import { React, useState, useRef } from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';


import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

import aboutImage from './me.jpg';

const VideoCard = ({ index, videoSrc }) => {
  // State to manage mute/unmute
  const [isMuted, setIsMuted] = useState(true);
  // State to manage hover state
  const [isHovered, setIsHovered] = useState(false);
  // Ref to access the video DOM element
  const videoRef = useRef(null);

  // Function to toggle mute/unmute and set volume
  const toggleMute = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (isMuted) {
        // If currently muted, unmute and set volume to 50%
        videoElement.muted = false;
        videoElement.volume = 0.5;
      } else {
        // If currently unmuted, mute the video
        videoElement.muted = true;
      }
      // Update state
      setIsMuted(!isMuted);
    }
  };

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full p-[1px] rounded-[20px] shadow-card relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && isMuted && (
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <span className="text-white">Click to hear</span>
          </div>
        )}
        <div
          options={{
            max: 40,
            scale: 1.15,
            speed: 450
          }}
          className="rounded-[20px] overflow-hidden min-h-[280px] flex justify-center items-center"
        >
          {/* Video element with onClick event to toggle mute */}
          <video
            ref={videoRef}
            src={videoSrc}
            alt="Video Content"
            className="object-cover w-full h-full"
            loop
            autoPlay
            muted={isMuted}
            onClick={toggleMute}
          />
        </div>
      </motion.div>
    </Tilt>
  );
};


const About = () => {
  return (
    <div className="flex flex-col">
      <div className="md:flex md:flex-row">
        {/* Text content on the left */}
        <motion.div className="flex-1" variants={textVariant()}>
          <motion.h2 className={styles.sectionHeadText}>
            Overview
          </motion.h2>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[22px] max-w-3xl leading-[30px] font-black text-black"
          >
            Hi! I'm a Data Science Student who loves to learn new things and support others when they need it. The main languages I work with are: Python, JavaScript, Java, and C++. My goal is to inspire others to pursue their passion even if it seems undoable!
          </motion.p>
          
        </motion.div>
        
        {/* Image on the right */}
        <div className="flex-1 flex justify-center items-center">
        <motion.div className="flex-1 flex justify-center items-center"
          variants={fadeIn("", "", 0.2, 1.5)}
        >
          <img src={aboutImage} alt="About" className="max-w-md rounded-lg shadow-xl" />
        </motion.div>
        </div>
      </div>

      {/* VideoCard components below the text and image */}
      {/* <div className='mt-20 flex flex-wrap gap-10 justify-center items-center'>
        {services.map((service, index) => (
          <VideoCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </div>
  );
}



export default SectionWrapper(About, "about")