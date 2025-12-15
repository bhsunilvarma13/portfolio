import Image from "next/image";

const media = [
  {
    type: "image",
    src: "https://res.cloudinary.com/di4xmqvnw/image/upload/v1765817654/Article_i6tiv8.png",
    alt: "Article frame",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/di4xmqvnw/image/upload/v1765817654/India_zdavab.png",
    alt: "India frame",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/di4xmqvnw/video/upload/v1765819659/final_nobfqo.mp4",
    alt: "Final animation",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/di4xmqvnw/image/upload/v1765817654/Mark_dkekuz.png",
    alt: "Mark frame",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/di4xmqvnw/image/upload/v1765817654/Quote_vdl8sv.png",
    alt: "Quote frame",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/di4xmqvnw/video/upload/v1765819660/Coal_j6rpse.mp4",
    alt: "Coal animation",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/di4xmqvnw/image/upload/v1765817654/Sneakers_ny2mwc.png",
    alt: "Sneakers frame",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/di4xmqvnw/image/upload/v1765817655/Twitter_Outrage_uj3m8e.png",
    alt: "Twitter Outrage frame",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/di4xmqvnw/video/upload/v1765819660/PUMA_bqrjfa.mp4",
    alt: "PUMA animation",
  },
];

const FramesSection = () => {
  return (
    <section className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Frames
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {media.map((item, index) => {
          const isFullWidth = index % 3 === 2;

          return (
            <div
              key={item.src}
              className={`relative aspect-video overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-lg ${
                isFullWidth ? "sm:col-span-2" : ""
              }`}
            >
              {item.type === "video" ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes={
                    isFullWidth
                      ? "(min-width: 640px) 100vw"
                      : "(min-width: 640px) 50vw"
                  }
                  className="object-cover"
                  unoptimized
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FramesSection;
