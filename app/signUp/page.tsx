import Image from "next/image";

export default function SignupPage() {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4 lg:px-0">
            <div className="w-full max-w-4xl flex flex-col items-center lg:items-start lg:justify-between">
                
                    <Image
                        src="/fblogo.svg"
                        alt="Facebook Logo"
                        width={300}
                        height={100}
                        className="mx-auto"
                    />
                    

                {/* Signup Form */}
                <div className="bg-white w-full lg:w-1/2 p-8 rounded-xl mx-auto shadow-md">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                        Create a new account
                    </h2>
                    <p className="text-center text-gray-600 mb-4">It’s quick and easy.</p>
                    <form>
                        {/* Name Fields */}
                        <div className="flex flex-col text-black lg:flex-row lg:space-x-4">
                            <input
                                type="text"
                                placeholder="First name"
                                className="w-full mb-4 lg:mb-0 border border-gray-300 p-3 rounded-md focus:outline-blue-500"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Last name"
                                className="w-full border border-gray-300 p-3 rounded-md focus:outline-blue-500"
                                required
                            />
                        </div>

                        {/* Date of Birth */}
                        <label className="block text-gray-600 mt-4 mb-2">Date of Birth</label>
                        <div className="flex space-x-4">
                            <select
                                className="w-1/3 border border-gray-300 p-3 text-gray-900 rounded-md focus:outline-blue-500"
                                required
                            >
                                <option value="" disabled selected>
                                    Day
                                </option>
                                {Array.from({ length: 31 }, (_, i) => (
                                    <option key={i + 1}>{i + 1}</option>
                                ))}
                            </select>
                            <select
                                className="w-1/3 border border-gray-300 text-black p-3 rounded-md focus:outline-blue-500"
                                required
                            >
                                <option value="" disabled selected>
                                    Month
                                </option>
                                {[
                                    "Jan",
                                    "Feb",
                                    "Mar",
                                    "Apr",
                                    "May",
                                    "Jun",
                                    "Jul",
                                    "Aug",
                                    "Sep",
                                    "Oct",
                                    "Nov",
                                    "Dec",
                                ].map((month, i) => (
                                    <option key={i + 1}>{month}</option>
                                ))}
                            </select>
                            <select
                                className="w-1/3 border border-gray-300 p-3 rounded-md text-black focus:outline-blue-500"
                                required
                            >
                                <option value="" disabled selected>
                                    Year
                                </option>
                                {Array.from({ length: 100 }, (_, i) => (
                                    <option key={i + 1925}>{1925 + i}</option>
                                ))}
                            </select>
                        </div>

                        {/* Gender */}
                        <label className="block text-gray-600 mt-4 mb-2">Gender</label>
                        <div className="flex space-x-4">
                            <label className="flex items-center w-1/3 border border-gray-300 text-black p-3 rounded-md focus:outline-blue-500">
                                <input
                                    type="radio"
                                    name="gender"
                                    className="mr-2 "
                                    required
                                />
                                Female
                            </label>
                            <label className="flex items-center w-1/3 border border-gray-300 text-black p-3 rounded-md focus:outline-blue-500">
                                <input
                                    type="radio"
                                    name="gender"
                                    className="mr-2"
                                    required
                                />
                                Male
                            </label>
                            <label className="flex items-center w-1/3 border border-gray-300 text-black p-3 rounded-md focus:outline-blue-500">
                                <input
                                    type="radio"
                                    name="gender"
                                    className="mr-2"
                                    required
                                />
                                Custom
                            </label>
                        </div>
                        
                        {/* Email or Mobile */}
                        <input
                            type="email"
                            placeholder="Mobile number or email"
                            className="w-full border border-gray-300 p-3 rounded-md mt-4 focus:outline-blue-500"
                            required
                        />

                        {/* Password */}
                        <input
                            type="password"
                            placeholder="New password"
                            className="w-full border border-gray-300 p-3 rounded-md mt-4 focus:outline-blue-500"
                            required
                        />


                        {/* Signup Button */}
                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white py-3 mt-6 rounded-md hover:bg-green-600 font-bold text-lg"
                        >
                            Sign Up
                        </button>
                    </form>

                    <p className="text-gray-500 text-center mt-4 text-sm">
                        By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy.
                    </p>
                </div>
            </div>
        </div>
    );
}
