import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { LazyMotion, domAnimation } from "framer-motion"
import Header from "./components/Header"
import Home from "./pages/Home"
import Footer from "./components/Footer"

const App = () => {
  return (
    <Router>
      <LazyMotion features={domAnimation}>
        <Header />
         <Home />
        <Footer />
      </LazyMotion>
    </Router>
  )
}

export default App
