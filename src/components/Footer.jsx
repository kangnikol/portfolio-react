import React, { useState } from "react"
import "../assets/css/style.css"
import "../assets/css/style2.css"

const Footer = () => {
  const [showModal, setShowModal] = useState(false)
  const closeModal = () => {
    setShowModal(false)
  }
  const openModal = () => {
    setShowModal(true)
  }
  console.log(showModal)

  return (
    <>
      <div className="flex justify-center">
        <img
          src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true"
          alt="catppuccin's Cat"
        />
      </div>
      <footer className="text-white max-w-3xl w-full flex justify-between mx-auto items-center mb-12">
        <div className="opacity-50 text-subtext0">
          © Nicholas Alvi Saputra, 2023
        </div>
        <button
          className="btn-secondary bg-surface0"
          onClick={openModal}
          id="contact"
        >
          <svg
            data-src="https://s2.svgbox.net/materialui.svg?ic=mail"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            color=""
            data-id="svg-loader_9"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
          </svg>
          Contact Me
        </button>
        {showModal ? (
          <div className="fixed h-screen w-full overflow-hidden hidden z-10 top-0 bg-black opacity-75 backdrop-blur-2xl astro-A4YOCCPA">
            <div
              className="relative h-full rounded-3xl transition-all duration-300 ease-in-out border-gray-600 flex items-center astro-A4YOCCPA"
              style={{ top: "1024px" }}
            >
              <div className="max-w-3xl lg:mx-auto mr-8 text-text dark:text-dk_text astro-A4YOCCPA">
                <div className="text-3xl font-bold text-primary astro-A4YOCCPA">
                  Get In Touch
                </div>
                <div
                  className="absolute right-8 top-8 text-text dark:text-dk_text items-center gap-2 flex astro-A4YOCCPA"
                  onClick={closeModal}
                >
                  <span className="bg-gray-700 text-xs px-2 py-1 rounded hidden lg:block astro-A4YOCCPA">
                    esc
                  </span>
                  <svg
                    data-src="https://s2.svgbox.net/materialui.svg?ic=close"
                    width="24"
                    height="24"
                    id="close"
                    className="hover:text-text dark:text-dk_text cursor-pointer astro-A4YOCCPA"
                  ></svg>
                </div>
                <form
                  action="https://formspree.io/f/meqderqp"
                  method="POST"
                  className="astro-A4YOCCPA"
                >
                  <p className="mt-2 text-text dark:text-dk_text astro-A4YOCCPA">
                    Do you have an interesting job opportunity? Want to ask me a
                    question? Or, just want to connect? Feel free to contact me.
                  </p>
                  <div className="lg:flex-row flex-col flex mt-6 gap-4 astro-A4YOCCPA">
                    <input
                      required
                      name="name"
                      type="text"
                      className="flex-1 bg-gray-800 p-3 rounded outline-none placeholder:text-text dark:placeholder:text-dk_text placeholder:opacity-50 text-input text-lg w-64 border border-gray-700 astro-A4YOCCPA"
                      placeholder="Full Name"
                    />
                    <input
                      required
                      name="email"
                      type="email"
                      className="flex-1 bg-gray-800 p-3 rounded outline-none placeholder:text-text dark:placeholder:text-dk_text placeholder:opacity-50 text-input text-lg w-64 border border-gray-700 astro-A4YOCCPA"
                      placeholder="Email"
                    />
                  </div>
                  <textarea
                    required
                    name="message"
                    className="w-full bg-gray-800 p-3 rounded outline-none placeholder:text-text dark:placeholder:text-dk_text placeholder:opacity-50 text-input mt-4 resize-none h-64 text-lg border border-gray-700 astro-A4YOCCPA"
                    placeholder="Message"
                  ></textarea>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 rounded-lg bg-gold dark:bg-dk_gold opacity-95 py-3 px-5 text-sm leading-5 font-semibold text-based dark:text-based transition-all hover:opacity-1 active:scale-95 active:transform-none mt-4 astro-A4YOCCPA"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : null}
      </footer>
    </>
  )
}

export default Footer
