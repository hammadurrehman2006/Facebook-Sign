// "use client"
import Image from "next/image"
import Link from "next/link";

function LogIn() {

    return (
        <>
<div>
    <div className="bg-gray-100 h-screen flex flex-col lg:flex-row items-center justify-center">
        {/* Side logo and text */}
        <div className="text-2xl w-full lg:w-1/2 px-5 lg:px-14 mb-8 lg:mb-0">
            <Image src={"/fblogo.svg"} height={300} width={300} alt="facebook logo" />
            <p className="text-slate-900 text-center lg:text-left mt-4">
                Facebook helps you connect and share with the people in your life to waste yours and theirs time.
            </p>
        </div>
        {/* Input Area */}
        <div className="flex flex-col items-center w-full lg:w-1/3">
            <div className="bg-white box-shadow: shadow-xl shadow-xl; flex flex-col w-full p-5 rounded-xl">
                <input
                    className="my-2 border border-1 border-gray-200 p-3 rounded-md"
                    type="text"
                    placeholder="Email address or phone number"
                />
                <input
                    className="my-2 border border-1 border-gray-200 p-3 rounded-md"
                    placeholder="Password"
                />
                <button className="bg-blue-600 hover:bg-blue-500 font-bold my-2 py-2 rounded-lg text-lg">
                    Log in
                </button>
                <p className="text-blue-600 hover:underline text-sm my-2 cursor-pointer text-center">
                    Forgotten Password?
                </p>
                <span>
                    <hr className="my-2" />
                </span>
                <Link href={"./signUp"} className="bg-green-500 hover:bg-green-700 font-bold mx-auto my-2 py-2 px-2 w-fit rounded-lg">                
                <button>
                    Create new account
                </button></Link>
            </div>
            {/* Create a Page Section */}
            <p className="text-black text-sm mt-4 text-center">
                <a href="#" className="hover:underline font-bold">
                    Create a Page
                </a>{" "}
                for a celebrity, brand or business.
            </p>
        </div>
    </div>
</div>

        </>
    )
}
export default LogIn
