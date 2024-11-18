import React from 'react';

const ServiceCard = ({ title, description, image }) => {
    return (
        <div
            className="p-4 bg-transparent white-shadow border border-green-500 rounded-lg hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer"

        >
            {image && (
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover rounded-t-lg"
                />
            )}
            <div className="mt-4">
                <h3 className="text-xl font-bold text-green-300">{title}</h3>
                <p className="text-gray-100">{description}</p>
            </div>  
        </div>
    );
};

export default ServiceCard;
