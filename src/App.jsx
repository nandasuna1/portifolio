import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import './i18n';
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import NewNavbar from "./component/NewNavbar";

function App() {
  return (
    <Router>
      <NewNavbar/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/notFound" element={<NotFound />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
