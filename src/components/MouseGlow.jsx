import { useEffect, useState } from "react";

function MouseGlow() {
  const [position, setPosition] = useState({ x: -500, y: -500 });

  useEffect(() => {
    // Don't run the effect on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/[0.035] blur-3xl lg:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
      }}
    />
  );
}

export default MouseGlow;