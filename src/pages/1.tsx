import gsap from "gsap";
import React, { useLayoutEffect } from "react";

type Props = {};

export default function One({}: Props) {
  useLayoutEffect(() => {
    gsap.to(".text", {
      opacity: 1,
      duration: 1,
      stagger: 1,
      y: 10,
      delay: (index) => {
        console.log(index);
        return index * 1.5;
      },
      ease: "power2.out",
    });
  }, []);
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>One</h1>

      <div className="text">متن اول</div>
      <div className="text">متن دوم</div>
      <div className="text">متن سوم</div>
      <div className="text">متن چهارم</div>
    </div>
  );
}
