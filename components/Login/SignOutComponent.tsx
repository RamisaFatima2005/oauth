"use client";

import { signOut } from "next-auth/react";
import { useState } from "react";

export default function SignOutPage() {
  const [message, setMessage] = useState("");

  const handleSignOut = async () => {
    try {
      await signOut();
      setMessage("Successfully signed out!");
    } catch (err) {
      console.error("Sign out error:", err);
      setMessage("Error signing out. Please try again.");
    }
  };

  return (
    <div className="bg-[url(/background.jpg)] bg-cover bg-center h-[600px] w-auto">
    <div className="flex justify-center">
      <div  className=" text-center p-4 h-40 w-96 mt-24 rounded-md bg-neutral-400 border-2">
      <h1 className="text-4xl font-bold mb-4 text-black tracking-wide">Sign Out</h1>
      <button 
        onClick={handleSignOut}
        className="bg-black text-white  hover:bg-white hover:text-black border border-2 border-black font-semibold flex justify-center py-2 rounded mb-3 mt-10 w-full"
      >
        Sign Out
      </button>
      {message && (
        <div className="mt-8 text-black font-semibold">{message}</div>
      )}
      </div>
    </div>
    </div>
  );
}