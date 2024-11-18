
function Registration() {
  return (
    <>
     
      <header className="bg-[#0A0A0A] text-[#27ED64] p-4 text-center">
        <h1 className="text-2xl font-semibold animate-pulse" >Registration Form</h1>
      </header>

      <div className="flex flex-col min-h-screen justify-between bg-[#0A0A0A] ">
    
        <div className="flex-grow flex items-center justify-center p-5">
          <form
            action="#"
            className="w-full sm:w-[50%] border-2 shadow-xl  shadow-[#222222]   border-[#222222] bg-[#111111]  rounded-lg p-5">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-4">
                <div className="flex flex-col">
                  <label htmlFor="first" className="text-[#27ED64]">
                    First Name
                  </label>
                  <input
                    className="p-2  rounded bg-[#1C1C1C] "
                    type="text"
                    placeholder="First name"
                    id="first"
                    required
                  />
                </div>

                <div className="flex flex-col 
                ">
                  <label htmlFor="lastname" className="text-[#27ED64]">
                    Last Name
                  </label>
                  <input
                    className="p-2 rounded bg-[#1C1C1C] "
                    type="text"
                    placeholder="Last name"
                    id="lastname"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col 
              ">
                <label htmlFor="rollN" className="text-[#27ED64]">
                  Enrollment No.
                </label>
                <input
                  className="p-2 rounded bg-[#1C1C1C] "
                  type="text"
                  id="rollN"
                  placeholder="Enrollment No."
                  required
                />
              </div>

              <div className="flex flex-col 
              ">
                <label htmlFor="section" className="text-[#27ED64]">
                  Choose Section
                </label>
                <select className="p-2 rounded bg-[#1C1C1C] " name="section" id="section" required>
                  <option value="CSE-3 'A'">CSE-3 'A'</option>
                  <option value="CSE-3 'B'">CSE-3 'B'</option>
                  <option value="CSE-3 'C'">CSE-3 'C'</option>
                </select>
              </div>

              <div className="flex flex-col 
              ">
                <label htmlFor="no" className="text-[#27ED64]">
                  WhatsApp No.
                </label>
                <input
                  className="p-2 rounded bg-[#1C1C1C] "
                  type="text"
                  id="no"
                  placeholder="Number"
                  required
                />
              </div>

              <div className="flex flex-col 
              ">
                <label htmlFor="email" className="text-[#27ED64]">
                  Email
                </label>
                <input
                  className="p-2 rounded bg-[#1C1C1C] "
                  type="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="flex flex-col 
              ">
                <label htmlFor="field" className="text-[#27ED64]">
                  Interested Domain
                </label>
                <select className="p-2 rounded bg-[#1C1C1C] " name="field" id="field" required>
                  <option value="Web Development">Web Development</option>
                  <option value="App Development">App Development</option>
                  <option value="AI & ML">AI & ML</option>
                  <option value="ML & DL">ML & DL</option>
                </select>
              </div>

              <div className="flex flex-col 
              ">
                <label htmlFor="vs" className="text-[#27ED64]">
                  Laptop
                </label>
                <select className="p-2 rounded bg-[#1C1C1C] " name="Laptop" id="vs" required>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              
              <div className="flex flex-col mt-4 animate-pulse">
                <button
                  type="submit"
                  className="bg-[#27ED64] text-white py-2 rounded-lg hover:bg-[#2dff81]"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>

        <footer className=" text-[#27ED64] p-4 text-center">
          <p>© 2024 Registration Inc. | All Rights Reserved</p>
          <p>Contact: nexisparkx@gmail.com | Phone: +91 8989266180</p>
          <p>Reg. No: 12345</p>
        </footer>
      </div>
    </>
  );
}

export default Registration;
