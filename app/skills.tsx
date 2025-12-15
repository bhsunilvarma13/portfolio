import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

const skills = [
  { src: "/photoshop.svg", alt: "Photoshop" },
  { src: "/premiere-pro.svg", alt: "Premiere Pro" },
  { src: "/after-effects.svg", alt: "After Effects" },
  { src: "/figma.png", alt: "Figma" },
  { src: "/canva.svg", alt: "Canva" },
];

const SkillsSection = () => {
  return (
    <section className="w-full px-4 py-6 sm:px-6">
      <div className="w-full overflow-hidden">
        <div className="flex flex-wrap items-center justify-evenly gap-4">
          {skills.map(({ src, alt }, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
              title={alt}
            >
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src={src}
                    alt={alt}
                    width={alt === "Canva" ? 96 : 64}
                    height={alt === "Canva" ? 96 : 64}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{alt}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
