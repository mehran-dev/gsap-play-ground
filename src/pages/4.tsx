import gsap from "gsap";
import React, { useLayoutEffect } from "react";

type Props = {};

export default function Four({}: Props) {
  let tl = gsap.timeline();

  useLayoutEffect(() => {
    tl.from("#box1", {
      x: 700,
      duration: 2,
      // delay:1
    });
    tl.from("#box2", {
      x: 100,
      duration: 2,
      // delay:2
    });
  }, []);

  return (
    <div>
      <h1>Four</h1>
      <div id="box1"></div>
      <div id="box2"></div>
    </div>
  );
}
