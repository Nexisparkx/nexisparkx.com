const HeroSection = () => {
    return (
        <div className="relative flex items-center justify-center min-h-screen w-full bg-black overflow-hidden">
            {/* Background Image with Subtle Animation */}
            <div
                className="absolute inset-0 bg-cover bg-center animate-fadeInSlow"
                style={{
                    // backgroundImage: url('/assets/images/hero-background.jpg'),
                }}
            ></div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-90"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-6 sm:px-12 max-w-6xl">
                {/* Logo */}
                {/* <img
                    src="/assets/images/logo.png"
                    alt="NexisparkX Logo"
                    className="mx-auto w-24 h-24 mb-8"
                /> */}

                {/* Heading */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-wide animate-slideUp">
                    Powering Innovation with <span className="text-blue-500">NexisparkX</span>
                </h1>

                {/* Subheading */}
                <p className="mt-6 text-xl sm:text-2xl lg:text-3xl text-gray-300 leading-relaxed animate-fadeInSlow">
                    Delivering state-of-the-art solutions to bring your vision to life.
                </p>

                {/* CTA Buttons */}
                <div className="mt-10 flex flex-wrap justify-center space-x-4">
                    <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition transform hover:scale-105">
                        Get Started
                    </button>
                    <button className="px-8 py-4 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-full shadow-lg transition transform hover:scale-105">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 blur-3xl opacity-50"></div>
            <div className="absolute top-20 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-yellow-500 blur-2xl opacity-40"></div>
        </div>
    );
};

export default HeroSection;