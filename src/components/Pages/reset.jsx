import React, { useState } from "react";

const Reset = () => {
    const [email,setEmail] = useState("");

    return (
      <div className="grid grid-cols-1 justify-items-center items-center h-screen">
        <div className="w-96">
          <div className="pb-4">
            Enter the email address associated with your account and we 'll send
            you a link to reset your password
          </div>
          <input
            type="email"
            name="email"
            label="Email"
            className="mt-1 px-3 pr-24 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <button
            className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ... px-6 font-bold login-btn ml-[9rem]"
            type="submit"
        >
                Continue
            </button>
        </div>
    </div>
    );
}
 
export default Reset;