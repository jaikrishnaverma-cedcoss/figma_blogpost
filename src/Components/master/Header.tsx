import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  let activeClassName = "active";

  return (
    <header>
      <nav>
        <img className="logo" src="NORDIC ROSE.png"></img>
        <ul>
          {
            ['BLOG','ABOUT','LINES','PROJECTS']
            .map(x=>  <li>
              {" "}
              <NavLink
                to={x}
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                {x}
                <hr className="lihr"/>
              </NavLink>
            
            </li>)
          }
        </ul>
      </nav>
    </header>
  );
};

export default Header;
