
import React from 'react';
import type { ExperienceItem, ProjectItem } from './types';

export const personalInfo = {
  name: "Asish Bag",
  title: "Data Analytics Student",
  summary: "Data analytics student skilled in statistical analysis, data visualization, and business intelligence. Experience with data-driven solutions, customer support optimization, and sales analytics. Proficient in Python, SQL, Tableau, AWS, and big data technologies.",
  contact: {
    email: "bagasish1@gmail.com",
    phone: "9775579469",
    linkedin: "https://linkedin.com/in/asish-bag-b6ba7a1b8",
    github: "https://github.com/Isshue22",
  }
};

export const experiences: ExperienceItem[] = [
  {
    company: "TCS iON, Kolkata",
    location: "Internship",
    role: "TCS iON RIO-210: Build a Classification Model for Drug Trials Dataset",
    period: "Feb 2025 - Jun 2025",
    description: [
      "Developed cloud big data solutions with, increasing processing speed by 40%.",
      "Led initiatives that improved client satisfaction scores by 90% annually.",
      "Built predictive models, amplifying sales by 25%."
    ],
  },
  {
    company: "TCS iON, Kolkata",
    location: "Internship",
    role: "Data Analytics Intern",
    period: "Jan 2024 - Jan 2025",
    description: [
      "Built analytics strategies using SQL/Tableau, increasing reporting efficiency by 40%.",
      "Collaborated to launch 5 new services, boosting customer engagement by 25%.",
      "Improved team/product development by 30% through cross-functional initiatives."
    ],
  },
  {
    company: "Globiva Pvt Ltd, Kolkata",
    location: "Full-time",
    role: "Customer Support Executive",
    period: "Apr 2021 - Nov 2021",
    description: [
      "Optimized datasets and integrated new features, increasing data-driven decision making by 25%.",
      "Developed reporting tools that reduced support costs by 15%.",
      "Implemented best practices, improving customer response times by 20%."
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Zomato Data Analysis",
    period: "Mar 2025 - Jun 2025",
    description: [
      "Analyzed Zomato's restaurant dataset using Python and SQL, improving business decision efficiency by 25%.",
      "Enhanced reporting accuracy by 40% and built predictive models to forecast customer preferences.",
      "Boosted targeted marketing effectiveness by 30%."
    ],
    imageUrl: "https://picsum.photos/seed/analytics/500/300",
    githubUrl: "https://github.com/Isshue22/zomato-data-analysis",
    tags: ["Python", "SQL", "Data Analysis", "Predictive Modeling"]
  },
  {
    title: "Flipkart Data Analysis Using Python",
    description: [
      "Performed cleaning, transformation, and analysis of Flipkart sales data using pandas and data visualization tools.",
      "Identified sales patterns, trends, and optimized reporting for actionable business recommendations."
    ],
    imageUrl: "https://picsum.photos/seed/ecommerce/500/300",
    githubUrl: "https://github.com/Isshue22/flipkart-data-analysis",
    tags: ["Python", "Pandas", "Data Visualization", "ETL"]
  },
  {
    title: "Tic Tac Toe Game (Frontend Project)",
    description: [
      "Developed a responsive Tic Tac Toe game with HTML, CSS, JavaScript.",
      "Designed UI/UX, logic for win/draw, and replay functionality for a smooth gaming experience."
    ],
    imageUrl: "https://picsum.photos/seed/gaming/500/300",
    githubUrl: "https://github.com/Isshue22/tic-tac-toe-game",
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"]
  }
];

export const skills = {
  "Programming & Databases": ["Python", "SQL", "Pandas", "Numpy"],
  "BI & Visualization": ["Tableau", "Matplotlib", "Seaborn", "Reporting"],
  "Machine Learning": ["Scikit-learn", "Predictive Modeling", "Artificial Intelligence"],
  "Data Engineering": ["Big Data", "Data Cleaning", "SPSS", "AWS"],
  "Professional": ["Customer Support Optimization", "Team Collaboration"]
};

// --- ICON COMPONENTS ---

export const GitHubIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
);

export const LinkedInIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
);

export const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" /><path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" /></svg>
);

