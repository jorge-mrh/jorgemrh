import skills from "@/public/skills.json";
import SkillTitleAndDescription from "../skill-title-and-description";
export default function HTMLDrawerContent() {
  const skillDescription =
    skills.development.find((item) => item.HTML)?.HTML || "";
  return (
    <SkillTitleAndDescription
      title="My experience with HTML"
      description={skillDescription}
    />
  );
}
