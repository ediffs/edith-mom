import Link from "next/link";

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
  return (
    <nav className="fixed w-full top-0 left-0 pb-4 md:pb-2 flex justify-between items-center bg-[#9f79c9]">
      <Link
        href="/"
        className="flex text-lg p-6 md:text-4xl font-bold text-[#ff99c9] hover:text-cyan-400"
      >
        edith's site!
      </Link>
      <ul className="flex text-lg p-6 justify-end items-center gap-10 text-[#ff99c9]">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className="transform hover:scale-105 transition-transform duration-300 bg-[#2d2643] hover:text-cyan-400 text-[#ff99c9] py-2 px-4 rounded"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
