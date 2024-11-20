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
        <section className="relative py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
            <div className="container mx-auto w-[90%] px-6 flex flex-col lg:flex-row items-center gap-12">
                {/* Left Section: Image */}
                <div
                    className={`w-40 sm:w-56 md:w-72 lg:w-80 h-40 sm:h-56 md:h-72 lg:h-80 transition-all duration-1000 transform overflow-hidden rounded-xl shadow-lg ${inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                        }`}
                >
                    <img
                        src="https://images.stockcake.com/public/6/5/e/65eaa80d-3542-4287-8b3c-d5c10a7f8b5f_large/collaborative-team-meeting-stockcake.jpg" // Replace with your image path
                        alt="Success"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Middle Section: Quote */}
                <div
                    ref={ref}
                    className={`flex-1 max-w-full lg:max-w-2xl text-center lg:text-left transition-all duration-1000 transform ${inView ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
                        }`}
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins leading-tight bg-gradient-to-r from-green-400 via-blue-500 to-teal-500 bg-clip-text text-transparent mb-6">
                        "Together, we transform challenges into opportunities, and ideas into reality."
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl text-gray-300">
                        Empowering innovation with cutting-edge solutions for web, mobile, and AI technologies.
                    </p>
                </div>

                {/* Right Section: Images */}
                <div className="flex flex-col gap-6">
                    <div
                        className={`w-32 sm:w-40 md:w-48 h-24 sm:h-32 md:h-40 transition-all duration-1000 transform overflow-hidden rounded-lg shadow-md ${inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                            }`}
                    >
                        <img
                            src="https://img.freepik.com/free-vector/business-startup-success-symbolic-poster_1284-20631.jpg?t=st=1732043383~exp=1732046983~hmac=c8c8ed3093929a4341d90acc04dec18237ee902aa8f8f8611aeb918903463b53&w=900"
                            alt="Innovation"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div
                        className={`w-32 sm:w-40 md:w-48 h-24 sm:h-32 md:h-40 transition-all duration-1000 transform overflow-hidden rounded-lg shadow-md ${inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                            }`}
                    >
                        <img
                            src="/assets/images/hard.jpg"
                            alt="Teamwork"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-tr from-green-500 via-blue-600 to-teal-400 opacity-20 rounded-full blur-3xl transform -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-purple-600 via-indigo-500 to-pink-400 opacity-20 rounded-full blur-3xl transform translate-x-16 translate-y-16"></div>
        </section>
    );
};

export default InspirationalQuote;
