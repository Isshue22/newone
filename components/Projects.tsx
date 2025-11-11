
import React from 'react';
import { projects, GitHubIcon } from '../constants';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20 md:py-28 bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 flex flex-col group transition-all duration-300 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
                           <div className="relative h-48 w-full overflow-hidden">
                             <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                           </div>
                           <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm mb-4 flex-grow">
                                    {project.description.map((point, i) => <li key={i}>{point}</li>)}
                                </ul>
                                <div className="flex flex-wrap gap-2 mt-auto mb-4">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-semibold bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors self-start flex items-center gap-2">
                                    View on GitHub <div className="w-5 h-5"><GitHubIcon /></div>
                                </a>
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
