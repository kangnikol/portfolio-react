import React, { useState, useEffect } from "react"
import { m, AnimatePresence } from "framer-motion"

const Modal = () => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  // Handle Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        closeModal()
      }
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <>
      <button
        className="inline-flex py-2 px-4 items-center gap-3 rounded-full text-text hover:text-blue hover:bg-surface1 transition-colors bg-surface0 border border-surface1"
        onClick={openModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
        Contact Me
      </button>

      <AnimatePresence>
        {showModal && (
          <m.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-crust/80 backdrop-blur-sm"
            onClick={closeModal} // Close on backdrop click
          >
            <m.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent close on content click
              className="relative w-full max-w-2xl bg-base border border-surface0 rounded-3xl p-8 shadow-2xl"
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-text mb-2">Get In Touch</h2>
                  <p className="text-subtext0">
                     Have a question or proposal? I'd love to hear from you.
                  </p>
                </div>
                <button 
                  onClick={closeModal}
                  className="p-2 hover:bg-surface0 rounded-lg transition-colors text-subtext0 hover:text-text"
                >
                  <span className="sr-only">Close</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              <form
                action="https://formspree.io/f/meqderqp"
                method="POST"
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-subtext0">Name</label>
                    <input
                      required
                      id="name"
                      name="name"
                      type="text"
                      className="w-full bg-surface0 border border-surface1 rounded-xl p-3 text-text focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-subtext0">Email</label>
                    <input
                      required
                      id="email"
                      name="email"
                      type="email"
                      className="w-full bg-surface0 border border-surface1 rounded-xl p-3 text-text focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-subtext0">Message</label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    className="w-full bg-surface0 border border-surface1 rounded-xl p-3 text-text focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-all h-40 resize-none"
                    placeholder="Hello..."
                  />
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue text-base px-6 py-3 rounded-xl font-semibold hover:bg-blue/90 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Modal
