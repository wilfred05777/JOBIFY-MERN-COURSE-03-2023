import React from "react";
import Wrapper from "../assets/wrappers/SmallSidebar.js";
import { useDashboardContext } from "../pages/DashboardLayout.jsx";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo.jsx";
import links from "../utils/links.jsx";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks.jsx";

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();
  // showSidebar
  // const data = useDashboardContext();
  // console.log(data);

  return (
    <Wrapper>
      <div
        className={
          showSidebar
            ? "sidebar-container show-sidebar" // finished=if the icon is click it will pop-up navbar content, 1st on development only = if sidebar is within 992px width it will show
            : "sidebar-container" // otherwise it will hide the navbar once it is below 992px width
        }
      >
        <div className="content">
          <button
            type="button"
            className="close-btn"
            onClick={toggleSidebar} // toggle close upon clicking the x icon
          >
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks />
          <div className="nav-links">
            {/* below links from utils looping each content */}
            {links.map((link) => {
              const { text, path, icon } = link; // assign each array content to link
              return (
                <NavLink
                  to={path}
                  key={text}
                  className="nav-link"
                  onClick={toggleSidebar} // navigate to each assign path from the links
                  end // the 'end' prop purpose is that the first link will not include to be active/highlight every time switching other links
                >
                  <span className="icon">{icon}</span>
                  {text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
