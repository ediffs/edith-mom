import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center font-sans bg-linear-to-r from-indigo-400 via-pink-500 to-purple-400 ">
      <main className="flex flex-1 w-full max-w-3xl flex-col py-32 px-16 bg-[#2d2643] dark:bg-[#2d2643] sm:items-start">
        <div className="flex flex-col items-center gap-6 sm:items-start sm:text-left">
          <h1 className="flex max-w-lg text-3xl font-semibold leading-10 tracking-tight text-[#f4ecd6] dark:text-[#f4ecd6] justify-center">
            About Me
          </h1>
          <p className="max-w-md text-lg leading-8 text-[#f4ecd6] dark:text-[#f4ecd6]">
            Hi, my name is Edith (she/her) and I'm a Computer Science Honours
            student with a minor in Mathematics, heading into my third year.
          </p>
          <p className="max-w-md text-lg leading-10 text-[#f4ecd6] dark:text-[#f4ecd6]">
            I'm passionate about video game design, music, and effective
            political advocacy.
          </p>
          <h2 className="flex max-w-lg text-2xl font-semibold leading-10 tracking-tight text-[#f4ecd6] dark:text-[#f4ecd6] justify-center">
            A few things you may know me from:
          </h2>
          <ul className="list-inside md:list-disc max-w-2xl text-lg leading-10 text-[#f4ecd6] dark:text-[#f4ecd6]">
            <li>
              I've been a Teaching Assistant for the following courses: (COMP
              1020 for Winter 2026, COMP 2450 for Summer 2026).
            </li>
            <li>
              I am currently the CSSA's Director of Advocacy for the 2026-2027
              year.
            </li>
            <li>
              I was the CSSA's Director of Lounge Affairs for the 2025-2026
              year.
            </li>
            <li>
              I was a Mathematics Tutor for the SSA during the 2025-2026 year.
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
