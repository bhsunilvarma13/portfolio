const ShortFormSection = () => {
  return (
    <section className="space-y-4 p-4 sm:space-y-6 sm:p-6 md:p-10">
      <h1 className="text-xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
        Short Form
      </h1>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-evenly">
        <iframe
          src="https://www.youtube.com/embed/ykFJCB_0vy4"
          className="rounded-xl border border-zinc-800 bg-zinc-950 shadow-xl h-[535px]"
          allowFullScreen
        />
        <iframe
          src="https://www.youtube.com/embed/8urKrkDzk-M"
          className="rounded-xl border border-zinc-800 bg-zinc-950 shadow-xl h-[535px]"
          allowFullScreen
        />
      </div>
    </section>
  );
};

export default ShortFormSection;
