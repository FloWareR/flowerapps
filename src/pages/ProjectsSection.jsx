function ProjectsSection() {
  const projects = [
    { name: 'Project 1', description: 'A backend system for...', link: 'https://github.com/...' },
    { name: 'GameDev 1', description: 'A game developed using...', link: 'https://github.com/...' },
  ];

  return (
    <>
      <div className="text-center px-4">
        <h2 className="text-3xl font-semibold text-gray-800">My Projects</h2>
        <ul className="mt-8 space-y-6">
          {projects.map((project, index) => (
            <li key={index} className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800">{project.name}</h3>
              <p className="text-lg text-gray-600 mt-2">{project.description}</p>
              <a href={project.link} className="text-blue-500 mt-4 block" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProjectsSection
