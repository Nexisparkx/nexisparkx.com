import { useState } from "react";
import Swal from "sweetalert2";

function Registration() {
    const [details, setDetails] = useState({
        Fname: "",
        Lname: "",
        EnrollNo: "",
        year: "I",
        branch: "CSE",
        section: "A",
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
            [id]: id === "isLaptop" ? value === "Yes" : value, // Handle boolean for laptop
        }));
    }

    // Handle form submission
    async function submitHandler(e) {
        e.preventDefault(); // Prevent form refresh

        const form = e.target;

        // Ensure browser validation passes
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        console.log("Form data submitted:", details);

        try {
            const response = await fetch("https://nexisparkx-com.vercel.app/register/submitform", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(details),
            }); 

            const result = await response.json();

            if (response.ok) {
                Swal.fire({
                    icon: "success",
                    title: "Registration Successful",
                    text: "You have been registered successfully.",
                    confirmButtonText: "Okay",
                    confirmButtonColor: "#27ED64",
                });
             
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Registration Failed",
                    text: `${result.message}. Please try again.`,
                    confirmButtonText: "Retry",
                    confirmButtonColor: "#FF5733",
                });
               
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "An Error Occurred",
                text: `${error.message}`,
                confirmButtonText: "Close",
                confirmButtonColor: "#FF5733",
            });
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
                        className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] border-2 shadow-xl shadow-[#222222] border-[#222222] bg-[#111111] rounded-lg p-5"
                        onSubmit={submitHandler}
                        noValidate
                    >
                        <div className="grid gap-4 md:grid-cols-2">
                            {/* First Name */}
                            <div>
                                <label htmlFor="Fname" className="text-[#27ED64]">
                                    First Name
                                </label>
                                <input
                                    className="w-full p-2 rounded bg-[#1C1C1C] text-white"
                                    type="text"
                                    placeholder="First name"
                                    id="Fname"
                                    required
                                    onChange={detailChange}
                                />
                            </div>

                            {/* Last Name */}
                            <div>
                                <label htmlFor="Lname" className="text-[#27ED64]">
                                    Last Name
                                </label>
                                <input
                                    className="w-full p-2 rounded bg-[#1C1C1C] text-white"
                                    type="text"
                                    placeholder="Last name"
                                    id="Lname"
                                    required
                                    onChange={detailChange}
                                />
                            </div>

                            {/* Enrollment Number */}
                            <div className="col-span-2">
                                <label htmlFor="EnrollNo" className="text-[#27ED64]">
                                    Enrollment No.
                                </label>
                                <input
                                    className="w-full p-2 rounded bg-[#1C1C1C] text-white"
                                    type="text"
                                    id="EnrollNo"
                                    placeholder="Enrollment No."
                                    required
                                    onChange={detailChange}
                                />
                            </div>

                            {/* Year */}
                            <div>
                                <label htmlFor="Year" className="text-[#27ED64]">
                                    Year
                                </label>
                                <select
                                    className="w-full p-2 rounded bg-[#1C1C1C] text-white"
                                    id="Year"
                                    required
                                    onChange={detailChange}
                                >
                                    <option value="I">I</option>
                                    <option value="II">II</option>
                                    <option value="III">III</option>
                                </select>
                            </div>

                            {/* Branch */}
                            <div>
                                <label htmlFor="branch" className="text-[#27ED64]">
                                    Branch
                                </label>
                                <select
                                    className="w-full p-2 rounded bg-[#1C1C1C] text-white"
                                    id="branch"
                                    required
                                    onChange={detailChange}
                                >
                                    <option value="CSE">CSE</option>
                                    <option value="AI-DS">AI-DS</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>

                            {/* Section */}
                            <div>
                                <label htmlFor="section" className="text-[#27ED64]">
                                    Section
                                </label>
                                <select
                                    className="w-full p-2 rounded bg-[#1C1C1C] text-white"
                                    id="section"
                                    required
                                    onChange={detailChange}
                                >
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                </select>
                            </div>

                            {/* WhatsApp Number */}
                            <div className="col-span-2">
                                <label htmlFor="number" className="text-[#27ED64]">
                                    WhatsApp No.
                                </label>
                                <input
                                    className="w-full p-2 rounded bg-[#1C1C1C] text-white"
                                    type="text"
                                    id="number"
                                    placeholder="Number"
                                    required
                                    minLength={10}
                                    maxLength={10}
                                    onChange={detailChange}
                                />
                            </div>

                            {/* Email */}
                            <div className="col-span-2">
                                <label htmlFor="email" className="text-[#27ED64]">
                                    Email
                                </label>
                                <input
                                    className="w-full p-2 rounded bg-[#1C1C1C] text-white"
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    required
                                    onChange={detailChange}
                                />
                            </div>

                            {/* Domain */}
                            <div className="col-span-2">
                                <label htmlFor="domain" className="text-[#27ED64]">
                                    Interested Domain
                                </label>
                                <select
                                    className="w-full p-2 rounded bg-[#1C1C1C] text-white"
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

                            {/* Laptop */}
                            <div className="col-span-2">
                                <label htmlFor="isLaptop" className="text-[#27ED64]">
                                    Laptop
                                </label>
                                <select
                                    className="w-full p-2 rounded bg-[#1C1C1C] text-white"
                                    id="isLaptop"
                                    required
                                    onChange={detailChange}
                                >
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </div>

                            {/* Submit Button */}
                            <div className="col-span-2 mt-4">
                                <button
                                    type="submit"
                                    className="w-full bg-[#27ED64] text-white py-2 rounded-lg hover:bg-[#2dff81] animate-pulse"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Registration;
