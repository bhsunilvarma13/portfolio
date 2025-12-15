import HeroSection from "./hero";
import FramesSection from "./framesSection";
import SkillsSection from "./skills";
import LongFormSection from "./longFormSection";
import ShortFormSection from "./shortFormSection";
import CTASection from "./ctaSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-zinc-900/60 text-foreground">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col gap-10 p-4 border bg-zinc-900/60">
        <HeroSection />
        <SkillsSection />
        <LongFormSection />
        <ShortFormSection />
        <FramesSection />
        <CTASection />
      </div>
    </div>
  );
};

export default Home;
