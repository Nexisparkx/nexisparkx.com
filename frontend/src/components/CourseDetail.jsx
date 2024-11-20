import { useEffect, useState } from "react";
import { Card } from "./courses/cards";
import { useNavigate } from "react-router-dom";

function Home() {
  const filters = ["All", "Prompt", "Error Handling"]; // Updated filters
  const [data, setData] = useState({});
  const [alldata, setAllData] = useState([]);
  const [category, setCategory] = useState("All");

  const navigate = useNavigate(); // Hook to programmatically navigate

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../data/courses.json"); // Adjust the path based on your project
        const jsonData = await response.json();
        setData(jsonData.data); // Store the "data" object from the JSON
        setAllData(Object.values(jsonData.data).flat()); // Flatten all courses into an array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handle = (e) => {
    const selectedCategory = e.target.innerText;
    if (selectedCategory === "All") {
      setAllData(Object.values(data).flat()); // Combine all categories
    } else {
      setAllData(data[selectedCategory] || []); // Filter by selected category
    }
    setCategory(selectedCategory); // Update the selected category
  };

  const handleView = (courseId) => {
    navigate(`/course-detail/${courseId}`); // Navigate to the course detail page
  };

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
                onClick={handle}
              >
                {filter}
              </button>
            ))}
          </span>

          {/* Render course cards */}
          <div className="flex flex-wrap w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] m-auto justify-center mt-6 gap-4">
            {alldata.length > 0 ? (
              alldata.map((course, index) => (
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
