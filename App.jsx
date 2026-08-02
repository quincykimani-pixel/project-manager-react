import { useState, useEffect } from "react";
import "./App.css";
import AddProject from "./components/AddProject";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";

function App() {
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem("projects");
    return savedProjects ? JSON.parse(savedProjects) : [];
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  function addProject(project) {
    setProjects([
      ...projects,
      {
        id: Date.now(),
        ...project,
      },
    ]);
  }

  function deleteProject(id) {
    setProjects(projects.filter((project) => project.id !== id));
  }

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Personal Project Showcase App</h1>

      <AddProject addProject={addProject} />

      <SearchBar search={search} setSearch={setSearch} />

      <ProjectList
        projects={filteredProjects}
        deleteProject={deleteProject}
      />
    </div>
  );
}

export default App;