"use client";
import Link from "next/link";
import { useFihCount } from "./fihContext";

const items = [
  { id: "home", label: "Home", href: "/" },
  { id: "resume", label: "Resume", href: "/resume" },
  { id: "advocacy", label: "Advocacy", href: "/advocacy" },
];

export default function Navbar() {
  const { count, setCount } = useFihCount();

  // FIXME: make it so that on mobile the fih slider is somewhere more sexually accessible
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#2d2643] flex flex-col md:flex-row md:items-center md:justify-between px-4 py-2 gap-3">
      <Link
        href="/"
        className="text-lg md:text-3xl font-bold text-[#ff99c9] hover:text-cyan-400"
      >
        edith&apos;s site!
      </Link>

      {/* girlypop fih reset */}
      <div className="flex md:justify-end items-center gap-2 px-4 py-2 rounded-lg bg-linear-to-br from-indigo-950 to-slate-900 shadow-md">
        <label htmlFor="numFih" className="text-sm md:text-xl text-[#ff99c9]">
          Fih:
        </label>
        <input
          type="range"
          inputMode="numeric"
          className="w-32 sm:w-40 md:w-56 appearance-none bg-[#2e2a5a] border border-[#ff99c9] focus:outline-none hover:border-cyan-400"
          min="0"
          max="30"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          id="numFih"
        />
      </div>
      <ul className="flex justify-center md:justify-end items-center gap-4 md:gap-8 text-[#ff99c9]">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className="text-sm md:text-lg hover:text-cyan-400 py-2 px-3 md:px-4 rounded-lg transition-transform hover:scale-105 bg-linear-to-br from-indigo-950 to-slate-900 shadow-md"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
