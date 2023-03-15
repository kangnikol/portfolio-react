import React from "react"
import Header from "./components/Header"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Project from "./pages/Project"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="mocha">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
