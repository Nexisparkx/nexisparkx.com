import React from 'react';
import { useInView } from 'react-intersection-observer';

const CompanyVision = () => {
    const sections = [
        {
            title: 'Vision',
            image: '/assets/images/vision.jpg',
            description:
                'Our vision is to create a world where innovation meets sustainability. We aim to lead the industry through technology and conscious choices.',
            delay: 0,
            animationInitial: '-translate-x-20 -translate-y-10',
        },
        {
            title: 'Objective',
            image: '/assets/images/objective.jpg',
            description:
                'Our objective is to consistently improve and innovate, ensuring the highest quality and value to our customers. We aim for excellence in all our ventures.',
            delay: 200,
            animationInitial: 'translate-x-20 translate-y-10',
        },
        {
            title: 'Aim',
            image: '/assets/images/aim.jpg',
            description:
                'Our aim is to create lasting relationships with our clients by providing exceptional services that exceed expectations and foster trust.',
            delay: 400,
            animationInitial: '-translate-x-10 translate-y-20',
        },
    ];

    return (
        <div className="relative py-10 min-h-screen bg-transparent text-white overflow-hidden">
            <h2 className="text-center font-lora text-4xl font-semibold mt-14 mb-8 bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent">
                 Vision, Objective, and Aim
            </h2>

            {/* Sections */}
            <div className="flex bg-transparent flex-wrap justify-center gap-8 px-4 md:gap-16 lg:gap-20">
                {sections.map((section, index) => {
                    const { ref, inView } = useInView({
                        triggerOnce: true,
                        threshold: 0.5,
                    });

                    return (
                        <div
                            ref={ref}
                            key={index}
                            className={`max-w-xs p-4 bg-transparent white-shadow border border-green-500 text-white rounded-lg shadow-lg transition-all duration-1000 ease-in-out delay-${section.delay} ${inView
                                    ? 'transform translate-x-0 translate-y-0 scale-100 opacity-100'
                                    : `transform ${section.animationInitial} scale-75 opacity-0`
                                }`}
                        >
                            <img
                                src={section.image}
                                alt={section.title}
                                className="w-full h-40 object-cover mb-4 rounded-lg"
                            />
                            <h3 className="text-lg font-bold text-green-300">{section.title}</h3>
                            <p className="text-gray-100">{section.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CompanyVision;
