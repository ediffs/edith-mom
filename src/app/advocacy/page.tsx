"use client";
import Image from "next/image";

export default function Advocacy() {
  return (
    <div className="container mt-2">
      Advocacy
      <Image
        className="dark:invert"
        src="/fih.png"
        alt="A fish."
        width={200}
        height={20}
        priority
      />
    </div>
  );
}
