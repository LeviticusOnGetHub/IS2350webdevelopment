import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Home, About, Contact } from "./routertest";
import { Resume } from "./Resume";
import "./App.css";

function App() {
  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? "#007bff" : "#333",
    textDecoration: isActive ? "none" : "underline",
    fontWeight: isActive ? "bold" : "normal",
    padding: "5px 10px",
  });

  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" style={navLinkStyles}>
          Home
        </NavLink>{" "}
        |{" "}
        <NavLink to="/resume" style={navLinkStyles}>
          Resume
        </NavLink>{" "}
        |{" "}
        <NavLink to="/about" style={navLinkStyles}>
          About
        </NavLink>{" "}
        |{" "}
        <NavLink to="/contact" style={navLinkStyles}>
          Contact
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
