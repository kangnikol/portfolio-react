import React from "react"
import ProjectCard from "../components/ProjectCard"
import "../assets/css/style2.css"

const Project = () => {
  const projectList = [
    {
      title: "Senja Solusi",
      desc: "A one-page website that tracks the accuracy of company headlines. The slogan 'WE BRING YOUR IDEAS TO LIFE' gives Senja good reasons to join the company with several projects, teams, and clients.",
      url: "https://senja.co.uk",
      imgUrl:
        "https://media.discordapp.net/attachments/917983285370572821/1027057256870727750/Screen_Shot_2022-09-08_at_16.14.11.webp?ex=6651589b&is=6650071b&hm=ff4b43c3053ac6059ba2fa58aea9087ddbfa6accfd973716670c26d9b300a64a&=&format=webp&width=1300&height=662",
    },
    {
      title: "Pintek",
      desc: "Pintek is a financial innovation company whose mission is to drive the transformation of education through financial service innovation and is committed to enabling the education ecosystem to develop sustainably.",
      url: "https://pintek.id",
      imgUrl:
        "https://media.discordapp.net/attachments/917983285370572821/1027057257327898744/Screen_Shot_2022-09-08_at_16.28.18.webp?ex=6651589b&is=6650071b&hm=2964164b7baf37a65a372397ce3dba31d1501f610c7fea47e95dd510c5c4537d&=&format=webp&width=1300&height=662",
    },
    {
      title: "Ayoconnect",
      desc: "Established in 2016, Ayoconnect is now Southeast Asia's largest Open Finance API platform. We provide full-stack API solutions, powering the leading companies of today and the tech unicorns of tomorrow.",
      url: "https://ayoconnect.com/",
      imgUrl:
        "https://media.discordapp.net/attachments/917983285370572821/1087197360100225104/Screenshot_2023-03-20_091039.webp?ex=6651f231&is=6650a0b1&hm=af8f3a0fa33c9bce8c84f76f92cf2a93042378690300877359c98535330f7359&=&format=webp&width=1426&height=661",
    },
    {
      title: "Nichol+ Hotstar",
      desc: "Nichol+ Hotstar is actually a website that duplicate the looks from Disney+ Hotstar, using React.JS and TailwindCSS. I trained to consume API from TmdbAPI.",
      url: "https://nichol-hotstar.vercel.app",
      imgUrl:
        "https://media.discordapp.net/attachments/917983285370572821/1027057257789280296/Screen_Shot_2022-09-26_at_15.54.02.webp?ex=6651589c&is=6650071c&hm=a38b48e4dcc827a1a62d5ad2cf349667f78e50ba42b868de388c856b14117e0c&=&format=webp&width=1305&height=662",
    },
    {
      title: "Weather App",
      desc: "Weather App that using OpenWeatherMap API and ReactJS with TailwindCSS. Also using Catppuccin's 'Mocha' Theme :3",
      url: "https://weather-kangnikol.vercel.app/",
      imgUrl:
        "https://media.discordapp.net/attachments/917983285370572821/1087196661350150254/image.png?ex=6651f18b&is=6650a00b&hm=7e90ce9fcfbab4c19d086190b87d85758b98b4b0bd570a1fb9be64455fe16662&=&format=webp&quality=lossless&width=1428&height=662",
    },
    // {
    //   title: "Startpage (No longer used)",
    //   desc: "This Startpage is built with somebody else, using Rosé Pine Theme and hosted to Vercel. it searched to Gowogle engine",
    //   url: "https://startpage-kangnikol.vercel.app/",
    //   imgUrl:
    //     "https://media.discordapp.net/attachments/917983285370572821/1027058349486903347/Screen_Shot_2022-09-28_at_11.17.53.webp",
    // },
  ]
  return (
    <div className="flex flex-col">
      <main className="flex-1 mt-12 px-4 max-w-5xl mx-auto">
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
