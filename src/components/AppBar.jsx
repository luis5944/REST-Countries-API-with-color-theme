import React from "react";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
const AppBar = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  localStorage.setItem("theme-page", theme);
  return (
    <div>
      <ul className="appbar">
        <li className="container-logo">
          Where in the{"  "}
          <span className="world">
            <BiWorld />
          </span>
          {"  "}?
        </li>
        <li>
          <button onClick={toggleTheme} className="button-toggle">
            {theme === "light" ? (
              <div>
                <BsMoonFill /> <span>Dark Mode</span>
              </div>
            ) : (
              <div>
                <BsFillSunFill /> <span>Light Mode</span>
              </div>
            )}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default AppBar;
