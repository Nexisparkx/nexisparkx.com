import { useEffect, useState } from "react";
import { Card } from "./courses/cards";
import { useNavigate } from "react-router-dom";
 
function Home() {
  const filters = ["All", "Prompt", "Error Handling"]; // Updated filters
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("All");

  const alldata = [
    {
      category: "Error Handling",
      courses: [
        {
          id: "EH101",
          title: "Error Handling",
          description: "Learn how to handle errors gracefully in software applications.",
          image: {
            url: "https://tse4.mm.bing.net/th?id=OIP.VYcJY9lfEo5I6FZ3gKKihQHaEK&pid=Api&P=0&h=180",
            alt: "Error Handling Basics",
          },
          videoUrl: "https://youtu.be/u2xLcx3sC_k?feature=shared",
        },
      ],
    },
    {
      category: "Prompt",
      courses: [
        {
          id: "PR201",
          title: "Prompt",
          description: "Design effective prompts for AI models and conversational systems.",
          image: {
            url: "https://tse2.mm.bing.net/th?id=OIP.veIap3HLeIafHXHKVKH-EwHaEE&pid=Api&P=0&h=180",
            alt: "Mastering Prompts",
          },
        },
      ],
    },
  ];

  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleView = (courseId) => {
    navigate(`/course-detail/${courseId}`); // Navigate to the course detail page
  };

  const handleFilter = (filter) => {
    setCategory(filter);
  };

  useEffect(() => {
    // Filter data based on the selected category
    if (category === "All") {
      setData(alldata.flatMap((item) => item.courses)); // Flatten all categories into one list
    } else {
      const filteredData = alldata.find((item) => item.category === category);
      setData(filteredData ? filteredData.courses : []);
    }
  }, [category]);

  return (
    <>
      <div className="max-w-full">
        <h1 className="font-bold bg-green-800 h-max p-3 text-center text-white text-2xl">
          Top Courses
        </h1>
        <div className="min-h-screen bg-neutral-950 pt-4">
          {/* Render filter buttons */}
          <span className="flex flex-wrap w-[90%] md:w-max m-auto justify-center gap-2 mb-6">
            {filters.map((filter, index) => (
              <button
                key={index}
                className={`p-2 min-w-[100px] border-white border-[1px] text-white rounded m-1 transform transition duration-300 hover:scale-105 ${
                  category === filter ? "bg-green-600" : "bg-green-500"
                }`}
                onClick={() => handleFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </span>

          {/* Render course cards */}
          <div className="flex flex-wrap w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] m-auto justify-center mt-6 gap-4">
            {data.length > 0 ? (
              data.map((course, index) => (
                <Card key={index} e={course} onView={() => handleView(course.id)} />
              ))
            ) : (
              <p className="text-white text-center mt-10">No courses available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
