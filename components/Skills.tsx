
import React from 'react';
import { skills } from '../constants';

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-20 md:py-28 bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    Technical Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, skillList]) => (
                        <div key={category} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 transition-all duration-300 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10">
                            <h3 className="text-xl font-semibold text-white mb-4">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skillList.map(skill => (
                                    <span key={skill} className="bg-gray-700 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
