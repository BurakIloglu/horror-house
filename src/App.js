import Navbar from "./Navbar.js";
import Home from "./pages/Home.js";
import Administration from "./pages/Administration.js";
import Gallery from "./pages/Gallery.js";
import Tickets from "./pages/Tickets.js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/tickets" element={<Tickets />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
