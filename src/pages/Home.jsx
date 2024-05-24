import React from "react"

const Home = () => {
  return (
    <>
      <div>
        <div className="flex flex-col">
          <main className="flex-1 mt-4 px-4 lg:px-0">
            <div className="flex justify-center">
              <div className="w-36 rounded-full photo relative">
                <img
                  src="https://media.discordapp.net/attachments/917983285370572821/1243588288871272621/photo_portfolio.webp?ex=66520558&is=6650b3d8&hm=bf500867bcccf68ef84b1f5c4f1fbe48507ab5991a64e7d864c41ab72112bd1c&=&format=webp&width=597&height=661"
                  alt="Nicholas's Photo"
                  width={144}
                  height={159}
                />
              </div>
            </div>
            <h1 className="text-text text-4xl text-center font-black my-6">
              Hey, I'm Nikol.
            </h1>
            <div className="mt-4 text-text text-lg flex items-center flex-col">
              <div className="max-w-3xl">
                <p>
                  I'm a Software Engineer based in{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Bandung"
                    className="text-rosewater"
                  >
                    Bandung, Indonesia
                  </a>
                  . I enjoy creating products and tackling challenges related to
                  them. While programming is my main focus, I'm not afraid to
                  venture into new and unfamiliar areas.
                </p>
                <div className="flex justify-center mt-7">
                  <div className="p-2 flex gap-4 rounded">
                    <a href="mailto:nicholasalvisaputra@gmail.com">
                      <svg
                        className="opacity-50 hover:opacity-100 transition-all hover:text-text"
                        data-src="https://s2.svgbox.net/materialui.svg?ic=mail"
                        width="24"
                        height="24"
                        color="#b4befe"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        data-id="svg-loader_2"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                      <span className="sr-only">Contact Me!</span>
                    </a>
                    <a href="https://github.com/kangnikol">
                      <svg
                        className="opacity-50 hover:opacity-100 transition-all hover:text-white"
                        data-src="https://s2.svgbox.net/social.svg?ic=github"
                        width="24"
                        height="24"
                        color="#b4befe"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        data-id="svg-loader_4"
                      >
                        <title>GitHub icon</title>
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/nicholasalvis/">
                      <svg
                        className="opacity-50 hover:opacity-100 transition-all hover:text-[#2090cb] hover:bg-white rounded-sm"
                        data-src="https://s2.svgbox.net/social.svg?ic=linkedin"
                        width="24"
                        height="24"
                        color="#b4befe"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        data-id="svg-loader_6"
                      >
                        <title>LinkedIn icon</title>
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default Home
