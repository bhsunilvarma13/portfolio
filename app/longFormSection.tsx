const LongFormSection = () => {
  return (
    <section className="space-y-4 rounded-3xl p-4 sm:space-y-6 sm:p-6 md:p-10">
      <h1 className="text-xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
        Long Form
      </h1>

      <iframe
        src="https://www.youtube.com/embed/unVQLKdxzhY"
        className="aspect-video rounded-xl border border-zinc-800 bg-zinc-950 shadow-xl"
        allowFullScreen
      />

      <iframe
        src="https://www.youtube.com/embed/MxunHzpmLuE"
        className="aspect-video rounded-xl border border-zinc-800 bg-zinc-950 shadow-xl"
        allowFullScreen
      />

      <iframe
        src="https://www.youtube.com/embed/VSU49pfZ13U"
        className="aspect-video rounded-xl border border-zinc-800 bg-zinc-950 shadow-xl"
        allowFullScreen
      />

      <iframe
        src="https://www.youtube.com/embed/mxrw07GdNuk"
        className="aspect-video rounded-xl border border-zinc-800 bg-zinc-950 shadow-xl"
        allowFullScreen
      />
    </section>
  );
};

export default LongFormSection;
