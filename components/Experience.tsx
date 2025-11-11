
import React from 'react';
import { experiences } from '../constants';
import type { ExperienceItem } from '../types';

const ExperienceCard: React.FC<{ item: ExperienceItem; index: number }> = ({ item, index }) => {
    const isLeft = index % 2 === 0;
    return (
        <div className={`mb-8 flex justify-between items-center w-full ${isLeft ? 'flex-row-reverse' : ''} md:flex-row`}>
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white"></h1>
            </div>
            <div className={`order-1 bg-gray-800/50 rounded-lg shadow-xl w-full md:w-5/12 p-6 border border-gray-700 transition-all duration-300 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/10 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                <p className="mb-1 text-sm text-blue-400 font-semibold">{item.period}</p>
                <h3 className="mb-2 font-bold text-white text-xl">{item.role}</h3>
                <p className="text-sm font-medium text-gray-400 mb-4">{item.company} | {item.location}</p>
                <ul className={`list-disc list-inside text-gray-400 space-y-2 text-sm ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    {item.description.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
            </div>
        </div>
    );
};

// Simplified mobile-first card
const MobileExperienceCard: React.FC<{ item: ExperienceItem; }> = ({ item }) => (
    <div className="mb-8 pl-8 relative border-l-2 border-gray-700">
         <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full absolute -left-4 top-0"></div>
         <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <p className="mb-1 text-sm text-blue-400 font-semibold">{item.period}</p>
                <h3 className="mb-2 font-bold text-white text-xl">{item.role}</h3>
                <p className="text-sm font-medium text-gray-400 mb-4">{item.company} | {item.location}</p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                    {item.description.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
         </div>
    </div>
);

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-20 md:py-28">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    Work Experience & Internships
                </h2>

                {/* Desktop Timeline */}
                <div className="hidden md:block relative wrap overflow-hidden p-10 h-full timeline">
                    {experiences.map((item, index) => (
                        <ExperienceCard key={index} item={item} index={index} />
                    ))}
                </div>

                {/* Mobile Timeline */}
                 <div className="md:hidden">
                    {experiences.map((item, index) => (
                        <MobileExperienceCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
