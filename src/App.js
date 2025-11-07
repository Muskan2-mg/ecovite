import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Template1 from "./components/Template1";
import Template2 from "./components/Template2";
import Template3 from "./components/Template3";
import Template4 from "./components/Template4";
import Template5 from "./components/Template5";
import Template6 from "./components/Template6";
import Template7 from "./components/Template7";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/template1" element={<Template1 />} />
        <Route path="/template2" element={<Template2 />} />
        <Route path="/template3" element={<Template3 />} />
        <Route path="/template4" element={<Template4 />} />
        <Route path="/template5" element={<Template5 />} />
<Route path="/template6" element={<Template6 />} />
        <Route path="/template7" element={<Template7 />} />
      </Routes>
    </Router>
  );
}

export default App;
