"use client";

import { useFihCount } from "./fihContext";
import Fih from "@/components/fih";

export default function fihBox() {
  const { count } = useFihCount();

  return (
    <div className="">
      {Array.from({ length: count }).map((_, i) => (
        <Fih key={i} />
      ))}
    </div>
  );
}
