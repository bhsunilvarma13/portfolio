import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-start gap-4 p-4 sm:flex-row sm:items-end sm:p-6 md:p-10">
      <div className="w-fit rounded-2xl border border-zinc-800 bg-zinc-950 p-1 shadow-lg">
        <Image
          src="/unnamed.png"
          alt=""
          width={150}
          height={150}
          className="rounded-xl w-24 h-24 sm:w-32 sm:h-32 md:w-[150px] md:h-[150px]"
        />
      </div>
      <div className="space-y-2 pb-1">
        <div>
          <h1 className="text-xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Hey, I&apos;m Sunil Varma
          </h1>
          <p className="text-base tracking-tight text-zinc-400 lg:text-lg">
            crafting story-driven edits which keep viewers engaged.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <Link
            href={"https://x.com/bhsunilvarma_13"}
            className="transition-colors hover:text-sky-400"
            target="_blank"
          >
            Twitter
          </Link>
          <Link
            href={"mailto:bhsunilvarma13@gmail.com"}
            className="transition-colors hover:text-rose-400"
            target="_blank"
          >
            Gmail
          </Link>
          <Link
            href={"https://wa.me/+919959849568"}
            className="transition-colors hover:text-emerald-400"
            target="_blank"
          >
            WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
