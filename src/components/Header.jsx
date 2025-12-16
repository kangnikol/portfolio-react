import React, { useState } from "react"
import { m, useScroll, useMotionValueEvent } from "framer-motion"
import "../assets/css/style.css"

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -100, opacity: 0 }
  };

  return (
    <m.header 
      variants={navVariants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 p-6 md:p-12 flex justify-between items-start pointer-events-none mix-blend-difference"
    >
      {/* Logo / Brand */}
      <span className="text-xl font-bold tracking-tight text-text pointer-events-auto cursor-pointer" onClick={() => scrollToSection('home')}>
        N.
      </span>

      {/* Navigation */}
      <nav className="flex flex-col items-end gap-2 pointer-events-auto">
        <m.button
          onClick={() => scrollToSection('home')}
          className="text-lg font-medium text-subtext0 hover:text-text transition-colors text-right group"
          whileHover={{ x: -4 }}
        >
          Index
          <span className="block h-[1px] w-0 bg-text group-hover:w-full transition-all duration-300"></span>
        </m.button>
        <m.button
          onClick={() => scrollToSection('projects')}
          className="text-lg font-medium text-subtext0 hover:text-text transition-colors text-right group"
          whileHover={{ x: -4 }}
        >
          Work
          <span className="block h-[1px] w-0 bg-text group-hover:w-full transition-all duration-300"></span>
        </m.button>
        <m.button
          onClick={() => scrollToSection('projects')} 
          className="text-lg font-medium text-subtext0 hover:text-text transition-colors text-right group"
          whileHover={{ x: -4 }}
        >
          Contact
          <span className="block h-[1px] w-0 bg-text group-hover:w-full transition-all duration-300"></span>
        </m.button>
      </nav>
    </m.header>
  )
}

export default Header
