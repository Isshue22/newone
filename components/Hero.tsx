
import React from 'react';
import { personalInfo, GitHubIcon, LinkedInIcon, EmailIcon, PythonIcon, SqlIcon, TableauIcon, ReactIcon, BrainIcon } from '../constants';

const Hero: React.FC = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
             <div className="absolute inset-0 -z-10 h-full w-full bg-gray-950 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px]"></div>
            <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                <div className="text-center lg:text-left lg:w-1/2">
                    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{personalInfo.name}</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">{personalInfo.title}</h2>
                    <p className="text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8">{personalInfo.summary.split('. Proficient')[0]}.</p>
                    <div className="flex items-center justify-center lg:justify-start space-x-4 mb-8">
                        <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2"><GitHubIcon /></a>
                        <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2"><LinkedInIcon /></a>
                        <a href={`mailto:${personalInfo.contact.email}`} className="text-gray-400 hover:text-white transition-colors p-2"><EmailIcon /></a>
                    </div>
                    <a href="#contact" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-105 inline-block">
                        Get In Touch
                    </a>
                </div>
                <div className="lg:w-1/2 flex items-center justify-center">
                    <div className="cube-container">
                        <div className="cube">
                            <div className="face front"><PythonIcon /></div>
                            <div className="face back"><SqlIcon/></div>
                            <div className="face right"><TableauIcon /></div>
                            <div className="face left"><ReactIcon /></div>
                            <div className="face top"><BrainIcon /></div>
                            <div className="face bottom"><GitHubIcon /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
