import { useState } from "react";

function Registration() {
    const [details, setDetails] = useState({
        Fname: "",
        Lname: "",
        EnrollNo: "",
        section: "CSE-3 'A'",
        number: "",
        email: "",
        domain: "Web Development",
        isLaptop: false,
    });

    // Handle input changes
    function detailChange(e) {
        const { id, value } = e.target;
        setDetails((prevDetails) => ({
            ...prevDetails,
            [id]: id === "vs" ? (value === "Yes") : value, // Handle boolean for laptop
        }));
    }

    // Handle form submission
    async function submitHandler(e) {
        e.preventDefault(); // Prevent form from refreshing the page

        try {
            const response = await fetch("http://localhost:4000/register/submitform", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(details),
            });

            const result = await response.json();
            if (response.ok) {
                alert("Registration successful!");
                console.log(result);
            } else {
                alert("Failed to register. Please try again.");
                console.error(result);
            }
        } catch (error) {
            console.error("Error during registration:", error);
            alert("An error occurred. Please try again later.");
        }
    }

    return (
        <>
            <header className="bg-[#0A0A0A] text-[#27ED64] p-4 text-center">
                <h1 className="text-2xl font-semibold animate-pulse">Registration Form</h1>
            </header>

            <div className="flex flex-col min-h-screen justify-between bg-[#0A0A0A]">
                <div className="flex-grow flex items-center justify-center p-5">
                    <form
                        className="w-full sm:w-[50%] border-2 shadow-xl shadow-[#222222] border-[#222222] bg-[#111111] rounded-lg p-5"
                        onSubmit={submitHandler}
                    >
                        <div className="flex flex-col space-y-4">
                            <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-4">
                                <div className="flex flex-col">
                                    <label htmlFor="Fname" className="text-[#27ED64]">
                                        First Name
                                    </label>
                                    <input
                                        className="p-2 rounded bg-[#1C1C1C]"
                                        type="text"
                                        placeholder="First name"
                                        id="Fname"
                                        required
                                        onChange={detailChange}
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="Lname" className="text-[#27ED64]">
                                        Last Name
                                    </label>
                                    <input
                                        className="p-2 rounded bg-[#1C1C1C]"
                                        type="text"
                                        placeholder="Last name"
                                        id="Lname"
                                        required
                                        onChange={detailChange}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="EnrollNo" className="text-[#27ED64]">
                                    Enrollment No.
                                </label>
                                <input
                                    className="p-2 rounded bg-[#1C1C1C]"
                                    type="text"
                                    id="EnrollNo"
                                    placeholder="Enrollment No."
                                    required
                                    onChange={detailChange}
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="section" className="text-[#27ED64]">
                                    Choose Section
                                </label>
                                <select
                                    className="p-2 rounded bg-[#1C1C1C]"
                                    id="section"
                                    required
                                    onChange={detailChange}
                                >
                                    <option value="CSE-3 'A'" selected>CSE-3 'A'</option>
                                    <option value="CSE-3 'B'">CSE-3 'B'</option>
                                    <option value="CSE-3 'C'">CSE-3 'C'</option>
                                </select>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="number" className="text-[#27ED64]">
                                    WhatsApp No.
                                </label>
                                <input
                                    className="p-2 rounded bg-[#1C1C1C]"
                                    type="text"
                                    id="number"
                                    placeholder="Number"
                                    required
                                    onChange={detailChange}
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-[#27ED64]">
                                    Email
                                </label>
                                <input
                                    className="p-2 rounded bg-[#1C1C1C]"
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    required
                                    onChange={detailChange}
                                />
                            </div>

                            <div className="flex flex-col" selected>
                                <label htmlFor="domain" className="text-[#27ED64]">
                                    Interested Domain
                                </label>
                                <select
                                    className="p-2 rounded bg-[#1C1C1C]"
                                    id="domain"
                                    required
                                    onChange={detailChange}
                                >
                                    <option value="Web Development">Web Development</option>
                                    <option value="App Development">App Development</option>
                                    <option value="AI & ML">AI & ML</option>
                                    <option value="ML & DL">ML & DL</option>
                                </select>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="vs" className="text-[#27ED64]">
                                    Laptop
                                </label>
                                <select
                                    className="p-2 rounded bg-[#1C1C1C]"
                                    id="vs"
                                    required
                                    onChange={detailChange}
                                >
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

                <footer className="text-[#27ED64] p-4 text-center">
                    <p>© 2024 Registration Inc. | All Rights Reserved</p>
                    <p>Contact: nexisparkx@gmail.com | Phone: +91 8989266180</p>
                    <p>Reg. No: 12345</p>
                </footer>
            </div>
        </>
    );
}

export default Registration;
