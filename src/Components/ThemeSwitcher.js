import React, { useEffect, useState } from "react";
import "./styles/themeSwitcher.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

function ThemeSwitcher({ size, wantAnimatedIcon, inital }) {
  const [theme, setTheme] = useState(
    inital?.toLowerCase() === "dark" ? true : false
  );
  const [clsName, setClsName] = useState("");
  const children = document.querySelector("body").children[1].children;
  const elem = "DIV";

  useEffect(() => {
    function checkForChildNodes(child) {
      for (let i = 0; i < child.length; i++) {
        if (child[i].tagName.toUpperCase() === elem) {
          child[i]?.classList.remove(theme ? `light_theme` : `dark_theme`);
          child[i]?.classList.add(theme ? `dark_theme` : `light_theme`);
        }
        if (child[i].hasChildNodes()) {
          checkForChildNodes(child[i].children);
        }
      }
    }
    checkForChildNodes(children[0].children);
  }, [theme]);

  function handleClick() {
    setClsName("animate");
    setTheme((prev) => {
      return !prev;
    });
    setTimeout(() => {
      setClsName("");
    }, 1000);
  }
  return (
    <div className="theme_switcher">
      {theme ? (
        <div
          className={`theme_swithcer__dark_theme ${
            wantAnimatedIcon ? clsName : ""
          }`}
          onClick={handleClick}
        >
          <LightModeIcon sx={{ height: size, width: size }} />
        </div>
      ) : (
        <div
          className={`theme_swithcer__light_theme ${
            wantAnimatedIcon ? clsName : ""
          }`}
          onClick={handleClick}
        >
          <DarkModeIcon sx={{ height: size, width: size }} />
        </div>
      )}
    </div>
  );
}

export default ThemeSwitcher;
