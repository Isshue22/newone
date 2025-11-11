
import React from 'react';
import { personalInfo, LinkedInIcon, GitHubIcon, EmailIcon } from '../constants';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 md:py-28">
            <div className="container mx-auto px-4 text-center">
                 <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    Get In Touch
                </h2>
                <p className="max-w-2xl mx-auto text-gray-400 mb-12">
                    I'm currently seeking new opportunities and would love to hear from you. Whether you have a question or just want to say hi, feel free to reach out!
                </p>

                <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
                    <a href={`mailto:${personalInfo.contact.email}`} className="flex items-center gap-3 text-lg text-gray-300 hover:text-blue-400 transition-colors">
                        <EmailIcon />
                        <span>{personalInfo.contact.email}</span>
                    </a>
                    <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg text-gray-300 hover:text-blue-400 transition-colors">
                        <LinkedInIcon />
                        <span>LinkedIn</span>
                    </a>
                    <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg text-gray-300 hover:text-blue-400 transition-colors">
                        <GitHubIcon />
                        <span>GitHub</span>
                    </a>
                </div>
                
                <a href={`mailto:${personalInfo.contact.email}`} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-10 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105 inline-block text-lg">
                    Say Hello
                </a>
            </div>
        </section>
    );
};

export default Contact;
