import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

type Props = {};

export default function Scroll({}: Props) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to(".nav", {
      x: 200,
      duration: 1,
      delay: 1,
    });
    gsap.to(".main div", {
      x: 230,
      duration: 1,
      scrollTrigger: {
        trigger: ".main div",
        markers: true,
        start: "top center",
        end: "bottom center",
      },
    });
    gsap.to(".footer div", {
      x: 300,
      borderRadius: "100%",
      duration: 1,
      scrollTrigger: {
        trigger: ".footer div",
        markers: true,
        start: "top center",
        end: "bottom center",
      },
    });
  }, []);

  return (
    <div>
      <h1>Scroll</h1>

      <div className="header">
        <div className="nav"></div>
      </div>

      <div className="main">
        <div></div>
      </div>

      <div className="footer">
        <div></div>
      </div>
    </div>
  );
}
