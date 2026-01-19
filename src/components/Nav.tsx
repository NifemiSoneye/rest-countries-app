import { faMoon as regularMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "../store/store";
import { toggleTheme } from "../store/themeSlice";

const Nav = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  /*   useEffect(() => {
    if (lightMode) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  }, [lightMode]); */

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light";
    if (savedTheme && savedTheme !== theme) {
      dispatch(toggleTheme());
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [theme]);
  return (
    <div className="bg-[#2b3945ff] h-full w-full flex items-center justify-between py-[2rem] px-[1rem] lg:px-[6rem] light:bg-[#ffffffff] shadow-md">
      <p className="text-white font-bold text-[18px] light:text-black">
        Where in the world?
      </p>
      <div
        className="flex items-center cursor-pointer"
        onClick={() => dispatch(toggleTheme())}
      >
        <FontAwesomeIcon
          icon={theme === "dark" ? regularMoon : solidMoon}
          className="mx-[0.5rem] text-white light:text-black"
        />
        <p className="text-white light:text-black">
          {theme === "light" ? "Light Mode" : "Dark Mode"}
        </p>
      </div>
    </div>
  );
};

export default Nav;
