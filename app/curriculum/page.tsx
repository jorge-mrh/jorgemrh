import InteractiveTimeline from "@/components/curriculum/interactive-timeline";
import TypographyH1 from "@/components/typography/h1";
import { TypographyP } from "@/components/typography/p";

export default function Curriculum() {
  return (
    <div className="flex flex-col gap-8 h-full">
      <div className="space-y-2">
        <TypographyH1 text="Curriculum Timeline" />
        <TypographyP text="Drag horizontally to explore my professional journey." />
      </div>
      <InteractiveTimeline />
    </div>
  );
}
