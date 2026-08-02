import { useState } from "react";

function AddProject({ addProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !description) return;

    addProject({
      title,
      description,
    });

    setTitle("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit} className="card">
      <h2>Add Project</h2>

      <label>Title</label>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Description</label>

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <button>Add</button>
    </form>
  );
}

export default AddProject;