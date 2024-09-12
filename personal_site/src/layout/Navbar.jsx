import { useEffect, useMemo, useState } from "react";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadBasic } from "@tsparticles/basic";

import { Link, Element } from "react-scroll";

function Navbar() {
  return (
    <div className="navbar bg-base-100 sticky top-0">
      <div className="navbar-start">
        <a className="text-xl pl-12 font-bold">Orion Cable</a>
      </div>

      <div className="navbar-center hidden lg:flex"></div>

      <div className="navbar-end">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="about" smooth={true} duration={1500}>
                About
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={1500}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={1500}>
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <ul className="menu menu-horizontal flex-nowrap px-1 pr-5 xs:hidden">
        <li>
          <Link to="landing" smooth={true} duration={1000}>
            Home
          </Link>
        </li>{" "}
        <li>
          <Link to="about" smooth={true} duration={1000}>
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={1000}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={1000}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
