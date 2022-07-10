import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Project from "./routes/projects";
import About from "./routes/about";
import Form from "./routes/form";
import Resume from "./routes/resume";
import "bootstrap/dist/css/bootstrap.min.css";

// ReactDOM.render(<App />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="projects" element={<Project />} />
        <Route path="about" element={<About />} />
        <Route path="form" element={<Form />} />
        <Route path="resume" element={<Resume />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
