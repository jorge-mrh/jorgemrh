import { MotionGrid } from "@/components/motion/motion-grid";
import TypographyH1 from "@/components/typography/h1";
import { TypographyP } from "@/components/typography/p";

export default function MotionPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col gap-4 mb-8">
        <TypographyH1 text="Motion Work" />
        <TypographyP text="A collection of my motion design projects, reels, and animations." />
      </div>
      
      <MotionGrid />
    </div>
  );
}
