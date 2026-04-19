import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-right bg-[#3b3561] font-sans dark:bg-[#3b3561]">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[#00a896] dark:bg-[#00a896] sm:items-start">
        <Image
          className="dark:invert"
          src="/fih.png"
          alt="A fish."
          width={200}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-[#f4ecd6] dark:text-[#f4ecd6]">
            Edith Hohner
          </h1>
          <p className="max-w-md text-lg leading-8 text-[#f4ecd6] dark:text-[#f4ecd6]">
            Computer Science Honours
          </p>
          <p className="max-w-md text-lg leading-8 text-[#f4ecd6] dark:text-[#f4ecd6]">
            grapic design is my pasion :)
          </p>
        </div>
      </main>
    </div>
  );
}
