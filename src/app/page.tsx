import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans bg-linear-to-r from-slate-900 via-blue-900 to-slate-900">
      <main className="w-full max-w-3xl flex flex-col py-32 px-6 sm:px-12 bg-[#232143]">
        <div className="flex flex-col items-center gap-6 sm:items-start sm:text-left">
          <h1 className="flex max-w-lg text-3xl font-semibold leading-10 tracking-tight text-[#f4ecd6] dark:text-[#f4ecd6] justify-center">
            About Me
          </h1>
          <p className="max-w-md text-lg leading-8 text-[#f4ecd6] dark:text-[#f4ecd6]">
            Hi! My name is Edith (she/her) and I'm a Computer Science Honours
            student with a minor in Mathematics, heading into my third year at
            the University of Manitoba.
          </p>
          <p className="max-w-md text-lg leading-10 text-[#f4ecd6] dark:text-[#f4ecd6]">
            I'm passionate about video game design, music, and effective
            political advocacy.
          </p>
          <p className="max-w-md text-lg leading-10 text-[#f4ecd6] dark:text-[#f4ecd6]"></p>
          <h2 className="flex max-w-lg text-2xl font-semibold leading-10 tracking-tight text-[#f4ecd6] dark:text-[#f4ecd6] justify-center">
            A few things you may know me from:
          </h2>
          <ul className="list-inside md:list-disc max-w-2xl text-lg leading-10 text-[#f4ecd6] dark:text-[#f4ecd6] bg-[#2e2a5a] rounded-xl p-6 shadow-md w-full">
            <li>
              I've been a Teaching Assistant for COMP 1020 during Winter 2026
              and COMP 2450 during Summer 2026.
            </li>
            <li>I am currently the CSSA's Director of Advocacy.</li>
            <li>I was previously the CSSA's Director of Lounge Affairs.</li>
            <li>I was previously a Mathematics Tutor for the SSA.</li>
          </ul>
          <h2 className="flex max-w-lg text-2xl font-semibold leading-10 tracking-tight text-[#f4ecd6] dark:text-[#f4ecd6] justify-center">
            Contact:
          </h2>
          <div className="flex items-center gap-2">
            {" "}
            <Link
              href="mailto:contact@edith.mom"
              target="_blank"
              className="transform scale-100 hover:scale-105 hover:text-cyan-400 text-[#ff99c9] py-2 px-4 rounded-lg bg-linear-to-br from-indigo-950 to-slate-900 shadow-md"
            >
              Email
            </Link>
            <Link
              href="https://github.com/ediffs"
              target="_blank"
              className="transform scale-100 hover:scale-105 hover:text-cyan-400 text-[#ff99c9] py-2 px-4 rounded-lg bg-linear-to-br from-indigo-950 to-slate-900 shadow-md"
            >
              Github
            </Link>
            <Link
              href="https://linkedin.com/in/edith-hohner"
              target="_blank"
              className="transform scale-100 hover:scale-105 hover:text-cyan-400 text-[#ff99c9] py-2 px-4 rounded-lg bg-linear-to-br from-indigo-950 to-slate-900 shadow-md"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
