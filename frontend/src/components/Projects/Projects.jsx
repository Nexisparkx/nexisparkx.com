import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
    const navigate = useNavigate()
    const project = {
        title: "Exclusive Opportunity",
        description:
            "Join our initiative and become a part of something extraordinary. Register now to explore new horizons and unleash your potential.",
        image: "/assets/images/techInsight-poster.jpg",
    };

    return (
        <section className="px-6 py-10 bg-black flex justify-center items-center min-h-screen">
            <div className="w-full max-w-5xl bg-gray-900 border border-gray-700 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                {/* Image Section */}
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full md:w-[40%] h-60 md:h-auto object-cover"
                />

                {/* Content Section */}
                <div className="p-6 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center md:text-left">
                        {project.title}
                    </h2>
                    <p className="text-gray-400 mb-6 text-center md:text-left">
                        {project.description}
                    </p>
                    <div className="text-center md:text-left">
                        <button
                            onClick={() => navigate("/registration")}
                            className="px-6 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all duration-300"
                        >
                            Register Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
