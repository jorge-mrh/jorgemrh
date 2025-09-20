import PersonalCard from "@/components/personal-card";
import SkillsSection from "@/components/skills-section/skills-section";
import TypographyH1 from "@/components/typography/h1";
import { TypographyP } from "@/components/typography/p";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <TypographyH1 text={"Welcome"} />
        <div className="grid md:grid-cols-2 gap-5">
          <TypographyP
            text={"You can checkout my links bellow or just browse around."}
          />
          <TypographyP
            textSize="text-sm italic"
            text={
              "If you have login credentials go ahead and sign in to see some personal projects I'm currently working on."
            }
          />
        </div>

        <PersonalCard />
        <SkillsSection />
      </div>
    </div>
  );
}
