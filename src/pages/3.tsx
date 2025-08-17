import gsap from "gsap";
import React, { useEffect } from "react";

type Props = {};

export default function Three({}: Props) {
  useEffect(() => {
    // gsap.to(".menu", {
    //   x: -300,
    //   duration: 1,
    // });
    // gsap.from(".menu", {
    //   x: 300,
    //   duration: 1,
    //   opacity: 1,
    // });
    gsap.fromTo(
      ".menu",
      {
        x: +5000,
        y: 5000,
      },
      {
        y: 10,
        x: 10,
        duration: 1,
      }
    );
  }, []);

  return (
    <div>
      <div className="menu">
        <div className="menu-item">home</div>
        <div className="menu-item">about us</div>
        <div className="menu-item">contact us</div>
      </div>
    </div>
  );
}
