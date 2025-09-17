import skills from "@/public/skills.json";
import SkillTitleAndDescription from "../skill-title-and-description";

export default function CSSDrawerContent() {
  const skillDescription =
    skills.development.find((item) => item.CSS)?.CSS || "";
  return (
    <SkillTitleAndDescription
      title="My experience with CSS"
      description={skillDescription}
    />
  );
}
