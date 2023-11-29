import React, { useState } from "react";
import { input } from "@material-tailwind/react";


const RightSide = () => {
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-col h-screen bg-white shadow-lg border-2 rounded-l-xl">
      <div className="flex flex-col items-center relative pt-10">
        <img
          src="src\assets\images\beachfam.jpg"
          alt="beach-family"
          className="h-48 rounded-md"
        />
      </div>
      <p className="font-roboto font-normal text-sm text-gray-700 max-w-fit no-underline tracking-normal leading-tight py-2 mx-2">
        There is a lovely beach that stretches miles along the blue Atlantic.
        I've always wanted to stay in a beach house. We were in Hawaii and
        pretty mellowed out on one of those perfect beach nights, watching the
        moon dance on the incoming surf.
      </p>
      <div className="mx-2 mt-10">
        <p className="font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none">
          Friends:{" "}
        </p>
        <input
          className="border-0 outline-none mt-4"
          name="input"
          value={input}
          type="text"
          placeholder="Search Friends"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default RightSide;
