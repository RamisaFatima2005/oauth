"use client"; 

import { signIn } from "next-auth/react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SignInPage() {
  const [message, setMessage] = useState("");

  const handleSignIn = async (prov: string) => {
    try {
      await signIn(prov);
      setMessage(`Signing in with ${prov}...`);
    } catch (error) {
      console.error("Sign in error:", error);
      setMessage("Error signing in. Please try again.");
    }
  };

  return (
    <div className="bg-[url(/background.jpg)] bg-cover bg-center h-[600px] w-auto">
    <div className="flex justify-center">
      <div className=" text-center p-4 h-[470px] w-96 mt-24 rounded-md bg-neutral-400 border-2">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-black">
            <u>Sign In</u>
          </h1>

          <form>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 mb-3 font-medium bg-transparent text-gray-900 placeholder-gray-800 border border-black rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 mb-3 font-medium bg-transparent text-gray-900 placeholder-gray-800 border border-black rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 mb-3 font-medium bg-transparent text-gray-900 placeholder-gray-800 border border-black rounded"
            />
            <p className="font-medium text-start text-lg text-neutral-800">Forget Password?</p>
            <button className="bg-black text-white  hover:bg-white hover:text-black border border-2 border-black font-semibold flex flex-row justify-center py-2 rounded mb-3 w-full">
              LOGIN
            </button>
          </form>
        </div>

        <div>
          <p className="font-medium text-start text-lg">Or Login With:</p>
          <button
            onClick={() => handleSignIn("github")}
            className="bg-black text-white  hover:bg-white hover:text-black border border-2 border-black font-semibold flex flex-row justify-center py-2 rounded mb-3 w-full"
          >
            <FaGithub size={28} />
            GitHub
          </button>

          <button
            onClick={() => handleSignIn("google")}
            className="bg-black text-white  hover:bg-white hover:text-black border border-2 border-black font-semibold flex flex-row justify-center py-2 rounded mb-3 w-full"
          >
            <FcGoogle size={28} />
            Google
          </button>

          {message && (
            <div className="mt-4 text-black font-semibold">{message}</div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}