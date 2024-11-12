export default function ProjectCard({ project }) {
    return (
      <div className="border p-4 rounded-lg">
        <h3 className="text-xl font-bold">{project.name}</h3>
        <p className="mt-2">{project.description}</p>
        <div className="mt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            View on GitHub
          </a>
        </div>
      </div>
    );
  }