import React from "react";
import { faMoon as regularMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  return (
    <div className="bg-[#2b3945ff] h-full w-full flex items-center justify-between py-[2rem] px-[1rem] lg:px-[6rem]">
      <p className="text-white font-semibold">Where in the world?</p>
      <div className="flex items-center">
        <FontAwesomeIcon icon={solidMoon} className="mx-[0.5rem] text-white" />
        <p className="text-white">Dark Mode</p>
      </div>
    </div>
  );
};

export default Nav;
