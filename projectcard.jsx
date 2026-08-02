function ProjectCard({ project, deleteProject }) {
  return (
    <div className="project">
      <button
        className="delete"
        onClick={() => deleteProject(project.id)}
      >
        ✖️
      </button>

      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;