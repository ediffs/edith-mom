"use client";

export default function Resume() {
  return (
    <div className="flex flex-col flex-1 items-center font-sans bg-linear-to-r from-slate-950 via-cyan-950 to-slate-950">
      <main className="flex flex-1 w-full max-w-3xl flex-col py-32 px-16 bg-[#232143] dark:bg-[#232143] sm:items-start">
        <div className="flex flex-col items-center gap-6 sm:items-start sm:text-left">
          <h1 className="flex max-w-lg text-3xl font-semibold leading-10 tracking-tight text-[#f4ecd6] dark:text-[#f4ecd6] justify-center">
            Edith Hohner
          </h1>
          <h2 className="flex max-w-lg text-2xl font-semibold leading-10 tracking-tight text-[#f4ecd6] dark:text-[#f4ecd6] justify-center">
            Work Experience
          </h2>
          <h2 className="flex max-w-lg text-2xl font-semibold leading-10 tracking-tight text-[#f4ecd6] dark:text-[#f4ecd6] justify-center">
            Volunteer Experience
          </h2>
          <h2 className="flex max-w-lg text-2xl font-semibold leading-10 tracking-tight text-[#f4ecd6] dark:text-[#f4ecd6] justify-center">
            Personal Projects
          </h2>
        </div>
      </main>
    </div>
  );
}
