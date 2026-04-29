"use client";
import Link from "next/link";
import { useFihCount } from "./fihContext";

const items = [
  {
    id: "home",
    label: "Home",
    href: "/",
  },
  {
    id: "resume",
    label: "Resume",
    href: "/resume",
  },
  {
    id: "advocacy",
    label: "Advocacy",
    href: "/advocacy",
  },
];

export default function Navbar() {
  const { count, setCount } = useFihCount(); // for fih count

  return (
    <nav className="flex flex-wrap fixed w-full top-0 left-0 pb-4 md:pb-2 flex justify-between items-center bg-[#2d2643]">
      <Link
        href="/"
        className="flex text-lg p-6 md:text-4xl font-bold text-[#ff99c9] hover:text-cyan-400"
      >
        edith's site!
      </Link>
      <label className="block mb-1 text-sm md:text-2xl p-2 text-[#ff99c9]">
        Fih:
      </label>
      <input
        type="range"
        inputMode="numeric"
        className="w-full sm:w-64 md:w-80 bg-transparent  text-cyan-400 text-sm border border-[#ff99c9] rounded-md px-2 transition duration-300 ease focus:outline-none focus:border-cyan-400 hover:border-cyan-400 shadow-sm focus:shadow"
        min="0"
        max="30"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
        id="numFih"
      />

      <ul className="flex text-lg p-6 justify-end items-center gap-10 text-[#ff99c9]">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className="transform scale-100 hover:scale-105 bg-indigo-950 hover:text-cyan-400 text-[#ff99c9] py-2 px-4 rounded"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
