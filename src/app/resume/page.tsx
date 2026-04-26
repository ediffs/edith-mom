"use client";

export default function Resume() {
  return (
    <div className="flex flex-col flex-1 items-center font-sans bg-linear-to-r from-indigo-400 via-pink-500 to-purple-400 ">
      <main className="flex flex-1 w-full max-w-3xl flex-col py-32 px-16 bg-[#2d2643] dark:bg-[#2d2643] sm:items-start">
        <div className="flex flex-col items-center gap-6 sm:items-start sm:text-left">
          <h1 className="flex max-w-lg text-3xl font-semibold leading-10 tracking-tight text-[#f4ecd6] dark:text-[#f4ecd6] justify-center">
            Edith Hohner
          </h1>
        </div>
      </main>
    </div>
  );
}
