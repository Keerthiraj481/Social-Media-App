import React, { useContext } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { AuthContext } from "../context/context";
import avatar from "../../assets/images/avatar.jpg";
import nature from "../../assets/images/nature.jpg";
import location from "../../assets/images/location.jpg";
import job from "../../assets/images/job.jpg";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import linkedin from "../../assets/images/linkedin.png";

const LeftSide = () => {

  const { user, userData } = useContext(AuthContext);

  return (
    <div className="flex flex-col h-screen bg-white pb-4 border-2 rounded-r-xl shadow-lg">
      <div className="flex flex-col items-center relative">
        <img
          className="h-28 w-full rounded-r-xl"
          src={nature}
          alt="nature"
        />
        <div className="absolute -bottom-6">
          <Tippy content="Profile">
            <img
              src={user?.photoURL || avatar}
              alt="avatar"
              size="md"
              className="flex w-[3rem] h-[3rem] rounded-md"
            />
          </Tippy>
        </div>
      </div>
      <div className="flex flex-col items-center pt-6">
        <p className="font-roboto font-medium text-md text-gray-700 no-underline tracking-normal leading-none">
          {user?.email || userData?.email}
        </p>
        <p className="font-roboto font-medium text-xs text-gray-700 no-underline tracking-normal leading-none py-1">
          Access exclusive tools & insights
        </p>
        <p className="font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none py-2">
          Try premium for free
        </p>
      </div>
      <div className="flex flex-col pl-2">
        <div className="flex items-center pb-2">
          <img
            src={location}
            alt="location"
            className="h-10"
          />
          <p className="font-roboto font-bold text-lg no-underline tracking-normal leading-none">
            India
          </p>
        </div>
        <div className="flex items-center">
          <img
            src={job}
            alt="office_bag"
            className="h-10"
          />
          <p className="font-roboto font-bold text-lg no-underline tracking-normal leading-none">
            React Developer
          </p>
        </div>
        <div className="flex justify-center items-center pt-4">
          <p className="font-roboto font-bold text-md text-[#0177ba] no-underline tracking-normal leading-none">
            Events
          </p>
          <p className="font-roboto font-bold text-md text-[#0177ba] no-underline tracking-normal leading-none mx-2">
            Groups
          </p>
          <p className="font-roboto font-bold text-md text-[#0177ba] no-underline tracking-normal leading-none">
            Follow
          </p>
          <p className="font-roboto font-bold text-md text-[#0177ba] no-underline tracking-normal leading-none mx-2">
            More
          </p>
        </div>
      </div>
      <div className="ml-2">
        <p className="font-roboto font-bold text-lg no-underline tracking-normal py-2">
          Social Profiles
        </p>
        <div className="flex items-center">
          <img
            src={facebook}
            alt="facebook"
            className="h-10 mb-3 mr-2"
          />
          <p className="font-roboto font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r to-red-700 from-blue-500 no-underline tracking-normal">
            Facebook
          </p>
        </div>
        <div className="flex items-center">
          <img
            src={twitter}
            alt="twitter"
            className="h-10 mb-3 mr-2"
          />
          <p className="font-roboto font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r to-red-700 from-blue-500 no-underline tracking-normal">
            Twitter
          </p>
        </div>
        <div className="flex items-center">
          <img
            src={linkedin}
            alt="linkedin"
            className="h-10 mb-3 mr-2"
          />
          <p className="font-roboto font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r to-red-700 from-blue-500 no-underline tracking-normal">
            LinkedIn
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pt-4"></div>
    </div>
  );
};

export default LeftSide;

