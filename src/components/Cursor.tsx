"use client";

import React, { useEffect, useState } from "react";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Update cursor position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const hoverableElements = document.querySelectorAll(
      "a, button, .hover-target"
    );
    hoverableElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      hoverableElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-50 rounded-full 
        transition-transform duration-300 ease-out mix-blend-difference 
        ${isHovered ? "scale-150" : "scale-100"}
        ${
          isClicked
            ? "bg-progress-active-light dark:bg-progress-active-dark"
            : "bg-progress-light dark:bg-progress-dark"
        }
      `}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: isClicked ? "8px" : "12px",
        height: isClicked ? "8px" : "12px",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default CustomCursor;
