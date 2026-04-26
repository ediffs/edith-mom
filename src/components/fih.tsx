import Image from "next/image";

export default function Fih() {
  return (
    <div className="">
      <Image
        className="animate-spin scale-10 cursor-wait"
        src="/purepng-fih.png"
        alt="A silver fish."
        fill={true}
        sizes="(max-width: 200px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: "contain" }}
        loading="eager"
      />
    </div>
  );
}
