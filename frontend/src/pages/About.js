import React, { useState, useEffect, useMemo } from "react";
import SkillTag from "../components/SkillTag";

function About() {
  // Expanded skills list with categories
  const allSkills = useMemo(() => [
    { name: "JavaScript", category: "Frontend" },
    { name: "Python", category: "Backend" },
    { name: "PHP", category: "Backend" },
    { name: "SQL", category: "Database" },
    { name: "R", category: "Data Science" },
    { name: "Java", category: "Backend" },
    { name: "C/C++", category: "Systems" },
    { name: "C#", category: "Backend" },
    { name: "HTML5", category: "Frontend" },
    { name: "CSS3", category: "Frontend" },
    { name: "VS Code", category: "Developer Tools" },
    { name: "Git", category: "Developer Tools" },
    { name: "GitHub", category: "Developer Tools" },
    { name: "Firebase", category: "Cloud" },
    { name: "Android Studio", category: "Mobile" },
    { name: "Unity", category: "Game Development" },
    { name: "Jupyter Notebook", category: "Data Science" },
    { name: "PyCharm", category: "Developer Tools" },
    { name: "Google Cloud", category: "Cloud" },
    { name: "MySQL", category: "Database" },
    { name: "React", category: "Frontend" },
    { name: "Bootstrap", category: "Frontend" },
    { name: "Pandas", category: "Data Science" },
    { name: "NumPy", category: "Data Science" },
    { name: "TensorFlow", category: "Machine Learning" },
    { name: "Scikit-learn", category: "Machine Learning" },
    { name: "Matplotlib", category: "Data Science" },
    { name: ".NET", category: "Backend" }
  ], []);

  // Get unique categories for filter buttons
  const categories = [...new Set(allSkills.map(skill => skill.category))];

  // State for search term and selected category
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredSkills, setFilteredSkills] = useState(allSkills);

  // Filter skills based on search term and category
  useEffect(() => {
    const results = allSkills.filter(skill => {
      const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || skill.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    
    setFilteredSkills(results);
  }, [searchTerm, selectedCategory, allSkills]);

  // Group skills by category for display
  const groupedSkills = {};
  filteredSkills.forEach(skill => {
    if (!groupedSkills[skill.category]) {
      groupedSkills[skill.category] = [];
    }
    groupedSkills[skill.category].push(skill);
  });

  return (
    <main className="container my-5">
      <h2 className="section-title">About Me</h2>
      <div className="row">
        <div className="col-lg-8">
          <p>
            I am a Bachelor of Computer Science student at Dalhousie University
            (Sep 2021 – Aug 2025). My coursework and certificates reflect my
            strong interest in Data Science, Artificial Intelligence, Web &
            Mobile Development, and Cyber Security.
          </p>

          <h3 className="mt-4">Education</h3>
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Dalhousie University, Halifax, NS</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Bachelor of Computer Science, 2021 – 2025
              </h6>
              <p className="card-text">Certificates in:</p>
              <ul>
                <li>Data Science</li>
                <li>Artificial Intelligence and Intelligent Systems</li>
                <li>Web and Mobile Development</li>
                <li>Communication Technologies and Cyber Security</li>
              </ul>
            </div>
          </div>

          <h3 className="mt-4">Relevant Coursework</h3>
          <div className="row mb-4">
            <div className="col-md-6">
              <ul>
                <li>Process of Data Science</li>
                <li>Data Mining/Warehousing</li>
                <li>Natural Language Processing</li>
                <li>Reinforcement Learning</li>
                <li>Statistical Learning with R</li>
                <li>Advanced Web Services</li>
                <li>Web-Centric Computing</li>
                <li>Mobile Computing</li>
                <li>Data Visualization</li>
                <li>Intro to Server Side Scripting</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li>Foundations of Machine Learning</li>
                <li>Designing User Interfaces</li>
                <li>Operating Systems</li>
                <li>Programming Languages</li>
                <li>Network Security</li>
                <li>Systems Programming</li>
                <li>Algorithms I</li>
                <li>Intro Data Mining with R</li>
                <li>Theory of Computer Science</li>
                <li>Workplace Comm for CS</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card mb-4">
            <div className="card-body">
              <h3 className="card-title mb-3">Technical Skills</h3>
              
              {/* Skills filter */}
              <div className="skills-filter mb-4">
                <h5 className="mb-2">Filter Skills</h5>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Search skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                
                <div className="d-flex flex-wrap mb-3">
                  <button
                    className={`btn btn-sm me-1 mb-1 ${
                      selectedCategory === "All" ? "btn-primary" : "btn-outline-primary"
                    }`}
                    onClick={() => setSelectedCategory("All")}
                  >
                    All
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`btn btn-sm me-1 mb-1 ${
                        selectedCategory === category ? "btn-primary" : "btn-outline-primary"
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Display filtered skills by category */}
              {Object.keys(groupedSkills).length === 0 ? (
                <p className="text-muted">No skills match your search.</p>
              ) : (
                Object.keys(groupedSkills).map((category) => (
                  <div key={category} className="mb-3">
                    <h5 className="mt-3 mb-2">{category}</h5>
                    <div className="mb-3">
                      {groupedSkills[category].map((skill) => (
                        <SkillTag key={skill.name} skill={skill.name} />
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
