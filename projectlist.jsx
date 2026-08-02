import ProjectCard from "./ProjectCard";

function ProjectList({ projects, deleteProject }) {
  return (
    <div className="card">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          deleteProject={deleteProject}
        />
      ))}
    </div>
  );
}

export default ProjectList;