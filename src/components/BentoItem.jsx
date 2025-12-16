import React from "react"
import { m } from "framer-motion"

const BentoItem = ({ children, className = "", delay = 0 }) => {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
      className={`bg-surface0 border border-surface1 rounded-3xl p-6 hover:border-blue transition-colors duration-300 ${className}`}
    >
      {children}
    </m.div>
  )
}

export default BentoItem
