// src/components/CompanyStats.js
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CompanyStats = () => {
    const { ref: statsRef, inView: statsInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const stats = [
        { label: 'Work Done', count: 100, icon: '👨‍💼' },
        { label: 'Happy Customers', count: 1922, icon: '😊' },
        { label: 'P', count: 435, icon: '✅' },
        { label: 'Offices Worldwide', count: 615, icon: '🌍' },
    ];

    return (
        <div className="py-10 bg-transparent  text-white">
            <h2 className="text-center font-lora text-4xl bg-gradient-to-r from-green-500 to-teal-400 font-bold bg-clip-text text-transparent mb-8">Our Assurance</h2>
            <div
                ref={statsRef}
                className="container  bg-transparent mx-auto flex flex-wrap justify-center gap-8 px-4"
            >
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`w-60 p-6 bg-white rounded-lg bg-transparent shadow-lg text-center transition-transform duration-700 hover:scale-110 ${statsInView ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'
                            }`}
                    >
                        <div className="bg-transparent text-5xl mb-4">{stat.icon}</div>
                        <h3 className="bg-transparent text-xl font-semibold text-green-800">
                            <CountUp
                                start={0}
                                end={statsInView ? stat.count : 0}
                                duration={2.5}
                                delay={0.5}
                            />
                        </h3>
                        <p className="text-gray-700 mt-2">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompanyStats;
