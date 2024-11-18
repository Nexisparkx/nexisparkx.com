import React, { useState } from "react";

function WorkshopFeedback() {

 
  
  const [improvementSuggestions, setImprovementSuggestions] = useState("");

  const [overallRating, setOverallRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log({
    
      
      improvementSuggestions,
     
      overallRating,
    });
    alert("Feedback submitted!");
  };

  return (
    <>
     
      <header className="bg-[#0A0A0A] text-[#27ED64] p-4 text-center">
        <h1 className="text-2xl font-semibold shadow-sm animate-bounce">Workshop Feedback Form</h1>
      </header>

      
      <div className="relative min-h-screen flex flex-col justify-between items-center p-5 bg-[#0A0A0A]">
        <form
          onSubmit={handleSubmit}
          className="w-full sm:w-[60%] md:w-[50%] border-2 shadow-xl shadow-[#222222]   border-[#222222] bg-[#111111] rounded-lg p-6">
          <div className="flex flex-col space-y-4 ">
          <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-4">
                <div className="flex flex-col text-gray-500 ">
                  <label htmlFor="first" className="text-[#27ED64]">
                    First Name
                  </label>
                  <input
                    className="p-2  rounded bg-[#1C1C1C] "
                    type="text"
                    placeholder="First name"
                    id="first"
                  />
                </div>

                <div className="flex flex-col text-gray-500 ">
                  <label htmlFor="lastname" className="text-[#27ED64]">
                    Last Name
                  </label>
                  <input
                    className="p-2 rounded bg-[#1C1C1C] "
                    type="text"
                    placeholder="Last name"
                    id="lastname"
                  />
                </div>
              </div>
              <div className="flex flex-col text-gray-500 ">
                <label htmlFor="rollN" className="text-[#27ED64]">
                  Enrollment No.
                </label>
                <input
                  className="p-2 rounded bg-[#1C1C1C]"
                  type="text"
                  id="rollN"
                  placeholder="Enrollment No."
                />
              </div>

              <div className="flex flex-col text-gray-500 ">
                <label htmlFor="section" className="text-[#27ED64]">
                  Choose Section
                </label>
                <select className="p-2 rounded bg-[#1C1C1C]" name="" id="section">
                  <option value="CSE-3 'A'">CSE-3 'A'</option>
                  <option value="CSE-3 'B'">CSE-3 'B'</option>
                  <option value="CSE-3 'C'">CSE-3 'C'</option>
                </select>
              </div>
              <div className="flex flex-col text-gray-500 ">
                <label htmlFor="no." className="text-[#27ED64]">
                  WhatsApp No.
                </label>
                <input
                  className="p-2 rounded bg-[#1C1C1C]"
                  type="number"
                  id="no."
                  placeholder="Number"
                />
              </div>

            <div className="flex flex-col text-gray-500 ">
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
              />
            </div>
              <div className="flex flex-col text-gray-500 ">
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

     
      <footer className="bg-[#0A0A0A] text-[#27ED64] p-4 text-center">
        <p>© 2024 Workshop Feedback Inc. | All Rights Reserved</p>
        <p>Contact: support@workshopfeedback.com | Phone: +123 456 7890</p>
      </footer>
    </>
  );
}

export default WorkshopFeedback;
