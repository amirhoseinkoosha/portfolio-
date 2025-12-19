import { useEffect } from "react";
import gsap from "gsap";

export const useCursorFollow = () => {
  useEffect(() => {
    const FollowBox = "#Wrap .FollowBox";

    // Set initial styles
    gsap.set(FollowBox, {
      xPercent: -50,
      yPercent: -50,
      scale: 0,
    });

    const handleMouseMove = (e: MouseEvent) => {
      const mapper = gsap.utils.mapRange(0, 30, 0, 1);
      const speed = Math.abs(e.movementX) + Math.abs(e.movementY);
      const mappedSpeed = mapper(speed);
      const clamp = gsap.utils.clamp(0, 1);

      gsap.to(FollowBox, {
        duration: 0.5,
        overwrite: "auto",
        x: e.clientX,
        y: e.clientY,
        stagger: 0.1,
        ease: "none",
      });

      gsap.to(FollowBox, {
        ease: "none",
        duration: 0.3,
        overwrite: "auto",
        stagger: 0.1,
        scale: clamp(mappedSpeed),
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
};
