import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Cyber AI",
    description: "An AI project focused on deep learning.",
    github: "https://github.com/yourusername/cyber-ai"
  },
  {
    title: "Neuromatrix",
    description: "A futuristic UI framework.",
    github: "https://github.com/yourusername/neuromatrix"
  }
];

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-primary mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-secondary">{project.title}</h2>
            <p className="text-text">{project.description}</p>
            <a href={project.github} target="_blank" className="flex items-center mt-3 text-accent">
              <FaGithub className="mr-2" /> View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
