import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// TechStack component defined within the same file
const TechStack = ({ icons }) => (
  <div className="flex space-x-2">
    {icons.map((icon, index) => (
      <div key={index} className="w-6 h-6 flex items-center justify-center bg-white rounded-full p-1">
        <Image
          src={`/icons/${icon}.svg`}
          alt={icon}
          width={16}
          height={16}
        />
      </div>
    ))}
  </div>
);

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "My Portfolio",
      description: "My personal portfolio ",
      techStack: ['react', 'nextjs', 'tailwindcss', 'node'],
      imageSrc: "/Images/proj1.jpg",
      githubUrl: "https://github.com/0xfortes/Personal-CV"
    },

    {
      title: "RDgdp",
      description: "Countries R&D Investment as a Percentage of GDP",
      techStack: ['react', 'django', 'postg'],
      imageSrc: "/Images/proj2.jpg",
      githubUrl: "https://github.com/0xfortes/R-Dgdp"
    },
    {
      title: "Odin Project",
      description: "Projects built while doing Odin Project Web Dev Course ",
      techStack: ['html5', 'css', 'js', 'node'],
      imageSrc: "/Images/proj3.jpg",
      githubUrl: "https://github.com/0xfortes/Odin-Curriculum"
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold mb-8 text-center">projects.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <Link href={project.githubUrl} key={index} target="_blank" rel="noopener noreferrer">
              <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-3 bg-gray-800">
                  <TechStack icons={project.techStack} />
                </div>
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  width={400}
                  height={225}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {!showAll && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="bg-transparent text-white font-bold py-2 px-4 rounded border border-white border-opacity-50 transition duration-300 ease-in-out hover:bg-white hover:bg-opacity-10"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
