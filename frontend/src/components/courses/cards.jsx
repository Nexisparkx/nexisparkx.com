import { useState, useEffect, useRef } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ e }) => {
  const [likedItems, setLikedItems] = useState({});
  const [isVisible, setIsVisible] = useState(false); // Track if the card is visible
  const cardRef = useRef(null);

  // Load previously liked items from localStorage
  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem("likes")) || {};
    setLikedItems(storedLikes);
  }, []);

  // Save liked items to localStorage
  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likedItems));
  }, [likedItems]);

  // IntersectionObserver to detect when card comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting); // Set visibility state based on entry
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the card is in the viewport
        rootMargin: "0px 0px 100px 0px", // Ensures last cards don't fade out too early
      }
    );
    if (cardRef.current) {
      observer.observe(cardRef.current); // Start observing the card element
    }
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current); // Clean up observer
      }
    };
  }, []);

  function handle(e) {
    const newLikedItems = { ...likedItems, [e.id]: !likedItems[e.id] };
    setLikedItems(newLikedItems);
    if (newLikedItems[e.id]) {
      toast.success("Liked");
    } else {
      toast.warn("Disliked");
    }
  }

  return (
    <div
      ref={cardRef}
      className={`w-full max-w-sm flex flex-col overflow-hidden mb-6 rounded-lg shadow-lg transform transition-all duration-700 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } hover:scale-105`}
    >
      <section className="relative">
        <img
          src={e.image.url}
          alt={e.image.alt}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <i
          className="absolute bottom-2 right-2 h-8 w-8 rounded-full bg-white flex justify-center items-center cursor-pointer shadow-md transition-transform duration-300"
          onClick={() => handle(e)}
          aria-label={likedItems[e.id] ? "Unlike" : "Like"}
        >
          {likedItems[e.id] ? (
            <FcLike fontSize="1.5rem" />
          ) : (
            <FcLikePlaceholder fontSize="1.5rem" />
          )}
        </i>
      </section>
      <section className="p-4 bg-white text-gray-800">
        <h1 className="text-lg font-bold text-green-800 mb-2">{e.title}</h1>
        <p className="text-sm text-gray-600">
          {e.description.substring(0, 100) + "..."}
        </p>
      </section>
    </div>
  );
};

const Filters = ({ filters, category, handle }) => (
  <div className="bg-neutral-950 py-4">
    <span className="flex flex-wrap justify-center gap-2">
      {filters.map((filter, index) => (
        <button
          key={index}
          className={`p-2 min-w-[100px] text-white rounded-lg bg-green-500 transition-all duration-300 hover:scale-105 ${
            category === filter ? "bg-green-600" : ""
          }`}
          onClick={() => handle(filter)}
        >
          {filter}
        </button>
      ))}
    </span>
  </div>
);

export { Card, Filters };
