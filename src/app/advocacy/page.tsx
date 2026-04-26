"use client";
import Image from "next/image";

export default function Advocacy() {
  return (
    <div className="flex flex-col flex-1 items-center font-sans bg-linear-to-r from-pink-300 via-white to-cyan-300 ">
      <main className="flex flex-1 w-full max-w-3xl flex-col py-32 px-16 bg-[#232143] dark:bg-[#232143] sm:items-start">
        <div className="flex flex-col items-center gap-6 sm:items-start sm:text-left">
          <h1 className="flex max-w-lg text-3xl font-semibold leading-10 tracking-tight text-[#f4ecd6] dark:text-[#f4ecd6] justify-center">
            Director of Advocacy
          </h1>
          <p className="max-w-md text-lg leading-8 text-[#f4ecd6] dark:text-[#f4ecd6]">
            In case you're not aware I am the 2026-2027 Director of Advocacy for
            the CSSA.
          </p>
          <p className="max-w-xl text-lg leading-10 text-[#f4ecd6] dark:text-[#f4ecd6]">
            One of my initiatives from when I was campaigning was to increase
            transparency when it comes to the Advocacy role. I will be updating
            this page periodically throughout the year to track my own progress
            and to give this role the transparency it requires.
          </p>
          <h2 className="flex max-w-lg text-2xl font-semibold leading-10 tracking-tight text-[#f4ecd6] dark:text-[#f4ecd6] justify-center">
            Campaign Promises
          </h2>
          <ul className="list-inside md:list-disc max-w-2xl text-lg leading-10 text-[#f4ecd6] dark:text-[#f4ecd6]">
            <li>
              Be an active voice for all students when communicating to the CS
              department.
            </li>
            <li>
              Launch frequent, small initiatives to make sure students are being
              advocated for.
            </li>
            <li>
              Pick a diverse committee so that all students are
              well-represented.
            </li>
            <li>
              Run surveys for the student body to track the CSSA's advocacy
              throughout my term.{" "}
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
