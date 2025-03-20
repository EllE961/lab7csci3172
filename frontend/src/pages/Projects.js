import React, { useState, useEffect } from "react";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        // Using axios to fetch from our backend API
        const response = await axios.get("http://localhost:3001/api/projects");
        setProjects(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError(err.message || "Failed to fetch projects");
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="container my-5 text-center">
        <h2 className="section-title">Projects</h2>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p>Loading projects...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container my-5">
        <h2 className="section-title">Projects</h2>
        <div className="alert alert-danger" role="alert">
          Error loading projects: {error}
          <button 
            className="btn btn-primary mt-3"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="container my-5">
      <h2 className="section-title">Projects</h2>
      <p className="mb-4">
        Below are some of my academic and personal projects that demonstrate my
        skills in data science, machine learning, and software development.
      </p>

      <div className="row">
        {projects.map((project) => (
          <div className="col-md-6 mb-4" key={project.id}>
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">{project.name}</h3>
                <h6 className="card-subtitle mb-1 text-muted">
                  {project.date}
                </h6>
                <p className="card-text small text-muted mb-2">
                  Author: {project.author}
                </p>
                <p className="card-text">{project.description}</p>
                <div className="mt-3">
                  <h6 className="mb-2">Technologies Used:</h6>
                  <div>
                    {project.languages.map((tech, index) => (
                      <span key={index} className="skill-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Projects;
