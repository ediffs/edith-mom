"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const images = [
  "/purepng-fih.png",
  "/dina263-goldfih.png",
  "/frankenstein-discus-fih.png",
  "/roeuny-fih.png",
  "/schwarzenarzisse-fih-0.png",
];

export default function Fih() {
  const ref = useRef<HTMLDivElement>(null);

  // state to store fih position, trigger re-render
  const [position, setPosition] = useState({ x: -100, y: 0 });

  // state to store image decision
  const [imageIndex, setImageIndex] = useState<number | null>(null);

  // state to track horizontal flipping
  const [flip, setFlip] = useState(false);

  // set image index
  useEffect(() => {
    setImageIndex(Math.floor(Math.random() * images.length));
  }, []);

  useEffect(() => {
    if (imageIndex === null) {
      return;
    }

    // start x and y
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    // x and y speeds
    let vx = 0.1 + Math.random();
    let vy = 0.1 + Math.random() / 2;

    // animation frame function
    const animate = () => {
      const el = ref.current;
      if (el === null) {
        return;
      }

      const rect = el.getBoundingClientRect();

      // advance positions
      x += vx;
      y += vy;

      // bounce off of walls
      if (x <= 0 || x + rect.width >= window.innerWidth) {
        vx *= -1;
        setFlip((prev) => !prev); // flip horizontally when hitting wall
      }

      if (y <= 0 || y + rect.height >= window.innerHeight) {
        vy *= -1;
      }

      // update the position state
      setPosition({ x, y });
      requestAnimationFrame(animate);
    };

    // start animation
    animate();

    return () => cancelAnimationFrame(animate); // good thing i like my animations cancelled
  }, [imageIndex]);

  if (imageIndex === null) {
    return;
  }

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        transform: `translate(${position.x}px, ${position.y}px)`, // use position state here
      }}
    >
      <Image
        className=""
        src={images[imageIndex]}
        alt="A fish."
        width={50}
        height={50}
        style={{
          objectFit: "contain",
          transform: flip ? "scaleX(-1)" : "none",
        }}
        loading="eager"
      />
    </div>
  );
}
