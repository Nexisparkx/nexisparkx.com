import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CourseDetailCard } from "../components/courseDetailCard"; // New component for course detail cards

const CourseDetail = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await fetch("/data/courses.json"); // Adjust the path if needed
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const jsonData = await response.json();
  
        // Flatten the data and find the course by id
        const allCourses = Object.values(jsonData.data).flat();
        const courseData = allCourses.find((course) => course.id === courseId);
  
        if (courseData) {
          setCourse([courseData]); // Wrap it in an array to match your rendering logic
        } else {
          console.error("Course not found");
        }
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };
  
    fetchCourseData();
  }, [courseId]);
  
  

  if (!course) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-neutral-950 pt-4">
      <h1 className="font-bold bg-green-800 p-3 text-center text-white text-2xl">
        {course[0]?.title}
      </h1>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {course.map((lesson, index) => (
          <CourseDetailCard key={index} lesson={lesson} />
        ))}
      </div>
    </div>
  );
};

export default CourseDetail;
