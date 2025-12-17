import React, { useState } from "react"
import { m, AnimatePresence } from "framer-motion"

const Project = () => {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projectList = [
    {
      title: "Senja Solusi",
      category: "Company Profile",
      year: "2024",
      url: "https://senja.co.uk",
      imgUrl: "/senja.webp",
    },
    {
      title: "Pintek",
      category: "Education Fintech",
      year: "2023",
      url: "https://pintek.id",
      imgUrl: "/pintek.webp",
    },
    {
      title: "Ayoconnect",
      category: "Fintech Payment GatewayAPI",
      year: "2022",
      url: "https://ayoconnect.com/",
      imgUrl: "/ayoc.webp",
    },
    {
      title: "Nichol+ Hotstar",
      category: "Web Clone",
      year: "2022",
      url: "https://nichol-hotstar.vercel.app",
      imgUrl: "/nhotstar.webp",
    },
    {
      title: "Weather App",
      category: "Weather App",
      year: "2022",
      url: "https://weather-kangnikol.vercel.app/",
      imgUrl: "/weather.webp",
    },
    // {
    //   title: "Startpage (Deprecated)",
    //   category: "Utility",
    //   year: "2022",
    //   url: "no, you can't actually :P",
    //   imgUrl: "https://placehold.co/600x400/1e1e2e/cdd6f4?text=404+Not+Found",
    // },
  ]

  return (
    <section id="projects" className="py-10 md:py-20">
      <div className="flex flex-col gap-12">
        <div className="flex justify-between items-end border-b border-surface1 pb-4">
          <h2 className="text-xl font-medium text-subtext0 uppercase tracking-widest">
            Selected Works
          </h2>
          <span className="text-xl font-medium text-subtext0">
            ({projectList.length})
          </span>
        </div>

        <div
          className="flex flex-col relative w-full"
          onMouseLeave={() => setHoveredProject(null)}
        >
          {projectList.map((e, i) => (
            <m.a
              key={i}
              href={e.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row md:items-center justify-between py-10 md:py-12 border-b border-surface1 hover:border-text transition-colors relative z-10"
              onMouseEnter={() => setHoveredProject(i)}
            >
              <div className="flex items-baseline gap-4 md:gap-12">
                <span className="font-mono text-xs md:text-sm text-overlay2">
                  0{i + 1}
                </span>
                <h3 className="text-3xl md:text-6xl font-bold text-text group-hover:translate-x-4 transition-transform duration-500 ease-out">
                  {e.title}
                </h3>
              </div>

              <div className="flex items-center gap-4 md:gap-8 mt-3 md:mt-0 opacity-80 md:opacity-50 md:group-hover:opacity-100 transition-opacity">
                <span className="text-sm md:text-lg font-light">
                  {e.category}
                </span>
                <span className="text-xs md:text-sm font-mono border border-surface1 px-2 rounded-full">
                  {e.year}
                </span>
              </div>
            </m.a>
          ))}

          {/* Floating Image Reveal - Hidden on mobile */}
          <AnimatePresence>
            {hoveredProject !== null && (
              <m.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="hidden lg:block fixed pointer-events-none z-0 rounded-2xl overflow-hidden w-[400px] h-[300px] shadow-2xl"
                style={{
                  top: "20%",
                  right: "10%",
                  rotate: -5,
                }}
              >
                <img
                  src={projectList[hoveredProject].imgUrl}
                  alt="Project Preview"
                  className="w-full h-full object-cover"
                />
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Project
