import React from "react"
import ProjectCard from "../components/projectCard"
import "../assets/css/style2.css"

const Project = () => {
  const projectList = [
    {
      title: "Senja Solusi",
      desc: "A one-page website that tracks the accuracy of company headlines. The slogan 'WE BRING YOUR IDEAS TO LIFE' gives Senja good reasons to join the company with several projects, teams, and clients.",
      url: "https://senja.co.uk",
      imgUrl:
        "https://media.discordapp.net/attachments/917983285370572821/1027057256870727750/Screen_Shot_2022-09-08_at_16.14.11.webp",
    },
    {
      title: "Pintek",
      desc: "Pintek is a financial innovation company whose mission is to drive the transformation of education through financial service innovation and is committed to enabling the education ecosystem to develop sustainably.",
      url: "https://pintek.id",
      imgUrl:
        "https://media.discordapp.net/attachments/917983285370572821/1027057257327898744/Screen_Shot_2022-09-08_at_16.28.18.webp",
    },
    {
      title: "Nichol+ Hotstar",
      desc: "Nichol+ Hotstar is actually a website that duplicate the looks from Disney+ Hotstar, using React.JS and TailwindCSS. I trained to consume API from TmdbAPI.",
      url: "https://hotstar.kangnikol.xyz",
      imgUrl:
        "https://media.discordapp.net/attachments/917983285370572821/1027057257789280296/Screen_Shot_2022-09-26_at_15.54.02.webp",
    },
    {
      title: "Startpage",
      desc: "This Startpage is built with somebody else, using Rosé Pine Theme and hosted to Vercel. it searched to Gowogle engine",
      url: "https://startpage.kangnikol.xyz/",
      imgUrl:
        "https://media.discordapp.net/attachments/917983285370572821/1027058349486903347/Screen_Shot_2022-09-28_at_11.17.53.webp",
    },
  ]
  return (
    <div className="flex flex-col">
      <main className="flex-1 mt-12 max-w-5xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-lavender text-4xl font-black my-4 border-b border-overlay0 py-4">
            Projects!
          </h1>
        </div>
        <div className="mb-16 gap-8" id="projects">
          <p className="max-w-3xl mx-auto text-text">
            I believe it’s the best way to learn anything. You get full control
            over the creative side of programming. Here’s is a partial list of
            projects I have built over the last few years:
          </p>
          {projectList.map((e, i) => (
            <ProjectCard
              key={i}
              title={e.title}
              desc={e.desc}
              url={e.url}
              imgUrl={e.imgUrl}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Project
