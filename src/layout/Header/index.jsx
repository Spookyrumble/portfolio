import { useState, useEffect, useRef, useContext } from "react";
import { useTranslation } from "react-i18next";
import { spookyLogo } from "../../assets/logos/logoExports.js";
import LanguageSwitcher from "../../components/LanguageSwitch/index.jsx";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import ThemeContext from "../../Theme/index.jsx";

const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header className="pt-4">
      <nav className="w-full border-b-2">
        <div className="flex flex-col items-center p-4 relative">
          <img
            className="fixed opacity-10 -z-10"
            style={{ height: "auto", maxWidth: "90vw" }}
            src={spookyLogo}
            alt="Spooky Logo"
          />
          <h1
            className="animate-float whitespace-nowrap text-shadow-slateblue"
            style={{ fontSize: `6vw`, maxWidth: "100vw" }}
          >
            Hans Marius Andreassen
          </h1>
          <h2
            className="tracking-widest text-shadow-slateblue text-2xl sm:text-4xl md:text-5xl md:-mt-2 lg:-mt-6 xl:-mt-8"
            style={{ maxWidth: "100vw" }}
          >
            {t("frontend")}
          </h2>
          <div className="absolute right-4 top-4 md:hidden">
            <Hamburger toggled={isOpen} toggle={() => setOpen(!isOpen)} />
          </div>
        </div>
        <div
          ref={menuRef}
          className={`md:flex ${isOpen ? "block" : "hidden"}`}
          aria-label="Burger menu"
        >
          <ul className="flex flex-col md:flex-row justify-around items-center w-full tracking-widest">
            <li className="px-3 py-2">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `block md:inline px-3 py-2 rounded transition ${
                    isActive ? "bg-slateBlue bg-opacity-15" : ""
                  } hover:bg-slateBlue hover:text-white`
                }
                onClick={handleLinkClick}
              >
                {t("Home")}
              </NavLink>
            </li>
            <li className="px-3 py-2">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block md:inline px-3 py-2 rounded transition ${
                    isActive ? "bg-slateBlue bg-opacity-15" : ""
                  } hover:bg-slateBlue hover:text-white`
                }
                onClick={handleLinkClick}
              >
                {t("About")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `block md:inline px-3 py-2 rounded transition ${
                    isActive ? "bg-slateBlue bg-opacity-15" : ""
                  } hover:bg-slateBlue hover:text-white`
                }
                onClick={handleLinkClick}
              >
                {t("Projects")}
              </NavLink>
            </li>
            <li className="px-3 py-2">
              <NavLink
                to="/connect"
                className={({ isActive }) =>
                  `block md:inline px-3 py-2 rounded transition ${
                    isActive ? "bg-slateBlue bg-opacity-15" : ""
                  } hover:bg-slateBlue hover:text-white`
                }
                onClick={handleLinkClick}
              >
                {t("Connect")}
              </NavLink>
            </li>
            <li className="px-3 py-2">
              <NavLink
                to="/stack"
                className={({ isActive }) =>
                  `block md:inline px-3 py-2 rounded transition ${
                    isActive ? "bg-slateBlue bg-opacity-15" : ""
                  } hover:bg-slateBlue hover:text-white`
                }
                onClick={handleLinkClick}
              >
                {t("Stack")}
              </NavLink>
            </li>
            <li className="px-3 py-2">
              <LanguageSwitcher />
            </li>
            <li className="px-3 py-2">
              <label
                className="inline-flex items-center cursor-pointer"
                aria-label="Toggle theme"
              >
                <input
                  type="checkbox"
                  className="hidden"
                  checked={theme === "dark"}
                  onChange={toggleTheme}
                  aria-label="Toggle theme"
                />
                <span className="relative">
                  <span className="block w-10 h-6 bg-gray-400 rounded-full shadow-inner"></span>
                  <span
                    className={`absolute block w-4 h-4 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transform ${
                      theme === "dark"
                        ? "translate-x-full bg-black"
                        : "bg-white"
                    } transition-transform duration-200 ease-in-out`}
                  ></span>
                </span>
              </label>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