export const PythonIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Python</title><path d="M11.236 1.6l.304.092c.32.098.635.22.94.37.47.232.906.524 1.295.87.39.345.72.75.978 1.196.258.445.44.93.538 1.44.098.508.122.976.122 1.44v1c0 .05-.002.1-.005.15l-.004.05v.3c.002.06.004.12.004.18v.28c0 .464-.024.932-.073 1.44a4.44 4.44 0 0 1-.538 1.44c-.258.446-.588.851-.978 1.196-.39.346-.825.638-1.295.87-.305.15-.62.272-.94.37l-.304.092H8.342l-.304-.092a4.735 4.735 0 0 1-.94-.37c-.47-.232-.906-.524-1.295-.87-.39-.345-.72-.75-.978-1.196a4.44 4.44 0 0 1-.538-1.44c-.05-.508-.073-1.012-.073-1.476v-2c0-.05.002-.1.005-.15l.004-.05v-.3c-.002-.06-.004-.12-.004-.18v-.28c0-.464.024-.932.073-1.44.1-.51.28-1 .538-1.44.258-.446.588-.851.978-1.196.39-.346.825-.638 1.295-.87.305-.15.62-.272.94-.37l.304-.092h2.894zm.914 1.05H8.43l-.224.068a3.67 3.67 0 0 0-.702.278c-.356.176-.686.4-.98.662-.293.262-.54.56-.734.894-.194.333-.33.69-.408 1.06-.078.37-.11.75-.122 1.12v1.3H12v-4zm-4.8 5.7h-2.1v2.8c0 .37.044.75.122 1.12.078.37.214.727.408 1.06.194.334.44.632.734.894.294.262.624.486.98.662.236.116.48.21.702.278l.224.068h2.918v-4H7.35zm5.55 5.25h2.894l.224-.068c.222-.068.466-.162.702-.278.356-.176.686-.4.98-.662.293-.262.54-.56.734-.894.194-.333.33-.69.408-1.06.078-.37.11-.75.122-1.12v-1.3H12v4zm4.8-5.7h2.1v-2.8c0-.37-.044-.75-.122-1.12a3.42 3.42 0 0 0-.408-1.06 2.89 2.89 0 0 0-.734-.894 3.73 3.73 0 0 0-.98-.662 3.67 3.67 0 0 0-.702-.278l-.224-.068H12v4h4.8zM11 11h2v2h-2v-2zM8 8h2v2H8V8zm8 8h-2v-2h2v2z"/></svg>;

export const SqlIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>SQL</title><path d="M5.56.72A.55.55 0 0 0 5 .55H3.14a.55.55 0 0 0-.55.55v21.8c0 .3.25.55.55.55h1.86c.3 0 .55-.25.55-.55V.72zM12 .55H8.3v22.9h3.7c4.2 0 7.46-2.58 7.46-8.24v-6.42C19.46 3.13 16.2.55 12 .55zm4.8 14.28c0 3.2-1.74 5.4-4.8 5.4H10V3.76h2c3.06 0 4.8 2.2 4.8 5.4v5.67z"/></svg>;

export const TableauIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Tableau</title><path d="M11.33.4H3.05v8.28h8.28V.4zM20.95.4h-8.28v8.28h8.28V.4zM11.33 15.32H3.05v8.28h8.28v-8.28zm9.62 0h-8.28v8.28h8.28v-8.28z"/></svg>;

export const ReactIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>React</title><path d="M12.001 2.002c-5.522 0-10 4.477-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2.88-5.333c-.38.016-.74.15-1.04.38-.52.41-.83 1.04-.83 1.71 0 .61.27 1.17.71 1.57.47.41 1.11.64 1.78.61 1.3-.04 2.39-1.12 2.39-2.42s-1.08-2.43-2.38-2.42zm5.76 0c-1.3 0-2.38 1.09-2.38 2.42s1.08 2.42 2.38 2.42c.67.03 1.31-.2 1.78-.61.44-.4.71-.96.71-1.57 0-.67-.31-1.3-.83-1.71-.3-.23-.66-.36-1.04-.38l-.01.03zm-2.88-5.877c-2.65 0-4.8 2.15-4.8 4.8s2.15 4.8 4.8 4.8 4.8-2.15 4.8-4.8-2.15-4.8-4.8-4.8zm0 7.6c-1.54 0-2.8-1.26-2.8-2.8s1.26-2.8 2.8-2.8 2.8 1.26 2.8 2.8-1.26 2.8-2.8 2.8zm-4.32-2.18c.34-.09.68-.14 1.04-.14.28 0 .55.03.81.09-.34 1.48-1.59 2.55-3.08 2.55-1.09 0-2.06-.56-2.6-1.42.36-.61.95-1.05 1.66-1.22l.17.14zm8.64 0c.71.17 1.3.61 1.66 1.22-.54.86-1.51 1.42-2.6 1.42-1.49 0-2.74-1.07-3.08-2.55.26-.06.53-.09.81-.09.36 0 .7.05 1.04.14l.17-.14z"/></svg>;

export const BrainIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 21.75l-.648-1.188a2.25 2.25 0 01-1.423-1.423L13.5 18.75l1.188-.648a2.25 2.25 0 011.423-1.423L17.25 15l.648 1.188a2.25 2.25 0 011.423 1.423L20.25 18.75l-1.188.648a2.25 2.25 0 01-1.423 1.423z" /></svg>;
