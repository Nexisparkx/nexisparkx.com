import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CompanyStats = () => {
    const { ref: statsRef, inView: statsInView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const stats = [
        { label: "Projects Completed", count: 20, icon: "📈" },
        { label: "Happy Clients", count: 15, icon: "😊" },
        { label: "Awards Won", count: 0, icon: "🏆" },
        { label: "Global Offices", count: 1, icon: "🌍" },
    ];

    return (
        <div className="py-16 bg-gray-900 text-white">
            {/* Section Title */}
            <h2 className="text-center text-4xl sm:text-5xl font-bold font-lora text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-10">
             Achievements
            </h2>

            {/* Stats Container */}
            <div
                ref={statsRef}
                className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 sm:px-12 lg:px-20"
            >
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center justify-center bg-gray-800 rounded-xl shadow-xl p-6 text-center transform transition-transform duration-500 hover:scale-105 ${
                            statsInView
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                        }`}
                    >
                        {/* Icon */}
                        <div className="text-5xl sm:text-6xl mb-4 text-blue-500">
                            {stat.icon}
                        </div>

                        {/* Count Animation */}
                        <h3 className="text-3xl sm:text-4xl font-bold text-white">
                            <CountUp
                                start={0}
                                end={statsInView ? stat.count : 0}
                                duration={2}
                                delay={0.3}
                            />
                        </h3>

                        {/* Label */}
                        <p className="text-lg sm:text-xl text-gray-300 mt-2">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompanyStats;