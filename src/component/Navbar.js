import { a } from "react-scroll";

import "./navbar.css";

export const Navbar = () => {
  return (
    <div
      style={{ zIndex: 2 }}
      className=" container text-center position-sticky   navbar justify-content-end  ani_navbar "
    >
      <ul class="nav ">
        <li class="nav-item">
          <a
            class="nav-link "
            activeClass="active"
            href="#home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link "
            activeClass="active"
            href="#aboutme"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About Me
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link "
            activeClass="active"
            href="#skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Skills
          </a>
        </li>
        <li class="nav-item ">
          <a
            class="nav-link "
            activeClass="active"
            href="#project"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link "
            activeClass="active"
            href="#contactme"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
};
