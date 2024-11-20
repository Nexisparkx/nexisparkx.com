import React, { useState, useEffect } from 'react';

// Reusable Card Component
const Card = ({ title, image, scrolled }) => (
    <div
        className={`p-5 bg-black border border-gray-700 rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105 ${
            scrolled ? 'translate-y-2' : ''
        }`}
        style={{ minWidth: '280px', maxWidth: '320px' }}
    >
        <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h3 className="text-center text-2xl font-semibold text-white">
            {title}
        </h3>
    </div>
);

const LandingPage = () => {
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll animation
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 300);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const cards = [
        { title: 'Believe', image: '/assets/images/believe.jpg' },
        { title: 'Achieve', image: '/assets/images/achieve.jpg' },
        { title: 'Inspire', image: '/assets/images/inspire.jpg' },
    ];

    return (
        <div className="bg-gradient-to-b from-gray-900 via-black to-gray-950 min-h-screen flex flex-col justify-center items-center py-12 px-6">
            {/* Heading Section */}
            <header className="text-center mb-16">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-4">
                    Believe, Achieve & Inspire
                </h1>
                <p className="text-lg text-gray-400 max-w-xl mx-auto">
                    Together, we transform challenges into opportunities and ideas into reality. Welcome to the future of innovation with us.
                </p>
            </header>

            {/* Cards Section */}
            <div className="flex flex-wrap justify-center gap-6">
                {cards.map((card, index) => (
                    <Card key={index} title={card.title} image={card.image} scrolled={scrolled} />
                ))}
            </div>
        </div>
    );
};

export default LandingPage;
