import TypographyH2 from "@/components/typography/h1";
import { TypographyP } from "@/components/typography/p";
import skills from "@/public/skills.json";

export default function ReactNativeDrawerContent() {
  const skillDescription =
    skills.development.find((item) => item.ReactNative)?.ReactNative || "";
  return (
    <div className="grid grid-cols-1 items-center gap-10 md:p-10 md:grid-cols-2">
      <div className="col-span-1 gap-3 flex flex-col">
        <TypographyH2
          text={"My experience with React Native"}
          textSize="text-2xl"
        />
        <TypographyP text={skillDescription} />
      </div>
    </div>
  );
}
