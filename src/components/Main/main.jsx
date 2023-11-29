import React from "react";
import { Avatar, button } from "@material-tailwind/react";

const Main = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col py-4 w-full bg-white rounded-3xl shadow-lg">
        <div className="flex items-center border-b-2 border-gray-300 pb-4 pl-4 w-full">
          <img
            src="src/assets/images/avatar.jpg"
            alt="avatar"
            size="sm"
            variant="circular"
            className="flex w-[3rem] h-[3rem] rounded-md"
          />
          <form className="w-full">
            <div className="flex justify-between items-center">
              <div className="w-full ml-4">
                <input
                  type="text"
                  name="text"
                  placeholder="Whats on your mind User"
                  className="outline-none w-full ml-4 bg-white rounded-md"
                />
              </div>
              <div className="mx-4">{/* put previewImage */}</div>

              <div className="mr-4">
                <button
                  variant="text"
                  type="submit"
                  className="text-blue-600 text-lg font-roboto"
                >
                  Share
                </button>
              </div>
            </div>
          </form>
        </div>
        <span>{/* put playBar */}</span>
        <div className="flex justify-around items-center pt-4">
          <div className="flex items-center">
            <label
              htmlFor="addImage"
              className="cursor-pointer flex items-center"
            >
              <img
                src="src/assets/images/addimage.png"
                alt="addImage"
                className="w-[3rem] h-10 mr-4"
              />
              <input type="file" id="addImage" style={{ display: "none" }} />
            </label>
            <button
              variant="text"
              className="font-roboto font font-medium text-md text-gray-700 no-underline tracking-normal leading-none"
            >
              Upload
            </button>
          </div>
          <div className="flex items-center">
            <img
              src="src/assets/images/live.png"
              alt="live"
              className="w-[2.5rem] h-[3rem] h-10 mr-4"
            />
            <p className="font-roboto font font-medium text-md text-gray-700 no-underline tracking-normal leading-none">
              Live
            </p>
          </div>
          <div className="flex items-center">
            <img
              src="src/assets/images/happiness.png"
              alt="feeling"
              className="h-10 mr-4 w-[2rem]"
            />
            <p className="font-roboto font font-medium text-dm text-gray-700 no-underline tracking-normal leading-none">
              Reaction
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-4 w-full">{/* posts */}</div>
      <div>{/* reference for */}</div>
    </div>
  );
};

export default Main;
