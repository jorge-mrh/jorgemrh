import skills from "@/public/skills.json";
import SkillTitleAndDescription from "../skill-title-and-description";

export default function TypeScriptDrawerContent() {
  const skillDescription =
    skills.development.find((item) => item.TypeScript)?.TypeScript || "";

  return (
    <SkillTitleAndDescription
      title="My experience with TypeScript"
      description={skillDescription}
    />
  );
}
