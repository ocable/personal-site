import { useEffect, useMemo, useState } from "react";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadBasic } from "@tsparticles/basic";

import arrow from "./assets/arrow.png";

import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import Navbar from "./layout/Navbar";

const scrollTo = () => {
  scroller.scrollTo("landing", {
    duration: 1500,
    delay: 0,
    smooth: true,
  });
};

const options = {
  // your options here, for example:
  duration: 500,
  smooth: true,
};

function Home() {
  return (
    <>
      <div class="h-screen">
        <Element name="landing">
          <section
            className="flex justify-center items-center h-full"
            style={{ height: "100vh", backgroundColor: "lightblue" }}
          >
            <button className="btn btn-outline">
              {" "}
              <Link to="about" smooth={true} duration={1500}>
                view my work
              </Link>
            </button>
          </section>
        </Element>
      </div>
      <Navbar />

      <section>
        <Element name="about">
          <section
            className="h-full"
            style={{ height: "100vh", backgroundColor: "lightcyan" }}
          ></section>
        </Element>

        <Element name="projects">
          <section
            className="h-full"
            style={{ height: "100vh", backgroundColor: "lightgray" }}
          ></section>
        </Element>

        <Element name="contact">
          <section
            className="h-full"
            style={{ height: "100vh", backgroundColor: "lightgreen" }}
          ></section>
        </Element>
      </section>
      <div className="bg-white rounded-full size-14 fixed bottom-4 right-5">
        <img
          src={arrow}
          className="size-12 fixed bottom-6 right-6"
          onClick={scrollTo}
        ></img>
      </div>
    </>
  );
}

export default Home;
