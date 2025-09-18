import LoginForm from "@/components/login";
import PersonalCard from "@/components/personal-card";
import SkillsSection from "@/components/skills-section/skills-section";
import TypographyH1 from "@/components/typography/h1";
import { TypographyP } from "@/components/typography/p";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex items-center flex-col gap-5">
      <div className="flex flex-col items-start max-w-2xl w-full gap-5 md:px-10">
        <TypographyH1 text={"Welcome"} />
        <TypographyP
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel massa sed felis egestas sagittis ut vel neque. Donec facilisis arcu ut ex dictum mollis. Nullam efficitur dictum nunc vitae porta."
          }
        />
        <PersonalCard />
        <SkillsSection />
      </div>
    </div>
  );
}
