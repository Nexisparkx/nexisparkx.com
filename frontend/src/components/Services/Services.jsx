import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const ServiceData = [
        {
            title: "App Development",
            description: "Crafting innovative, user-friendly mobile apps tailored to your needs.",
            image: "/assets/images/app.jpg",
        },
        {
            title: "Web Development",
            description: "Building robust and responsive websites that drive success.",
            image: "/assets/images/web.jpg",
        },
        {
            title: "Ai/Ml Application",
            description: "Delivering intelligent, data-driven solutions for smarter businesses.",
            image: "/assets/images/ai-ml.jpg",
        },
        {
            title: "Service 4",
            description: "Description of Service 4",
            image: "/assets/images/Service3.jpg",
        },
    ];

    return (
        <section className="px-6 py-0 bg-black">
            <h2 className="text-center text-4xl mb-10 font-lora font-bold bg-gradient-to-r from-green-950 to-gray-50 bg-clip-text text-transparent">
                Our Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {ServiceData.map((Service, index) => (
                    <ServiceCard
                        key={index}
                        title={Service.title}
                        description={Service.description}
                        image={Service.image}
                    />
                ))}
            </div>
        </section>
    );
};

export default Services;
