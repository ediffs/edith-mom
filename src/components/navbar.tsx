import Link from "next/link";
import React from "react";

const items = [
  {
    id: "home",
    label: "Home",
    href: "/",
  },
  {
    id: "about",
    label: "About",
    href: "/about",
  },
  {
    id: "advocacy",
    label: "Advocacy",
    href: "/advocacy",
  },
  {
    id: "projects",
    label: "Projects",
    href: "/projects",
  },
];

export default function Navbar() {
  // const pathname = usePathname();
  // const isActive = (path: Url) => pathname === path;
  return (
    <nav className="pb-4 md:pb-8 flex justify-between items-center bg-[#af79c9]">
      <Link
        href="/"
        className="text-lg p-6 md:text-4xl font-bold text-[#ff99c9]"
      >
        edith
      </Link>
      <ul className="flex text-2x1 p-3 justify-end items-center gap-10 text-[#ff99c9]">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              //        className={`${isActive(item.href) ? "text-red-300" : ""}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
