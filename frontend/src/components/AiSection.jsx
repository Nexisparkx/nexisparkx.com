import React from "react";


function Aifirst() {
  const data = [
    {
      image: "https://cdn.openart.ai/published/cFxm4PdeBNluzuX7EUZy/9K-gC-HG_20zX_1024.webp",
      title: "Card Title 1",
    },
    {
      image: "https://img.freepik.com/premium-photo/artificial-intelligence-futuristic-digital-technology-human-robot-face-close-up_947967-562.jpg",
      title: "Card Title 2",
    },
    {
      image: "https://img.freepik.com/premium-photo/artificial-intelligence-free-photos-image-artificial-intelligence-background_539191-50389.jpg",
      title: "Card Title 3",
    },
    {
      image: "https://img.freepik.com/premium-photo/artificial-intelligence-free-photos-image-artificial-intelligence-background_539191-27509.jpg?w=360",
      title: "Card Title 4",
    },
    {
      image: "https://img.freepik.com/premium-photo/artificial-intelligence-distant-future_398492-1465.jpg",
      title: "Card Title 5",
    },
    {
      image: "https://cdn.pixabay.com/photo/2023/10/21/12/35/ai-generated-8331364_640.jpg",
      title: "Card Title 6",
    },
  ];

  return (
    <div className="bg-black text-white h-screen bg-fixed overflow-scroll">
      {/* Text Section */}

      <div>
         <div className=" p-10 font-bold text-2xl sm:text-4xl sm:w-[50%] bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 lg:fle">
        
        <p>
          It offers a comprehensive roadmap to help coders build essential skills, adapt to industry challenges, embrace new technologies, and thrive in any professional environment.
        </p>
         </div>

         <div className="align"> <iframe 
    className="h-[90vh] w-[90vw]  "
  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-autoplay; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe></div>

        

</div>
     

      {/* Cards Section for Large Screens */}
      <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 p-4 max-w-full">
        {data.map((item, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
            {/* Image */}
            <img
              className="w-full h-48 object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
              src={item.image}
              alt={`card-image-${index}`}
            />

            {/* Card Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent">
              <h3 className="text-white text-xl font-bold">{item.title}</h3>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 ease-in-out"></div>
          </div>
        ))}
      </div>

      {/* Cards Section for Small Screens (Vertical Scroll) */}
      <div className="sm:hidden mt-10 overflow-y-auto max-h-[calc(100vh-100px)]">
        <div className="flex flex-col space-y-4">
          {data.map((item, index) => (
            <div key={index} className="w-64 mx-auto">
              <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
                {/* Image */}
                <img
                  className="w-full h-48 object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                  src={item.image}
                  alt={`card-image-${index}`}
                />

                {/* Card Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent">
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 ease-in-out"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Aifirst;
