import { useState, useEffect } from "react"; // Add this line
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ e, onView }) => {
  const [likedItems, setLikedItems] = useState({});

  // Load previously liked items from localStorage
  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem("likes")) || {};
    setLikedItems(storedLikes);
  }, []);

  // Save liked items to localStorage
  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likedItems));
  }, [likedItems]);

  const handleLike = () => {
    const updatedLikes = { ...likedItems, [e.id]: !likedItems[e.id] };
    setLikedItems(updatedLikes);
    if (updatedLikes[e.id]) {
      toast.success("Liked");
    } else {
      toast.warn("Disliked");
    }
  };

  return (
    <div className="w-full max-w-sm flex flex-col overflow-hidden mb-6 rounded-lg shadow-lg">
      <section className="relative">
        <img
          src={e.image.url}
          alt={e.image.alt}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <i
          className="absolute bottom-2 right-2 h-8 w-8 rounded-full bg-white flex justify-center items-center cursor-pointer shadow-md transition-transform duration-300"
          onClick={handleLike}
          aria-label={likedItems[e.id] ? "Unlike" : "Like"}
        >
          {likedItems[e.id] ? <FcLike fontSize="1.5rem" /> : <FcLikePlaceholder fontSize="1.5rem" />}
        </i>
      </section>
      <section className="p-4 bg-white text-gray-800">
        <h1 className="text-lg font-bold text-green-800 mb-2">{e.title}</h1>
        <p className="text-sm text-gray-600">{e.description.substring(0, 100) + "..."}</p>
        <button
        
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md"
        >
          View
        </button>
      </section>
    </div>
  );
};

export { Card };
