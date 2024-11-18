import React, { useState, useEffect } from 'react';

const LandingPage = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => setScrolled(window.scrollY > 300);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const cards = [
        { title: "Believe", image: "/assets/images/believe.jpg" },
        { title: "Achieve", image: "/assets/images/achieve.jpg" },
        { title: "Inspire", image: "/assets/images/inspire.jpg" },
    ];

    return (
        <div className="bg-black mt-28">
            {/* Heading */}
            <h1 className="text-center text-4xl font-lora font-bold bg-gradient-to-r from-green-950 to-gray-50 bg-clip-text text-transparent mb-12">
                Believe, Achieve & Inspire
            </h1>

            {/* Cards */}
            <div className="flex justify-center  gap-5 flex-wrap">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`p-4 bg-transparent white-shadow1 border border-green-500 rounded-lg transform transition-transform duration-500 ease-in-out hover:scale-105 ${scrolled ? 'translate-y-4' : ''}`}
                        style={{ minWidth: '300px', maxWidth: '350px' }}
                    >
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-64 object-cover rounded-t-lg mb-4"
                        />
                        <div className="mt-4">
                            <h3 className="text-center text-xl font-bold text-green-300">{card.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LandingPage;
