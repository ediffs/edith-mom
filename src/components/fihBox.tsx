"use client";

import { useFihCount } from "./fihContext";
import Fih from "@/components/fih";

export default function fihBox() {
  const { count } = useFihCount();

  // fixed = follows screen, z-50 = overlap everything
  return (
    <div className="fixed inset-0 w-screen h-screen pointer-events-none z-50">
      {Array.from({ length: count }).map((_, i) => (
        <Fih key={i} />
      ))}
    </div>
  );
}
