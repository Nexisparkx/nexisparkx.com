import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const projectData = [
        {
            title: "Project 1",
            description: "Description of Project 1",
            image: "/assets/images/project1.jpg",
        },
        {
            title: "Project 2",
            description: "Description of Project 2",
            image: "/assets/images/project2.jpg",
        },
        {
            title: "Project 3",
            description: "Description of Project 3",
            image: "/assets/images/project3.jpg",
        },
        {
            title: "Project 4",
            description: "Description of Project 4",
            image: "/assets/images/project3.jpg",
        },
    ];

    return (
        <section className="px-6 py-10 bg-black">
            <h2 className="text-center text-4xl mb-10 font-lora font-bold bg-gradient-to-r from-green-950 to-gray-50 bg-clip-text text-transparent">
                Our Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {projectData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
