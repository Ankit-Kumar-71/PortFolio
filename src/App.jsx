import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import PortFolio from "./pages/PortFolio";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="min-h-screen bg-red-300 flex flex-col">
      <Router>
        <Navbar />
        <div className="container mx-auto p-4 mt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/portfolio" element={<PortFolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
      <Toaster />
    </div>
  );
}

export default App;
