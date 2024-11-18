import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const InspirationalQuote = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const [count, setCount] = useState(0);
    const targetCount = 100;

    // Count-Up Animation
    useEffect(() => {
        if (inView && count < targetCount) {
            const interval = setInterval(() => {
                setCount((prev) => {
                    if (prev >= targetCount) {
                        clearInterval(interval);
                        return targetCount;
                    }
                    return prev + 1;
                });
            }, 30);
            return () => clearInterval(interval);
        }
    }, [inView, count, targetCount]);

    return (
        <div className="relative py-12 bg-black text-white overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
                {/* Left Image */}
                <div
                    className={`w-32 white-shadow1 sm:w-48 md:w-56 lg:w-64 h-48 sm:h-64 md:h-72 lg:h-96 transform transition-transform duration-1000 ease-in-out ${inView ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                        }`}
                >
                    <img
                        src="/assets/images/success.jpg" // Replace with your image path
                        alt="Portrait"
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* Quote Section */}
                <div
                    ref={ref}
                    className={`flex-1 max-w-full bg-transparent lg:max-w-2xl p-4 md:p-6 rounded-lg shadow-lg transition-transform duration-1000 ease-in-out text-center lg:text-left ${inView ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-20 translate-y-10'
                        }`}
                >
                    <h1 className="text-2xl   bg-transparent sm:text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-4 bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent">
                        "Together, we transform challenges into opportunities, and ideas into reality"
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                        We’ve grown our network to empower dreams and deliver excellence.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start mt-6 sm:mt-8 gap-6 items-center">
                        <div>
                            <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-teal-400">{count}</p>
                            <p className="text-gray-400 text-sm sm:text-base">Milestones Achieved</p>
                        </div>
                        <div>
                            <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-green-400">100+</p>
                            <p className="text-gray-400 text-sm sm:text-base">Happy Clients</p>
                        </div>
                    </div>
                </div>

                {/* Right Image Containers */}
                <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
                    <div
                        className={`w-32 white-shadow1 sm:w-40 md:w-48 h-24 sm:h-32 md:h-40 transform transition-transform duration-1000 ease-in-out ${inView ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                            }`}
                    >
                        <img
                            src="/assets/images/progress.jpg" // Replace with your image path
                            alt="Progress"
                            className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                    </div>
                    <div
                        className={`w-32 white-shadow1 sm:w-40 md:w-48 h-24 sm:h-32 md:h-40 transform transition-transform duration-1000 ease-in-out ${inView ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                            }`}
                    >
                        <img
                            src="/assets/images/hard.jpg" // Replace with your image path
                            alt="Hard Work"
                            className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InspirationalQuote;
