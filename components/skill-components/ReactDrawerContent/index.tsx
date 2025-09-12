import TypographyH2 from "@/components/typography/H1";
import { TypographyP } from "@/components/typography/P";
import skills from "@/public/skills.json";

export default function ReactDrawerContent() {
  const skillDescription =
    skills.development.find((item) => item.React)?.React || "";
  return (
    <div className="grid grid-cols-1 items-center gap-10 md:p-10 md:grid-cols-2">
      <div className="col-span-1 gap-3 flex flex-col">
        <TypographyH2 text={"My experience with React"} textSize="text-2xl" />
        <TypographyP text={skillDescription} />
      </div>
    </div>
  );
}
