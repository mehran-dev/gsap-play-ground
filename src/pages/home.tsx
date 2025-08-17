import gsap from "gsap";
import React, { useEffect } from "react";

type Props = {};

export default function Home({}: Props) {
  useEffect(() => {
    gsap.to(".box", {
      x: 700,
      duration: 1.5,
      delay: 1,
      stagger: {
        each: 0.2,
        from: "start",
        amount: 1,
      },
    });
  }, [gsap]);
  return (
    <div>
      <h1>Home</h1>

      <div className="box">1</div>
      <div className="box">2</div>
      <div className="box">3</div>
      <div className="box">4</div>
      <div className="box">5</div>
      <div className="box">6</div>
    </div>
  );
}
