"use client";

import { useRef } from "react";

export default function TiltCard({
  as: Tag = "div",
  children,
  className = "",
  maxTilt = 7,
  lift = 8,
}) {
  const ref = useRef(null);

  const handleMove = (event) => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * maxTilt * 2;
    const rotateX = (0.5 - y) * maxTilt * 2;

    node.style.transform = `perspective(1400px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-${lift}px)`;
    node.style.setProperty("--pointer-x", `${(x * 100).toFixed(2)}%`);
    node.style.setProperty("--pointer-y", `${(y * 100).toFixed(2)}%`);
  };

  const resetCard = () => {
    const node = ref.current;

    if (!node) {
      return;
    }

    node.style.transform = "perspective(1400px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    node.style.setProperty("--pointer-x", "50%");
    node.style.setProperty("--pointer-y", "50%");
  };

  return (
    <Tag
      ref={ref}
      className={`tilt-card ${className}`.trim()}
      onMouseMove={handleMove}
      onMouseLeave={resetCard}
    >
      {children}
    </Tag>
  );
}
