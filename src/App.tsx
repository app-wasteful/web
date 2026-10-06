import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Demo from "./pages/Demo"
import About from "./pages/About"
import Privacy from "./pages/Privacy"
import Terms from "./pages/Terms"
import Footer from "./components/Footer"


export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  )
}