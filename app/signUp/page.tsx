import Image from "next/image";
import Link from "next/link";

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
                <div className="bg-white w-full lg:w-1/2 p-3 rounded-lg mx-auto mb-6 shadow-md shadow-gray-400">
                    <h2 className="text-2xl font-bold text-gray-900 text-center">
                        Create a new account
                    </h2>
                    <p className="text-center text-gray-600 text-sm mb-4 mt-1">It’s quick and easy.</p>
                    <hr className="mb-5 mr-0 ml-0" />
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
                        <div className="flex space-x-4 sm:mr-2">
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
                            placeholder="Mobile number or email address"
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

                        <p className="text-gray-500 text-left mt-4 text-[11px]">People who use our service may have uploaded your contact information to Facebook. 
                            <a href="" className="text-blue-700 hover:underline">Learn more.</a> <br />
                        </p>
                        <p className="text-gray-500 text-left mt-2 text-[11px]">        
                            By clicking Sign Up, you agree to our <a href="" className="text-blue-700 hover:underline">Terms</a>, <a href="" className="text-blue-700 hover:underline">Privacy Policy</a> and <a href="" className="text-blue-700 hover:underline">Cookies Policy.</a> <br className="leading-none" /> You may receive SMS notifications from us and can opt out at any time.</p>

                        {/* Signup Button */}
                        <button
                            type="submit"
                            className="w-1/2 bg-green-500 text-white flex flex-col items-center mx-auto my-2 py-2 px-2 rounded-lg hover:bg-green-600 font-bold text-lg"
                        >
                            Sign Up
                        </button>
                    </form>
                    <Link href={"../"}><h2 className="text-lg text-blue-600 hover:underline hover:text-blue-700 flex flex-col items-center mx-auto my-2 rounded-lg">Already Have an Acount?</h2></Link>

                </div>
            </div>
        </div>
    );
}
