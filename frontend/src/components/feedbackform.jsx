import React, { useState } from "react";
import Swal from "sweetalert2";

function WorkshopFeedback() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [enrollNo, setEnrollNo] = useState("");
  const [section, setSection] = useState("CSE-3 'A'");
  const [number, setNumber] = useState("");
  const [improvementSuggestions, setImprovementSuggestions] = useState("");
  const [overallRating, setOverallRating] = useState("");
  const [error, setError] = useState(""); // For showing validation error

  const isValidWhatsAppNumber = (num) => {
    const regex = /^[6-9]\d{9}$/; // Validates numbers starting with 6-9 and exactly 10 digits
    return regex.test(num);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // WhatsApp number validation
    if (!isValidWhatsAppNumber(number)) {
      setError("Please enter a valid 10-digit WhatsApp number starting with 6, 7, 8, or 9.");
      return;
    }

    // Clear error if validation passes
    setError("");

    const feedbackData = {
      Fname: firstName,
      Lname: lastName,
      EnrollNo: enrollNo,
      section: section,
      number: number,
      suggestion: improvementSuggestions,
      rating: overallRating,
    };

    try {
      const response = await fetch("http://localhost:4000/feedback/submitfeedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackData),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "feedback ",
          text: "feedback added sucessfully",
          confirmButtonText: "Okay",
          confirmButtonColor: "#27ED64",
      });
        // Clear form after successful submission
        setFirstName("");
        setLastName("");
        setEnrollNo("");
        setSection("CSE-3 'A'");
        setNumber("");
        setImprovementSuggestions("");
        setOverallRating("");
      } else {
        alert("Error submitting feedback.");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <header className="bg-[#0A0A0A] text-[#27ED64] p-4 text-center">
        <h1 className="text-2xl font-semibold shadow-sm animate-bounce">
          Workshop Feedback Form
        </h1>
      </header>

      <div className="relative min-h-screen flex flex-col justify-between items-center p-5 bg-[#0A0A0A]">
        <form
          onSubmit={handleSubmit}
          className="w-full sm:w-[60%] md:w-[50%] border-2 shadow-xl shadow-[#222222] border-[#222222] bg-[#111111] rounded-lg p-6"
        >
          <div className="flex flex-col space-y-4">
            {/* First Name */}
            <div className="flex flex-col text-gray-500">
              <label htmlFor="first" className="text-[#27ED64]">
                First Name
              </label>
              <input
                className="p-2 rounded bg-[#1C1C1C]"
                type="text"
                id="first"
                value={firstName}
                required
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col text-gray-500">
              <label htmlFor="lastname" className="text-[#27ED64]">
                Last Name
              </label>
              <input
                className="p-2 rounded bg-[#1C1C1C]"
                type="text"
                id="lastname"
                value={lastName}
                required
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
              />
            </div>

            {/* Enrollment No */}
            <div className="flex flex-col text-gray-500">
              <label htmlFor="rollN" className="text-[#27ED64]">
                Enrollment No.
              </label>
              <input
                className="p-2 rounded bg-[#1C1C1C]"
                type="text"
                id="rollN"
                value={enrollNo}
                required
                onChange={(e) => setEnrollNo(e.target.value)}
                placeholder="Enrollment No."
              />
            </div>

            {/* Section */}
            <div className="flex flex-col text-gray-500">
              <label htmlFor="section" className="text-[#27ED64]">
                Choose Section
              </label>
              <select
                className="p-2 rounded bg-[#1C1C1C]"
                value={section}
                required
                onChange={(e) => setSection(e.target.value)}
                id="section"
              >
                <option value="CSE-3 'A'">CSE-3 'A'</option>
                <option value="CSE-3 'B'">CSE-3 'B'</option>
                <option value="CSE-3 'C'">CSE-3 'C'</option>
              </select>
            </div>

            {/* WhatsApp No */}
            <div className="flex flex-col text-gray-500">
              <label htmlFor="no" className="text-[#27ED64]">
                WhatsApp No.
              </label>
              <input
                className="p-2 rounded bg-[#1C1C1C]"
                type="text"
                id="no"
                required
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="WhatsApp Number"
              />
              {/* Show error message if validation fails */}
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>

            {/* Improvement Suggestions */}
            <div className="flex flex-col text-gray-500">
              <label htmlFor="improvementSuggestions" className="text-[#27ED64]">
                Suggestions for Improvement
              </label>
              <textarea
                id="improvementSuggestions"
                value={improvementSuggestions}
                onChange={(e) => setImprovementSuggestions(e.target.value)}
                className="p-2 rounded bg-[#1C1C1C]"
                placeholder="Provide suggestions for improvement"
                rows="4"
                required
              />
            </div>

            {/* Overall Rating */}
            <div className="flex flex-col text-gray-500">
              <label htmlFor="overallRating" className="text-[#27ED64]">
                Overall Rating
              </label>
              <select
                id="overallRating"
                value={overallRating}
                onChange={(e) => setOverallRating(e.target.value)}
                className="p-2 rounded bg-[#1C1C1C]"
                required
              >
                <option value="">Select Rating</option>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Very Good</option>
                <option value="5">5 - Excellent</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col mt-4">
              <button
                type="submit"
                className="bg-[#27ED64] text-gray-500 py-2 rounded-lg hover:bg-[rgba(60,213,106,0.95)]"
              >
                Submit Feedback
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default WorkshopFeedback;
