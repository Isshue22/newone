
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { personalInfo } from './constants';

const Section: React.FC<{id: string, title: string, children: React.ReactNode}> = ({id, title, children}) => (
    <section id={id} className="py-20 md:py-28">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                {title}
            </h2>
            {children}
        </div>
    </section>
);


const App: React.FC = () => {
    return (
        <div className="bg-gray-950 text-gray-200 min-h-screen font-sans leading-relaxed">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-gray-700/[0.2] z-0"></div>
            <div className="relative z-10">
                <Header />
                <main>
                    <Hero />
                    <Section id="about" title="About Me">
                        <p className="max-w-3xl mx-auto text-center text-gray-400 text-lg">
                           {personalInfo.summary}
                        </p>
                    </Section>
                    <Skills />
                    <Experience />
                    <Projects />
                    <Contact />
                </main>
                <footer className="text-center py-8 text-gray-500 border-t border-gray-800">
                    <p>&copy; {new Date().getFullYear()} Asish Bag. All Rights Reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default App;
