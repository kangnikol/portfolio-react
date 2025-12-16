import React from "react"
import { m } from "framer-motion"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="px-6 md:px-12 py-10 md:py-20 border-t border-surface1 mt-0 md:mt-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-[12vw] md:text-[5vw] font-black leading-none tracking-tighter text-text">
            Let's work <br/>
            <span className="text-overlay1">together.</span>
          </h2>
          <m.a 
            href="mailto:nicholasalvisaputra@gmail.com" 
            className="text-xl md:text-2xl font-light text-text hover:text-blue transition-colors mt-4"
            whileHover={{ x: 10 }}
          >
            nicholasalvisaputra@gmail.com &rarr;
          </m.a>
        </div>

        <div className="flex flex-col items-start md:items-end gap-2 text-sm font-medium text-subtext0 tracking-widest uppercase">
           <a href="https://github.com/kangnikol" className="hover:text-text transition-colors">Github</a>
           <a href="https://www.linkedin.com/in/nicholasalvis/" className="hover:text-text transition-colors">LinkedIn</a>
           <span className="mt-8 text-overlay1 normal-case tracking-normal">
             &copy; {currentYear} Nicholas Alvis.
           </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
