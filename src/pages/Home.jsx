import React from "react"
import { m } from "framer-motion"
import Project from "./Project"
import MagneticButton from "../components/MagneticButton"

const Home = () => {
  return (
    <>
      <div id="home" className="min-h-screen relative px-6 md:px-12 pt-32 pb-0 md:pb-20 overflow-hidden">
        {/* Giant Typography Hero */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end min-h-[60vh] mb-20 md:mb-32 relative z-10">
          <m.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1"
          >
            <h1 className="text-[15vw] md:text-[12vw] leading-[0.85] font-black tracking-tighter text-text mix-blend-difference select-none">
              <span className="block overflow-hidden">
                {"Nicholas".split("").map((char, i) => (
                  <m.span
                    key={i}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.33, 1, 0.68, 1], 
                      delay: i * 0.03 
                    }}
                    className="inline-block"
                  >
                    {char}
                  </m.span>
                ))}
              </span>
              <span className="block overflow-hidden">
                {"Alvis".split("").map((char, i) => (
                  <m.span
                    key={i}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.33, 1, 0.68, 1], 
                      delay: 0.1 + (i * 0.03) 
                    }}
                    className="inline-block"
                  >
                    {char}
                  </m.span>
                ))}
                <m.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="inline-block text-blue"
                >
                  .
                </m.span>
              </span>
            </h1>
          </m.div>

          <m.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="md:w-1/3 flex flex-col gap-6 md:gap-8 mt-8 md:mt-0"
          >
            <div className="flex flex-col gap-4">
               <p className="text-lg md:text-xl text-text font-bold leading-relaxed">
                 Operational Engineer at Swamedia Informatika.
               </p>
               <p className="text-sm md:text-base text-subtext0 leading-relaxed font-light">
                 Currently managing servers, databases, and system operations for Telkom Indonesia projects. 
                 Experienced in resolving complex cases and shell configuration.
               </p>
            </div>
            
            <div className="flex flex-wrap gap-4 md:gap-8 text-xs md:text-sm font-bold uppercase tracking-widest text-overlay2">
              <MagneticButton><a href="https://github.com/kangnikol" className="hover:text-text transition-colors block p-2">Github</a></MagneticButton>
              <MagneticButton><a href="https://www.linkedin.com/in/nicholasalvis/" className="hover:text-text transition-colors block p-2">LinkedIn</a></MagneticButton>
              <MagneticButton><a href="mailto:nicholasalvisaputra@gmail.com" className="hover:text-text transition-colors block p-2">Email</a></MagneticButton>
            </div>
          </m.div>
        </div>

        {/* Decorative Lines/Elements */}
        <div className="absolute top-0 left-12 w-[1px] h-full bg-surface1/20 hidden md:block" />
        <div className="absolute top-0 right-12 w-[1px] h-full bg-surface1/20 hidden md:block" />
        
        {/* Projects Section Embedded */}
        <Project />
      </div>
    </>
  )
}

export default Home
