import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
    const navigate = useNavigate();
    const project = {
        title: "Exclusive Opportunity",
        description:
            "Join our initiative and become a part of something extraordinary. Register now to explore new horizons and unleash your potential.",
        image: "./././assets/workshop-logo1.jpg",
    };

    const handleNavigate = () => {
        window.scrollTo(0, 0); // Scroll to top
        navigate("/registration"); // Navigate to the registration page
    };

    return (
        <section className="px-4 py-8 bg-black flex justify-center items-center min-h-screen ">
            <div className="w-full max-w-4xl max-[650px]:max-w-[45%] bg-gray-900 border border-gray-700 rounded-lg shadow-lg overflow-hidden flex flex-col sm:flex-row">
                {/* Image Section */}
                <div className="flex justify-center sm:w-1/2">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full sm:w-auto h-48 sm:h-auto object-cover"
                    />
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col justify-center text-center sm:text-left sm:w-1/2">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
                        {project.title}
                    </h2>
                    <p className="text-gray-400 mb-6">
                        {project.description}
                    </p>
                    <div>
                        <button
                            onClick={handleNavigate}
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
