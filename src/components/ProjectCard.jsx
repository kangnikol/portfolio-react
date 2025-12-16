import React from "react"
import { Link } from "react-router-dom"
import { m } from "framer-motion"

const ProjectCard = (props) => {
  return (
    <m.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="bg-surface0 flex lg:p-8 p-6 rounded-3xl items-center side-project gap-8 flex-1 border border-surface1 hover:border-blue transition-colors"
    >
      <div className="flex-1 w-1/2">
        <m.h2 
          className="text-blue text-2xl font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {props.title}
        </m.h2>
        <div className="mb-6 mt-3">
          <p className="text-subtext0 leading-relaxed">{props.desc}</p>
        </div>
        <Link
          to={props.url}
          className="inline-flex items-center gap-3 rounded-full bg-blue py-3 px-6 text-sm font-semibold text-base transition-all hover:opacity-90 active:scale-95"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Website
          <svg
            data-src="https://s2.svgbox.net/hero-outline.svg?ic=external-link"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            data-id="svg-loader_2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </Link>
      </div>
      <div className="w-1/2 mx-auto hidden lg:block overflow-hidden rounded-2xl">
        <img className="bg-cover w-full h-full object-cover hover:scale-105 transition-transform duration-500" src={props.imgUrl} alt={props.title} />
      </div>
    </m.div>
  )
}

export default ProjectCard
